import Link from "next/link";
import StatCard from "@/components/maintainer-dashboard/stat-card";
import Table from "@/components/maintainer-dashboard/table.";

// Define types for better type safety and maintainability
interface QuickAction {
  href: string;
  label: string;
}

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
    " Student Name",
    "Position",
    "Hire Date",
    "Certificate Verification",
  ],
  rows: [
    {
      "Employee Name": "Ben Ejembi",
      Position: "UI Designer",
      "Hire Date": "Feb 10, 2025",
      "Certificate Verification": "Blockchain Verified",
    },
    {
      "Employee Name": "Flora Osatuyi",
      Position: "UX Researcher",
      "Hire Date": "Feb 05, 2025",
      "Certificate Verification": "Blockchain Verified",
    },
  ],
};

const examData: any = {
    title: "Custom Exams Created",
    headings: ["Exam Title", "Creation Date", "Participants", "Avg. Score", "Status"],
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
        <h3 className="text-sm font-medium text-gray-300 mb-4">
          User Management
        </h3>
        <div className="flex flex-wrap gap-4">
          <Table tableData={tableData} />
        </div>
      </div>

      <div className="mt-12">
        <h3 className="text-sm font-medium text-gray-300 mb-4">
          Active Job Listings
        </h3>
        <div className="flex flex-wrap gap-4">
          <Table tableData={activeJobsTableData} />
        </div>
      </div>

      
      <div className="mt-12">
        <h3 className="text-sm font-medium text-gray-300 mb-4">
          Recent Hires
        </h3>
        <div className="flex flex-wrap gap-4">
          <Table tableData={recentHiresTableData} />
        </div>
      </div>

      <div className="mt-12">
        <h3 className="text-sm font-medium text-gray-300 mb-4">
          Custom Exams Created
        </h3>
        <div className="flex flex-wrap gap-4">
          <Table tableData={examData} />
        </div>
      </div>

    </div>
  );
}
