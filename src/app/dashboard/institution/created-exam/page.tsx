"use client"

import { Suspense } from "react"
import InstitutionLayout from "@/components/dashboard/institution/institution-dashboard-layout"
import CreatedExam from "@/components/dashboard/institution/pages/created-exam"

export default function InstitutionDashboardPage() {
  return (
    <InstitutionLayout title="Institution Dashboard" activePage="Created-Exam">
      <Suspense fallback={<div>Loading...</div>}>
        <CreatedExam />
      </Suspense>
    </InstitutionLayout>
  )
}
