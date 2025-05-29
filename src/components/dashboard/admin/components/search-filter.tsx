"use client"

import { Search, Filter } from "lucide-react"

interface SearchFilterProps {
  searchTerm: string
  onSearchChange: (value: string) => void
  statusFilter: string
  onStatusChange: (value: string) => void
  statusOptions: string[]
  searchPlaceholder?: string
}

export function SearchFilter({
  searchTerm,
  onSearchChange,
  statusFilter,
  onStatusChange,
  statusOptions,
  searchPlaceholder = "Search...",
}: SearchFilterProps) {
  return (
    <div className="bg-[#0A1330] border border-[#343B4F] rounded-xl p-6 mb-6">
      <div className="flex flex-col md:flex-row gap-4">
        {/* Search Input */}
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#AEB9E1] w-5 h-5" />
          <input
            type="text"
            placeholder={searchPlaceholder}
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full pl-10 pr-4 py-3 bg-[#071630] border border-[#343B4F] rounded-lg text-white placeholder-[#AEB9E1] focus:outline-none focus:border-[#1FACAA] transition-colors duration-200"
          />
        </div>

        {/* Status Filter */}
        <div className="relative">
          <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#AEB9E1] w-5 h-5" />
          <select
            value={statusFilter}
            onChange={(e) => onStatusChange(e.target.value)}
            className="pl-10 pr-8 py-3 bg-[#071630] border border-[#343B4F] rounded-lg text-white focus:outline-none focus:border-[#1FACAA] transition-colors duration-200 appearance-none cursor-pointer"
          >
            <option value="All">All Status</option>
            {statusOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  )
}
