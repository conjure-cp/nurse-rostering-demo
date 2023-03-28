"use client";
import {
  Badge,
  Button,
  Input,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  useDisclosure,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import StaffModal from "../../../components/StaffModal/StaffModal";
import React, { useState } from "react";
import useStaffList, { StaffMember } from "../../../hooks/useStaffList";
import { FaFileExport, FaFileImport } from "react-icons/fa";
import { AiOutlineClear } from "react-icons/ai";

const Staff = () => {
  const {
    isOpen: isModalOpen,
    onOpen: onModalOpen,
    onClose: onModalClose,
  } = useDisclosure();

  const [staffId, setStaffId] = useState("");
  const { staffList, addStaffMember } = useStaffList();

  const handleImport = (e: React.FormEvent<HTMLInputElement>) => {
    // @ts-ignore
    const file = (e.target as HTMLInputElement).files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const text = e.target?.result;
        if (typeof text === "string") {
          const [staffList, skillList, schedule] = text.split("|||");
          localStorage["staffList"] = staffList;
          localStorage["skillList"] = skillList;
          localStorage["schedule"] = schedule;
        }
      };
      reader.readAsText(file);
    }
    window.location.reload();
  };

  const handleExport = () => {
    console.log("started");
    let localStaff = localStorage.getItem("staffList"); //indentation in json format, human readable
    let localSkills = localStorage.getItem("skillList");
    let localSchedule = localStorage.getItem("schedule");
    if (localStaff && localSkills && localSchedule) {
      //Note: We use the anchor tag here instead button.
      let vLink = document.getElementById("exportLink");

      // Add delimiter between localStaff and localSkills
      let delimiter = "|||";
      let vBlob = new Blob(
        [localStaff, delimiter, localSkills, delimiter, localSchedule],
        {
          type: "octet/stream",
        }
      );
      let vName = "Staff_" + Date.now() + ".json";
      let vUrl = window.URL.createObjectURL(vBlob);
      console.log(vLink);

      if (vLink) {
        vLink.setAttribute("href", vUrl);
        vLink.setAttribute("download", vName);

        //Note: Programmatically click the link to download the file
        vLink.click();
      }
    }
  };

  const handleClearAll = () => {
    localStorage.removeItem("staffList");
    localStorage.removeItem("skillList");
    localStorage.removeItem("schedule");
    window.location.reload();
  };

  const openStaffModal = (staffId: string) => {
    setStaffId(staffId);
    onModalOpen();
  };

  return (
    <main>
      <div
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
                <Th className={"border-b-0 invisible md:visible"}>
                  Qualifications
                </Th>
              </Tr>
            </Thead>
            <Tbody>
              {staffList &&
                staffList.map((staff: StaffMember) => (
                  <Tr
                    cursor={"pointer"}
                    className={"hover:bg-surface1 rounded-xl"}
                    onClick={() => {
                      openStaffModal(staff.id);
                    }}
                    key={staff.id}
                  >
                    <Td hidden>{staff.name}</Td>
                    <Td className={"border-b-0"}>{staff.name}</Td>
                    <Td className={"border-b-0 invisible md:visible"}>
                      <Wrap>
                        {staff.skills.map((skill, index) => (
                          <WrapItem key={index}>
                            <Badge size="lg">{skill}</Badge>
                          </WrapItem>
                        ))}
                      </Wrap>
                    </Td>
                  </Tr>
                ))}
            </Tbody>
          </Table>
        </TableContainer>
      </div>
      <div
        className={
          "flex ml-1 mt-4 md:ml-5 items-center justify-between h-full rounded-xl"
        }
      >
        <Button leftIcon={<FaFileImport />} variant="outline">
          <label htmlFor="import" className={""}>
            Import
          </label>
        </Button>
        <Input
          className={"hidden"}
          type={"file"}
          id={"import"}
          variant="outline"
          placeholder={"Import"}
          onChange={handleImport}
        />
        <Button
          leftIcon={<AiOutlineClear />}
          variant="outline"
          onClick={handleClearAll}
        >
          Clear All
        </Button>
        <Button
          leftIcon={<FaFileExport />}
          variant="outline"
          onClick={handleExport}
        >
          Export
        </Button>
        <a id="exportLink" className={"hidden"}>
          Export
        </a>
      </div>
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
