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
import React, { useEffect, useState } from "react";
import { constraints, getOptionArray } from "./CreateStaffModal";
import axios from "axios";
import useSWR from "swr";

interface StaffModalI {
  staffId: string;
  isModalOpen: boolean;
  onModalOpen: () => void;
  onModalClose: () => void;
}

export const fetcher = (url: string) => axios.get(url).then((res) => res.data);

const StaffModal = ({
  staffId,
  isModalOpen,
  onModalOpen,
  onModalClose,
}: StaffModalI) => {
  const [type, setType] = useState("display");
  const { data: staff, error } = useSWR(`/api/staff/${staffId}`, fetcher);

  useEffect(() => {
    setType("display");
  }, [isModalOpen]);

  return (
    <Modal isOpen={isModalOpen} onClose={onModalClose}>
      <ModalOverlay />
      {type === "edit" ? (
        <ModalContent>
          <ModalHeader>Edit staff member</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <form className={"flex flex-col gap-4"}>
              <Input placeholder={"Name"} />
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
              onClick={onModalClose}
            >
              Save
            </Button>
          </ModalFooter>
        </ModalContent>
      ) : (
        <ModalContent>
          <ModalHeader>Name From Database</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <form className={"flex flex-col gap-4"}>
              <p>{staff && staff.name}</p>
              <p>Skills From DB</p>
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
                        <div
                          key={index}
                          className={"flex my-4 gap-4 justify-between"}
                        >
                          <label className={"align-right w-fit"}>
                            {constraint.label}
                          </label>
                          <p className={"font-bold"}>
                            {constraint.options[constraint.defaultIndex]}
                          </p>
                        </div>
                      );
                    })}
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>
            </form>
          </ModalBody>

          <ModalFooter>
            <Button variant="ghost" onClick={() => setType("edit")}>
              Edit
            </Button>
          </ModalFooter>
        </ModalContent>
      )}
    </Modal>
  );
};

export default StaffModal;
