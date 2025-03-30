"use client"

import { useState } from "react"
import Table from "@/components/maintainer-dashboard/table"
import InstitutionModal from "@/components/maintainer-dashboard/modals/institution-modal"

// Define institution data
const institutionData = {
  headings: ["Institution Name", "Location", "Exams Created", "Status"],
  rows: [
    {
      "Institution Name": "SkillNet",
      Location: "Kaduna, Nigeria",
      "Exams Created": 14,
      Status: "Active",
    },
    {
      "Institution Name": "Buidl",
      Location: "Kaduna, Nigeria",
      "Exams Created": 18,
      Status: "Active",
    },
  ],
}

export default function InstitutionsPage() {
  const [selectedInstitution, setSelectedInstitution] = useState<any>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleViewClick = (institution: any) => {
    console.log("View clicked for institution:", institution)
    // Create a more detailed institution object for the modal
    const detailedInstitution = {
      name: institution["Institution Name"],
      walletAddress: "0x71C...F3E2",
      location: institution.Location,
      examsCreated: 5,
      exams: [
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
      status: institution.Status,
    }

    setSelectedInstitution(detailedInstitution)
    setIsModalOpen(true)
  }

  return (
    <div className="flex flex-col h-full font-ubuntu">
      <h2 className="text-xl font-semibold mb-6">Institutions List</h2>

      <Table tableData={institutionData} onViewClick={handleViewClick} />

      <div className="flex justify-end mt-6">
        <button className="text-white text-sm border border-white/20 rounded-full px-4 py-1">View All</button>
      </div>

      {selectedInstitution && isModalOpen && (
        <InstitutionModal
          institution={selectedInstitution}
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </div>
  )
}

