"use client"

import { useState } from "react"
import Table from "@/components/maintainer-dashboard/table"
import StudentModal from "@/components/maintainer-dashboard/modals/student-modal"

// Define student data
const studentData = {
  headings: ["Name", "Email", "Registered", "Status"],
  rows: [
    {
      Name: "Flora Osatuyi",
      Email: "Flora@gmail.com",
      Registered: "Feb 12, 2025",
      Status: "Active",
    },
    {
      Name: "Ben Ejembi",
      Email: "Ben@gmail.com",
      Registered: "Feb 15, 2025",
      Status: "Pending",
    },
  ],
}

export default function StudentsPage() {
  const [selectedStudent, setSelectedStudent] = useState<any>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleViewClick = (student: any) => {
    console.log("View clicked for student:", student)
    // Create a more detailed student object for the modal
    const detailedStudent = {
      name: student.Name,
      email: student.Email,
      walletAddress: "0x71C...F3E2",
      joinDate: student.Registered,
      coursesTaken: 5,
      courses: [
        {
          name: "Blockchain Development Bootcamp: Zero to Hero",
          status: "In progress",
        },
        {
          name: "Solidity Basic Course",
          status: "In progress",
        },
        {
          name: "Technical Writing: The Ultimate Approach",
          status: "Completed",
        },
        {
          name: "Data Science Guru",
          status: "Completed",
        },
        {
          name: "Design Basics",
          status: "Completed",
        },
      ],
      jobsApplied: 12,
      status: student.Status,
    }

    setSelectedStudent(detailedStudent)
    setIsModalOpen(true)
  }

  return (
    <div className="flex flex-col h-full font-ubuntu">
      <h2 className="text-xl font-semibold mb-6">Student List</h2>

      <Table tableData={studentData} onViewClick={handleViewClick} />

      <div className="flex justify-end mt-6">
        <button className="text-white text-sm border border-white/20 rounded-full px-4 py-1">View All</button>
      </div>

      {selectedStudent && isModalOpen && (
        <StudentModal student={selectedStudent} isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      )}
    </div>
  )
}

