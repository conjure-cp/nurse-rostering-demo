"use client";

import React from "react";
import {
  Badge,
  Button,
  Modal,
  useDisclosure,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import EditStaffModal from "../../../../components/StaffModal/EditStaffModal";
import useSchedule from "../../../../hooks/useSchedule";
import StaffTimetable from "../../../../components/StaffTimetable";
import useStaffList from "../../../../hooks/useStaffList";

export async function generateStaticParams() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { staffList } = useStaffList();

  return staffList.map((staff) => ({
    id: staff.id,
  }));
}
const StaffPage = ({ params }: { params: { id: string } }) => {
  const staffId = params ? params.id : "";
  const { staffList } = useStaffList();
  const { schedule } = useSchedule();

  const {
    isOpen: isModalOpen,
    onOpen: onModalOpen,
    onClose: onModalClose,
  } = useDisclosure();

  // find staffmember from stafflist
  const staff = staffList.find((staff) => staff.id === staffId);

  return staff ? (
    <div className={"flex gap-4 flex-col sm:flex-row w-full"}>
      <div
        className={
          "flex flex-col justify-between bg-surface1 rounded-xl m-8 p-8 grow"
        }
      >
        <h1 className={"text-center text-xl"}>{staff.name}</h1>
        <div className={"flex flex-col gap-8"}>
          <div className={"flex flex-col justify-between"}>
            <h2 className={"font-bold"}>Skills</h2>
            <div className={"bg-surface2 rounded-xl min-h-[50px] p-4"}>
              <Wrap>
                {staff.skills.map((skill, index) => (
                  <WrapItem key={index}>
                    <Badge size="lg">{skill}</Badge>
                  </WrapItem>
                ))}
              </Wrap>
            </div>
          </div>
          <div className={"flex flex-col justify-between mb-4"}>
            <h2 className={"font-bold"}>Constraints</h2>
            <div className={"bg-surface2 rounded-xl min-h-[50px] p-4"}>
              {staff.constraints.map((constraint, index) => {
                return (
                  <div
                    key={index}
                    className={"flex my-4 gap-8 justify-between"}
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
            </div>
          </div>
        </div>
        <Button
          onClick={() => {
            onModalOpen();
          }}
        >
          Edit
        </Button>
      </div>
      <div className={"bg-surface1 rounded-xl m-8 p-8 grow"}>
        {schedule.length > 0 ? (
          <StaffTimetable staffId={staffId} />
        ) : (
          <h2>No schedule yet</h2>
        )}
      </div>
      <Modal isOpen={isModalOpen} onClose={onModalClose}>
        <EditStaffModal onModalClose={onModalClose} staffId={staffId} />
      </Modal>
    </div>
  ) : null;
};

export default StaffPage;
