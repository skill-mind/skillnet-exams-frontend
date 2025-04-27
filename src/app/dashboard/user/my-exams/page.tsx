"use client";
import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import DashboardLayout from '@/components/dashboard/exam/components/new-dashboard-layout';
import { StatCard } from '@/components/dashboard/exam/components/ui/exams-page-content-header';
import MyExamCard from '@/components/dashboard/exam/components/ui/my-exam-card';
import ExamIcon from "../../../../../public/license.svg";
import RegisterIcon from "../../../../../public/pencil-edit.svg";
import { examData } from '@/components/dashboard/exam/examdata';
import CertificationModal from '@/components/dashboard/exam/components/modals/course-detail-modal';
import TakeExamFlow from '@/components/dashboard/exam/components/modals/take-exams-flow-modal';
import { examInfoProps } from '../register-exam/page';

export default function MyExams() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isExamModalOpen, setIsExamModalOpen] = useState(false);
  const [selectedExam, setSelectedExam] = useState<examInfoProps | null>(null);
  const [step, setStep] = useState<"verify" | "success" | "instructions" | null>(null);
  const [shouldAnimate, setShouldAnimate] = useState(true);
  
  // Use a ref to track if this is the first mount
  const isFirstMount = useRef(true);

  useEffect(() => {
    // Only animate on first mount, not on subsequent renders
    if (!isFirstMount.current) {
      setShouldAnimate(false);
    } else {
      isFirstMount.current = false;
      setShouldAnimate(true);
    }
    
    // This will ensure we don't re-trigger animations on URL changes
    return () => {
      // Don't reset isFirstMount when the component unmounts temporarily
      // during route transitions
    };
  }, []);

  const openVerifyModal = () => {
    setStep("verify");
    setIsExamModalOpen(true);
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1
      }
    }
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1
      }
    }
  };

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

  const headerVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  // Don't animate if not the first mount
  const initialAnimationState = shouldAnimate ? "hidden" : "visible";

  // Filter data
  const registeredExams = examData.filter((item) => !item.isCompleted);
  const takenExams = examData.filter((item) => item.isCompleted);

  return (
    <DashboardLayout title="Exams" activePage="my-exams">
      <motion.div
        initial={initialAnimationState}
        animate="visible"
        variants={containerVariants}
      >
        {/* Exam Stats */}
        <motion.div 
          className="flex flex-wrap gap-4 mb-8"
          variants={sectionVariants}
        >
          <motion.div variants={itemVariants}>
            <motion.div
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
            >
              <StatCard icon={RegisterIcon} count={1} label="Registered Exams" />
            </motion.div>
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <motion.div
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
            >
              <StatCard icon={ExamIcon} count={3} label="Exams Taken" />
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Registered Exams Section */}
        <motion.div 
          className="mb-8"
          variants={sectionVariants}
        >
          <motion.h2 
            className="text-white text-lg font-medium mb-4"
            variants={headerVariants}
          >
            Registered Exams
          </motion.h2>
          
          <motion.div 
            className="flex flex-wrap gap-10"
            variants={sectionVariants}
          >
            <AnimatePresence>
              {registeredExams.length > 0 ? (
                registeredExams.map((exam, index) => (
                  <motion.div 
                    key={exam.title}
                    variants={itemVariants}
                    layout
                  >
                    <motion.div
                      whileHover={{ 
                        scale: 1.05,
                        boxShadow: "0 4px 20px rgba(0, 0, 0, 0.3)"
                      }}
                      whileTap={{ scale: 0.98 }}
                      transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    >
                      <MyExamCard
                        title={exam.title}
                        icon={exam.icon}
                        description={exam.description}
                        isCompleted={exam.isCompleted}
                        handleCLick={() => {
                          setSelectedExam(exam);
                          openVerifyModal();
                        }}
                      />
                    </motion.div>
                  </motion.div>
                ))
              ) : (
                <motion.div
                  className="w-full text-center py-8 text-gray-400"
                  variants={itemVariants}
                >
                  No registered exams found
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </motion.div>

        {/* Exams Taken Section */}
        <motion.div 
          className="mb-8"
          variants={sectionVariants}
        >
          <motion.h2 
            className="text-white text-lg font-medium mb-4"
            variants={headerVariants}
          >
            Exams Taken
          </motion.h2>
          
          <motion.div 
            className="flex flex-wrap gap-10"
            variants={sectionVariants}
          >
            <AnimatePresence>
              {takenExams.length > 0 ? (
                takenExams.map((exam, index) => (
                  <motion.div 
                    key={exam.title}
                    variants={itemVariants}
                    layout
                  >
                    <motion.div
                      whileHover={{ 
                        scale: 1.05,
                        boxShadow: "0 4px 20px rgba(0, 0, 0, 0.3)"
                      }}
                      whileTap={{ scale: 0.98 }}
                      transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    >
                      <MyExamCard
                        title={exam.title}
                        icon={exam.icon}
                        description={exam.description}
                        isCompleted={exam.isCompleted}
                        handleCLick={() => {
                          setSelectedExam(exam);
                          setIsModalOpen(true);
                        }}
                      />
                    </motion.div>
                  </motion.div>
                ))
              ) : (
                <motion.div
                  className="w-full text-center py-8 text-gray-400"
                  variants={itemVariants}
                >
                  No completed exams found
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Modals */}
      <CertificationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        examInfo={selectedExam}
      />
      <TakeExamFlow 
        step={step} 
        setStep={setStep} 
        showTakeExamsModal={isExamModalOpen} 
        setShowTakeExamsModal={setIsExamModalOpen} 
      />
    </DashboardLayout>
  );
}