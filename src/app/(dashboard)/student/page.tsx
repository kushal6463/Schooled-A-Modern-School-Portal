import Announcements from "@/components/Announcements";
import BigCalender from "@/components/BigCalender";
import { EventCalender } from "@/components/EventCalender";

const StudentPage = () => {
  return (
    <div className="p-4 flex gap-4 flex-col xl:flex-row h-full">
      {/* left */}
      <div className="w-full xl:w-2/3 h-full">
        <div className="h-full bg-white p-4 rounded-md flex flex-col overflow-hidden">
          <h1 className="text-xl font-semibold">Schedule (4A)</h1>
          <div className="flex-1 min-h-0 overflow-hidden">
            <BigCalender />
          </div>
        </div>
      </div>

      {/* right */}
      <div className="w-full xl:w-1/3 flex flex-col gap-2">
        <EventCalender />
        <Announcements />
      </div>
    </div>
  );
};

export default StudentPage;
