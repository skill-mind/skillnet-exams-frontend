"use client"

import { Button } from "@/components/ui/Button"
import Image from "next/image"

interface ExamType {
  id: number
  title: string
  description: string
  duration?: string
  level?: string
  language?: string
  certification?: boolean
  img: string
}

interface ExamCardProps {
  exam: ExamType
  onTakeExam: () => void
}

export default function ExamCard({ exam, onTakeExam }: ExamCardProps) {
  return (
    <div className="bg-[#0a1128] rounded-lg p-6 flex flex-col text-center items-center">
      <div className="mb-4">
      <div className="flex justify-center">
  <Image
    src={exam.img}
    alt={exam.title}
    width={80}
    height={80}
    className="rounded-lg mb-4"
  />
</div>

      </div>
      <h3 className="text-lg font-semibold mb-2">{exam.title}</h3>
      <p className="text-sm text-gray-300 mb-6">{exam.description}</p>
      <Button
        onClick={onTakeExam}
        className="w-full py-2 border border-teal-500 text-teal-500 hover:bg-teal-500 hover:text-white rounded-lg transition-colors bg-transparent"
      >
        Take Exam
      </Button>
    </div>
  )
}
