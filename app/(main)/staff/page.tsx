"use client";
import { NextPage } from "next";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Checkbox,
} from "@chakra-ui/react";
import { useRouter } from "next/navigation";

const staff = [
  { id: 1, name: "Beth Dryer", skill: "Paramedic" },
  { id: 2, name: "Rafael Carrasco Lloret", skill: "Materials engineer" },
  { id: 3, name: "Virginia Lehmann", skill: "Psychologist, occupational" },
  {
    id: 4,
    name: "Anna del Perez",
    skill: "Chargé des méthodes outils et qualité en informatique",
  },
  { id: 5, name: "Tonya Logan", skill: "Enseignant" },
  { id: 6, name: "Zoe Sanders", skill: "Souscripteur" },
  { id: 7, name: "Iker Balaguer Saldaña", skill: "Clinical embryologist" },
];

const Staff: NextPage = () => {
  const router = useRouter();
  return (
    <main className={"flex items-center justify-left h-full"}>
      <TableContainer className={"w-full mx-8 bg-base"}>
        <Table variant="simple" size={"lg"} className={"w-full"}>
          <Thead>
            <Tr>
              <Th>Name</Th>
              <Th>Skills</Th>
              <Th>Select</Th>
            </Tr>
          </Thead>
          <Tbody>
            {staff.map((staff) => (
              <Tr
                cursor={"pointer"}
                className={"hover:bg-raised1"}
                onClick={() => router.push(`/staff/${staff.id}`)}
                key={staff.id}
              >
                <Td>{staff.name}</Td>
                <Td>{staff.skill}</Td>
                <Td>
                  <Checkbox />
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </main>
  );
};

export default Staff;
