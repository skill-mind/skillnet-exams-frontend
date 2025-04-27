"use client";

import DashboardLayout from '@/components/dashboard/exam/components/new-dashboard-layout';
import ExamsPageHeaderAndContent from '@/components/dashboard/exam/components/ui/exams-page-content-header';

export default function Dashboard() {

    return (
        <DashboardLayout title="Dashboard" activePage="dashboard">
            <ExamsPageHeaderAndContent />
        </DashboardLayout>
    );
}