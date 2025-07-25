import TableSearch from "@/components/TableSearch";
import {
  ArrowDownWideNarrow,
  Eye,
  SlidersHorizontal,
} from "lucide-react";
import { role, studentsData } from "@/lib/data";
import PaginationComp from "@/components/PaginationComp";
import FormModel from "@/components/FormModel";
import TableComp from "@/components/TableComp";
import Link from "next/link";
import Image from "next/image";

type Student = {
  id: number;
  studentId: string;
  name: string;
  email?: string;
  photo: string;
  phone?: string;
  grade: number;
  class: string;
  address: string;
};

const columns = [
  {
    header: "Info",
    accessor: "info",
  },
  {
    header: "Student ID",
    accessor: "studentId",
    className: "hidden md:table-cell",
  },
  {
    header: "Grade",
    accessor: "grade",
    className: "hidden md:table-cell",
  },
  {
    header: "Phone",
    accessor: "phone",
    className: "hidden lg:table-cell",
  },
  {
    header: "Address",
    accessor: "address",
    className: "hidden lg:table-cell",
  },
  {
    header: "Actions",
    accessor: "action",
  },
];

const StudentListPage = () => {
  const renderRow = (item: Student) => (
    <tr
      key={item.id}
      className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-green-100">
      <td className="flex items-center gap-4 p-4">
        <Image
          src={item.photo}
          alt=""
          width={40}
          height={40}
          className="md:hidden xl:block w-10 h-10 rounded-full object-cover"
        />
        <div className="flex flex-col">
          <h3 className="font-semibold">{item.name}</h3>
          <p className="text-xs text-gray-500">{item?.email}</p>
        </div>
      </td>
      <td className="hidden md:table-cell">{item.studentId}</td>
      <td className="hidden md:table-cell">{item.grade}</td>
      <td className="hidden md:table-cell">{item.phone}</td>
      <td className="hidden md:table-cell">{item.address}</td>
      <td>
        <div className="flex items-center gap-2">
          <Link href={`/list/students/${item.id}`}>
            <button className="w-7 h-7 flex items-center justify-center ">
              <Eye color="#0fc3f0"/>
            </button>
          </Link>
          {role === "admin" && (
            // <button className="w-7 h-7 flex items-center justify-center rounded-full bg-purple-300">
            //   <Image src="/delete.png" alt="" width={16} height={16} />
            // </button>
            <FormModel
              table="student"
              type="delete"
              id={item.id}
            />
          )}
        </div>
      </td>
    </tr>
  );

  return (
    <div className="bg-white p-4 rounded-md flex-1 m-4 mt-0">
      {/* TOP */}
      <div className="flex items-center justify-between">
        <h1 className="hidden md:block text-lg font-semibold">All Students</h1>
        <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
          <TableSearch placeholder="Search for students.."/>
          <div className="flex items-center gap-4 self-end">
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-purple-300 p-2 mb-1">
              <SlidersHorizontal />
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-purple-300 p-2 mb-1">
              <ArrowDownWideNarrow />
            </button>
            {role === "admin" && (
              //   <button className="w-8 h-8 flex items-center justify-center rounded-full bg-purple-300 p-2 mb-1">
              //   <Plus />
              // </button>
              <FormModel
                table="student"
                type="create"
              />
            )}
          </div>
        </div>
      </div>
      {/* LIST */}
      <TableComp
        columns={columns}
        renderRow={renderRow}
        data={studentsData}
      />
      {/* PAGINATION m*/}
      <PaginationComp/>
    </div>
  );
};

export default StudentListPage;
