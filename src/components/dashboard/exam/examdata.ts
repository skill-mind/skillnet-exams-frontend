import SolidityIcon from "../../../../public/Solidity.svg";
import JavascriptIcon from "../../../../public/javascript.svg";
import LearningIcon from "../../../../public/learn-icon.svg";

export const examData = [
  {
    title: 'Solidity',
    icon: SolidityIcon,
    isCompleted: false,
    description: 'Level Up Your Tech Team Recruitment With Coding Tests In 20+ Languages, Helping You Identify Top Developer Talent With Ease.',
    category: 'Programming',
    // Additional fields from the Figma design
    date: 'April 27th, 2025',
    price: '$180',
    institution: "Institution's Name",
    aboutExam: "The Solidity Programming Test Evaluates Candidates' Ability To Develop Smart Contracts Using The Solidity Language On The Ethereum Virtual Machine. The Test Can Include Various Tasks Such As Creating Smart Contracts Such As State Variables, Functions, Data Structures, Modifiers, And Events. It Also Evaluates Their Ability To Write Secure, Efficient, And Maintainable Code, Ensuring They Can Build And Interact With Decentralized Applications Designed In A Web3 Environment.",
    coveredSkills: [
      { title: "Variables", id: 1 },
      { title: "Data Structures", id: 2 },
      { title: "Events", id: 3 },
      { title: "Functions", id: 4 },
      { title: "Modifiers", id: 5 }
    ]
  },
  {
    title: 'JavaScript',
    icon: JavascriptIcon,
    isCompleted: false,
    description: 'Level Up Your Tech Team Recruitment With Coding Tests In 20+ Languages, Helping You Identify Top Developer Talent With Ease.',
    category: 'Programming',
    // Additional fields from the Figma design
    date: 'May 15th, 2025',
    price: '$150',
    institution: "Code Academy",
    aboutExam: "The JavaScript Programming Test Evaluates Candidates' Ability To Develop Client-Side And Server-Side Applications Using JavaScript. The Test Covers Core Concepts Such As Variables, Data Types, Functions, Object-Oriented Programming, Asynchronous Programming With Promises, And DOM Manipulation. It Also Assesses Their Ability To Write Clean, Efficient, And Maintainable Code For Modern Web Applications.",
    coveredSkills: [
      { title: "DOM Manipulation", id: 1 },
      { title: "Async/Await", id: 2 },
      { title: "ES6 Features", id: 3 },
      { title: "Object-Oriented JS", id: 4 },
      { title: "Functional Programming", id: 5 }
    ]
  },
  {
    title: 'Design Thinking',
    icon: LearningIcon,
    isCompleted: true,
    description: 'Level Up Your Tech Team Recruitment With Coding Tests In 20+ Languages, Helping You Identify Top Developer Talent With Ease.',
    category: 'Product Design',
    // Additional fields from the Figma design
    date: 'June 3rd, 2025',
    price: '$200',
    institution: "Design Institute",
    aboutExam: "The Design Thinking Test Evaluates Candidates' Understanding Of Human-Centered Design Processes And Problem-Solving Methodologies. The Assessment Covers The Key Phases Of Design Thinking: Empathize, Define, Ideate, Prototype, And Test. It Measures Their Ability To Create User Personas, Journey Maps, And Wireframes, As Well As Their Skills In Conducting User Research And Translating Findings Into Actionable Design Solutions.",
    coveredSkills: [
      { title: "User Research", id: 1 },
      { title: "Prototyping", id: 2 },
      { title: "Journey Mapping", id: 3 },
      { title: "User Testing", id: 4 },
      { title: "Wireframing", id: 5 }
    ]
  },
  {
    title: 'Web3 Basics',
    icon: LearningIcon,
    isCompleted: true,
    description: 'Level Up Your Tech Team Recruitment With Coding Tests In 20+ Languages, Helping You Identify Top Developer Talent With Ease.',
    category: 'Technical Writing',
    // Additional fields from the Figma design
    date: 'June 21st, 2025',
    price: '$220',
    institution: "Blockchain Academy",
    aboutExam: "The Web3 Basics Test Evaluates Candidates' Knowledge Of Fundamental Web3 Concepts And Decentralized Technologies. The Exam Covers Blockchain Principles, Smart Contracts, Decentralized Applications (dApps), Cryptocurrencies, Non-Fungible Tokens (NFTs), And Decentralized Finance (DeFi). It Assesses Their Understanding Of The Underlying Infrastructure And The Ability To Explain Complex Web3 Concepts In Clear, Concise Technical Documentation.",
    coveredSkills: [
      { title: "Blockchain Basics", id: 1 },
      { title: "Smart Contracts", id: 2 },
      { title: "dApp Architecture", id: 3 },
      { title: "Tokenomics", id: 4 },
      { title: "Wallet Integration", id: 5 }
    ]
  }
];