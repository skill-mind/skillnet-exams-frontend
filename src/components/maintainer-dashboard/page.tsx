"use client";

import StatCard from "@/components/maintainer-dashboard/stat-card";
import Table from "@/components/maintainer-dashboard/table";
import { useState } from "react";
import AccountDashboard from "@/components/maintainer-dashboard/accountDashboard";
// Define types for better type safety and maintainability

interface StatCardData {
  icon: "percentage" | "briefcase" | "certificate" | "message-square";
  value: string;
  label: string;
  iconColor: string;
}

//first table data
const tableData: any = {
  headings: [
    "Name",
    "Wallet Address",
    "Registration Date",
    "Courses Taken",
    "Jobs Applied",
    "Status",
  ],
  rows: [
    {
      Name: "John Doe",
      "Wallet Address": "0x1a2b3c4d5e6f12345678",
      "Registration Date": "2023-05-15",
      "Courses Taken": 3,
      "Jobs Applied": 7,
      Status: "Active",
    },
    {
      Name: "Jane Smith",
      "Wallet Address": "0x7e8d9c0b1a2b87654321",
      "Registration Date": "2023-06-22",
      "Courses Taken": 5,
      "Jobs Applied": 4,
      Status: "Pending",
    },
  ],
};

const activeJobsTableData: any = {
  headings: ["Name", "Posted Date", "Applications", "Interviews", "Status"],
  rows: [
    {
      Name: "Senior Blockchain Dev",
      "Posted Date": "Feb 15, 2025",
      Applications: 24,
      Interviews: 5,
      Status: "Active",
    },
    {
      Name: "Product Designer",
      "Posted Date": "Feb 10, 2025",
      Applications: 18,
      Interviews: 3,
      Status: "Active",
    },
  ],
};

const recentHiresTableData: any = {
  headings: [
    "Student Name",
    "Position",
    "Hire Date",
    "Certificate Verification",
  ],
  rows: [
    {
      "Student Name": "Ben Ejembi",
      Position: "UI Designer",
      "Hire Date": "Feb 10, 2025",
      "Certificate Verification": "Blockchain Verified",
    },
    {
      "Student Name": "Flora Osatuyi",
      Position: "UX Researcher",
      "Hire Date": "Feb 05, 2025",
      "Certificate Verification": "Blockchain Verified",
    },
  ],
};

const examData: any = {
  title: "Custom Exams Created",
  headings: [
    "Exam Title",
    "Creation Date",
    "Participants",
    "Avg. Score",
    "Status",
  ],
  rows: [
    {
      "Exam Title": "JavaScript Test",
      "Creation Date": "Feb 18, 2025",
      Participants: 24,
      "Avg. Score": "78%",
      Status: "Active",
    },
    {
      "Exam Title": "Python Analysis",
      "Creation Date": "Feb 22, 2025",
      Participants: 44,
      "Avg. Score": "88%",
      Status: "Active",
    },
  ],
};

export default function Page() {
  const [tab, setTab] = useState<string>("students");

  const statCards: StatCardData[] = [
    {
      icon: "percentage",
      value: "13",
      label: "Total Users",
      iconColor: "bg-blue-200",
    },
    {
      icon: "briefcase",
      value: "150",
      label: "Active Courses",
      iconColor: "bg-purple-200",
    },
    {
      icon: "certificate",
      value: "111",
      label: "Certifications",
      iconColor: "bg-purple-200",
    },
    {
      icon: "message-square",
      value: "17",
      label: "Platform Revenue",
      iconColor: "bg-amber-200",
    },
  ];

  return (
    <div className="flex flex-col h-full font-ubuntu">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
        {statCards.map((card, index) => (
          <StatCard
            key={index}
            icon={card.icon}
            value={card.value}
            label={card.label}
            iconColor={card.iconColor}
          />
        ))}
      </div>

      {/* Quick Actions */}
      <div className="mt-4">
        <h3 className="text-sm font-medium text-black dark:text-gray-300 mb-4">
          User Management
        </h3>
        <div className="flex flex-wrap gap-4">
          <div className=" gap-4 border-b border-[#2C2F35] hidden md:flex">
            <button
              onClick={() => setTab("students")}
              className={
                tab === "students"
                  ? "text-[12px] p-2 min-w-[200px] text-center bg-white text-black  dark:bg-[#2C2F35] dark:text-white rounded-t-lg pointer-cursor"
                  : "text-[12px] p-2 min-w-[200px] text-center  text-white rounded-t-lg pointer-cursor"
              }
            >
              Students ({tableData.rows.length})
            </button>
            <button
              onClick={() => setTab("institutions")}
              className={
                tab === "institutions"
                  ? "text-[12px] p-2 min-w-[200px] text-center bg-white text-black  dark:bg-[#2C2F35] dark:text-white rounded-t-lg pointer-cursor"
                  : "text-[12px] p-2 min-w-[200px] text-center  text-white rounded-t-lg pointer-cursor"
              }
            >
              Institutions (0)
            </button>
            <button
              onClick={() => setTab("banned")}
              className={
                tab === "banned"
                  ? "text-[12px] p-2 min-w-[200px] text-center bg-white text-black  dark:bg-[#2C2F35] dark:text-white rounded-t-lg pointer-cursor"
                  : "text-[12px] p-2 min-w-[200px] text-center  text-white rounded-t-lg pointer-cursor"
              }
            >
              Banned Users (0)
            </button>
          </div>
          <div className="block w-full">
            {tab === "students" && <Table tableData={tableData} />}

            {tab === "institutions" && (
              <div className=" text-center mt-5">No table Data available</div>
            )}

            {tab === "banned" && (
              <div className=" text-center mt-5">No table Data available</div>
            )}
          </div>
        </div>
      </div>

      <div>
        <AccountDashboard />
      </div>
      <div className="mt-12">
        <h3 className="text-sm font-medium text-black dark:text-gray-300 mb-4">
          bg-white text-black dark:bg-[#2C2F35] dark:text-white
        </h3>
        <div className="flex flex-wrap gap-4">
          <Table tableData={activeJobsTableData} />
        </div>
      </div>

      <div className="mt-12">
        <h3 className="text-sm font-medium text-black dark:text-gray-300 mb-4">
          Recent Hires
        </h3>
        <div className="flex flex-wrap gap-4">
          <Table tableData={recentHiresTableData} />
        </div>
      </div>

      <div className="mt-12">
        <h3 className="text-sm font-medium text-black dark:text-gray-300 mb-4">
          Custom Exams Created
        </h3>
        <div className="flex flex-wrap gap-4">
          <Table tableData={examData} />
        </div>
      </div>
    </div>
  );
}
