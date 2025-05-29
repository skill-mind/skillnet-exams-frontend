"use client";

import { useState, useEffect } from "react";
import AdminDashboardLayout from "@/components/dashboard/admin/layout/admin-dashboard-layout";
import { DataTable } from "@/components/dashboard/admin/components/data-table";
import { examHistory } from "@/data/admin-mock-data";


function ExamsTaken() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="min-h-screen bg-[#081028]" />;
  }

  return (
    <AdminDashboardLayout
      title="Exams Taken"
      activePage="Exams-Taken"
      subtitle="Have A Detailed Information About Past Examinations"
    >
      <div className="space-y-3">
        {/* Exam History Table */}
        <DataTable
          columns={[
            { key: "institution", label: "Institution" },
            { key: "title", label: "Title" },
            { key: "candidates", label: "Candidates" },
            { key: "date", label: "Date" },
            { key: "score", label: "Score" },
            { key: "status", label: "Status" },
            { key: "options", label: "" },
          ]}
          data={examHistory}
        />
      </div>
    </AdminDashboardLayout>
  );
}

export default ExamsTaken;
