import { Users, BookOpen, Award, Activity } from "lucide-react"

export const dashboardStats = [
  {
    title: "Total Exams",
    value: "2",
    icon: BookOpen,
    color: "bg-[#1E40AF]",
  },
  {
    title: "Active Exams",
    value: "23",
    icon: Activity,
    color: "bg-[#6B7280]",
  },
  {
    title: "Total Users",
    value: "12",
    icon: Users,
    color: "bg-[#1E40AF]",
  },
  {
    title: "Certificates Issued",
    value: "12",
    icon: Award,
    color: "bg-[#1E40AF]",
  },
]

export const recentExams = [
  {
    id: 1,
    name: "Exam Name 1",
    institution: "Skillnet",
    status: "ongoing" as const,
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 2,
    name: "Exam Name 1",
    institution: "Skillnet",
    status: "completed" as const,
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 3,
    name: "Exam Name 1",
    institution: "Skillnet",
    status: "ongoing" as const,
    avatar: "/placeholder.svg?height=40&width=40",
  },
]
