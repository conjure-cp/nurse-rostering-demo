export const stringToSkills = (skills: string) => {
  return skills.split(",").map((skill) => skill.trim());
};

export const skillsToString = (skills: string[]) => {
  if (!skills || skills.length === 0) {
    return "";
  }
  return skills.join(", ");
};
