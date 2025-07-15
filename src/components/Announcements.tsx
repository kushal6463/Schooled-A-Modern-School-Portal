import { Ellipsis } from "lucide-react";

const Announcements = () => {
  return (
    <div className="bg-white p-4 rounded-lg">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold my-4">Announcements</h1>
        <span className="text-xs text-gray-600">View All</span>
      </div>
      <div className="flex flex-col gap-4">
        <div className="p-4 rounded-md border-1 border-t-6 border-gray-500  odd:border-t-green-500 even:border-t-yellow-400">
          <div className="flex items-center justify-between">
            <h1 className="font-semibold text-gray-800">
              Lorem ipsum dolor sit
            </h1>
            <span className="text-gray-400 text-xs">2025-01-01</span>
          </div>
          <p className="mt-2 text-gray-600 text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum,
            expedita. Rerum, quidem facilis?
          </p>
        </div>
        <div className="p-4 rounded-md border-1 border-t-6 border-gray-500  odd:border-t-green-500 even:border-t-yellow-400">
          <div className="flex items-center justify-between">
            <h1 className="font-semibold text-gray-800">
              Lorem ipsum dolor sit
            </h1>
            <span className="text-gray-400 text-xs">2025-01-01</span>
          </div>
          <p className="mt-2 text-gray-600 text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum,
            expedita. Rerum, quidem facilis?
          </p>
        </div>
        <div className="p-4 rounded-md border-1 border-t-6 border-gray-500  odd:border-t-green-500 even:border-t-yellow-400">
          <div className="flex items-center justify-between">
            <h1 className="font-semibold text-gray-800">
              Lorem ipsum dolor sit
            </h1>
            <span className="text-gray-400 text-xs">2025-01-01</span>
          </div>
          <p className="mt-2 text-gray-600 text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum,
            expedita. Rerum, quidem facilis?
          </p>
        </div>
      </div>
    </div>
  );
};

export default Announcements;
