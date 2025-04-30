"use client";

import DashboardLayout from "@/components/dashboard/exam/components/new-dashboard-layout";
import HelpCenter from "@/components/dashboard/user/help-center";

export default function HelpPage() {
  return (
    <DashboardLayout title="Help" activePage="help">
      <div className="flex flex-wrap gap-4 mb-8 font-ubuntu p-5 container mx-auto px-4 py-12 rounded-md bg-[#0B1739]">
        <HelpCenter />
      </div>
    </DashboardLayout>
  );
}
