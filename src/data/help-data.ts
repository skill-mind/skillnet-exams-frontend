export interface HelpItem {
  title: string
  content: {
    mainText: string
    bulletPoints?: string[]
  }
}

export const helpItems: HelpItem[] = [
  {
    title: "Getting started as a user on SkillNet",
    content: {
      mainText:
        "Whether you're a student, educator, or institution, your first steps on SkillNet set the tone for a smooth experience. Complete your profile to receive and store your NFT certificates. Make sure to verify your email address after signing up—this activates your account and gives you full access to SkillNet's features.",
    },
  },
  {
    title: "Getting started as institution on SkillNet",
    content: {
      mainText:
        "Onboard your institution in just a few simple steps and unlock a future of secure, verifiable academic credentialing.",
      bulletPoints: [
        "Connect your wallet and complete your institution profile with essential details like your institution name, logo, and information.",
        "Easily create exams on SkillNet or upload existing results and certificates for blockchain-backed storage and verification.",
        "Design your certificates with your institution's branding and mint them as NFTs, giving your students verifiable lifelong credentials.",
        "Use your institution dashboard to monitor student performance, manage records, view verification requests, and gain actionable insights.",
      ],
    },
  },
  {
    title: "Exam Creation Guide (How to structure, host, and monitor)",
    content: {
      mainText:
        "Easily create exams by setting up your exam details, building a question bank, and organizing sections. Host your exams securely with AI proctoring, randomized questions, and time restrictions. Monitor in real-time with live dashboards and automated integrity reports to ensure exam fairness.",
    },
  },
  {
    title: "Technical Issues (Troubleshooting exam uploads, media files, etc.)",
    content: {
      mainText:
        "Having trouble uploading exams or media files? SkillNet provides real-time error alerts, easy retry options, and step-by-step troubleshooting guides to quickly resolve common issues. Need more help? Our support team is always ready to assist.",
    },
  },
  {
    title: "Certification benefits and use cases",
    content: {
      mainText:
        "SkillNet's blockchain-backed certificates are secure, tamper-proof, and instantly verifiable. Students can use them for job applications, further studies, and professional licensing, while institutions boost credibility and streamline verification for third parties.",
    },
  },
]
