"use client";
import { Button, Flex, Select } from "@chakra-ui/react";
import Link from "next/link";
import useStaffList from "../hooks/useStaffList";
import { ChangeEvent, useState } from "react";

export default function Page() {
  const { staffList } = useStaffList();

  // Add state for the selected staff ID
  const [selectedStaffId, setSelectedStaffId] = useState(
    staffList.length > 0 ? staffList[0].id : ""
  );

  // Handle the change event for the Select component
  const handleStaffChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const selectedIndex = event.target.options.selectedIndex;
    const id = event.target.options[selectedIndex].getAttribute("data-id");
    setSelectedStaffId(id ? id : "");
  };

  return (
    <div>
      <div className={"flex gap-4 justify-between p-8 flex-col sm:flex-row"}>
        <Link href={"/dashboard"}>
          <Button size="lg" variant="solid">
            Enter as Admin
          </Button>
        </Link>
        <div className={"flex gap-4 w-[500px] w-fit"}>
          <Select
            size={"lg"}
            disabled={staffList.length <= 0}
            onChange={handleStaffChange}
          >
            {staffList.map((staff, index) => (
              <option key={staff.id} data-id={staff.id}>
                {staff.name}
              </option>
            ))}
          </Select>
          <Link href={"/staff/" + selectedStaffId}>
            <Button
              size="lg"
              variant="outline"
              color={staffList.length <= 0 ? "gray.400" : "purple.700"}
              cursor={staffList.length <= 0 ? "not-allowed" : "pointer"}
              disabled={staffList.length <= 0}
              className={"w-[240px]"}
            >
              Enter as Staff Member
            </Button>
          </Link>
        </div>
      </div>
      <main className={"flex flex-col items-center justify-center h-screen"}>
        <Flex
          flexDirection={"column"}
          alignItems={"center"}
          className={"max-w-xl"}
          gap={"8"}
        >
          <Flex gap={4}>
            <Flex flexDirection={"column"} justifyContent={"right"}>
              <h1 className={"text-4xl md:text-6xl text-right font-bold"}>
                NURSE
              </h1>
              <h1 className={"text-4xl md:text-6xl text-right font-bold"}>
                ROSTERING
              </h1>
            </Flex>
            <Flex flexDirection={"column"} justifyContent={"left"}>
              <h2
                className={
                  "font-thin mb-1 md:mb-4 max-w-80 text-left text-md md:text-xl"
                }
              >
                free.
              </h2>
              <h2
                className={
                  "font-thin mb-1 md:mb-4 max-w-80 text-left text-md md:text-xl"
                }
              >
                for everyone.
              </h2>
              <h2
                className={
                  "font-thin mb-1 md:mb-4 max-w-80 text-left text-md md:text-xl"
                }
              >
                forever.
              </h2>
            </Flex>
          </Flex>
          <div className={"flex flex-col gap-4 shrink mx-8"}>
            <div>
              <h2 className={"font-bold"}>What is Lorem Ipsum?</h2>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the standard dummy text ever
                since the 1500s, when an unknown printer took a galley of type
                and scrambled it to make a type specimen book. It has survived
                not only five centuries, but also the leap into electronic
                typesetting, remaining essentially unchanged. It was popularised
                in the 1960s with the release of Letraset sheets containing
                Lorem Ipsum passages, and more recently with desktop publishing
                software like Aldus PageMaker including versions of Lorem Ipsum.
              </p>
            </div>
            <div>
              <h2 className={"font-bold"}>Why do we use it?</h2>
              <p>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using Content
                here, content heremaking it look like readable English. Many
                desktop publishing packages and web page editors now use Lorem
                Ipsum as their default model text, and a search for lorem ipsum
                will uncover many web sites still in their infancy. Various
                versions have evolved over the years, sometimes by accident,
                sometimes on purpose (injected humour and the like).
              </p>
            </div>
          </div>
        </Flex>
      </main>
    </div>
  );
}
