import type React from "react";

// Define TypeScript interface for student data
interface Student {
  id: number;
  name: string;
  walletAddress: string;
  registrationDate: string;
  coursesTaken: number;
  jobsApplied: number;
  status: "Active" | "Pending" | "Inactive";
}

interface TableData {
  headings: string[];
  students: Student[];
}
const StudentsTable: React.FC = () => {
  // Sample data for students with proper typing

  const tableData: TableData = {
    headings: [
      "Name",
      "Wallet Address",
      "Registration Date",
      "Courses Taken",
      "Jobs Applied",
      "Status",
      "Actions",
    ],
    students: [
      {
        id: 1,
        name: "John Doe",
        walletAddress: "0x1a2b3c4d5e6f...",
        registrationDate: "2023-05-15",
        coursesTaken: 3,
        jobsApplied: 7,
        status: "Active",
      },
      {
        id: 2,
        name: "Jane Smith",
        walletAddress: "0x7e8d9c0b1a2b...",
        registrationDate: "2023-06-22",
        coursesTaken: 5,
        jobsApplied: 4,
        status: "Pending",
      },
      {
        id: 3,
        name: "Alex Johnson",
        walletAddress: "0xf1e2d3c4b5a6...",
        registrationDate: "2023-04-10",
        coursesTaken: 2,
        jobsApplied: 12,
        status: "Active",
      },
      {
        id: 4,
        name: "Sarah Williams",
        walletAddress: "0x9a8b7c6d5e4f...",
        registrationDate: "2023-07-05",
        coursesTaken: 1,
        jobsApplied: 2,
        status: "Inactive",
      },
    ],
  }; 
  // Function to get status badge color based on status
  const getStatusColor = (status: Student["status"]): string => {
    switch (status) {
      case "Active":
        return "bg-green-100 text-green-800";
      case "Pending":
        return "bg-yellow-100 text-yellow-800";
      case "Inactive":
        return "bg-gray-100 text-gray-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="w-full">
      {/* Table Container */}
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          {/* Table Header */}
          <thead className="bg-[#111827]">
            <tr>
              {tableData.headings.map((header) => (
                <th key={header} className="py-4 px-4 text-left text-white">
                  {header}
                </th>
              ))}
            </tr>
          </thead>

          {/* Table Body */}
          <tbody className=" divide-y divide-gray-200">
            {tableData.students.map((student: Student) => (
              <tr key={student.id}>
                <td className="py-4 px-4 whitespace-nowrap">{student.name}</td>
                <td className="py-4 px-4 whitespace-nowrap">
                  {student.walletAddress}
                </td>
                <td className="py-4 px-4 whitespace-nowrap">
                  {new Date(student.registrationDate).toLocaleDateString()}
                </td>
                <td className="py-4 px-4 whitespace-nowrap">
                  {student.coursesTaken}
                </td>
                <td className="py-4 px-4 whitespace-nowrap">
                  {student.jobsApplied}
                </td>
                <td className="py-4 px-4 whitespace-nowrap">
                  <span
                    className={`px-2 py-1 rounded-full text-xs ${getStatusColor(
                      student.status
                    )}`}
                  >
                    {student.status}
                  </span>
                </td>
                <td className="py-4 px-4 whitespace-nowrap flex gap-2">
                  <button className="border rounded-full px-4 py-1 hover:bg-gray-100">
                    View
                  </button>
                  <button className="border rounded-full px-4 py-1 hover:bg-gray-100">
                    Edit
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StudentsTable;
