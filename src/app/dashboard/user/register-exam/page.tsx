"use client";

import DashboardLayout from '@/components/dashboard/exam/components/new-dashboard-layout';
import ExamsPageHeaderAndContent from '@/components/dashboard/exam/components/ui/exams-page-content-header';

export interface examInfoProps {
    title: string;
    icon: string;
    isCompleted: boolean;
    description: string;
    category: string;
    date: string;
    price: string;
    institution: string;
    aboutExam: string;
    coveredSkills: Array<{ title: string; id: number }>;
};


export default function RegisterPage() {

    return (
        <DashboardLayout title="Register For Exams" activePage="my-exams">
            <ExamsPageHeaderAndContent />
        </DashboardLayout>
    );
}
