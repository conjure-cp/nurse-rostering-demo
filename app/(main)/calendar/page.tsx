"use client";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";

const Calendar = () => {
  const currentDate = "2018-11-01";
  const schedulerData = [
    {
      startDate: "2018-11-01T09:45",
      endDate: "2018-11-01T11:00",
      title: "Meeting",
    },
    {
      startDate: "2018-11-01T12:00",
      endDate: "2018-11-01T13:30",
      title: "Go to a gym",
    },
  ];

  return (
    <main className={"flex items-center justify-center h-full"}>
      <div>
        <FullCalendar plugins={[dayGridPlugin]} initialView="dayGridMonth" />
      </div>
    </main>
  );
};

export default Calendar;
