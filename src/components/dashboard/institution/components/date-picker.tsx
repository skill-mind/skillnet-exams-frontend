"use client"

import { useState, useRef } from "react"
import { Calendar, ChevronDown } from "lucide-react"
import { format } from "date-fns"

interface DatePickerProps {
  selected: Date | null
  onChange: (date: Date | null) => void
  placeholder?: string
  className?: string
}

export default function DatePicker({
  selected,
  onChange,
  placeholder = "Select date",
  className = "",
}: DatePickerProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [currentMonth, setCurrentMonth] = useState(selected || new Date())
  const calendarRef = useRef<HTMLDivElement>(null)

  // Handle clicking outside to close the calendar
  const handleClickOutside = (e: MouseEvent) => {
    if (calendarRef.current && !calendarRef.current.contains(e.target as Node)) {
      setIsOpen(false)
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }

  const toggleCalendar = () => {
    if (!isOpen) {
      setIsOpen(true)
      // Add event listener when opening
      setTimeout(() => {
        document.addEventListener("mousedown", handleClickOutside)
      }, 0)
    } else {
      setIsOpen(false)
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }

  const handleDateSelect = (date: Date) => {
    onChange(date)
    setIsOpen(false)
    document.removeEventListener("mousedown", handleClickOutside)
  }

  const prevMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1))
  }

  const nextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1))
  }

  // Generate days for the calendar
  const generateCalendarDays = () => {
    const year = currentMonth.getFullYear()
    const month = currentMonth.getMonth()

    // First day of the month
    const firstDay = new Date(year, month, 1)
    // Last day of the month
    const lastDay = new Date(year, month + 1, 0)

    // Get the day of the week for the first day (0 = Sunday, 6 = Saturday)
    const firstDayOfWeek = firstDay.getDay()

    // Calculate days from previous month to show
    const daysFromPrevMonth = firstDayOfWeek

    // Calculate total days to show (previous month days + current month days)
    const totalDays = daysFromPrevMonth + lastDay.getDate()

    // Calculate rows needed (ceil to ensure we have enough rows)
    const rows = Math.ceil(totalDays / 7)

    // Generate calendar days
    const days = []
    let dayCount = 1 - daysFromPrevMonth

    for (let i = 0; i < rows * 7; i++) {
      const date = new Date(year, month, dayCount)
      const isCurrentMonth = date.getMonth() === month
      const isSelected = selected && date.toDateString() === selected.toDateString()

      days.push({
        date,
        dayOfMonth: date.getDate(),
        isCurrentMonth,
        isSelected,
      })

      dayCount++
    }

    return days
  }

  const days = generateCalendarDays()
  const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
  const monthName = currentMonth.toLocaleString("default", { month: "long" })
  const year = currentMonth.getFullYear()

  return (
    <div className="relative">
      <button
        type="button"
        onClick={toggleCalendar}
        className={`flex h-10 w-full items-center justify-between rounded-md border border-[#2a3552] bg-[#0a1022] px-3 py-2 text-sm text-white focus:outline-none focus:ring-2 focus:ring-teal-500 ${className}`}
      >
        <span>{selected ? format(selected, "MMMM d, yyyy") : placeholder}</span>
        <Calendar className="h-4 w-4 text-white/50" />
      </button>

      {isOpen && (
        <div
          ref={calendarRef}
          className="absolute z-50 mt-1 rounded-lg border border-[#2a3552] bg-[#0a1022] p-4 shadow-lg"
          style={{ width: "300px",
            right: "50px"
           }}
        >
          {/* Header with month/year and navigation */}
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center">
              <button className="flex items-center text-white bg-[#0f172a] hover:bg-[#1e293b] rounded-md px-2 py-1 mr-2">
                <span>{monthName}</span>
                <ChevronDown className="h-4 w-4 ml-1" />
              </button>
              <span className="text-white">{year}</span>
            </div>
            <div className="flex">
              <button onClick={prevMonth} className="text-white hover:text-blue-500 p-1">
                &lt;
              </button>
              <button onClick={nextMonth} className="text-white hover:text-blue-500 p-1">
                &gt;
              </button>
            </div>
          </div>

          {/* Weekday headers */}
          <div className="grid grid-cols-7 mb-2">
            {weekDays.map((day) => (
              <div key={day} className="text-white text-center text-sm py-1">
                {day}
              </div>
            ))}
          </div>

          {/* Calendar days */}
          <div className="grid grid-cols-7 gap-1">
            {days.map((day, index) => (
              <button
                key={index}
                onClick={() => handleDateSelect(day.date)}
                className={`
                  w-9 h-9 rounded-full flex items-center justify-center text-sm
                  ${!day.isCurrentMonth ? "text-gray-500" : "text-white"}
                  ${day.isSelected ? "bg-blue-500" : "hover:bg-[#2a3552]"}
                `}
              >
                {day.dayOfMonth}
              </button>
            ))}
          </div>

          {/* Select button */}
          <button
            onClick={() => selected && handleDateSelect(selected)}
            className="w-full mt-4 py-2 bg-[#0f172a] hover:bg-blue-500 text-white rounded-full transition-colors"
          >
            Select
          </button>
        </div>
      )}
    </div>
  )
}
