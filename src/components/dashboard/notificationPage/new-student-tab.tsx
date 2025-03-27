import { UserPlusIcon } from "lucide-react"

// Sample data for new student notifications
const newStudentNotifications = [
  {
    id: 1,
    name: "Josh",
    course: "design class",
    message: "Welcome them by sending them a warm message",
    time: "8 hrs ago",
  },
  {
    id: 2,
    name: "Faith",
    course: "design class",
    message: "Welcome them by sending them a warm message",
    time: "1 day ago",
  },
]

const NewStudentTab = () => {
  return (
    <div className="space-y-4">
      {newStudentNotifications.map((notification) => (
        <div
          key={notification.id}
          className="flex p-4 rounded-xl mb-2 bg-[#1a1a1a] hover:bg-[#252525] transition-all duration-200 hover:translate-y-[-1px] hover:shadow-lg hover:border-[#444] border border-transparent"
        >
          <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-[#3a3a3a] to-[#252525] mr-4">
            <UserPlusIcon size={20} className="text-white" />
          </div>
          <div className="flex-1">
            <p className="font-medium">
              {notification.name} joined your {notification.course}
            </p>
            <p className="text-sm text-gray-400 mt-1">{notification.message}</p>
          </div>
          <div className="text-xs text-gray-500">{notification.time}</div>
        </div>
      ))}
    </div>
  )
}

export default NewStudentTab

