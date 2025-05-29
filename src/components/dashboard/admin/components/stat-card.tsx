"use client";

import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";

interface StatCardProps {
  data: {
    title: string;
    value: string;
    icon: LucideIcon;
    color: string;
  };
  index: number;
}

export function StatCard({ data, index }: StatCardProps) {
  const IconComponent = data.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
      whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
      className="bg-[#0B1739] rounded-e-xl p-3 border-l-[2px] border-[#1FACAA]"
    >
      <div className="flex space-x-3 w-fit h-fit">
        <IconComponent className="w-10 h-10 text-white" />
        <div className="flex flex-col items-start space-y-2 mb-2">
          <span className="text-4xl font-bold text-white">{data.value}</span>
          <span className="text-gray-300 text-sm !ml-0">{data.title}</span>
        </div>
      </div>
    </motion.div>
  );
}
