import Link from "next/link";
import DashboardLayout from "@/components/dashboard/dashboard-layout";
import StatCard from "@/components/dashboard/stat-card";

export default function InstitutionDashboard() {
  return (
    <DashboardLayout>
      <div className="flex flex-col h-full font-ubuntu">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          <StatCard
            icon="percentage"
            value="13"
            label="Total Exams Hosted"
            iconColor="bg-blue-200"
          />
          <StatCard
            icon="briefcase"
            value="150"
            label="Total Candidates"
            iconColor="bg-purple-200"
          />
          <StatCard
            icon="certificate"
            value="111"
            label="Certificates Issued"
            iconColor="bg-purple-200"
          />
          <StatCard
            icon="message-square"
            value="17"
            label="Verification Requests"
            iconColor="bg-amber-200"
          />
        </div>
        <div className="mt-4">
          <h3 className="text-sm font-medium text-gray-300 mb-4">
            Quick Actions
          </h3>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/dashboard/institution/exams/create"
              className="px-6 py-3 border border-gray-700 rounded-md text-white hover:bg-gray-800 transition-colors"
            >
              Create Exams
            </Link>
            <Link
              href="/dashboard/institution/candidates"
              className="px-6 py-3 border border-gray-700 rounded-md text-white hover:bg-gray-800 transition-colors"
            >
              View Candidates
            </Link>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
