"use client";
import useStaffList from "../../../hooks/useStaffList";
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useState } from "react";
import StaffModal from "../../../components/StaffModal/StaffModal";

const Qualifications = () => {
  const { staffList, skillList, setSkillMinCount } = useStaffList();
  const [staffId, setStaffId] = useState("");
  const {
    isOpen: isModalOpen,
    onOpen: onModalOpen,
    onClose: onModalClose,
  } = useDisclosure();

  return (
    <main>
      <h2 className={"ml-1 md:ml-5 p-4 text-center mb-4"}>
        Set the minimum number of nurses with a certain qualification that must
        be on the clock at all times.
      </h2>
      <div className={"ml-1 md:ml-5 bg-surface1 rounded-xl p-4"}>
        <Accordion className={"flex flex-col gap-2"} allowMultiple>
          {Object.entries(skillList).map((skill) => (
            <div key={skill[0]} className={"flex w-full gap-4"}>
              <NumberInput
                defaultValue={skill[1].minCount}
                min={0}
                className={"max-w-[80px] max-h-[40px]"}
                onChange={(e) => {
                  if (e.trim() && parseInt(e.trim()) >= 0) {
                    setSkillMinCount(skill[0], parseInt(e.trim()));
                  }
                }}
              >
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
              <AccordionItem className={"w-full border-b-0 border-t-0"}>
                <h2>
                  <AccordionButton className={"rounded-xl"}>
                    <Box flex="1" textAlign="left" fontWeight={"bold"}>
                      {skill[0]}
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel
                  pb={4}
                  className={
                    "flex flex-col rounded-xl justify-between border-l-4 border-surface2 py-2"
                  }
                >
                  {staffList
                    .filter((staffMember) =>
                      staffMember.skills.includes(skill[0])
                    )
                    .map((staffMember) => (
                      <div
                        key={staffMember.name}
                        className={
                          "hover:bg-surface1 py-2 px-4 rounded-xl cursor-pointer text-primaryText"
                        }
                        onClick={() => {
                          setStaffId(staffMember.id);
                          onModalOpen();
                        }}
                      >
                        {staffMember.name}
                      </div>
                    ))}
                </AccordionPanel>
              </AccordionItem>
            </div>
          ))}
        </Accordion>{" "}
        <StaffModal
          staffId={staffId}
          isModalOpen={isModalOpen}
          onModalOpen={onModalOpen}
          onModalClose={onModalClose}
        />
      </div>
    </main>
  );
};

export default Qualifications;
