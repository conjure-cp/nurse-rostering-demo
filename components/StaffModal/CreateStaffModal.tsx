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
    options: ["Day", "Night"],
  },
  {
    label: "Maximum Working Days in a Row",
    defaultIndex: 3,
    selectedIndex: 3,
    options: [...stringArrayFromRange(0, 3)], // and unlimited
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
  const initialRef = React.useRef(null)

  const handleCreateStaff = () => {
    if (name.trim() === "") {
      return;
    }
    addStaffMember(name.trim(), stringToSkills(skills), constraints);
    setName("");
    setSkills("");
    onModalClose();
  };

  const handleFormSubmit = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleCreateStaff();
    }
  };

  return (
    <Modal isOpen={isModalOpen} onClose={onModalClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Create staff member</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <form className={"flex flex-col gap-4"} onKeyPress={handleFormSubmit}>
            <Input
              onChange={(e) => setName(e.target.value)}
              placeholder={"Name"}
              value={name}
            />
            <Input
              onChange={(e) => setSkills(e.target.value)}
              placeholder={"Skills"}
              value={skills}
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
            disabled={name.trim() === ""}
            ref={initialRef}
          >
            Create
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default CreateStaffModal;
