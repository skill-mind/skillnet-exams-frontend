export interface Certificate {
  id: string
  title: string
  institution: string
  date: string
  duration: string
  grade: string
  passPercentage: string
  recipient: string
  description: string
  imageUrl: string
}

export const certificates: Certificate[] = [
  {
    id: "124428876",
    title: "Design Thinking",
    institution: "Institution Name",
    date: "April 15, 2023",
    duration: "60 Minutes",
    grade: "Pass",
    passPercentage: "90%",
    recipient: "Ebube",
    description: "An Online Non-Credit Course Authorized By Institution Name And Offered Through SkillNet",
    imageUrl: "/placeholder.svg",
  },
  {
    id: "987654321",
    title: "Solidity",
    institution: "Institution Name",
    date: "March 10, 2023",
    duration: "90 Minutes",
    grade: "Pass",
    passPercentage: "80%",
    recipient: "Ebube",
    description: "An Online Non-Credit Course Authorized By Institution Name And Offered Through SkillNet",
    imageUrl: "/placeholder.svg",
  },
]
