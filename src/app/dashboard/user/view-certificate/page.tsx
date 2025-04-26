"use client";

import DashboardLayout from '@/components/dashboard/exam/components/new-dashboard-layout';
import { StatCard } from '@/components/dashboard/exam/components/ui/exams-page-content-header';
import CertificateIcon from "../../../../../public/certificate.svg";
import RegisterIcon from "../../../../../public/pencil-edit.svg";


export default function ViewCertificate() {


    return (
        <DashboardLayout title="Cerfificates" activePage="certificates">
            {/* Exam Stats */}
            <div className="flex flex-wrap gap-4 mb-8">
                <StatCard icon={RegisterIcon} count={1} label="Registered Exams" />
                <StatCard icon={CertificateIcon} count={2} label="Exams Taken" />
            </div>
        </DashboardLayout >
    );
}