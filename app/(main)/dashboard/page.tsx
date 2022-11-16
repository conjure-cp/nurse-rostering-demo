"use client";
import { NextPage } from "next";
import {Stat, StatArrow, StatGroup, StatHelpText, StatLabel, StatNumber} from "@chakra-ui/stat";

const Dashboard: NextPage = () => {
  return (
    <main className={"flex items-center justify-center h-full"}>
      <div className={"flex flex-col items-center justify-around h-full"}>
        <StatGroup className={"flex "}>
          <Stat className={"mx-8"}>
            <StatLabel>Staff</StatLabel>
            <StatNumber>4</StatNumber>
            <StatHelpText>
              <StatArrow type='increase' />
              33%
            </StatHelpText>
          </Stat>
        </StatGroup>
      </div>
    </main>
  );
};

export default Dashboard;
