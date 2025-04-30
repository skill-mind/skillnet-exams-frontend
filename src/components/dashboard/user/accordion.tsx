"use client"

import { motion, AnimatePresence } from "framer-motion"
import type { ReactNode } from "react"
import { ChevronDown } from "lucide-react"

interface AccordionProps {
  title: string
  children: ReactNode
  isExpanded: boolean
  onToggle: () => void
}

export default function Accordion({ title, children, isExpanded, onToggle }: AccordionProps) {
  return (
    <div className="border-b border-gray-800">
      <div className="flex justify-between items-center py-4 cursor-pointer" onClick={onToggle}>
        <h3 className="text-sm font-medium">{title}</h3>
        <button className="px-3 py-1 rounded-full text-xs border border-gray-700 hover:bg-gray-800 transition-colors">
          <div className="flex items-center">
            {isExpanded ? "Collapse" : "Expand"}
            <motion.div animate={{ rotate: isExpanded ? 180 : 0 }} transition={{ duration: 0.3 }} className="ml-1">
              <ChevronDown size={14} />
            </motion.div>
          </div>
        </button>
      </div>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="pb-6 text-sm text-gray-300">{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
