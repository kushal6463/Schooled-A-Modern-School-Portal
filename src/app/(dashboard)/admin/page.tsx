import Announcements from "@/components/Announcements";
import { AttendanceChart } from "@/components/AttendenceChart";
import { CountChart } from "@/components/CountChart";
import { EventCalender } from "@/components/EventCalender";
import { FinanceChart } from "@/components/FinanaceChart";
import UserCard from "@/components/UserCard";

const AdminPage = () => {
  return (
    <div className="p-4 flex gap-4 flex-col md:flex-row">
      {/* left */}
      <div className="w-full lg:w-2/3 flex flex-col gap-8">
        {/* usercards */}
        <div className="flex gap-4 justify-between flex-wrap">
          <UserCard type="teacher" />
          <UserCard type="student" />
          <UserCard type="parent" />
          <UserCard type="staff" />
        </div>
        {/* chart */}
        <div className="flex gap-4 flex-col w-full lg:flex-row">
          {/* COUNT CHART */}
          <div className="w-full lg:w-1/3 h-[450px]">
            <CountChart />
          </div>
          {/* ATTENDANCE CHART */}
          <div className="w-full lg:w-2/3 h-[450px]">
            <AttendanceChart />
          </div>
        </div>
        <div className="w-full h-[500px]">
          <FinanceChart />
        </div>
      </div>

      {/* right */}
      <div className="w-full lg:w-1/3 flex flex-col gap-2">
        <EventCalender />
        <Announcements />
      </div>
    </div>
  );
};

export default AdminPage;
