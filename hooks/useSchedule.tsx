import useLocalStorageState from "use-local-storage-state";
import { StaffMember } from "./useStaffList";
import dayjs from "dayjs";
import isToday from "dayjs/plugin/isToday";
import weekday from "dayjs/plugin/weekday";
import { ScheduleResponse } from "../components/Schedule";
import { useEffect, useRef, useState } from "react";

dayjs.extend(isToday);
dayjs.extend(weekday);

export interface Schedule {
  id: string;
  resourceId: string;
  start: string;
  end: string;
}

interface Schedules {
  jobid: number;
  status: string;
  schedules: Schedule[];
}
export default function useSchedule() {
  const defaultSchedule: Schedules = {
    jobid: -1,
    status: "",
    schedules: [],
  };
  const timeout = 10000; // Set a 60 seconds timeout
  const polling = useRef(-1);

  async function fetcher<JSON = any>(args: RequestInfo): Promise<JSON> {
    const res = await fetch(args);
    return res.json();
  }

  const [schedule, setSchedule] = useLocalStorageState<Schedule[]>("schedule", {
    defaultValue: [],
  });

  const [fileContent, setFileContent] = useState("");

  async function fetchFile() {
    const response = await fetch("./static/models/model.essence");
    const content = await response.text();
    setFileContent(content);
  }

  useEffect(() => {
    fetchFile();
  }, []);

  const server_getSchedule = async (jobid: number) => {
    return await fetch("https://conjure-aas.cs.st-andrews.ac.uk/get", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ jobid: jobid, appName: 'nurse-rostering' }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data) {
          return data;
        } else {
          return null;
        }
      })
      .catch((err) => {
        console.error(err);
        return null;
      });
  };

  const server_postSchedule = async (payload: string) => {
    await fetchFile();
    return await fetch("https://conjure-aas.cs.st-andrews.ac.uk/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        appName: 'nurse-rostering',
        solver: "kissat", // this is optional
        model: fileContent,
        data: payload,
        conjure_options: [
          "--savilerow-options",
          "-sat-sum-mdd",
          "--channelling=no",
          "-aai",
          "--responses=2",
        ],
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data && data["jobid"]) {
          return data["jobid"];
        } else {
          return null;
        }
      })
      .catch((err) => {
        console.error(err);
        return null;
      });
  };

  const postSchedule = async (
    staffList: StaffMember[],
    skillList: { [key: string]: { count: number; minCount: number } }
  ) => {
    // Extract unique skills from the staffList
    const uniqueSkills = new Set<string>();
    staffList.forEach((staffMember) => {
      staffMember.skills.forEach((skill) => {
        uniqueSkills.add(skill);
      });
    });

    const newStaffEncoding: { [key: string]: number } = {};
    staffList.forEach((staffMember, index) => {
      newStaffEncoding[staffMember.id] = index + 1;
    });

    // Create a skill encoding mapping
    const newSkillEncoding: { [key: string]: number } = {};
    Array.from(uniqueSkills).forEach((skill, index) => {
      newSkillEncoding[skill] = index + 1;
    });

    const payload: {
      nb_nurses: number;
      nb_weeks: number;
      nb_skills: number;
      preferred_shift_type: { [key: number]: number };
      maximum_working_days_in_a_row: { [key: number]: number };
      nurse_skills: { [key: number]: number[] };
      skills_lower_bound: { [key: number]: number };
      disallowed: [];
    } = {
      nb_nurses: staffList.length,
      nb_weeks: 4, // Assuming a fixed number of weeks
      nb_skills: uniqueSkills.size, // Calculate the number of unique skills
      preferred_shift_type: {},
      maximum_working_days_in_a_row: {},
      nurse_skills: {},
      skills_lower_bound: {}, // Assuming no lower bound
      disallowed: [],
    };

    staffList.forEach((staffMember) => {
      const preferredShiftTimeConstraint = staffMember.constraints.find(
        (constraint) => constraint.label === "Preferred Shift Time"
      );
      const selectedShiftOption =
        preferredShiftTimeConstraint?.options[
        preferredShiftTimeConstraint?.selectedIndex || 0
        ] || "Day";
      payload.preferred_shift_type[newStaffEncoding[staffMember.id]] =
        selectedShiftOption === "Day" ? 1 : 2;

      const maxWorkingDaysConstraint = staffMember.constraints.find(
        (constraint) => constraint.label === "Maximum Working Days in a Row"
      );
      payload.maximum_working_days_in_a_row[newStaffEncoding[staffMember.id]] =
        parseInt(
          maxWorkingDaysConstraint?.options[
          maxWorkingDaysConstraint?.selectedIndex || 0
          ] || "0",
          10
        );

      payload.nurse_skills[newStaffEncoding[staffMember.id]] =
        staffMember.skills.map(
          (skill) => newSkillEncoding[skill] // Map the skills to the corresponding encoding
        );
    });

    Object.entries(skillList).forEach((skill) => {
      payload.skills_lower_bound[newSkillEncoding[skill[0]]] =
        skill[1].minCount;
    });

    const jobid = await server_postSchedule(JSON.stringify(payload));
    const scheduleResponse: ScheduleResponse = {
      jobid: jobid,
      staffEncoding: newStaffEncoding,
      skillEncoding: newSkillEncoding,
    };
    return scheduleResponse;
  };

  const delay = (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms));

  const fetchSchedule = async (scheduleResponse: ScheduleResponse) => {
    polling.current = scheduleResponse.jobid;

    let res = await server_getSchedule(scheduleResponse.jobid);

    if (!res) {
      return null;
    }

    let startTime = Date.now();
    while (res.status === "wait" && polling.current == scheduleResponse.jobid) {
      if (Date.now() - startTime >= timeout) {
        return ["timeout", []];
      }
      await delay(1000); // Wait for 1 second
      res = await server_getSchedule(scheduleResponse.jobid);
    }

    if (!res.solution) {
      return ["cancelled", []];
    }

    if (res.solution.length > 0) {
      let converted = convertResponseToSchedule(
        res.solution[0].assignment,
        scheduleResponse
      );
      setSchedule(converted[1]);
      return converted;
    }
    return ["no-solution", []];
  };

  function convertResponseToSchedule(
    response: any[][],
    scheduleResponse: ScheduleResponse
  ): [string, Schedule[]] {
    const today = dayjs();
    const startDate =
      today.weekday() === 1 && today.isToday() ? today : today.weekday(1);
    const dayStartTime = [7, 0];
    const nightStartTime = [19, 0];
    const shiftDuration = 12 * 60 * 60 * 1000; // 12 hours in milliseconds

    const output = response.map((item) => {
      const staffId = item[0][0];
      const dayNumber = item[0][1];
      const shiftType = item[1];

      const shiftDate = startDate.add(dayNumber - 1, "day");
      const startTime = shiftType === 1 ? dayStartTime : nightStartTime;
      const start = shiftDate.hour(startTime[0]).minute(startTime[1]).second(0); // Set seconds to 0
      const end = start.clone().add(shiftDuration, "millisecond"); // Set seconds to 0

      return {
        id: `${staffId}-${dayNumber}-${shiftType}`,
        resourceId: `${invertObject(scheduleResponse.staffEncoding)[staffId]}`,
        start: start.format(),
        end: end.format(),
      };
    });
    return ["ok", output];
  }

  function invertObject(obj: { [key: string]: number }): {
    [key: number]: string;
  } {
    const invertedObj: { [key: number]: string } = {};

    for (const key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        const value = obj[key];
        invertedObj[value] = key;
      }
    }

    return invertedObj;
  }

  function getSchedule() {
    return schedule;
  }

  return {
    schedule,
    setSchedule,
    getSchedule,
    postSchedule,
    fetchSchedule,
  };
}
