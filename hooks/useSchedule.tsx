import useLocalStorageState from "use-local-storage-state";
import axios from "axios";
import { StaffMember } from "./useStaffList";
import dayjs from "dayjs";
import isToday from "dayjs/plugin/isToday";
import weekday from "dayjs/plugin/weekday";

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

  async function fetcher<JSON = any>(args: RequestInfo): Promise<JSON> {
    const res = await fetch(args);
    return res.json();
  }

  const [schedule, setSchedule] = useLocalStorageState<Schedule[]>("schedule", {
    defaultValue: [],
  });

  const [staffEncoding, setStaffEncoding] = useLocalStorageState<{
    [key: string]: number;
  }>("staffEncoding", {
    defaultValue: {},
  });

  const [skillEncoding, setSkillEncoding] = useLocalStorageState<{
    [key: string]: number;
  }>("staffEncoding", {
    defaultValue: {},
  });

  const postSchedule = async (staffList: StaffMember[]) => {
    // clear previous encoding
    setSkillEncoding({});
    setStaffEncoding({});

    // Extract unique skills from the staffList
    const uniqueSkills = new Set<string>();
    staffList.forEach((staffMember) => {
      staffMember.skills.forEach((skill) => {
        uniqueSkills.add(skill);
      });
    });

    const payload: {
      nb_nurses: number;
      nb_weeks: number;
      nb_skills: number;
      preferred_shift_type: { [key: number]: number };
      maximum_working_days_in_a_row: { [key: number]: number };
      nurse_skills: { [key: number]: number[] };
      skills_lower_bound: { [key: number]: number };
    } = {
      nb_nurses: staffList.length,
      nb_weeks: 2, // Assuming a fixed number of weeks
      nb_skills: uniqueSkills.size, // Calculate the number of unique skills
      preferred_shift_type: {},
      maximum_working_days_in_a_row: {},
      nurse_skills: {},
      skills_lower_bound: {}, // Assuming no lower bound
    };

    // Create a skill encoding mapping
    const skillEncoding: { [key: string]: number } = {};
    Array.from(uniqueSkills).forEach((skill, index) => {
      skillEncoding[skill] = index + 1;
    });
    setSkillEncoding(skillEncoding);

    staffList.forEach((staffMember, index) => {
      const staffId = index + 1; // Encode staff IDs as numbers from 1 to n
      setStaffEncoding((prev) => {
        return { ...prev, [staffMember.id]: staffId };
      });

      const preferredShiftTimeConstraint = staffMember.constraints.find(
        (constraint) => constraint.label === "Preferred Shift Time"
      );
      const selectedShiftOption =
        preferredShiftTimeConstraint?.options[
          preferredShiftTimeConstraint?.selectedIndex || 0
        ] || "Day";
      payload.preferred_shift_type[staffId] =
        selectedShiftOption === "Day" ? 1 : 2;

      const maxWorkingDaysConstraint = staffMember.constraints.find(
        (constraint) => constraint.label === "Maximum Working Days in a Row"
      );
      payload.maximum_working_days_in_a_row[staffId] = parseInt(
        maxWorkingDaysConstraint?.options[
          maxWorkingDaysConstraint?.selectedIndex || 0
        ] || "0",
        10
      );

      payload.nurse_skills[staffId] = staffMember.skills.map(
        (skill) => skillEncoding[skill] // Map the skills to the corresponding encoding
      );
    });

    const options = {
      url: "/api/calendar/schedule",
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json;charset=UTF-8",
      },
      data: JSON.stringify(payload),
    };

    const response = await axios(options);
    return response.data;
  };

  const delay = (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms));

  const fetchSchedule = async (id: number) => {
    let res = await axios.get("/api/calendar/schedule", {
      params: { jobid: id },
    });
    while (res.data.status === "wait") {
      await delay(1000); // Wait for 1 second
      res = await axios.get("/api/calendar/schedule", {
        params: { jobid: id },
      });
    }
    let converted = convertResponseToSchedule(res.data.solution[0].assignment);
    setSchedule(converted);
    return converted;
  };

  function convertResponseToSchedule(response: any[][]): Schedule[] {
    const today = dayjs();
    const startDate =
      today.weekday() === 1 && today.isToday() ? today : today.weekday(8);
    const dayStartTime = [7, 0];
    const nightStartTime = [19, 0];
    const shiftDuration = 12 * 60 * 60 * 1000; // 12 hours in milliseconds

    return response.map((item) => {
      const staffId = item[0][0];
      const dayNumber = item[0][1];
      const shiftType = item[1];

      const shiftDate = startDate.add(dayNumber - 1, "day");
      const startTime = shiftType === 1 ? dayStartTime : nightStartTime;
      const start = shiftDate.hour(startTime[0]).minute(startTime[1]);
      const end = start.add(shiftDuration, "millisecond");

      return {
        id: `${staffId}-${dayNumber}-${shiftType}`,
        resourceId: `${invertObject(staffEncoding)[staffId]}`,
        start: start.format(),
        end: end.format(),
      };
    });
  }

  function invertObject(obj: { [key: string]: number }): { [key: number]: string } {
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

  return { schedule, getSchedule, postSchedule, fetchSchedule };
}
