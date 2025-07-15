import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 to-purple-200">
      <div className="bg-white rounded-xl shadow-lg p-8 flex flex-col items-center gap-6">
        <h1 className="text-3xl font-bold text-gray-800">Welcome to School Portal</h1>
        <p className="text-gray-600 text-center max-w-md">Manage your school, students, teachers, and more with ease. Click below to get started as an admin.</p>
        <div className="flex flex-col sm:flex-row gap-3 w-full">
          <div className="flex flex-col gap-3 w-full sm:w-1/2">
            <Link href="/admin" className="w-full">
              <button className="w-full px-6 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition">Admin Login</button>
            </Link>
            <Link href="/teacher" className="w-full">
              <button className="w-full px-6 py-2 bg-purple-500 text-white rounded-lg shadow hover:bg-purple-700 transition">Teacher Login</button>
            </Link>
          </div>
          <div className="flex flex-col gap-3 w-full sm:w-1/2">
            <Link href="/student" className="w-full">
              <button className="w-full px-6 py-2 bg-green-500 text-white rounded-lg shadow hover:bg-green-700 transition">Student Login</button>
            </Link>
            
            <Link href="/parent" className="w-full">
              <button className="w-full px-6 py-2 bg-yellow-500 text-white rounded-lg shadow hover:bg-yellow-600 transition">Parent Login</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
