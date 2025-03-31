"use client";

import { useRouter } from "next/navigation";
import { Plus } from "lucide-react";

export default function ExamsPage() {
  const router = useRouter();

  return (
    <div className="text-white">
      <h1 className="text-xl font-bold mb-3">Exams</h1>

      <table className="w-[95%] mb-6 text-left">
        <thead>
          <tr className=" bg-white dark: bg-gray-400 dark:bg-[#161716] dark:text-white">
            <th className="pl-5 py-3">SN</th>
            <th className="py-3">Name</th>
            <th className="py-3">Date</th>
            <th className="py-3">Candidates</th>
            <th className="py-3">Status</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b border-[#31283A]">
            <td className="pl-5 py-3">1</td>
            <td className="py-3">Web3 Test</td>
            <td className="py-3">12th Dec, 2025</td>
            <td className="py-3">
              <button className="px-4 py-1 text-black dark:text-white rounded-2xl border border-[#2D2E2D] hover:bg-zinc-600">
                View
              </button>
            </td>
            <td className="py-3 text-black dark:text-gray-400">Scheduled</td>
          </tr>
        </tbody>
        <tbody>
          <tr className="border-b border-[#31283A]">
            <td className="pl-5 py-3">2</td>
            <td className="py-3">Web3 Test</td>
            <td className="py-3">12th Dec, 2025</td>
            <td className="py-3">
              <button className="px-4 py-1 text-black dark:text-white rounded-2xl border border-[#2D2E2D] hover:bg-zinc-600">
                View
              </button>
            </td>
            <td className="py-3 text-black dark:text-gray-400">Unverified</td>
          </tr>
        </tbody>
      </table>

      <div className="pt-14">
        <h2 className="text-sm font-semibold mb-3">Create Exam</h2>
        <div className=" bg-gray-200 dark: bg-gray-400 dark:bg-[#161716] w-[95%] h-[40%] rounded-lg pb-5">
          <p className="text-sm text-black dark:text-gray-400 text-center pt-8 pb-7">
            Create an exam, set a date for takers.
          </p>
          <div className=" bg-gray-300 dark:bg-[#2D2E2D] w-16 h-16 pt-4 rounded-full ml-[38%] lg:ml-[45%] ">
            <Plus size={30} className="ml-4" />
          </div>
          <button
            className="flex mt-4 text-sm bg-gray-300 dark:bg-[#2D2E2D] text-[#2D2E2D] dark:text-white hover:bg-gray-600 px-4 py-2 rounded ml-[20%] lg:ml-[40%]"
            onClick={() => router.push("/dashboard/institution/exams/create")}
          >
            <Plus size={20} className="stroke-black dark:stroke-white" />
            CREATE EXAM
          </button>
        </div>
      </div>
    </div>
  );
}
