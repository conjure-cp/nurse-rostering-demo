import FullCalendar from "@fullcalendar/react"; // must go before plugins
import resourceTimelinePlugin from "@fullcalendar/resource-timeline";
import useStaffList from "../hooks/useStaffList";
import { Button } from "@chakra-ui/react";
import useSchedule from "../hooks/useSchedule";

const Schedule = () => {
  const { staffList } = useStaffList();
  const { postSchedule } = useSchedule();

  const onSchedule = async () => {
    const jobid = await postSchedule(staffList);
    console.log(jobid);
    /*
    const interval = setInterval(async function () {
      let isDone = await axios.get(`/api/calendar/schedule/check`);
    }, 5000);
    */
  };
  //
  // const { data, error, isLoading } = useSWR("/api/calendar/schedule", fetcher);
  //
  // if (error) return <div>failed to load</div>;
  // if (isLoading) return <div>loading...</div>;
  //
  // // render data
  // return <div>hello {data.name}!</div>;

  return (
    <div>
      <FullCalendar
        schedulerLicenseKey="CC-Attribution-NonCommercial-NoDerivatives"
        plugins={[resourceTimelinePlugin]}
        initialView="resourceTimelineWeek"
        slotDuration="12:00:00"
        slotMinTime="07:00:00"
        resourceAreaWidth="10%"
        resources={staffList.map((staffMember) => {
          return { id: staffMember.id, title: staffMember.name };
        })}
        eventDisplay="background"
        events={[
          {
            id: "1",
            resourceId: staffList[0].id,
            start: "2023-03-07T07:00:00",
            end: "2023-03-08T19:00:00",
          },
          {
            id: "2",
            resourceId: staffList[1].id,
            start: "2023-03-05T07:00:00",
            end: "2023-03-05T19:00:00",
          },
        ]}
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
