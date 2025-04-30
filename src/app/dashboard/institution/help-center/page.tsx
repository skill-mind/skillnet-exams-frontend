"use client"

import { Suspense } from "react"
import InstitutionLayout from "@/components/dashboard/institution/institution-dashboard-layout"
import HelpCenter from "@/components/dashboard/institution/pages/help-center"

export default function InstitutionDashboardPage() {
  return (
    <InstitutionLayout title="Institution Dashboard" activePage="Help-Center">
      <Suspense fallback={<div>Loading...</div>}>
       <HelpCenter />
      </Suspense>
    </InstitutionLayout>
  )
}
