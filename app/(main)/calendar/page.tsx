"use client";
import React from "react";
import {Box, Center, Flex} from "@chakra-ui/react";

const days = ["", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
let rows: JSX.Element[] = [];
for (let i = 0; i < 24; i++) {
  rows.push(<Box className={"h-16 w-full border-b-2"} key={i}></Box>);
}
const hours = ["01:00", "02:00", "03:00", "04:00", "05:00", "06:00", "07:00", "08:00", "09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00", "21:00", "22:00", "23:00", "00:00"];
const intervals: JSX.Element[] = [];
for (let i = 0; i < hours.length; i++) {
  intervals.push(<Center className={"h-16 text-center"}><p>{hours[i]}</p></Center>);
}
const Calendar = () => {
  const colStyle = "flex-col w-full text-center";

  return (
    <main>
      <Flex className={"flex w-full h-8 text-center"}>
        {days.map((day) => (
          <Box key={day} className={"h-8 w-full"}>{day}</Box>
        ))}
      </Flex>
      <div className={"flex hover-shadow bg-surface1 rounded-xl p-4 w-full"}>
        <Flex className={"flex-col w-16 text-center mt-[30px] mr-2"}>
          {intervals}
        </Flex>
        <Flex className={colStyle}>
          {rows}
        </Flex>
        <Flex className={colStyle}>
          {rows}
        </Flex>
        <Flex className={colStyle}>
          {rows}
        </Flex>
        <Flex className={colStyle}>
          {rows}
        </Flex>
        <Flex className={colStyle}>
          {rows}
        </Flex>
        <Flex className={colStyle}>
          {rows}
        </Flex>
        <Flex className={colStyle}>
          {rows}
        </Flex>
      </div>
    </main>
  );
};

export default Calendar;
