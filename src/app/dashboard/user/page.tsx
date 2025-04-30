"use client";

import DashboardLayout from "@/components/dashboard/exam/components/new-dashboard-layout";
import ExamsPageHeaderAndContent from "@/components/dashboard/exam/components/ui/exams-page-content-header";
import { Providers } from "@/components/Providers";
import { WalletProvider } from "@/components/WalletProvider";

export default function Dashboard() {
  return (
    //providers for connect wallet feature
    <Providers>
      <WalletProvider>
        
        <DashboardLayout title="Dashboard" activePage="dashboard">
          <ExamsPageHeaderAndContent />
        </DashboardLayout>

      </WalletProvider>
    </Providers>
  );
}
