import {
  Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box,
  Button,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay, Select
} from "@chakra-ui/react";
import React from "react";

interface Constraint {
  key: number;
  default: string;
  options: string[];
}

const constraints: Constraint[] = [
  {
    key: 0,
    default: "Minimum Time Between Shifts",
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
    ]
  }
]

interface CreateStaffModalI {
  isModalOpen: boolean;
  onModalOpen: () => void;
  onModalClose: () => void;
}

const CreateStaffModal = ({isModalOpen, onModalOpen, onModalClose}: CreateStaffModalI) => {

  const getOptionArray = (constraint: Constraint) => {
    const options = [];
    options.push(<option value={"default"} selected disabled hidden>{constraint.default}</option>,)
    constraint.options.forEach((option, optIndex) => {
      options.push(<option key={optIndex} value={optIndex}>{option}</option>)
    })
    return options;
  }

  return (
    <Modal isOpen={isModalOpen} onClose={onModalClose}>
      <ModalOverlay/>
      <ModalContent>
        <ModalHeader>Creat new staff member</ModalHeader>
        <ModalCloseButton/>
        <ModalBody>
          <form className={"flex flex-col gap-4"}>
            <Input placeholder={"Name"}/>
            <Input placeholder={"Skills"}/>
            <Accordion allowToggle>
              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box flex='1' textAlign='left'>
                      Constraints
                    </Box>
                    <AccordionIcon/>
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  {constraints.map((constraint, index) => {
                    return (
                      <Select key={index}>
                        {getOptionArray(constraint)}
                      </Select>
                    )
                  })}
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </form>
        </ModalBody>

        <ModalFooter>
          <Button variant='ghost'>Cancel</Button>
          <Button className={"bg-primary text-white hover:shadow-lg hover:bg-opacity-80"} mr={3} onClick={onModalClose}>
            Create
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}


export default CreateStaffModal;