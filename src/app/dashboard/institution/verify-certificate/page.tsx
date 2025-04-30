"use client"

import { Suspense } from "react"
import InstitutionLayout from "@/components/dashboard/institution/institution-dashboard-layout"
import CerificateVerification from "@/components/dashboard/institution/pages/certificate-verification"

export default function InstitutionDashboardPage() {
  return (
    <InstitutionLayout title="Institution Dashboard" activePage="Verify-Certificate">
      <Suspense fallback={<div>Loading...</div>}>
        <CerificateVerification />
      </Suspense>
    </InstitutionLayout>
  )
}
