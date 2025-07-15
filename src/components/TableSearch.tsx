import { Search } from "lucide-react";

const TableSearch = ({placeholder}:{placeholder:string}) => {
  return (
    <div className="w-full md:w-auto flex items-center gap-2 text-xs rounded-full ring-[1.5px] ring-gray-400 px-2 ">
      <Search
        width={18}
        height={18}
      />
      <input
        type="text"
        placeholder={placeholder}
        className="w-48 p-3 px-1 text-md bg-transparent outline-none"
      />
    </div>
  );
};

export default TableSearch;
