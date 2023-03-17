import FullCalendar from "@fullcalendar/react"; // must go before plugins
import resourceTimelinePlugin from "@fullcalendar/resource-timeline";
import useStaffList from "../hooks/useStaffList";
import { Button } from "@chakra-ui/react";
import useSchedule from "../hooks/useSchedule";
import dayjs from "dayjs";

const Schedule = () => {
  const { staffList } = useStaffList();
  const { postSchedule, fetchSchedule, getSchedule } = useSchedule();

  const onSchedule = async () => {
    const jobid = await postSchedule(staffList);
    const res = await fetchSchedule(jobid);
  };
  const getStartDate = () => {
    const startDates = getSchedule().map((schedule) => {
      return schedule.start;
    });
    // if today is earlier than all dates in startDates, return the earliest start date
    if (startDates.length <= 0) {
      return dayjs().toDate();
    }
    const earliestStartDate = startDates.reduce((a, b) => {
      return dayjs(a).isBefore(dayjs(b)) ? a : b;
    });
    return dayjs().isBefore(dayjs(earliestStartDate))
      ? earliestStartDate
      : dayjs().toDate();
  };

  return (
    <div>
      <FullCalendar
        schedulerLicenseKey="CC-Attribution-NonCommercial-NoDerivatives"
        plugins={[resourceTimelinePlugin]}
        initialView="resourceTimelineWeek"
        slotDuration="12:00:00"
        slotMinTime="07:00:00"
        resourceAreaWidth="10%"
        // viewDidMount={(info) => {
        //   // delay 1 second
        //   setTimeout(() => {
        //     info.view.calendar.gotoDate(getStartDate());
        //   }, 2000);
        // }}
        firstDay={1}
        initialDate={getStartDate()}
        nowIndicator={true}
        resources={staffList.map((staffMember) => {
          return { id: staffMember.id, title: staffMember.name };
        })}
        eventDisplay="background"
        events={getSchedule().map((schedule) => {
          return {
            id: schedule.id,
            resourceId: schedule.resourceId,
            start: schedule.start,
            end: schedule.end,
          };
        })}
      />
      <Button
        className={"bg-primary text-white"}
        aria-label={"Add event"}
        onClick={onSchedule}
      >
        SCHEDULE
      </Button>
      <style>
        {`
          .fc .fc-datagrid-cell-cushion {
            overflow-x: scroll;
          }
        `}
      </style>
    </div>
  );
};
export default Schedule;
