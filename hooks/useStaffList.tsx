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

  const [skillList, setSkillList] = useLocalStorageState<{
    [key: string]: { count: number; minCount: number };
  }>("skillList", {
    defaultValue: {},
  });

  const addStaffMember = (
    name: string,
    skills: string[],
    constraints: Constraint[]
  ) => {
    // set all skills to uppercase
    skills = skills.map((skill) => skill.toUpperCase());
    const newStaffMember = { id: uuidv4(), name, skills, constraints };
    setStaffList([...staffList, newStaffMember]);
    setSkillList({
      ...skillList,
      ...skills.reduce(
        (acc, skill) => ({
          ...acc,
          [skill]: {
            count: (skillList[skill]?.count || 0) + 1,
            minCount: 0,
          },
        }),
        {}
      ),
    });
  };


  const removeStaffMember = (id: string) => {
    const updatedList = staffList.filter(
      (staffMember) => staffMember.id !== id
    );
    setStaffList(updatedList);
    const updatedSkillList = getUpdatedSkillList(id, []);
    setSkillList(updatedSkillList);
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
    // update the skill list
    const updatedSkillList = getUpdatedSkillList(id, skills);
    setSkillList(updatedSkillList);
  };

  const countStaffMembers = () => {
    return staffList.length;
  };

  const getUpdatedSkillList = (id: string, skills: string[]) => {
    // Add new skills to the skill list
    const newSkills = skills.filter(skill => !skillList.hasOwnProperty(skill));
    newSkills.forEach(skill => {
      skillList[skill] = { count: 0, minCount: 0 };
    });

    return Object.entries(skillList).reduce((acc, [skill, skillInfo]) => {
      const staffMemberSkillCount =
        staffList
          .find((staffMember) => staffMember.id === id)
          ?.skills.filter((staffMemberSkill) => staffMemberSkill === skill)
          .length ?? 0;
      const updatedCount = skillInfo.count - staffMemberSkillCount;
      const updatedSkillCount = skills.filter(
        (updatedSkill) => updatedSkill === skill
      ).length;
      return {
        ...acc,
        ...(updatedCount + updatedSkillCount > 0
          ? {
            [skill]: {
              count: updatedCount + updatedSkillCount,
              minCount: 0,
            },
          }
          : {}),
      };
    }, {});
  };
  const setSkillMinCount = (skillName: string, minCount: number) => {
    if (skillList[skillName]) {
      setSkillList({
        ...skillList,
        [skillName]: {
          ...skillList[skillName],
          minCount: minCount,
        },
      });
    } else {
      console.warn(`Skill "${skillName}" not found in skillList.`);
    }
  };

  return {
    staffList,
    skillList,
    addStaffMember,
    removeStaffMember,
    updateStaffMember,
    countStaffMembers,
    setSkillMinCount,
  };
}
