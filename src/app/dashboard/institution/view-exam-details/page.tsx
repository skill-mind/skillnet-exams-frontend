"use client"

import { Suspense } from "react"
import InstitutionLayout from "@/components/dashboard/institution/institution-dashboard-layout"

export default function InstitutionDashboardPage() {
  return (
    <InstitutionLayout title="Institution Dashboard" activePage="View-Exam-Details">
      <Suspense fallback={<div>Loading...</div>}>
        <div className="p-6">
          <h2 className="text-2xl font-bold text-white mb-4">Welcome to Institution Dashboard view exams</h2>
          <p className="text-gray-400">This section is under development.</p>
        </div>
      </Suspense>
    </InstitutionLayout>
  )
}
