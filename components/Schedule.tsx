import FullCalendar from "@fullcalendar/react"; // must go before plugins
import resourceTimelinePlugin from "@fullcalendar/resource-timeline";
import useStaffList from "../hooks/useStaffList";
import {
  Button,
  Center,
  Modal,
  ModalContent,
  ModalOverlay,
  Spinner,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import useSchedule from "../hooks/useSchedule";
import dayjs from "dayjs";
import React, { useRef } from "react";
import useTimelineWidthAdjustment from "../hooks/useTimelineWidthAdjustment";

export interface ScheduleResponse {
  jobid: number;
  staffEncoding: { [key: string]: number };
  skillEncoding: { [key: string]: number };
}

const Schedule = () => {
  const { staffList, skillList } = useStaffList();
  const { postSchedule, fetchSchedule, getSchedule } = useSchedule();
  const { isOpen = false, onOpen, onClose } = useDisclosure();
  const toast = useToast();
  const calendarRef = useRef(null);
  const [changedDate, setChangedDate] = React.useState(0);

  const generateSoftColor = () => {
    const getRandomColorValue = () => Math.floor(Math.random() * 155 + 100);
    return `rgba(${getRandomColorValue()}, ${getRandomColorValue()}, ${getRandomColorValue()}, 1)`;
  };

  const getResourceColors = () => {
    const resourceColors: { [key: string]: string } = {};
    staffList.forEach((staffMember) => {
      resourceColors[staffMember.id] = stringToColor(staffMember.id);
    });
    return resourceColors;
  };

  const stringToColor = (str: string) => {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }

    let color = "#";
    for (let i = 0; i < 3; i++) {
      const value = (hash >> (i * 8)) & 0xff;
      color += ("00" + value.toString(16)).substr(-2);
    }

    return color;
  };


  const resourceColors = getResourceColors();
  // @ts-ignore
  useTimelineWidthAdjustment(changedDate);

  const onSchedule = async () => {
    const scheduleResponse: ScheduleResponse = await postSchedule(
      staffList,
      skillList
    );
    onOpen();
    const res = await fetchSchedule(scheduleResponse);
    if (res == null) {
      toast({
        title: "No schedule found",
        description: "We couldn't find a schedule for the given constraints",
        status: "warning",
        duration: 9000,
        position: "top",
        isClosable: true,
      });
    } else {
      // @ts-ignore
      calendarRef.current.getApi().gotoDate(getStartDate());
    }
    onClose();
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
        datesSet={() => {setChangedDate(changedDate + 1)}}
        slotDuration="12:00:00"
        slotMinTime="07:00:00"
        contentHeight={"auto"}
        ref={calendarRef}
        resourceAreaWidth="10%"
        firstDay={1}
        initialDate={getStartDate()}
        nextDayThreshold={"07:00:00"}
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
            backgroundColor: resourceColors[schedule.resourceId],
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
      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent className={"w-20 h-20"}>
          <Center className={"h-full w-full flex justify-center"}>
            <Spinner size={"xl"} />
          </Center>
        </ModalContent>
      </Modal>
    </div>
  );
};
export default Schedule;
