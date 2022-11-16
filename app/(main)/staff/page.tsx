"use client";
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
import {useRouter} from "next/navigation";

const staff = [
  {id: 1, name: "Beth Dryer", skill: "Paramedic"},
  {id: 2, name: "Rafael Carrasco Lloret", skill: "Materials engineer"},
  {id: 3, name: "Virginia Lehmann", skill: "Psychologist, occupational"},
  {
    id: 4,
    name: "Anna del Perez",
    skill: "Chargé des méthodes outils et qualité en informatique",
  },
  {id: 5, name: "Tonya Logan", skill: "Enseignant"},
  {id: 6, name: "Zoe Sanders", skill: "Souscripteur"},
  {id: 7, name: "Iker Balaguer Saldaña", skill: "Clinical embryologist"},
];

const Staff = () => {
  const router = useRouter();
  return (
    <main className={"flex ml-1 md:ml-5 items-center justify-left h-full bg-surface1 rounded-xl"}>
      <TableContainer className={"w-full mx-8"}>
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
                className={"hover:bg-surface1"}
                onClick={() => router.push(`/staff/${staff.id}`)}
                key={staff.id}
              >
                <Td>{staff.name}</Td>
                <Td>{staff.skill}</Td>
                <Td>
                  <Checkbox/>
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
