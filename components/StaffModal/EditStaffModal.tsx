import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Badge,
  Box,
  Button,
  Flex,
  Input,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Select,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import { constraints, getOptionArray } from "./CreateStaffModal";
import { useState } from "react";
import useStaffList from "../../hooks/useStaffList";

const EditStaffModal = ({
  onModalClose,
  staffId,
}: {
  onModalClose: () => void;
  staffId: string;
}) => {
  const { staffList, skillList, updateStaffMember } = useStaffList();
  const staffMember = staffList.find((staff) => staff.id === staffId);

  const [name, setName] = useState(staffMember && staffMember.name);
  const [skillInput, setSkillInput] = useState("");
  const [selectedSkills, setSelectedSkills] = useState<string[]>(
    staffMember ? staffMember.skills : []
  );
  const handleSkillBadgeClick = (skill: string) => {
    if (skill === "STAFF") {
      return; // prevent removing the default skill
    }
    setSelectedSkills((prevSkills) =>
      prevSkills.includes(skill)
        ? prevSkills.filter((s) => s !== skill)
        : [...prevSkills, skill]
    );
  };
  const handleAddSkill = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && skillInput.trim() !== "") {
      e.preventDefault(); // Prevent form submission
      const newSkill = skillInput.trim().toUpperCase();
      setSelectedSkills((prevSkills) => [...prevSkills, newSkill]);
      setSkillInput("");
    }
  };

  const handleEditStaff = () => {
    if (!name || name.trim() === "") {
      return;
    }
    updateStaffMember(staffId, name.trim(), selectedSkills, constraints);
    onModalClose();
  };
  const handleFormSubmit = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleEditStaff();
    }
  };

  return (
    <ModalContent>
      <ModalHeader>Edit staff member</ModalHeader>
      <ModalCloseButton />
      <ModalBody>
        <form className={"flex flex-col gap-4"} onKeyPress={handleFormSubmit}>
          <Input
            placeholder={"Name"}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Input
            onChange={(e) => setSkillInput(e.target.value)}
            onKeyDown={handleAddSkill}
            placeholder={"New Qualification"}
            value={skillInput}
          />
          <Wrap>
            {Object.keys(skillList).map((skill, index) => (
              <WrapItem key={index}>
                <Badge
                  size="xl"
                  key={index}
                  onClick={() => handleSkillBadgeClick(skill)}
                  colorScheme={
                    selectedSkills.includes(skill) ? "purple" : "gray"
                  }
                  cursor="pointer"
                >
                  {skill}
                </Badge>
              </WrapItem>
            ))}
            {selectedSkills
              .filter((skill) => !skillList.hasOwnProperty(skill))
              .map((skill, index) => (
                <WrapItem key={index}>
                  <Badge
                    size="xl"
                    key={`new-${index}`}
                    onClick={() => handleSkillBadgeClick(skill)}
                    colorScheme={
                      selectedSkills.includes(skill) ? "purple" : "gray"
                    }
                    cursor="pointer"
                  >
                    {skill}
                  </Badge>
                </WrapItem>
              ))}
          </Wrap>
          <Accordion allowToggle>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    Constraints
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                {constraints.map((constraint, index) => {
                  return (
                    <div key={index} className={"flex my-4 gap-4"}>
                      <Flex
                        className={
                          "text-sm basis_[150%] items-center justify-end"
                        }
                      >
                        <label className={"align-right text-right"}>
                          {constraint.label}
                        </label>
                      </Flex>
                      <Select
                        className={"my-1"}
                        key={index}
                        defaultValue={constraint.selectedIndex}
                        onChange={(e) => {
                          constraint.selectedIndex = parseInt(e.target.value);
                        }}
                      >
                        {getOptionArray(constraint)}
                      </Select>
                    </div>
                  );
                })}
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </form>
      </ModalBody>

      <ModalFooter>
        <Button onClick={onModalClose} variant="ghost">
          Cancel
        </Button>
        <Button
          className={
            "bg-primary text-white hover:shadow-lg hover:bg-opacity-80"
          }
          mr={3}
          onClick={handleEditStaff}
          disabled={!name || name.trim() === ""}
        >
          Save
        </Button>
      </ModalFooter>
    </ModalContent>
  );
};

export default EditStaffModal;
