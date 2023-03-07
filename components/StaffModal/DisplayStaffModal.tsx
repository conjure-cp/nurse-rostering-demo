import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from "@chakra-ui/react";
import React from "react";
import useStaffList from "../../hooks/useStaffList";
import { skillsToString } from "../../common/utilties";

const DisplayStaffModal = ({
  onModalClose,
  setType,
  staffId,
}: {
  onModalClose: () => void;
  setType: Function;
  staffId: string;
}) => {
  const { staffList, removeStaffMember } = useStaffList();
  const staffMember = staffList.find((staff) => staff.id === staffId);

  const handleEditStaff = () => {
    setType("edit");
  };

  const handleDeleteStaff = () => {
    onModalClose();
    removeStaffMember(staffId);
  };

  return (
    <ModalContent>
      <ModalHeader>{staffMember && staffMember.name}</ModalHeader>
      <ModalCloseButton />
      <ModalBody>
        <form className={"flex flex-col gap-4"}>
          <p>
            <b>Skills:</b> {staffMember && skillsToString(staffMember.skills)}
          </p>
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
                {staffMember &&
                  staffMember.constraints.map((constraint, index) => {
                    return (
                      <div
                        key={index}
                        className={"flex my-4 gap-4 justify-between"}
                      >
                        <label className={"align-right w-fit"}>
                          {constraint.label}
                        </label>
                        <p className={"font-bold"}>
                          {constraint.options[constraint.selectedIndex]}
                        </p>
                      </div>
                    );
                  })}
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </form>
      </ModalBody>

      <ModalFooter className={"flex justify-between"}>
        <Button variant="ghost" color={"red"} onClick={handleDeleteStaff}>
          Delete
        </Button>
        <Button variant="outline" onClick={handleEditStaff}>
          Edit
        </Button>
      </ModalFooter>
    </ModalContent>
  );
};

export default DisplayStaffModal;
