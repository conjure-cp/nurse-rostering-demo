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
import axios from "axios";

export interface Constraint {
  label: string;
  defaultIndex: number;
  options: string[];
}

const stringArrayFromRange = (start: number, end: number): string[] => {
  return Array.from({ length: end + 1 - start }, (v, k) =>
    (k + start).toString()
  );
};

export const constraints: Constraint[] = [
  {
    label: "Minimum Time Between Shifts",
    defaultIndex: 13,
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
    options: stringArrayFromRange(0, 60),
  },
  {
    label: "Maximum Weekly Overtime Hours",
    defaultIndex: 14,
    options: [...stringArrayFromRange(0, 80), "Unlimited"],
  },
  {
    label: "Minimum Monthly Hours",
    defaultIndex: 14,
    options: stringArrayFromRange(0, 250),
  },
  {
    label: "Maximum Monthly Overtime Hours",
    defaultIndex: 14,
    options: [...stringArrayFromRange(0, 250), "Unlimited"],
  },
  {
    label: "Maximum Daily Working Hours",
    defaultIndex: 9,
    options: stringArrayFromRange(1, 24),
  },
  {
    label: "Maximum Working Days in a Row",
    defaultIndex: 31,
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
      value={constraint.options[constraint.defaultIndex]}
      disabled
      hidden
    >
      {constraint.options[constraint.defaultIndex]}
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
  const handleCreateStaff = async () => {
    // write an axios post request
    const res = await axios
      .post("/api/staff", {
        name: name,
      })
      .then((res) => res.data);
    console.log(res);
    onModalClose();
  };
  const [name, setName] = React.useState("");
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
            <Input placeholder={"Skills"} />
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
