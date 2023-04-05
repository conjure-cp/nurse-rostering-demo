"use client";
import FullCalendar from "@fullcalendar/react"; // must go before plugins
import resourceTimelinePlugin from "@fullcalendar/resource-timeline";
import interactionPlugin from "@fullcalendar/interaction";

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
import React, { useCallback, useRef, useState } from "react";
//import useTimelineWidthAdjustment from "../hooks/useTimelineWidthAdjustment";
import TimetableStaffModal from "./StaffModal/TimetableStaffModal";

export interface ScheduleResponse {
  jobid: number;
  staffEncoding: { [key: string]: number };
  skillEncoding: { [key: string]: number };
}

const Schedule = () => {
  const { staffList, skillList } = useStaffList();
  const { postSchedule, fetchSchedule, getSchedule, setSchedule } =
    useSchedule();
  const { isOpen = false, onOpen, onClose } = useDisclosure();
  const toast = useToast();
  const calendarRef = useRef(null);
  const [changedDate, setChangedDate] = React.useState(0);
  const [originResourceId, setOriginResourceId] = useState(null);
  const {
    isOpen: isPersonalTimetableOpen,
    onOpen: onPersonalTimetableOpen,
    onClose: onPersonalTimetableClose,
  } = useDisclosure();
  const [clickedStaffId, setClickedStaffId] = React.useState("");

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

    let r = ((hash & 0xff) % 128) + 127; // minimum value of 127, range 128
    let g = (((hash >> 8) & 0xff) % 128) + 127;
    let b = (((hash >> 16) & 0xff) % 128) + 127;

    // ensure the color components are 2-digit hexadecimal numbers
    const rHex = r.toString(16).padStart(2, "0");
    const gHex = g.toString(16).padStart(2, "0");
    const bHex = b.toString(16).padStart(2, "0");

    return `#${rHex}${gHex}${bHex}`;
  };

  const resourceColors = getResourceColors();
  // @ts-ignore

  const onSchedule = async () => {
    const scheduleResponse: ScheduleResponse = await postSchedule(
      staffList,
      skillList
    );
    onOpen();
    const res = await fetchSchedule(scheduleResponse);
    onClose();
    if (res[1].length === 0) {
      if (res[0] === "cancelled") {
        toast({
          title: "Rerunning schedule request",
          status: "info",
          duration: 3000,
          position: "top",
          isClosable: true,
        });
        onOpen();
      } else if (res[0] === "timeout") {
        toast({
          title: "Request timed out",
          description:
            "We couldn't find a schedule for your request in time. Please check your staff list and constraints and try again.",
          status: "warning",
          duration: 9000,
          position: "top",
          isClosable: true,
        });
      } else if (res[0] === "no-solution") {
        toast({
          title: "No schedule found",
          description: "We couldn't find a schedule for the given constraints",
          status: "warning",
          duration: 9000,
          position: "top",
          isClosable: true,
        });
      }
    } else {
      // @ts-ignore
      calendarRef.current.getApi().gotoDate(getStartDate());
    }
  };
  const getStartDate = useCallback(() => {
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
  }, [getSchedule]);

  const handleResourceClick = useCallback(
    (resourceId: string) => {
      setClickedStaffId(resourceId);
      onPersonalTimetableOpen();
    },
    [onPersonalTimetableOpen]
  );

  const renderResourceLabelContent = (hookProps: {
    resource: {
      id: any;
      title: string | null | undefined;
    };
  }) => {
    const resourceId = hookProps.resource.id;
    return (
      <span
        onClick={() => handleResourceClick(resourceId)}
        style={{ minHeight: "40px" }}
      >
        {hookProps.resource.title}
      </span>
    );
  };

  // @ts-ignore
  const isEventAllowed = (dropInfo) => {
    const newResourceId = dropInfo.resource.id;
    return originResourceId === newResourceId;
  };

  // @ts-ignore
  const onEventDragStart = (info) => {
    const event = info.event;
    const resourceId = event._def.resourceIds[0];
    setOriginResourceId(resourceId);
  };

  // @ts-ignore
  const handleEventDrop = (info) => {
    const { event, oldEvent } = info;

    // Update the schedule
    const updatedSchedule = getSchedule().map((scheduleItem) => {
      if (scheduleItem.id === event.id) {
        return {
          ...scheduleItem,
          start: event.start,
          end: event.end,
          resourceId: scheduleItem.resourceId,
        };
      }
      return scheduleItem;
    });

    // Save the updated schedule
    setSchedule(updatedSchedule);
  };

  return (
    <div suppressHydrationWarning={true}>
      <div className={"p-4 m-4 h-full bg-surface1 rounded-xl"}>
        <FullCalendar
          schedulerLicenseKey="CC-Attribution-NonCommercial-NoDerivatives"
          plugins={[resourceTimelinePlugin, interactionPlugin]}
          initialView="resourceTimelineWeek"
          datesSet={() => {
            setChangedDate(changedDate + 1);
          }}
          slotDuration="12:00:00"
          slotMinTime="07:00:00"
          eventDragStart={onEventDragStart}
          eventAllow={isEventAllowed}
          // @ts-ignore
          contentHeight={"auto"}
          ref={calendarRef}
          resourceAreaWidth="15%"
          resourceAreaHeaderContent="Staff"
          defaultTimedEventDuration={"12:00:00"}
          eventDrop={handleEventDrop}
          // @ts-ignore
          firstDay={1}
          editable={true}
          resourceLabelContent={renderResourceLabelContent}
          initialDate={getStartDate()}
          // eventDrop={handleEventDrop}
          nowIndicator={true}
          resources={staffList.map((staffMember) => {
            return { id: staffMember.id, title: staffMember.name };
          })}
          eventInteractive={true}
          eventDisplay="block"
          events={getSchedule().map((schedule) => {
            return {
              id: schedule.id,
              resourceId: schedule.resourceId,
              start: schedule.start,
              end: schedule.end,
              backgroundColor: resourceColors[schedule.resourceId],
              editable: true,
              borderColor: "purple",
              overlap: false,
            };
          })}
        />
      </div>
      <Button
        className={"bg-primary text-white absolute top-2 right-4 m-4"}
        aria-label={"Add event"}
        onClick={onSchedule}
      >
        SCHEDULE
      </Button>
      <style suppressHydrationWarning={true}>
        {`
        @media only screen and (max-width: 800px) {
          .fc-toolbar-title {
            font-size: 1em !important;
          }
        }
        .fc .fc-datagrid-cell-cushion {
          overflow-x: scroll;
          -ms-overflow-style: none;  /* IE and Edge */
          scrollbar-width: none;  /* Firefox */
        } 
         /* Hide scrollbar for Chrome, Safari and Opera */
        .fc .fc-datagrid-cell-cushion ::-webkit-scrollbar {
          display: none;
        }

        .fc-theme-standard .fc-scrollgrid { 
          border: none;
        }
        .fc-timeline-lane-frame:hover {
          background-color: #e9e9e9;
          transition-duration: 300ms;
        }
        .fc-datagrid-cell-main:hover { 
          cursor: pointer;
          color: purple;
        }
        td > .fc-datagrid-cell-frame {
          height: 40px !important;
        }
        tr > td > .fc-timeline-lane-frame {
          height: 40px !important;
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
      <Modal
        isOpen={isPersonalTimetableOpen}
        onClose={onPersonalTimetableClose}
      >
        <ModalOverlay />
        <TimetableStaffModal staffId={clickedStaffId} />
      </Modal>
    </div>
  );
};
export default Schedule;
