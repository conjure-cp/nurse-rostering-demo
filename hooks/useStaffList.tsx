import useLocalStorageState from "use-local-storage-state";
// @ts-ignore
import { v4 as uuidv4 } from "uuid";
import { Constraint } from "../components/StaffModal/CreateStaffModal";

export interface StaffMember {
  id: string;
  encoding?: number;
  name: string;
  skills: string[];
  constraints: Constraint[];
}

export default function useStaffList() {
  const defaultStaffList: StaffMember[] = [];

  const [staffList, setStaffList] = useLocalStorageState<StaffMember[]>(
    "staffList",
    {
      defaultValue: defaultStaffList,
    }
  );

  const addStaffMember = (
    name: string,
    skills: string[],
    constraints: Constraint[]
  ) => {
    const newStaffMember = { id: uuidv4(), name, skills, constraints };
    setStaffList([...staffList, newStaffMember]);
  };

  const removeStaffMember = (id: string) => {
    const updatedList = staffList.filter(
      (staffMember) => staffMember.id !== id
    );
    setStaffList(updatedList);
  };

  const updateStaffMember = (
    id: string,
    name: string,
    skills: string[],
    constraints: Constraint[]
  ) => {
    const updatedList = staffList.map((staffMember) => {
      if (staffMember.id === id) {
        return { id, name, skills, constraints };
      }
      return staffMember;
    });
    setStaffList(updatedList);
  };

  const countStaffMembers = () => {
    return staffList.length;
  };

  return {
    staffList,
    addStaffMember,
    removeStaffMember,
    updateStaffMember,
    countStaffMembers,
  };
}
