"use client";
import {NextPage} from "next";
import {Stat, StatArrow, StatGroup, StatHelpText, StatLabel, StatNumber} from "@chakra-ui/stat";

const Dashboard: NextPage = () => {
  return (
    <main className={"flex items-center justify-center h-full"}>
      <div className={"flex ml-1 flex-wrap md:flex-nowrap items-center justify-around h-full w-full gap-4 md:ml-5"}>
        <StatGroup className={"flex bg-primaryContainer rounded-xl w-full hover:shadow-lg flex-grow h-full"}>
          <Stat className={"mx-8 p-4"}>
            <StatLabel>Staff</StatLabel>
            <StatNumber>4</StatNumber>
          </Stat>
        </StatGroup>
        <StatGroup className={"flex bg-primaryContainer rounded-xl w-full hover:shadow-lg flex-grow h-full"}>
          <Stat className={"mx-8 p-4"}>
            <StatLabel>Who&apos;s on now?</StatLabel>
            <StatNumber>...</StatNumber>
          </Stat>
        </StatGroup>
        <StatGroup className={"flex bg-primaryContainer rounded-xl w-full hover:shadow-lg flex-grow h-full"}>
          <Stat className={"mx-8 p-4"}>
            <StatLabel>Who&apos;s on leave?</StatLabel>
            <StatNumber>...</StatNumber>
          </Stat>
        </StatGroup>
      </div>
    </main>
  );
};

export default Dashboard;
