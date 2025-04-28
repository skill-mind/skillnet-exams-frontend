"use client"

import { Suspense } from "react"
import InstitutionLayout from "@/components/dashboard/institution/components/institution-dashboard-layout"

export default function InstitutionDashboardPage() {
  return (
    <InstitutionLayout title="Institution Dashboard" activePage="Created-Exam">
      <Suspense fallback={<div>Loading...</div>}>
        <div className="p-6">
          <h2 className="text-2xl font-bold text-white mb-4">Welcome to Institution Dashboard Created exam</h2>
          <p className="text-gray-400">This section is under development.</p>
        </div>
      </Suspense>
    </InstitutionLayout>
  )
}
