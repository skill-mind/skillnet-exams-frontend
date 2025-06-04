"use client";

import { motion } from "framer-motion";

interface RecentExam {
  id: number;
  name: string;
  institution: string;
  status: "ongoing" | "completed";
  avatar: string;
}

interface RecentExamsCardProps {
  exams: RecentExam[];
}

export function RecentExamsCard({ exams }: RecentExamsCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="bg-[#0B1739] rounded-xl border border-[#343B4F] p-6 no-scrollbar"
    >
      <div className="mb-6">
        <h3 className="text-xl font-semibold text-white mb-3">Recent Exams</h3>
        <p className="text-[#AEB9E1] text-sm">
          Recently Created And Completed Exams
        </p>
      </div>

      <div className="space-y-4">
        {exams.map((exam, index) => (
          <motion.div
            key={exam.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
            whileHover={{ x: 5, transition: { duration: 0.2 } }}
            className="flex items-center justify-between p-4  rounded-lg"
          >
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-[#D9D9D9] rounded-full flex items-center justify-center">
                <span className="text-white text-sm font-medium">
                  {exam.name.charAt(0)}
                </span>
              </div>
              <div>
                <h4 className="text-white font-medium">{exam.name}</h4>
                <p className="text-gray-400 text-sm">{exam.institution}</p>
              </div>
            </div>
            <motion.span
              whileHover={{ scale: 1.05 }}
              className={`px-2 py-1 rounded-full text-xs font-medium ${
                exam.status === "ongoing"
                  ? " border-[#1FACAA] text-white border "
                  : "bg-[#1FACAA] text-white"
              }`}
            >
              {exam.status === "ongoing" ? "Ongoing" : "Completed"}
            </motion.span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
