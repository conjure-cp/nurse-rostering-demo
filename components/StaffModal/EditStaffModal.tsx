import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
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
} from "@chakra-ui/react";
import { constraints, getOptionArray } from "./CreateStaffModal";
import { useState } from "react";
import useStaffList from "../../hooks/useStaffList";
import { skillsToString } from "../../common/utilties";

const EditStaffModal = ({
  onModalClose,
  staffId,
}: {
  onModalClose: () => void;
  staffId: string;
}) => {
  const { staffList, updateStaffMember } = useStaffList();
  const staffMember = staffList.find((staff) => staff.id === staffId);

  const [name, setName] = useState(staffMember && staffMember.name);
  const [skills, setSkills] = useState(
    staffMember && skillsToString(staffMember.skills)
  );

  const extractSkills = (skills: string) => {
    return skills.split(",").map((skill) => skill.trim());
  };

  const handleEditStaff = () => {
    if (name && skills) {
      updateStaffMember(staffId, name, extractSkills(skills), constraints);
    }
    onModalClose();
  };

  return (
    <ModalContent>
      <ModalHeader>Edit staff member</ModalHeader>
      <ModalCloseButton />
      <ModalBody>
        <form className={"flex flex-col gap-4"}>
          <Input
            placeholder={"Name"}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Input
            placeholder={"Skills"}
            value={skills}
            onChange={(e) => setSkills(e.target.value)}
          />
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
                          "text-sm basis-[150%] items-center justify-end"
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
        >
          Save
        </Button>
      </ModalFooter>
    </ModalContent>
  );
};

export default EditStaffModal;
