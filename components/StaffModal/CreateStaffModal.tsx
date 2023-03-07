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
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Select,
} from "@chakra-ui/react";
import React from "react";
import useStaffList from "../../hooks/useStaffList";
import { stringToSkills } from "../../common/utilties";

export interface Constraint {
  label: string;
  defaultIndex: number;
  selectedIndex: number;
  options: string[];
}

const stringArrayFromRange = (start: number, end: number): string[] => {
  return Array.from({ length: end + 1 - start }, (v, k) =>
    (k + start).toString()
  );
};

export const constraints: Constraint[] = [
  {
    label: "Preferred Shift Time",
    defaultIndex: 0,
    selectedIndex: 0,
    options: ["Any", "Day", "Night"],
  },
  {
    label: "Preferred Shift Hours",
    defaultIndex: 0,
    selectedIndex: 0,
    options: ["8", "10", "12"],
  },
  {
    label: "Minimum Time Between Shifts",
    defaultIndex: 13,
    selectedIndex: 13,
    options: [
      "15 mins",
      "30 mins",
      "45 mins",
      "1 hour",
      "1hr 15mins",
      "1hr 30mins",
      "1hr 45mins",
      "2 hours",
      "3 hours",
      "4 hours",
      "5 hours",
      "6 hours",
      "7 hours",
      "8 hours",
      "9 hours",
      "10 hours",
      "11 hours",
      "12 hours",
    ],
  },
  {
    label: "Minimum Weekly Hours",
    defaultIndex: 9,
    selectedIndex: 9,
    options: stringArrayFromRange(0, 60),
  },
  {
    label: "Maximum Weekly Overtime Hours",
    defaultIndex: 14,
    selectedIndex: 14,
    options: [...stringArrayFromRange(0, 80), "Unlimited"],
  },
  {
    label: "Minimum Monthly Hours",
    defaultIndex: 14,
    selectedIndex: 14,
    options: stringArrayFromRange(0, 250),
  },
  {
    label: "Maximum Monthly Overtime Hours",
    defaultIndex: 14,
    selectedIndex: 14,
    options: [...stringArrayFromRange(0, 250), "Unlimited"],
  },
  {
    label: "Maximum Daily Working Hours",
    defaultIndex: 9,
    selectedIndex: 9,
    options: stringArrayFromRange(1, 24),
  },
  {
    label: "Maximum Working Days in a Row",
    defaultIndex: 31,
    selectedIndex: 31,
    options: [...stringArrayFromRange(0, 30), "Unlimited"],
  },
];

interface CreateStaffModalI {
  isModalOpen: boolean;
  onModalOpen: () => void;
  onModalClose: () => void;
}

export const getOptionArray = (constraint: Constraint) => {
  const options = [];
  options.push(
    <option
      key={"default"}
      value={constraint.options[constraint.selectedIndex]}
      disabled
      hidden
    >
      {constraint.options[constraint.selectedIndex]}
    </option>
  );
  constraint.options.forEach((option, optIndex) => {
    options.push(
      <option key={optIndex} value={optIndex}>
        {option}
      </option>
    );
  });
  return options;
};

const CreateStaffModal = ({
  isModalOpen,
  onModalOpen,
  onModalClose,
}: CreateStaffModalI) => {
  const { addStaffMember } = useStaffList();
  const [name, setName] = React.useState("");
  const [skills, setSkills] = React.useState("");

  const handleCreateStaff = async () => {
    addStaffMember(name, stringToSkills(skills), constraints);
    setName("");
    setSkills("");
    onModalClose();
  };
  return (
    <Modal isOpen={isModalOpen} onClose={onModalClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Create staff member</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <form className={"flex flex-col gap-4"}>
            <Input
              onChange={(e) => setName(e.target.value)}
              placeholder={"Name"}
            />
            <Input
              onChange={(e) => setSkills(e.target.value)}
              placeholder={"Skills"}
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
                          defaultValue={constraint.defaultIndex}
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
            onClick={handleCreateStaff}
          >
            Create
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default CreateStaffModal;
