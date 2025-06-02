// "use client";
"use client";

import { useState } from "react";
import AdminDashboardLayout from "@/components/dashboard/admin/layout/admin-dashboard-layout";

import InstitutionTable from "./components/InstitutionTable";
import InstitutionModal from "./components/InstitutionModal";

export default function InstitutionsPage() {
  const [selectedInstitution, setSelectedInstitution] = useState<any | null>(
    null
  );

  const handleRowClick = (institution: any) => {
    setSelectedInstitution(institution);
  };

  const handleClose = () => {
    setSelectedInstitution(null);
  };

  return (
    <>
    <div className="relative">
         <AdminDashboardLayout title="Institutions" activePage="Institutions">
      <p className="text-[#AEB9E1] -mt-6 mb-12 pl-1">
        View all students registered for upcoming exams.
      </p>
      <InstitutionTable onRowClick={handleRowClick} />
      {selectedInstitution && (
        <InstitutionModal
          institution={selectedInstitution}
          onClose={handleClose}
        />
      )}
    </AdminDashboardLayout>
    </div>

    </>
  );
}
