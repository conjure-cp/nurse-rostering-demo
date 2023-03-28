import {
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
} from "@chakra-ui/react";
import React from "react";
import useStaffList from "../../hooks/useStaffList";
import StaffTimetable from "../StaffTimetable";

const TimetableStaffModal = ({ staffId }: { staffId: string }) => {
  const { staffList } = useStaffList();
  const staffMember = staffList.find((staff) => staff.id === staffId);
  return (
    <ModalContent>
      <ModalHeader>
        {staffMember && staffMember.name} Personal Timetable
      </ModalHeader>
      <ModalCloseButton />
      <ModalBody>
        <StaffTimetable staffId={staffId} />
      </ModalBody>
    </ModalContent>
  );
};

export default TimetableStaffModal;
