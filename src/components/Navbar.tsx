import {
  Search,
  MessageSquareText,
  Megaphone,
  CircleUserRound,
} from "lucide-react";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between p-4 ">
      {/* Search bar*/}
      <div className="hidden md:flex items-center gap-2 text-xs rounded-full ring-[2px] ring-gray-400 px-2">
        <Search
          width={18}
          height={18}
        />
        <input
          type="text"
          placeholder="Search..."
          className="w-48 p-3 px-1 text-md bg-transparent outline-none"
        />
      </div>

      {/* Icons and Users */}
      <div className="flex items-center gap-6 justify-end w-full">
        <div className="bg-white rounded-full w-8 h-8 flex items-center justify-center cursor-pointer">
          <MessageSquareText
            width={20}
            height={20}
          />
        </div>
        <div className="bg-white rounded-full w-8 h-8 flex items-center justify-center cursor-pointer relative">
          <Megaphone
            width={20}
            height={20}
          />
          <div className="absolute -top-2 -right-2 w-5 h-5 flex items-center justify-center bg-purple-500 text-white rounded-full text-xs">
            1
          </div>
        </div>
        <div className="flex flex-col">
          <span className="text-xs leading-3 font-medium">Kushal S</span>
          <span className="text-[10px] text-gray-500 text-right">Admin</span>
        </div>
        <CircleUserRound
          width={28}
          height={28}
          className="rounded-full"
        />
      </div>
    </div>
  );
};

export default Navbar;
