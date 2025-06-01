import { type LucideIcon } from 'lucide-react'

export interface StatCardData {
  title: string
  value: string
  icon: LucideIcon
  color: string
}

export interface RecentExam {
  id: number
  name: string
  institution: string
  status: "ongoing" | "completed"
  avatar: string
}

export interface ExamHistoryItem {
  id: number
  institution: string
  title: string
  candidates: string
  date: string
  score: string
  status: "Passed" | "Failed"
}

export interface OngoingExam {
  id: number
  institution: string
  title: string
  candidates: number
  date: string
  startTime: string
  status: "In Progress" | "Scheduled" | "Pending" | "Planned"
}

export interface RegistrationRequest {
  id: number
  candidateName: string
  email: string
  examTitle: string
  institution: string
  requestDate: string
  examDate: string
  status: "Pending" | "Approved" | "Rejected"
  fee: string
}

export interface AdminSidebarItem {
  id: string
  label: string
  icon: LucideIcon
  href: string
  isActive?: boolean
}
