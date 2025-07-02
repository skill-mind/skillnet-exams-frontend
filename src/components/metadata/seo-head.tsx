import Head from "next/head"

interface SEOHeadProps {
  title?: string
  description?: string
  canonical?: string
  ogImage?: string
}

export function SEOHead({
  title = "skillnet - Empowering Global Communities with Decentralized Finance",
  description = "SkillNet is a revolutionary exam platform leveraging blockchain technology, AI proctoring, and NFT-based certificate minting for secure, transparent, and verifiable academic records.",
  canonical = "https://skillnet.com",
  ogImage = "/og-image.png",
}: SEOHeadProps) {
  return (
    <Head>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta
        name="keywords"
        content="DeFi, decentralized exam, StarkNet, exam, AI , crypto, blockchain, certificate, NFT, academic credentialing, secure exams, verifiable credentials, educational technology, digital certificates, online exams, decentralized education, skill verification, exam integrity, student records, academic blockchain, exam security, decentralized assessments, AI in education, blockchain credentials, digital identity, education technology, skill verification platform"
      />
      <meta name="robots" content="index, follow" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="language" content="English" />
      <meta name="author" content="skillnet Team" />

      {/* Canonical URL */}
      <link rel="canonical" href={canonical} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonical} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content="skillnet" />
      <meta property="og:locale" content="en_US" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={canonical} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={ogImage} />
      <meta property="twitter:creator" content="@skillnet" />

      {/* Additional Meta Tags */}
      <meta name="theme-color" content="#1e293b" />
      <meta name="msapplication-TileColor" content="#1e293b" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
    </Head>
  )
}