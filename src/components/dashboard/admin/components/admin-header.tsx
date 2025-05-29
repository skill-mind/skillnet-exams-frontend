"use client"

import { Bell, Menu } from "lucide-react"

interface AdminHeaderProps {
  title: string
  subtitle?: string
  onMenuToggle: () => void
}

export function AdminHeader({ title, subtitle, onMenuToggle }: AdminHeaderProps) {
  return (
    <header className="bg-[#0B1426] px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <button onClick={onMenuToggle} className="lg:hidden text-white hover:text-gray-300 transition-colors">
            <Menu className="w-6 h-6" />
          </button>
          <div>
            <h1 className="text-2xl font-semibold text-white">{title}</h1>
            {subtitle && <p className="text-gray-400 text-sm mt-1">{subtitle}</p>}
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <button className="relative p-2 text-gray-400 hover:text-white transition-colors">
            <Bell className="w-6 h-6" />
          </button>
          <span className="text-white text-sm">Notifications</span>
        </div>
      </div>
    </header>
  )
}
