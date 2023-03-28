"use client";
import React, { useEffect, useState } from "react";
import Schedule from "../../../components/Schedule";
import MobileSchedule from "../../../components/MobileSchedule";

const Calendar = () => {
  const [isDesktop, setDesktop] = useState(true);

  const updateMedia = () => {
    if (typeof window !== "undefined") {
      setDesktop(window.innerWidth > 650);
    }
  };

  useEffect(() => {
    updateMedia();
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  }, []);

  return <main>{isDesktop ? <Schedule /> : <MobileSchedule />}</main>;
};

export default Calendar;
