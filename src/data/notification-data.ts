import type { Notification } from "@/components/dashboard/exam/components/notification-modal-ui";

export const notificationsData: Notification[] = [
  {
    id: "1",
    avatar: "/images/notis-1.png",
    header: "New Registration",
    message: "You Just Registered For",
    course: "Design Thinking",
    time: "Now",
    link: "/dashboard/user/my-exams",
    read: false,
  },
  {
    id: "2",
    avatar: "/images/notis-2.png",
    header: "New Registration",
    message: "You Just Registered For",
    course: "Design Thinking",
    time: "5 Min Ago",
    link: "/dashboard/user/my-exams",
    read: false,
  },
  {
    id: "3",
    avatar: "/images/notis-3.png",
    header: "New Registration",
    message: "You Just Registered For",
    course: "Design Thinking",
    time: "2 Hrs Ago",
    link: "/dashboard/user/my-exams",
    read: false,
  },
  {
    id: "4",
    avatar: "/images/notis-4.png",
    header: "New Registration",
    message: "You Just Registered For",
    course: "Design Thinking",
    time: "2 Days Ago",
    link: "/dashboard/user/my-exams",
    read: true,
  },
];
