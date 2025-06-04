"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import DashboardLayout from "@/components/dashboard/exam/components/new-dashboard-layout";
import CertificateView from "@/components/dashboard/user/certificate-view";

export default function ViewCertificate() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Set isLoaded to true after component mounts
    setIsLoaded(true);
  }, []);

  // Animation variants for the container
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <DashboardLayout title="Certificates" activePage="certificates">
      {/* Animated Container */}
      <motion.div
        initial="hidden"
        animate={isLoaded ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <div className="container mx-auto font-ubuntu py-6 no-scrollbar">
          <CertificateView />
        </div>
      </motion.div>
    </DashboardLayout>
  );
}
