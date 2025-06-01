'use client'


import { StatCard2 } from "../../exam/components/ui/exams-page-content-header";
import { AnimatePresence, motion } from "framer-motion";
import { useState, useRef , useEffect} from "react";
import type { examInfoProps } from "@/app/dashboard/user/register-exam/page";
import { examData } from "../../exam/examdata";
import Image from "next/image";
// CreatedExam.tsx

export default function CreatedExam() {
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
    <div className="w-full min-h-screen rounded-[12px] p-[20px] flex flex-col gap-[60px] bg-[#081028]">
      <div className="flex flex-col gap-[17px]">
        <div className="flex  gap-[16px]">
          <StatCard2 icon="/exam.svg" label="Created Exam" count={2} />
          <StatCard2 icon="/exam.svg" label="Candidate" count={22} />
        </div>
      </div>
      <div className="flex flex-col gap-[12px]">
       
       <motion.div 
                 className="mb-8"
                 variants={sectionVariants}
               >
                 <motion.h2 
                   className="text-[#8A8A8A] text-lg font-medium mb-4"
                   variants={headerVariants}
                 >
                   Created Exams
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
                               <div className="bg-[#0B1739] max-w-[221px] p-6 rounded-2xl justify-center border border-[#343B4F]">
                                     <div className="flex self-center justify-center mb-3">
                                         <Image src={exam.icon} alt={exam.title} width={48} height={48} />
                                     </div>
                                     <h3 className="text-white text-lg text-center font-medium mb-2">{exam.title}</h3>
                                     <p className="text-gray-400 text-sm text-center mb-4">{exam.description}</p>
                             
                                     <button type="button"  className="text-white border border-[#1FACAA] rounded-full py-2 px-4 w-full hover:bg-gray-700 transition-colors">
                                        View Details
                                     </button>
                             
                                 </div>
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
      </div>
    </div>
  );
}
