"use client";
import { Stat, StatGroup, StatLabel, StatNumber } from "@chakra-ui/stat";

import useStaffList from "../../../hooks/useStaffList";
import useSchedule from "../../../hooks/useSchedule";
import dayjs from "dayjs";
import duration from "dayjs/plugin/duration";
import { useEffect, useMemo, useState } from "react";

const Dashboard = () => {
  const { staffList, countStaffMembers } = useStaffList();
  const { schedule } = useSchedule();

  // State to store the countdown timer
  const [staffedCountdown, setStaffedCountdown] = useState("");
  const [countdown, setCountdown] = useState("");
  const [nextShiftStaff, setNextShiftStaff] = useState<string[]>([]);

  // Create a mapping of staff IDs to names
  const staffIdToName = useMemo(() => {
    const mapping: Record<string, string> = {};
    staffList.forEach((staffMember) => {
      mapping[staffMember.id] = staffMember.name;
    });
    return mapping;
  }, [staffList]);

  const staffOnShift = useMemo(() => {
    const now = dayjs();
    return schedule.filter((shift) => {
      const start = dayjs(shift.start);
      const end = dayjs(shift.end);
      return (
        (now.isAfter(start) || now.isSame(start)) &&
        (now.isBefore(end) || now.isSame(end))
      );
    });
  }, [schedule]);

  const nextShift = useMemo(() => {
    const now = dayjs();
    const upcomingShifts = schedule
      .filter((shift) => dayjs(shift.start).isAfter(now))
      .map((shift) => dayjs(shift.start));

    if (upcomingShifts.length === 0) {
      return null;
    }

    let min = upcomingShifts[0];
    for (let i = 1; i < upcomingShifts.length; i++) {
      if (upcomingShifts[i].isBefore(min)) {
        min = upcomingShifts[i];
      }
    }

    return min;
  }, [schedule]);

  const nextShiftDetails = useMemo(() => {
    if (!nextShift) return null;

    const nextShiftStart = nextShift;
    const nextShiftEnd = nextShiftStart.add(12, "hour");

    const staffInNextShift = schedule
      .filter(
        (shift) =>
          dayjs(shift.start).isSame(nextShiftStart) &&
          dayjs(shift.end).isSame(nextShiftEnd)
      )
      .map((shift) => staffIdToName[shift.resourceId]);

    return {
      start: nextShiftStart,
      staff: staffInNextShift,
    };
  }, [nextShift, schedule, staffIdToName]);

  // Helper function to format the remaining time
  function formatRemainingTime(durationInMilliseconds: number) {
    const durationInSeconds = durationInMilliseconds / 1000;
    const hours = Math.floor(durationInSeconds / 3600);
    const minutes = Math.floor((durationInSeconds % 3600) / 60);
    const seconds = Math.floor(durationInSeconds % 60);

    return `${hours}h ${minutes}m ${seconds}s`;
  }

  // Helper function to calculate the time until the next shift change
  dayjs.extend(duration);
  function timeUntilNextShift() {
    const now = dayjs();
    const currentHour = now.hour();
    let nextShiftTime: dayjs.Dayjs;

    if (currentHour < 7) {
      nextShiftTime = now.clone().hour(7).minute(0).second(0);
    } else if (currentHour < 19) {
      nextShiftTime = now.clone().hour(19).minute(0).second(0);
    } else {
      nextShiftTime = now.clone().add(1, "day").hour(7).minute(0).second(0);
    }

    return nextShiftTime.diff(now);
  }

  // Update the countdown timer every second
  useEffect(() => {
    const updateCountdown = () => {
      setCountdown(formatRemainingTime(timeUntilNextShift()));
    };
    updateCountdown(); // Update the countdown immediately
    const timer = setInterval(updateCountdown, 1000); // Update every second
    return () => clearInterval(timer); // Clean up the interval on unmount
  }, []);

  // Update the countdown timer every second
  useEffect(() => {
    if (nextShift) {
      const updateCountdown = () => {
        setStaffedCountdown(formatRemainingTime(nextShift.diff(dayjs())));
        if (nextShiftDetails) {
          setNextShiftStaff(nextShiftDetails.staff);
        } else {
          setNextShiftStaff([]);
        }
      };
      updateCountdown(); // Update the countdown immediately
      const timer = setInterval(updateCountdown, 1000); // Update every second
      return () => clearInterval(timer); // Clean up the interval on unmount
    }
  }, [nextShift, nextShiftDetails]);

  return (
    <main className={"flex items-center justify-center h-full"}>
      <div
        className={
          "flex ml-1 flex-wrap md:flex-nowrap items-center justify-around h-full w-full gap-4 md:ml-5"
        }
      >
        <div className="flex flex-col md:flex-row justify-between w-full h-full gap-4">
          <StatGroup
            className={
              "hover-shadow flex bg-primaryContainer rounded-xl w-full flex-grow"
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
              "hover-shadow flex bg-primaryContainer rounded-xl w-full flex-grow"
            }
          >
            <Stat className={"mx-8 p-4"}>
              <StatLabel>Who&apos;s on now?</StatLabel>
              <StatNumber className={"text-primaryText"}>
                {staffOnShift && staffOnShift.length > 0
                  ? staffOnShift
                      .map((staffId) => staffIdToName[staffId.resourceId])
                      .join(", ")
                  : "No one is on shift"}
              </StatNumber>
            </Stat>
          </StatGroup>
          <StatGroup
            className={
              "hover-shadow flex bg-primaryContainer rounded-xl w-full flex-grow"
            }
          >
            <Stat className={"mx-8 p-4"}>
              <StatLabel>Next staffed shift starts in</StatLabel>
              <StatNumber className={"text-primaryText"}>
                {nextShift
                  ? `${staffedCountdown} - ${nextShiftStaff.join(", ")}`
                  : "No upcoming staffed shifts"}
              </StatNumber>
            </Stat>
          </StatGroup>
          <StatGroup
            className={
              "hover-shadow flex bg-primaryContainer rounded-xl w-full flex-grow"
            }
          >
            <Stat className={"mx-8 p-4"}>
              <StatLabel>Next shift starts in</StatLabel>
              <StatNumber className={"text-primaryText"}>
                {nextShift ? countdown : "No upcoming shifts"}
              </StatNumber>
            </Stat>
          </StatGroup>
        </div>
      </div>
    </main>
  );
};

export default Dashboard;
