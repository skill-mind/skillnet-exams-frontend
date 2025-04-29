"use client"

import { Suspense } from "react"
import InstitutionLayout from "@/components/dashboard/institution/institution-dashboard-layout"
import ExamCreator from "@/components/dashboard/institution/components/exam-creator"

export default function InstitutionDashboardPage() {
  return (
    <InstitutionLayout title="Institution Dashboard" activePage="Create-Exam">
      <Suspense fallback={<div>Loading...</div>}>
     <ExamCreator />
      </Suspense>
    </InstitutionLayout>
  )
}