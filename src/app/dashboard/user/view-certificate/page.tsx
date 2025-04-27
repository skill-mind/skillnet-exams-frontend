"use client";
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import DashboardLayout from '@/components/dashboard/exam/components/new-dashboard-layout';
import { StatCard } from '@/components/dashboard/exam/components/ui/exams-page-content-header';
import CertificateIcon from "../../../../../public/certificate.svg";
import RegisterIcon from "../../../../../public/pencil-edit.svg";

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
        staggerChildren: 0.2
      }
    }
  };

  // Animation variants for individual children
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  return (
    <DashboardLayout title="Certificates" activePage="certificates">
      {/* Animated Container */}
      <motion.div
        initial="hidden"
        animate={isLoaded ? "visible" : "hidden"}
        variants={containerVariants}
      >
        {/* Exam Stats */}
        <motion.div 
          className="flex flex-wrap gap-4 mb-8"
          variants={itemVariants}
        >
          <motion.div 
            variants={itemVariants}
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
          >
            <StatCard icon={RegisterIcon} count={1} label="Registered Exams" />
          </motion.div>
          
          <motion.div 
            variants={itemVariants}
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
          >
            <StatCard icon={CertificateIcon} count={2} label="Exams Taken" />
          </motion.div>
        </motion.div>
        
        {/* Empty state or placeholder for certificates */}
        <motion.div
          variants={itemVariants}
          className="bg-[#0B1739] p-8 rounded-lg text-center"
        >
          <motion.h2 
            className="text-xl font-semibold mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Your Certificates
          </motion.h2>
          <motion.p
            className="text-gray-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            Your earned certificates will appear here
          </motion.p>
        </motion.div>
      </motion.div>
    </DashboardLayout>
  );
}