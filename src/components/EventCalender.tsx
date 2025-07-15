"use client";

import * as React from "react";
import { Calendar } from "@/components/ui/calendar";
import { Ellipsis } from "lucide-react";

const events = [
  {
    id: 1,
    title: "Lorem ipsum dolor",
    time: "12:00 PM - 2:00 PM",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 2,
    title: "Lorem ipsum dolor",
    time: "12:00 PM - 2:00 PM",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 3,
    title: "Lorem ipsum dolor",
    time: "12:00 PM - 2:00 PM",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];

export function EventCalender() {
  const [date, setDate] = React.useState<Date | undefined>(new Date());

  return (
    <>
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="rounded-md border shadow-sm w-full p-2 pt-4"
        captionLayout="dropdown"
      />
      <div className="bg-white p-4 rounded-lg">
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-semibold my-4">Events</h1>
          <Ellipsis />
        </div>
        <div className="flex flex-col gap-4">
          {events.map((event) => (
            <div
              className="p-4 rounded-md border-1 border-t-6 border-gray-500  odd:border-t-blue-500 even:border-t-purple-400"
              key={event.id}>
              <div className="flex items-center justify-between">
                <h1 className="font-semibold text-gray-800">{event.title}</h1>
                <span className="text-gray-400 text-xs">{event.time}</span>
              </div>
              <p className="mt-2 text-gray-600 text-sm">{event.description}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
