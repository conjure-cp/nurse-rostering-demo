import { useEffect } from "react";

const useTimelineWidthAdjustment = (changedDate) => {
  useEffect(() => {
    const adjustWidths = () => {
      const laneFrames = document.querySelectorAll(".fc-timeline-lane-frame");

      laneFrames.forEach((laneFrame) => {
        const bgHarnesses = laneFrame.querySelectorAll(
          ".fc-timeline-bg-harness"
        );
        const secondHarnessWidth = bgHarnesses[1]?.offsetWidth;
        if (secondHarnessWidth) {
          bgHarnesses[2].style.width = `${secondHarnessWidth}px`;
        }
        if (bgHarnesses.length >= 4 && secondHarnessWidth) {
          bgHarnesses[3].style.width = `${secondHarnessWidth}px`;
        }
      });
    };

    adjustWidths();
    window.addEventListener("resize", adjustWidths);

    return () => {
      window.removeEventListener("resize", adjustWidths);
    };
  }, [changedDate]);
};

export default useTimelineWidthAdjustment;
