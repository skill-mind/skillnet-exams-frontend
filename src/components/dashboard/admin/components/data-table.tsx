"use client";

import React from "react";
import { motion } from "framer-motion";
import { Download, Ellipsis, Eye } from "lucide-react";
import { usePathname } from "next/navigation";
import certificate from "../../../../../public/images/certificate.png";

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
  const pathname = usePathname();
  const [dropdownOpen, setDropdownOpen] = React.useState<number | null>(null);

  const handleOptionsClick = (id: number) => {
    setDropdownOpen(dropdownOpen === id ? null : id);
  };

  const renderOptions = (row: any) => (
    <div className="relative">
      <Ellipsis
        className="w-4 h-4 text-[#AEB9E1] cursor-pointer"
        onClick={() => handleOptionsClick(row.id)}
      />
      {dropdownOpen === row.id && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="absolute right-[2%] mt-2 min-w-[189px] min-h-[100px] bg-[#00031B] border border-[#31283A] rounded-md shadow-lg z-50"
        >
          <h1 className="my-3 border-b border-[#343B4F] mx-5 pb-3 text-white">
            Actions
          </h1>

          {pathname === "/dashboard/admin/ongoing-exams" ? (
            <div className="w-full px-4 pb-4">
              <button
                onClick={() => {
                  // Handle download logic here
                  console.log("Download results for row:", row.id);
                  setDropdownOpen(null);
                }}
                className="w-full text-left py-2 px-4 text-white hover:text-[#AEB9E1] hover:bg-[#081028]/30 flex gap-2"
              >
                <Eye className="h-3 w-3" /> Monitor Exams
              </button>
              <button
                onClick={() => {
                  // Handle download logic here
                  console.log("Download results for row:", row.id);
                  setDropdownOpen(null);
                }}
                className="w-full text-left py-2 px-4 text-white hover:text-[#AEB9E1] hover:bg-[#081028]/30 flex gap-2"
              >
                <Download className="h-3 w-3" /> View participant
              </button>
            </div>
          ) : (
            <button
              className="w-full text-left py-2 px-4 text-white hover:text-[#AEB9E1] hover:bg-[#081028]/30 flex gap-2"
              onClick={() => {
                const link = document.createElement("a");
                link.href = certificate.src; //Boos this should be replaced with the certificate gotten from the db
                link.download = "exam-results.png";
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
                setDropdownOpen(null);
              }}
            >
              <Download className="h-3 w-3" /> Download results
            </button>
          )}
        </motion.div>
      )}
    </div>
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="bg-[#1A2332] border border-[#31283A] rounded-xl no-scrollbar relative z-0"
    >
      <div className="overflow-x-auto no-scrollbar">
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
              <th></th>
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
                <td className="py-4 px-4">{renderOptions(row)}</td>
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
