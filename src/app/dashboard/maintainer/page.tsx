import Link from "next/link";
import StatCard from "@/components/maintainer-dashboard/stat-card";

// Define types for better type safety and maintainability
interface QuickAction {
  href: string;
  label: string;
}

interface StatCardData {
  icon: "percentage" | "briefcase" | "certificate" | "message-square";
  value: string;
  label: string;
  iconColor: string;
}

export default function Page() {
  const statCards: StatCardData[] = [
    {
      icon: "percentage",
      value: "13",
      label: "Total Users",
      iconColor: "bg-blue-200",
    },
    {
      icon: "briefcase",
      value: "150",
      label: "Active Courses",
      iconColor: "bg-purple-200",
    },
    {
      icon: "certificate",
      value: "111",
      label: "Certifications",
      iconColor: "bg-purple-200",
    },
    {
      icon: "message-square",
      value: "17",
      label: "Platform Revenue",
      iconColor: "bg-amber-200",
    },
  ];

  // Centralize quick action links
  const quickActions: QuickAction[] = [
    {
      href: "/dashboard/institution/exams/create",
      label: "Create Exams",
    },
    {
      href: "/dashboard/institution/candidates",
      label: "View Candidates",
    },
  ];

  return (
    <div className="flex flex-col h-full font-ubuntu">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
        {statCards.map((card, index) => (
          <StatCard
            key={index}
            icon={card.icon}
            value={card.value}
            label={card.label}
            iconColor={card.iconColor}
          />
        ))}
      </div>

      {/* Quick Actions */}
      <div className="mt-4">
        <h3 className="text-sm font-medium text-gray-300 mb-4">
          Quick Actions
        </h3>
        <div className="flex flex-wrap gap-4">
          {quickActions.map((action, index) => (
            <Link
              key={index}
              href={action.href}
              className="px-6 py-3 border border-gray-700 rounded-md text-white hover:bg-gray-800 transition-colors"
            >
              {action.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
