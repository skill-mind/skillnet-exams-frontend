"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import { Bell, ChevronDown } from "lucide-react"
import RichTextEditor from "./rich-text-editor"
import DatePicker from "./date-picker"

// Custom Button Component
interface ButtonProps {
  children: React.ReactNode
  variant?: "default" | "outline" | "ghost"
  size?: "default" | "sm" | "lg" | "icon"
  className?: string
  onClick?: () => void
  disabled?: boolean
}

function Button({
  children,
  variant = "default",
  size = "default",
  className = "",
  onClick,
  disabled = false,
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 disabled:opacity-50 disabled:pointer-events-none"

  const variantStyles = {
    default: "bg-teal-500 text-white hover:bg-teal-600",
    outline: "bg-transparent border border-white/20 text-white hover:bg-white/10",
    ghost: "bg-transparent text-white hover:bg-white/10",
  }

  const sizeStyles = {
    default: "h-10 py-2 px-4",
    sm: "h-8 px-3 text-sm",
    lg: "h-12 px-6",
    icon: "h-10 w-10 p-0",
  }

  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  )
}

// Custom Input Component
interface InputProps {
  value?: string
  defaultValue?: string
  placeholder?: string
  className?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void
}

function Input({ value, defaultValue, placeholder, className = "", onChange, onKeyDown }: InputProps) {
  return (
    <input
      value={value}
      defaultValue={defaultValue}
      placeholder={placeholder}
      onChange={onChange}
      onKeyDown={onKeyDown}
      className={`flex h-10 w-full rounded-md border border-[#2a3552] bg-[#0a1022] px-3 py-2 text-sm text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-teal-500 ${className}`}
    />
  )
}

// Custom Textarea Component
interface TextareaProps {
  value?: string
  defaultValue?: string
  placeholder?: string
  className?: string
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
}

function Textarea({ value, defaultValue, placeholder, className = "", onChange }: TextareaProps) {
  return (
    <textarea
      value={value}
      defaultValue={defaultValue}
      placeholder={placeholder}
      onChange={onChange}
      className={`flex min-h-[80px] w-full rounded-md border border-[#2a3552] bg-[#0a1022] px-3 py-2 text-sm text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-teal-500 ${className}`}
    />
  )
}

// Custom Select Component
interface SelectOption {
  value: string
  label: string
}

interface SelectProps {
  options: SelectOption[]
  value?: string
  defaultValue?: string
  placeholder?: string
  className?: string
  onChange?: (value: string) => void
}

function Select({
  options,
  value,
  defaultValue,
  placeholder = "Select option",
  className = "",
  onChange,
}: SelectProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedValue, setSelectedValue] = useState(value || defaultValue || "")
  const selectRef = useRef<HTMLDivElement>(null)

  const handleSelect = (option: SelectOption) => {
    setSelectedValue(option.value)
    onChange?.(option.value)
    setIsOpen(false)
  }

  const selectedOption = options.find((option) => option.value === selectedValue)

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (selectRef.current && !selectRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  return (
    <div className="relative" ref={selectRef}>
      <button
        type="button"
        className={`flex h-10 w-full items-center justify-between rounded-md border border-[#2a3552] bg-[#0a1022] px-3 py-2 text-sm text-white ${className}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{selectedOption ? selectedOption.label : placeholder}</span>
        <ChevronDown className="h-4 w-4 opacity-50" />
      </button>
      {isOpen && (
        <div className="absolute z-10 mt-1 w-full rounded-md border border-[#2a3552] bg-[#0a1022] py-1 shadow-lg">
          {options.map((option) => (
            <div
              key={option.value}
              className={`px-3 py-2 text-sm cursor-pointer hover:bg-[#2a3552] ${
                selectedValue === option.value ? "bg-[#2a3552] text-white" : "text-white"
              }`}
              onClick={() => handleSelect(option)}
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

// Custom Switch Component
interface SwitchProps {
  checked?: boolean
  defaultChecked?: boolean
  onChange?: (checked: boolean) => void
  className?: string
}

function Switch({ checked, defaultChecked, onChange, className = "" }: SwitchProps) {
  const [isChecked, setIsChecked] = useState(checked !== undefined ? checked : defaultChecked || false)

  const handleToggle = () => {
    const newValue = !isChecked
    setIsChecked(newValue)
    onChange?.(newValue)
  }

  useEffect(() => {
    if (checked !== undefined) {
      setIsChecked(checked)
    }
  }, [checked])

  return (
    <button
      type="button"
      role="switch"
      aria-checked={isChecked}
      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
        isChecked ? "bg-teal-500" : "bg-[#2a3552]"
      } ${className}`}
      onClick={handleToggle}
    >
      <span
        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
          isChecked ? "translate-x-6" : "translate-x-1"
        }`}
      />
    </button>
  )
}

// Custom Badge Component
interface BadgeProps {
  children: React.ReactNode
  className?: string
  onClick?: () => void
}

function Badge({ children, className = "", onClick }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded-full border border-[#2a3552] bg-[#2a3552] px-2.5 py-0.5 text-xs font-semibold text-white transition-colors hover:bg-[#3a4562] ${
        onClick ? "cursor-pointer" : ""
      } ${className}`}
      onClick={onClick}
    >
      {children}
    </span>
  )
}

export default function ExamCreator() {
  const [tags, setTags] = useState<string[]>(["Front-End"])
  const [newTag, setNewTag] = useState("")
  const [questionContent, setQuestionContent] = useState("")
  const [answerContents, setAnswerContents] = useState(["", "", "", ""])
  const [descriptionContent, setDescriptionContent] = useState("")
  const [examDate, setExamDate] = useState<Date | null>(new Date("2025-05-12"))

  const addTag = () => {
    if (newTag && !tags.includes(newTag)) {
      setTags([...tags, newTag])
      setNewTag("")
    }
  }

  const removeTag = (tagToRemove: string) => {
    setTags(tags.filter((tag) => tag !== tagToRemove))
  }

  const updateAnswerContent = (index: number, content: string) => {
    const newAnswerContents = [...answerContents]
    newAnswerContents[index] = content
    setAnswerContents(newAnswerContents)
  }

  return (
    <div className="w-full max-w-7xl mx-auto px-4 pb-16 bg-[#081028]">
      <header className="flex justify-between items-center py-6">
        <h1 className="text-white ml-10 lg:ml-0 text-xl font-medium">Create Exams</h1>
        <Button variant="ghost" size="icon" className="text-white">
          <Bell className="h-5 w-5" />
          <span className="sr-only">Notifications</span>
        </Button>
      </header>

      <div className="rounded-lg overflow-hidden mb-6">
        <Image
          src="/images/exam-banner.png"
          width={900}
          height={250}
          alt="Students taking exam"
          className="w-full h-[150px] md:h-[250px] object-cover"
        />
      </div>

      <div className="flex justify-between mb-6">
        <Button variant="outline">Upload certificate</Button>
        <div className="flex gap-2">
          <Button variant="outline">Add to Draft</Button>
          <Button>Publish</Button>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-white/80 text-lg mb-4">Exam Details</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6 mb-6">
          <div className="space-y-2">
            <label className="text-white/70 text-sm">Exam Name</label>
            <Input defaultValue="Design Thinking" />
          </div>

          <div className="space-y-2">
            <label className="text-white/70 text-sm">Question Type</label>
            <Select
              options={[
                { value: "multiple", label: "Multiple choice" },
                { value: "single", label: "Single choice" },
                { value: "text", label: "Text answer" },
              ]}
              defaultValue="multiple"
            />
          </div>

          <div className="space-y-2">
            <label className="text-white/70 text-sm">Certification</label>
            <Select
              options={[
                { value: "yes", label: "Yes" },
                { value: "no", label: "No" },
              ]}
              defaultValue="yes"
            />
          </div>

          <div className="space-y-2">
            <label className="text-white/70 text-sm">Duration</label>
            <Input defaultValue="60 Min" />
          </div>

          <div className="space-y-2">
            <label className="text-white/70 text-sm">Exam amount</label>
            <Input defaultValue="$100" />
          </div>

          <div className="space-y-2">
            <label className="text-white/70 text-sm">Date</label>
            <DatePicker selected={examDate} onChange={setExamDate} />
          </div>
        </div>

        <div className="space-y-2 mb-6">
          <label className="text-white/70 text-sm">Tags</label>
          <div className="flex flex-wrap gap-2 items-center">
            {tags.map((tag) => (
              <Badge key={tag} onClick={() => removeTag(tag)}>
                {tag} <span className="ml-1">×</span>
              </Badge>
            ))}
            <div className="flex">
              <Input
                value={newTag}
                onChange={(e) => setNewTag(e.target.value)}
                className="w-24 h-8"
                onKeyDown={(e) => e.key === "Enter" && addTag()}
              />
              <Button variant="ghost" size="sm" onClick={addTag}>
                Add
              </Button>
            </div>
          </div>
        </div>

        <div className="space-y-2 mb-6">
          <label className="text-white/70 text-sm">Exam Description</label>
          <RichTextEditor
            placeholder="Description....."
            content={descriptionContent}
            onChange={setDescriptionContent}
            minHeight="min-h-[120px]"
          />
        </div>
      </div>

      <div>
        <h2 className="text-white/80 text-lg mb-4">Questions</h2>

        <div className="mb-6">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center">
              <Select
                options={[
                  { value: "q1", label: "Question 1" },
                  { value: "q2", label: "Question 2" },
                  { value: "q3", label: "Question 3" },
                ]}
                defaultValue="q1"
                className="w-[150px]"
              />
            </div>

            <div className="flex items-center gap-2">
              <span className="text-white/70 text-sm">Autosave</span>
              <Switch defaultChecked />
            </div>
          </div>

          <RichTextEditor
            placeholder="Enter question....."
            content={questionContent}
            onChange={setQuestionContent}
            minHeight="min-h-[150px]"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <AnswerOption
            number={1}
            content={answerContents[0]}
            onChange={(content) => updateAnswerContent(0, content)}
          />
          <AnswerOption
            number={2}
            content={answerContents[1]}
            onChange={(content) => updateAnswerContent(1, content)}
          />
          <AnswerOption
            number={3}
            content={answerContents[2]}
            onChange={(content) => updateAnswerContent(2, content)}
          />
          <AnswerOption
            number={4}
            content={answerContents[3]}
            onChange={(content) => updateAnswerContent(3, content)}
          />
        </div>
      </div>
    </div>
  )
}

interface AnswerOptionProps {
  number: number
  content: string
  onChange: (content: string) => void
}

function AnswerOption({ number, content, onChange }: AnswerOptionProps) {
  return (
    <div className="space-y-2">
      <div className="flex justify-between items-center">
        <h3 className="text-white/80">Option {number}</h3>
        <Select
          options={[
            { value: "correct", label: "Correct Answer" },
            { value: "incorrect", label: "Incorrect" },
          ]}
          defaultValue="incorrect"
          className="w-[150px]"
        />
      </div>

      <RichTextEditor placeholder="Enter answer....." content={content} onChange={onChange} minHeight="min-h-[100px]" />
    </div>
  )
}
