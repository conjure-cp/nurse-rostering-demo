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
          <div className={"flex flex-col gap-4 shrink mx-8 my-8"}>
            <div>
              <h2 className={"font-bold"}>
                Managing nurse schedules has never been this easy!
              </h2>
              <p>
                Our revolutionary nurse rostering platform is designed to help
                healthcare facilities of all sizes efficiently allocate shifts
                to their nursing staff, ensuring optimal patient care and staff
                satisfaction.{" "}
              </p>
            </div>
            <div>
              <ul>
                <li>
                  <strong>Effortless Scheduling:</strong> Our powerful algorithm
                  handles even the most complex scheduling constraints,
                  balancing staff preferences, qualifications, and availability
                  to create the perfect roster in seconds.
                </li>
                <li>
                  <strong>User-Friendly Interface:</strong> Designed with ease
                  of use in mind, our intuitive platform allows administrators
                  and nurses to navigate and manage their schedules seamlessly,
                  without any prior training or technical expertise.
                </li>
                <li>
                  <strong>Accessibility for All:</strong> We are committed to
                  inclusivity, and our platform adheres to WCAG 2.1
                  accessibility standards, ensuring that everyone can enjoy its
                  benefits.
                </li>
                <li>
                  <strong>Responsive Design:</strong> Our platform is optimized
                  for both desktop and mobile devices, providing a seamless
                  experience for users on the go.
                </li>
                <li className={"mb-8"}>
                  <strong>Cost-Free Solution:</strong> We believe in providing
                  quality tools to healthcare professionals at no cost. Our
                  nurse rostering platform is completely free to use and will
                  remain so forever.
                </li>
              </ul>
              <p>
                Start your journey to a more organized, efficient, and
                stress-free healthcare environment today. Register now and
                experience the future of nurse rostering, free for everyone,
                forever. Nurse Rostering: Simplifying the Complex World of
                Healthcare Scheduling.
              </p>
            </div>
          </div>
        </Flex>
      </main>
    </div>
  );
}
