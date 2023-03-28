"use client";
import useStaffList from "../hooks/useStaffList";
import StaffTimetable from "./StaffTimetable";
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
} from "@chakra-ui/react";

const MobileSchedule = () => {
  const { staffList } = useStaffList();
  return (
    <>
      <Accordion allowMultiple>
        {staffList.map((staff) => (
          <AccordionItem key={staff.id} className={"border-surface3"}>
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left">
                  <h2 className={"text-center"}>{staff.name}</h2>
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel
              pb={4}
              className={"bg-surface3 rounded-xl hover-shadow"}
            >
              <StaffTimetable staffId={staff.id} />
            </AccordionPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </>
  );
};

export default MobileSchedule;
