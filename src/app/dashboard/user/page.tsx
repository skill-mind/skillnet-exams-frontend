"use client";

import DashboardLayout from "@/components/dashboard/exam/components/new-dashboard-layout";
import ExamsPageHeaderAndContent from "@/components/dashboard/exam/components/ui/exams-page-content-header";
import StarknetProvider from "@/components/StarknetProvider";
import { WalletProvider } from "@/components/WalletProvider";

export default function Dashboard() {
  return (
    //providers for connect wallet feature
    <StarknetProvider>
      <WalletProvider>
        
        <DashboardLayout title="Dashboard" activePage="dashboard">
          <ExamsPageHeaderAndContent />
        </DashboardLayout>

      </WalletProvider>
    </StarknetProvider>
  );
}
