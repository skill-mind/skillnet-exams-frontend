"use client";

import type React from "react";
import { motion } from "framer-motion";

interface Column {
  key: string;
  label: string;
  render?: (value: any, row: any) => React.ReactNode;
}

interface DataTableProps {
  columns: Column[];
  data: any[];
  emptyMessage?: string;
}

export function DataTable({
  columns,
  data,
  emptyMessage = "No data available",
}: DataTableProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="bg-[#1A2332] border border-[#31283A] rounded-xl"
    >
      <div className="overflow-x-auto">
        <table className="w-full text-xs">
          <thead>
            <tr className="border-b border-[#31283A] bg-[#0B1739]">
              {columns.map((column) => (
                <th
                  key={column.key}
                  className="text-left py-4 px-4 text-[#AEB9E1] font-medium"
                >
                  {column.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <motion.tr
                key={row.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                className="border-b border-[#31283A] bg-[#081028] hover:bg-[#081028]/30 transition-colors"
              >
                {columns.map((column) => (
                  <td key={column.key} className="py-4 px-4 text-white">
                    {column.render
                      ? column.render(row[column.key], row)
                      : row[column.key]}
                  </td>
                ))}
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>

      {data.length === 0 && (
        <div className="p-8 text-center">
          <p className="text-gray-400">{emptyMessage}</p>
        </div>
      )}
    </motion.div>
  );
}
