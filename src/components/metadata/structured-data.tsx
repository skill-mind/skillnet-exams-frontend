export function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "SkillNet",
    description: " SkillNet is a revolutionary exam platform leveraging blockchain technology, AI proctoring, and NFT-based certificate minting for secure, transparent, and verifiable academic records.",
    url: "https://skillnet.com",
    logo: "https://skillnet.com/logo.png",
    foundingDate: "2024",
    sameAs: ["https://twitter.com/skillnet", "https://github.com/skill-mind/skillnet-exam-frontend", "https://discord.gg/skillnet"],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      availableLanguage: ["English"],
    },
    address: {
      "@type": "PostalAddress",
      addressCountry: "Global",
    },
  }

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "SkillNet",
    url: "https://skillnet.com",
    description: " SkillNet is a revolutionary exam platform leveraging blockchain technology, AI proctoring, and NFT-based certificate minting for secure, transparent, and verifiable academic records.",
    publisher: {
      "@type": "Organization",
      name: "SkillNet",
    },
    potentialAction: {
      "@type": "SearchAction",
      target: "https://skillnet.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  }

  const softwareApplicationSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "SkillNet",
    description: "Decentralized exam platform leveraging blockchain technology, AI proctoring, and NFT-based certificate minting for secure academic credentialing.",
    url: "https://skillnet.com",
    applicationCategory: "EducationApplication",
    operatingSystem: "Web Browser",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      ratingCount: "1250",
    },
    featureList: [
      "Instant money transfers",
      "Microloans",
      "Savings groups",
      "Crypto credit scoring",
      "Cross-border payments",
      "Low transaction fees",
    ],
  }

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://skillnet.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Features",
        item: "https://skillnet.com#features",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "How It Works",
        item: "https://skillnet.com#how-it-works",
      },
    ],
  }

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is SkillNet?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "SkillNet is decentralized exam platform leveraging blockchain technology, AI proctoring, and NFT-based certificate minting for secure, transparent, and verifiable academic records.",
        },
      },
      {
        "@type": "Question",
        name: "How does SkillNet work?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "SkillNet works in 4 simple steps: 1) Connect your wallet, 2) Select a profile, 3) Create exam or take exam, 4) Mint certificate",
        },
      },
      {
        "@type": "Question",
        name: "What are the fees for using SkillNet?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "SkillNet offers minimal fees for exam taking, minting certificate and registration.",
        },
      },
      {
        "@type": "Question",
        name: "Is SkillNet secure?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, SkillNet is built on StarkNet with blockchain features. All exams are encrypted and transparent.",
        },
      },
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema) }}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
    </>
  )
}