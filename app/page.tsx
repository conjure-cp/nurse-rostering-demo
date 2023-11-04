"use client";
import { Button, Flex } from "@chakra-ui/react";
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
        <div></div>
      </div>
      <main className={"flex flex-col items-center justify-center h-full"}>
        <Flex
          flexDirection={"column"}
          alignItems={"center"}
          className={"max-w-xl"}
          gap={"16"}
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
          </Flex>
          <div className={"flex flex-col gap-4 shrink mx-8 my-8"}>
            <div>
              <h1 className={"font-bold"}>
                Nurse Rostering Demo Application
              </h1>
              <p>
                This is a demo application for a simplified version of the nurse rostering problem.
              </p>
              <p>
                The application can be used to create a list of staff members, input their qualifications and various constratins regarding the roster.
              </p>
              <p>
                <a href="https://conjure-cp.github.io/">Conjure</a> is then used to find a solution.
              </p>
              <p>
                The application allows exporting the data and importing it again later, which can be useful to save your data locally. Your data will not be saved on a server in a persistent way.
              </p>
            </div>
          </div>
        </Flex>
      </main>
    </div >
  );
}
