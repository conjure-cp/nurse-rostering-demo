import { Text, VStack } from "@chakra-ui/react";
import React from "react";
import useStaffList from "../hooks/useStaffList";
import useSchedule from "../hooks/useSchedule";
import { MdOutlineNightlightRound, MdSunny } from "react-icons/md";

const StaffTimetable = ({ staffId }: { staffId: string }) => {
  const { staffList } = useStaffList();
  const { schedule } = useSchedule();
  const staffMember = staffList.find((staff) => staff.id === staffId);

  const personalSchedule = schedule.filter(
    (shift) => shift.resourceId === staffId
  );

  const formatDate = (
    dateString: string | number | Date,
    includeWeekday = true
  ) => {
    const date = new Date(dateString);
    const options: Intl.DateTimeFormatOptions = {
      month: "long",
      day: "numeric",
    };

    if (includeWeekday) {
      options.weekday = "long";
    }

    return date.toLocaleString("en-US", options);
  };

  const formatShiftType = (start: Date) => {
    const dayShiftEnd = 19;
    return start.getHours() >= dayShiftEnd ? (
      <div className={"flex gap-2 leading-none"}>
        <MdOutlineNightlightRound />
        <Text>Night Shift</Text>
      </div>
    ) : (
      <div className={"flex gap-2 leading-none"}>
        <MdSunny />
        <Text>Day Shift</Text>
      </div>
    );
  };

  const groupShiftsByWeek = (shifts: any[]) => {
    const sortedShifts = shifts.sort(
      (a, b) => new Date(a.start).getTime() - new Date(b.start).getTime()
    );
    const weekShifts: { [key: string]: any[] } = {};

    sortedShifts.forEach((shift) => {
      const weekStart = new Date(shift.start);
      weekStart.setDate(weekStart.getDate() - ((weekStart.getDay() + 6) % 7));
      const weekKey = weekStart.toISOString().slice(0, 10);

      if (!weekShifts[weekKey]) {
        weekShifts[weekKey] = [];
      }
      weekShifts[weekKey].push(shift);
    });

    return weekShifts;
  };

  const weekShifts = groupShiftsByWeek(personalSchedule);

  return (
    <div>
      {Object.entries(weekShifts).map(([weekKey, shifts]) => (
        <VStack key={weekKey} spacing={1} align="start" className={"my-4"}>
          <Text fontWeight="bold">Week of {formatDate(weekKey, false)}</Text>
          {shifts.map((shift: any) => (
            <div key={shift.id} className={"w-full flex justify-between"}>
              <Text>{formatDate(shift.start)}</Text>
              {formatShiftType(new Date(shift.start))}
            </div>
          ))}
        </VStack>
      ))}
    </div>
  );
};

export default StaffTimetable;
