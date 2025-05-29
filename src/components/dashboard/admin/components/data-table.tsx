"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"

interface Column {
  key: string
  label: string
  render?: (value: any, row: any) => ReactNode
}

interface DataTableProps {
  title?: string
  columns: Column[]
  data: any[]
  emptyMessage?: string
}

export function DataTable({ title, columns, data, emptyMessage = "No data available" }: DataTableProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="bg-[#1A2332] rounded-lg border border-[#2D3748] overflow-hidden"
    >
      {title && (
        <div className="p-6 border-b border-[#2D3748]">
          <h3 className="text-xl font-semibold text-white">{title}</h3>
        </div>
      )}

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-[#1A2332]">
            <tr>
              {columns.map((column) => (
                <th key={column.key} className="text-left py-4 px-6 text-gray-400 font-medium text-sm">
                  {column.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <motion.tr
                key={row.id || index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 + index * 0.05 }}
                className="border-b border-[#2D3748] hover:bg-[#1E2A3A] transition-colors duration-200"
              >
                {columns.map((column) => (
                  <td key={column.key} className="py-4 px-6 text-white">
                    {column.render ? column.render(row[column.key], row) : row[column.key]}
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
  )
}
