// import Image from "next/image";
import Link from "next/link";
import Menu from "../../components/Menu";
import Navbar from "../../components/Navbar";
import { LuSchool } from "react-icons/lu";

export default function DashBoardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-screen flex">
      {/* LEFT */ }
      <div className="w-1/6 md:w-1/12 lg:w-1/6 bg-teal-300 py-4 pl-4 h-screen overflow-y-auto overflow-x-none">
        <Link href="/" className="flex items-center justify-center lg:justify-start gap-2">
          <LuSchool size={ 32 } />
          <span className="hidden lg:block font-mono text-3xl font-semibold">SCHOOLED</span>
        </Link>
        <Menu />
      </div>
      {/* RIGHT */ }
      <div className="w-5/6 md:w-11/12 lg:w-5/6 bg-blue-100 overflow-scroll">
        <Navbar />
        { children }
      </div>
    </div>
  );
}
