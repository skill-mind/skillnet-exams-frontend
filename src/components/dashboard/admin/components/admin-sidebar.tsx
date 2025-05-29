"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { LayoutDashboard, BookOpen, Activity, UserPlus, Building, Users, HelpCircle, X, Menu } from "lucide-react"

const sidebarItems = [
  {
    id: "dashboard",
    label: "Dashboard",
    icon: LayoutDashboard,
    href: "/dashboard/admin",
  },
  {
    id: "exams-taken",
    label: "Exams Taken",
    icon: BookOpen,
    href: "/dashboard/admin/exams-taken",
  },
  {
    id: "ongoing-exams",
    label: "Ongoing Exams",
    icon: Activity,
    href: "/dashboard/admin/ongoing-exams",
  },
  {
    id: "registration",
    label: "Registration",
    icon: UserPlus,
    href: "/dashboard/admin/registration",
  },
  {
    id: "institutions",
    label: "Institutions",
    icon: Building,
    href: "/dashboard/admin/institutions",
  },
  {
    id: "users",
    label: "Users",
    icon: Users,
    href: "/dashboard/admin/users",
  },
  {
    id: "help-center",
    label: "Help Center",
    icon: HelpCircle,
    href: "/dashboard/admin/help-center",
  },
]

interface AdminSidebarProps {
  isOpen: boolean
  onToggle: () => void
}

export function AdminSidebar({ isOpen, onToggle }: AdminSidebarProps) {
  const pathname = usePathname()

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && <div className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden" onClick={onToggle} />}

      {/* Sidebar */}
      <div
        className={`fixed left-0 top-0 h-full w-64 bg-[#081028] z-50 transition-transform duration-300 ease-in-out lg:relative lg:translate-x-0 lg:z-auto ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
              <span className="text-[#081028] font-bold text-lg">SN</span>
            </div>
            <Menu className="w-6 h-6 text-white" />
          </div>
          <button onClick={onToggle} className="lg:hidden text-white hover:text-gray-300 transition-colors">
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* User Info */}
        <div className="px-6 pb-6">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gray-500 rounded-full"></div>
            <div className="text-white text-sm">Institution.braavos.eth</div>
            <div className="text-white">⋮</div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="px-4 space-y-1">
          {sidebarItems.map((item) => {
            const isActive = pathname === item.href
            return (
              <Link key={item.id} href={item.href}>
                <div
                  className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                    isActive ? "bg-[#1E3A8A] text-white" : "text-gray-300 hover:bg-[#1E3A8A] hover:text-white"
                  }`}
                >
                  <item.icon className="w-5 h-5" />
                  <span className="font-medium">{item.label}</span>
                </div>
              </Link>
            )
          })}
        </nav>
      </div>
    </>
  )
}
