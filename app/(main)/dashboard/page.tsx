"use client";
import { Stat, StatGroup, StatLabel, StatNumber } from "@chakra-ui/stat";

import useStaffList from "../../../hooks/useStaffList";

const Dashboard = () => {
  const { countStaffMembers } = useStaffList();
  return (
    <main className={"flex items-center justify-center h-full"}>
      <div
        className={
          "flex ml-1 flex-wrap md:flex-nowrap items-center justify-around h-full w-full gap-4 md:ml-5"
        }
      >
        <StatGroup
          className={
            "hover-shadow flex bg-primaryContainer rounded-xl w-full flex-grow h-full"
          }
        >
          <Stat className={"mx-8 p-4"}>
            <StatLabel>Staff</StatLabel>
            <StatNumber className={"text-primaryText"}>
              {countStaffMembers()}
            </StatNumber>
          </Stat>
        </StatGroup>
        <StatGroup
          className={
            "hover-shadow flex bg-primaryContainer rounded-xl w-full flex-grow h-full"
          }
        >
          <Stat className={"mx-8 p-4"}>
            <StatLabel>Who&apos;s on now?</StatLabel>
            <StatNumber className={"text-primaryText"}>...</StatNumber>
          </Stat>
        </StatGroup>
        <StatGroup
          className={
            "hover-shadow flex bg-primaryContainer rounded-xl w-full flex-grow h-full"
          }
        >
          <Stat className={"mx-8 p-4"}>
            <StatLabel>Who&apos;s on leave?</StatLabel>
            <StatNumber className={"text-primaryText"}>...</StatNumber>
          </Stat>
        </StatGroup>
      </div>
    </main>
  );
};

export default Dashboard;
