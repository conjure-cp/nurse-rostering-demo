import { Modal, ModalOverlay } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import EditStaffModal from "./EditStaffModal";
import DisplayStaffModal from "./DisplayStaffModal";
import TimetableStaffModal from "./TimetableStaffModal";

interface StaffModalI {
  staffId: string;
  isModalOpen: boolean;
  onModalOpen: () => void;
  onModalClose: () => void;
}

const StaffModal = ({
  staffId,
  isModalOpen,
  onModalOpen,
  onModalClose,
}: StaffModalI) => {
  const [type, setType] = useState("display");

  useEffect(() => {
    setType("display");
  }, [isModalOpen]);

  return (
    <Modal isOpen={isModalOpen} onClose={onModalClose}>
      <ModalOverlay />
      {type === "edit" ? (
        <EditStaffModal onModalClose={onModalClose} staffId={staffId} />
      ) : type === "timetable" ? (
        <TimetableStaffModal staffId={staffId} />
      ) : (
        <DisplayStaffModal
          onModalClose={onModalClose}
          setType={setType}
          staffId={staffId}
        />
      )}
    </Modal>
  );
};

export default StaffModal;
