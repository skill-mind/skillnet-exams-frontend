// Define types for our data
export interface Exam {
    id: string;
    title: string;
    description: string;
    date: string;
    duration: string;
    registeredCandidates: number;
    certification: string;
    passingScore: string;
    format: string;
    topics: string[];
    purpose: string[];
    categories: string[];
  }
  
  // Create a comprehensive dataset of exams with different categories
  export const exams: Exam[] = [
    {
      id: "web3-fundamentals",
      title: "WEB3 FUNDAMENTALS CERTIFICATION EXAM",
      description:
        "This Web3 Test Exam is designed to assess your knowledge, ensuring a complete understanding of decentralized technologies, smart contracts, and blockchain security. This exam is hosted on-chain, ensuring that all results are securely stored on-chain for authenticity and tamper-proof verification.",
      date: "29th Feb, 2025",
      duration: "3hr",
      registeredCandidates: 50,
      certification: "Yes on completion",
      passingScore: "75%",
      format: "Multiple-choice",
      topics: [
        "Blockchain Basics (Consensus mechanisms, Layer 1 vs. Layer 2, decentralization)",
        "Smart Contracts (Solidity fundamentals, contract security, gas optimization)",
        "DeFi & NFTs (Decentralized finance protocols, NFT standards, use cases)",
      ],
      purpose: [
        "Enhance Your Web3 Credentials With a Blockchain-Verified Certificate",
        "Prove Your Skills To Potential Employers And Blockchain Projects",
        "Gain Credibility In The Decentralized Space With Verifiable Results",
      ],
      categories: ["Blockchain", "Smart Contracts", "DApp Development", "Solidity"],
    },
    {
      id: "javascript-advanced",
      title: "JAVASCRIPT ADVANCED CERTIFICATION",
      description:
        "This advanced JavaScript certification exam tests your knowledge of modern JavaScript features, asynchronous programming, and advanced design patterns. Demonstrate your expertise in one of the most widely used programming languages in the world.",
      date: "15th Mar, 2025",
      duration: "2hr",
      registeredCandidates: 120,
      certification: "Yes on completion",
      passingScore: "70%",
      format: "Multiple-choice and coding challenges",
      topics: [
        "ES6+ Features (Promises, async/await, generators)",
        "Functional Programming in JavaScript",
        "Performance Optimization and Memory Management",
        "Advanced DOM Manipulation",
      ],
      purpose: [
        "Validate Your JavaScript Expertise for Employers",
        "Demonstrate Your Knowledge of Modern JavaScript Practices",
        "Stand Out in the Competitive Web Development Market",
      ],
      categories: ["JavaScript", "Frontend"],
    },
    {
      id: "data-science-fundamentals",
      title: "DATA SCIENCE FUNDAMENTALS EXAM",
      description:
        "This comprehensive data science exam covers statistical analysis, machine learning algorithms, and data visualization techniques. Perfect for data analysts and aspiring data scientists looking to validate their skills.",
      date: "5th Apr, 2025",
      duration: "4hr",
      registeredCandidates: 85,
      certification: "Yes on completion",
      passingScore: "65%",
      format: "Multiple-choice and practical exercises",
      topics: [
        "Statistical Analysis and Hypothesis Testing",
        "Machine Learning Algorithms and Model Evaluation",
        "Data Cleaning and Preprocessing Techniques",
        "Data Visualization and Storytelling",
      ],
      purpose: [
        "Validate Your Data Science Knowledge and Skills",
        "Demonstrate Your Ability to Extract Insights from Data",
        "Enhance Your Career Prospects in the Growing Data Field",
      ],
      categories: ["Data Science", "Python"],
    },
    {
      id: "ai-development",
      title: "AI DEVELOPMENT CERTIFICATION",
      description:
        "This AI development certification exam tests your knowledge of neural networks, deep learning frameworks, and AI ethics. Demonstrate your ability to build and deploy intelligent systems.",
      date: "20th Mar, 2025",
      duration: "3hr",
      registeredCandidates: 65,
      certification: "Yes on completion",
      passingScore: "75%",
      format: "Multiple-choice and coding challenges",
      topics: [
        "Neural Network Architectures and Training",
        "Natural Language Processing Techniques",
        "Computer Vision and Image Recognition",
        "AI Ethics and Responsible Development",
      ],
      purpose: [
        "Validate Your AI Development Skills",
        "Demonstrate Your Understanding of Modern AI Techniques",
        "Position Yourself at the Forefront of AI Innovation",
      ],
      categories: ["AI Development", "Python", "Data Science"],
    },
    {
      id: "nextjs-certification",
      title: "NEXT.JS DEVELOPER CERTIFICATION",
      description:
        "This Next.js certification exam tests your knowledge of server-side rendering, static site generation, and advanced routing techniques. Perfect for frontend developers looking to validate their Next.js expertise.",
      date: "10th Apr, 2025",
      duration: "2.5hr",
      registeredCandidates: 95,
      certification: "Yes on completion",
      passingScore: "70%",
      format: "Multiple-choice and coding challenges",
      topics: [
        "Server-Side Rendering vs. Static Site Generation",
        "Data Fetching Strategies and API Routes",
        "Advanced Routing and Middleware",
        "Performance Optimization Techniques",
      ],
      purpose: [
        "Validate Your Next.js Expertise",
        "Demonstrate Your Ability to Build Modern Web Applications",
        "Stand Out as a Specialized React Developer",
      ],
      categories: ["NextJS", "Frontend", "JavaScript", "TypeScript"],
    },
    {
      id: "cairo-fundamentals",
      title: "CAIRO PROGRAMMING FUNDAMENTALS",
      description:
        "This Cairo programming exam tests your knowledge of StarkNet's native programming language. Demonstrate your ability to write efficient and secure smart contracts for StarkNet.",
      date: "25th Mar, 2025",
      duration: "3hr",
      registeredCandidates: 40,
      certification: "Yes on completion",
      passingScore: "65%",
      format: "Multiple-choice and coding challenges",
      topics: [
        "Cairo Syntax and Basic Constructs",
        "StarkNet Contract Development",
        "Cairo Security Best Practices",
        "Interacting with L1 and Other L2 Solutions",
      ],
      purpose: [
        "Validate Your Cairo Programming Skills",
        "Position Yourself as a StarkNet Developer",
        "Contribute to the Growing StarkNet Ecosystem",
      ],
      categories: ["Cairo", "Blockchain", "Smart Contracts"],
    },
    {
      id: "solidity-advanced",
      title: "ADVANCED SOLIDITY CERTIFICATION",
      description:
        "This advanced Solidity certification exam tests your knowledge of gas optimization, security patterns, and complex smart contract architectures. Perfect for experienced blockchain developers.",
      date: "15th Apr, 2025",
      duration: "3.5hr",
      registeredCandidates: 75,
      certification: "Yes on completion",
      passingScore: "80%",
      format: "Multiple-choice and coding challenges",
      topics: [
        "Gas Optimization Techniques",
        "Security Patterns and Vulnerability Prevention",
        "Complex Contract Architectures (Proxies, Factories)",
        "ERC Standards and Custom Token Implementation",
      ],
      purpose: [
        "Validate Your Advanced Solidity Skills",
        "Demonstrate Your Ability to Write Secure and Efficient Smart Contracts",
        "Position Yourself as a Senior Blockchain Developer",
      ],
      categories: ["Solidity", "Blockchain", "Smart Contracts"],
    },
    {
      id: "typescript-certification",
      title: "TYPESCRIPT PROFESSIONAL CERTIFICATION",
      description:
        "This TypeScript certification exam tests your knowledge of advanced type systems, generics, and TypeScript-specific design patterns. Demonstrate your expertise in type-safe JavaScript development.",
      date: "5th Mar, 2025",
      duration: "2hr",
      registeredCandidates: 110,
      certification: "Yes on completion",
      passingScore: "70%",
      format: "Multiple-choice and coding challenges",
      topics: [
        "Advanced Type Systems and Type Manipulation",
        "Generics and Conditional Types",
        "TypeScript-specific Design Patterns",
        "Migration Strategies and Interoperability with JavaScript",
      ],
      purpose: [
        "Validate Your TypeScript Expertise",
        "Demonstrate Your Commitment to Type-Safe Development",
        "Stand Out in the JavaScript Ecosystem",
      ],
      categories: ["TypeScript", "JavaScript", "Frontend", "Backend Development"],
    },
    {
      id: "cybersecurity-fundamentals",
      title: "CYBERSECURITY FUNDAMENTALS EXAM",
      description:
        "This cybersecurity fundamentals exam covers network security, cryptography, and threat detection. Perfect for IT professionals looking to validate their security knowledge.",
      date: "30th Mar, 2025",
      duration: "3hr",
      registeredCandidates: 60,
      certification: "Yes on completion",
      passingScore: "75%",
      format: "Multiple-choice and scenario-based questions",
      topics: [
        "Network Security and Firewall Configuration",
        "Cryptography and Secure Communication",
        "Threat Detection and Incident Response",
        "Security Policies and Compliance",
      ],
      purpose: [
        "Validate Your Cybersecurity Knowledge",
        "Demonstrate Your Ability to Protect Digital Assets",
        "Enhance Your Career Prospects in the Security Field",
      ],
      categories: ["Cybersecurity", "Backend Development"],
    },
    {
      id: "backend-development",
      title: "BACKEND DEVELOPMENT CERTIFICATION",
      description:
        "This backend development certification exam tests your knowledge of server architecture, database design, and API development. Perfect for backend developers looking to validate their skills.",
      date: "12th Apr, 2025",
      duration: "3hr",
      registeredCandidates: 90,
      certification: "Yes on completion",
      passingScore: "70%",
      format: "Multiple-choice and coding challenges",
      topics: [
        "Server Architecture and Scalability",
        "Database Design and Query Optimization",
        "RESTful and GraphQL API Development",
        "Authentication and Authorization Systems",
      ],
      purpose: [
        "Validate Your Backend Development Skills",
        "Demonstrate Your Ability to Build Robust Server Systems",
        "Position Yourself as a Specialized Backend Engineer",
      ],
      categories: ["Backend Development", "JavaScript", "TypeScript", "Python"],
    },
  ];
  
  // Create a list of categories with counts
  export const categories = [
    { title: "JavaScript", count: exams.filter(exam => exam.categories.includes("JavaScript")).length, href: "#javascript" },
    { title: "Data Science", count: exams.filter(exam => exam.categories.includes("Data Science")).length, href: "#data-science" },
    { title: "AI Development", count: exams.filter(exam => exam.categories.includes("AI Development")).length, href: "#ai-development" },
    { title: "Frontend", count: exams.filter(exam => exam.categories.includes("Frontend")).length, href: "#frontend" },
    { title: "Cairo", count: exams.filter(exam => exam.categories.includes("Cairo")).length, href: "#cairo" },
    { title: "Solidity", count: exams.filter(exam => exam.categories.includes("Solidity")).length, href: "#solidity" },
    { title: "NextJS", count: exams.filter(exam => exam.categories.includes("NextJS")).length, href: "#nextjs" },
    { title: "Backend Development", count: exams.filter(exam => exam.categories.includes("Backend Development")).length, href: "#backend" },
    { title: "Cybersecurity", count: exams.filter(exam => exam.categories.includes("Cybersecurity")).length, href: "#cybersecurity" },
    { title: "Blockchain", count: exams.filter(exam => exam.categories.includes("Blockchain")).length, href: "#blockchain" },
    { title: "Smart Contracts", count: exams.filter(exam => exam.categories.includes("Smart Contracts")).length, href: "#smart-contracts" },
    { title: "DApp Development", count: exams.filter(exam => exam.categories.includes("DApp Development")).length, href: "#dapps" },
    { title: "Python", count: exams.filter(exam => exam.categories.includes("Python")).length, href: "#python" },
    { title: "TypeScript", count: exams.filter(exam => exam.categories.includes("TypeScript")).length, href: "#typescript" },
  ];
  