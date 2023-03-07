import useLocalStorageState from "use-local-storage-state";
import axios from "axios";
import { StaffMember } from "./useStaffList";

export interface Schedule {
  id: string;
  resourceId: string;
  start: string;
  end: string;
}
export default function useSchedule() {
  const defaultSchedule: Schedule[] = [];

  async function fetcher<JSON = any>(args: RequestInfo): Promise<JSON> {
    const res = await fetch(args);
    return res.json();
  }

  const [schedule, setSchedule] = useLocalStorageState<Schedule[]>("schedule", {
    defaultValue: defaultSchedule,
  });

  const postSchedule = async (staffList: StaffMember[]) => {
    const payload = {
      nb_nurses: 4,
      nb_weeks: 2,
      nb_skills: 8,
      preferred_shift_type: {
        "1": 1,
        "2": 1,
        "3": 1,
        "4": 2,
      },
      maximum_working_days_in_a_row: {
        "1": 2,
        "2": 3,
        "3": 1,
        "4": 2,
      },
      nurse_skills: {
        "1": [1, 2],
        "2": [1, 3, 7],
        "3": [1, 4, 7],
        "4": [1, 2, 7],
      },
      skills_lower_bound: {
        "1": 0,
        "7": 0,
      },
    };
    // const { staffList } = useStaffList();
    // const newSchedule = { id, resourceId, start, end };
    const options = {
      url: "/api/calendar/schedule",
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json;charset=UTF-8",
      },
      data: JSON.stringify(payload),
    };

    axios(options).then((response) => {
      console.log(response.status);
      console.log(response.data);
    });
  };

  const getSchedule = () => {
    return schedule;
  };

  return { schedule, postSchedule, getSchedule };
}
