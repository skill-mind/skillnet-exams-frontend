"use client"

import { Button } from "@/components/ui/Button"

interface ExamRecord {
  id: number
  title: string
  candidates: number
  date: string
  status: "Finished" | "Running"
}

export default function ExamHistoryTable() {
  const examRecords: ExamRecord[] = [
    {
      id: 1,
      title: "Examination Name",
      candidates: 23,
      date: "12th Dec, 2025",
      status: "Finished",
    },
    {
      id: 2,
      title: "Examination Name",
      candidates: 12,
      date: "12th Dec, 2025",
      status: "Running",
    },
  ]

  return (
    <div className="bg-[#0f1c3f] rounded-lg overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-700">
              <th className="text-left p-4 font-medium">Title</th>
              <th className="text-left p-4 font-medium">Candidates</th>
              <th className="text-left p-4 font-medium">Date</th>
              <th className="text-left p-4 font-medium">Certification</th>
              <th className="text-left p-4 font-medium">Status</th>
            </tr>
          </thead>
          <tbody>
            {examRecords.map((record) => (
              <tr key={record.id} className="border-b border-gray-700">
                <td className="p-4">{record.title}</td>
                <td className="p-4">{record.candidates}</td>
                <td className="p-4">{record.date}</td>
                <td className="p-4">
                  <Button
                    variant="outline"
                    size="sm"
                    className="bg-transparent text-white border-gray-600 hover:bg-gray-700 hover:text-white"
                  >
                    View
                  </Button>
                </td>
                <td className="p-4">
                  <span className={`text-sm ${record.status === "Finished" ? "text-gray-400" : "text-yellow-500"}`}>
                    {record.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
