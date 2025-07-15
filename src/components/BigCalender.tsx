"use client";

import { useState } from "react";
import moment from "moment";
import { calendarEvents as myEventsList } from "@/lib/data";
import { Calendar, momentLocalizer, View, Views } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment);

const BigCalender = () => {
  const [view, setView] = useState<View>(Views.WORK_WEEK);

  const handleOnChangeView = (selectedView: View) => {
    setView(selectedView);
  };

  return (
    <div className="text-sm h-full w-full flex items-center justify-center px-2 py-2 pt-8">
      <div className="w-full max-w-4xl h-full max-h-[700px] flex items-center justify-center">
        <Calendar
          localizer={localizer}
          events={myEventsList}
          startAccessor="start"
          endAccessor="end"
          style={{ height: "100%", width: "100%" }}
          views={["work_week", "day"]}
          view={view}
          onView={handleOnChangeView}
          min={new Date(2025, 1, 0, 8, 0, 0)}
          max={new Date(2025, 1, 0, 17, 0, 0)}
        />
      </div>
    </div>
  );
};

export default BigCalender;
