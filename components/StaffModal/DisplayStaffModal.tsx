import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Badge,
  Box,
  Button,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import React from "react";
import useStaffList from "../../hooks/useStaffList";
import { MdOutlineEvent } from "react-icons/md";
import useModal from "../../hooks/useModal";

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
  const { ModalComponent, openModal } = useModal();

  const handleEditStaff = () => {
    setType("edit");
  };

  const handleDeleteStaff = () => {
    onModalClose();
    removeStaffMember(staffId);
  };

  const handleTimetableStaff = () => {
    setType("timetable");
  };

  return (
    <ModalContent>
      <ModalHeader>{staffMember && staffMember.name}</ModalHeader>
      <ModalCloseButton />
      <ModalBody>
        <form className={"flex flex-col gap-4"}>
          <Box className={"flex justify-between gap-4"}>
            <strong>Qualifications:</strong>
            <Wrap>
              {staffMember &&
                staffMember.skills.map((skill, index) => (
                  <WrapItem key={index}>
                    <Badge size="lg">{skill}</Badge>
                  </WrapItem>
                ))}
            </Wrap>
          </Box>
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
        <Button
          leftIcon={<MdOutlineEvent />}
          variant="ghost"
          onClick={handleTimetableStaff}
        >
          Timetable
        </Button>
        <Button variant="outline" onClick={handleEditStaff}>
          Edit
        </Button>
      </ModalFooter>
      <ModalComponent />
    </ModalContent>
  );
};

export default DisplayStaffModal;
