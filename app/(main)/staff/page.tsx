"use client";
import {
  Checkbox,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  useDisclosure,
} from "@chakra-ui/react";
import StaffModal, { fetcher } from "../../../components/StaffModal";
import { useState } from "react";
import useSWR from "swr";
import { Staff } from "@prisma/client";

const Staff = () => {
  const {
    isOpen: isModalOpen,
    onOpen: onModalOpen,
    onClose: onModalClose,
  } = useDisclosure();

  const [staffId, setStaffId] = useState("");
  const { data, mutate, error } = useSWR(`/api/staff`, fetcher);

  return (
    <main
      className={
        "flex ml-1 md:ml-5 items-center justify-left h-full bg-surface1 rounded-xl"
      }
    >
      <TableContainer
        className={"w-full hover-shadow rounded-xl overflow-visible"}
      >
        <Table variant="simple" size={"lg"} className={"w-full"}>
          <Thead>
            <Tr>
              <Th hidden>Id</Th>
              <Th className={"border-b-0"}>Name</Th>
              <Th className={"border-b-0 invisible md:visible"}>Skills</Th>
              <Th className={"border-b-0 invisible md:visible"}>Select</Th>
            </Tr>
          </Thead>
          <Tbody>
            {data &&
              data.map((staff: Staff) => (
                <Tr
                  cursor={"pointer"}
                  className={"hover:bg-surface1 rounded-xl"}
                  onClick={() => {
                    setStaffId(staff.id);
                    onModalOpen();
                  }}
                  key={staff.id}
                >
                  <Td hidden>{staff.id}</Td>
                  <Td className={"border-b-0"}>{staff.name}</Td>
                  <Td className={"border-b-0 invisible md:visible"}>
                    {"Brain surgeon"}
                  </Td>
                  <Td className={"border-b-0 invisible md:visible"}>
                    <Checkbox />
                  </Td>
                </Tr>
              ))}
          </Tbody>
        </Table>
      </TableContainer>
      <StaffModal
        staffId={staffId}
        isModalOpen={isModalOpen}
        onModalOpen={onModalOpen}
        onModalClose={onModalClose}
      />
    </main>
  );
};

export default Staff;
