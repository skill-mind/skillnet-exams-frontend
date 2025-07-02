"use client";

import { useState, useEffect, Suspense } from "react";
import { motion } from "framer-motion";
import AdminDashboardLayout from "@/components/dashboard/admin/layout/admin-dashboard-layout";
import { StatCard } from "@/components/dashboard/admin/components/stat-card";
import { RecentExamsCard } from "@/components/dashboard/admin/components/recent-exams-card";
import { useWalletContext } from "@/components/WalletProvider";


// Dashboard stats with proper LucideIcon types
const dashboardStats = [
  {
    title: "Total Exams",
    value: "2",
    imgSrc: "/license.svg",
    color: "bg-[#1E3A8A]",
  },
  {
    title: "Active Exams",
    value: "23",
    imgSrc: "/license.svg",
    color: "bg-[#059669]",
  },
  {
    title: "Total Users",
    value: "12",
    imgSrc: "/certificate.svg",
    color: "bg-[#7C3AED]",
  },
  {
    title: "Certificates Issued",
    value: "12",
    imgSrc: "/certificate.svg",
    color: "bg-[#DC2626]",
  },
  {
    title: "Total Revenue",
    value: "12",
    imgSrc: "/certificate.svg",
    color: "bg-[#DC2626]",
  },
];

const recentExams = [
  {
    id: 1,
    name: "Exam Name 1",
    institution: "Skillnet",
    status: "ongoing" as const,
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 2,
    name: "Exam Name 1",
    institution: "Skillnet",
    status: "completed" as const,
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 3,
    name: "Exam Name 1",
    institution: "Skillnet",
    status: "ongoing" as const,
    avatar: "/placeholder.svg?height=40&width=40",
  },
];

function AdminDashboard() {
  const [mounted, setMounted] = useState(false);
  const { account } = useWalletContext();
  const [profileData, setProfileData] = useState({
    name: "Admin",
    email: "admin@skillnet.com",
  });

  // Load profile data from localStorage when component mounts or account changes
  useEffect(() => {
    setMounted(true);

    if (account) {
      const savedProfile = localStorage.getItem(`profile-${account}`);
      if (savedProfile) {
        try {
          const parsedProfile = JSON.parse(savedProfile);
          setProfileData({
            name: parsedProfile.name || "Admin",
            email: parsedProfile.email || "admin@skillnet.com",
          });
        } catch (error) {
          console.error("Failed to parse profile data:", error);
        }
      }
    }
  }, [account]);

  // Listen for profile update events from the layout
  useEffect(() => {
    const handleProfileUpdate = (event: CustomEvent) => {
      if (event.detail && event.detail.profileData) {
        setProfileData({
          name: event.detail.profileData.name,
          email: event.detail.profileData.email,
        });
      }
    };

    window.addEventListener("profile-updated" as any, handleProfileUpdate);

    return () => {
      window.removeEventListener("profile-updated" as any, handleProfileUpdate);
    };
  }, []);

  if (!mounted) {
    return <div className="min-h-screen bg-[#081028]" />;
  }

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <AdminDashboardLayout title="Dashboard" activePage="Dashboard">
        <div className="space-y-6 no-scrollbar">
          {/* Welcome Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <h2 className="text-2xl font-semibold text-white mb-2">
              For, <span className="text-white">{profileData.name}</span>
            </h2>
          </motion.div>

          {/* Stats Cards */}
          <div className="grid grid-cols-2 md:flex  gap-6 mb-8 w-fit ">
            {dashboardStats.map((stat, index) => (
              <StatCard key={stat.title} data={stat} index={index} />
            ))}
          </div>

          {/* Recent Exams Section */}
          <RecentExamsCard exams={recentExams} />
        </div>
      </AdminDashboardLayout>
    </Suspense>
  );
}

export default AdminDashboard;
