"use client";

import AdminDashboardLayout from "@/components/dashboard/admin/layout/admin-dashboard-layout";

function Institutions() {
  return (
    <AdminDashboardLayout title="Institutions" activePage="Institutions">
      <div className="space-y-6">
        <div className="flex items-center justify-center h-full">
          <div className="text-center">
            <h2 className="text-2xl font-semibold text-white mb-4">
              Institutions Page
            </h2>
            <p className="text-[#AEB9E1]">This page is under construction.</p>
          </div>
        </div>
      </div>
    </AdminDashboardLayout>
  );
}

export default Institutions;
