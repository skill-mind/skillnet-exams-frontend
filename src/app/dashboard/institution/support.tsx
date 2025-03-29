"use client";
import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { supportTopics, actionHistory } from "@/lib/support-page-mock-data";

export default function SupportPage() {
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <div className="p-6 text-[0.9rem] text-[#CCCCCC] min-h-screen">
      <h2 className="text-white font-semibold mb-4">Support</h2>
      <div className="space-y-2">
        {supportTopics.map((topic, index) => (
          <div
            key={index}
            className="p-4 cursor-pointer border-b border-[#2D2E2D]"
          >
            <div className="flex justify-between items-center">
              <span>
                {topic.title} ({topic.description})
              </span>
              <Button
                variant="outline"
                size="sm"
                className="text-[0.75rem] text-[#FFFFFF] rounded-full border-[#2D2E2D]"
                onClick={() => setExpanded(expanded === index ? null : index)}
              >
                {expanded === index ? "Collapse" : "Expand"}
              </Button>
            </div>
            {expanded === index && (
              <p className="mt-2 text-gray-300">
                More details about {topic.title}...
              </p>
            )}
          </div>
        ))}
      </div>

      <h3 className="text-[#FCFCFC] font-semibold mt-6">
        Action History Table
      </h3>
      <div className="text-[0.75rem] text-[#FFFFFF] overflow-x-auto mt-2">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-400/10">
              <th className="p-2">SN</th>
              <th className="p-2">Date & Time</th>
              <th className="p-2">Ticket ID</th>
              <th className="p-2">Issue Category</th>
              <th className="p-2">Status</th>
              <th className="p-2">Last Update</th>
            </tr>
          </thead>
          <tbody>
            {actionHistory.map((item) => (
              <tr key={item.id} className="border-b border-[#2D2E2D]">
                <td className="p-2 text-center">{item.id}</td>
                <td className="p-2 text-center">{item.date}</td>
                <td className="p-2 text-center">{item.ticketId}</td>
                <td className="p-2 text-center">{item.category}</td>
                <td className="p-2 text-center text-[#4B4B4B]">
                  {item.status}
                </td>
                <td className="p-2 text-center">{item.lastUpdate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
