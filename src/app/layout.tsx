import { Metadata } from "next";
import { WalletProvider } from "@/components/WalletProvider";
import "@/app/globals.css";
import ClientProviders from "../components/client-providers";
import { StructuredData } from "@/components/metadata/structured-data";

export const metadata: Metadata = {
  title: "SkillNet - Blockchain-Powered Exam Platform & Academic Credentialing",
  description:
    "SkillNet is a revolutionary exam platform leveraging blockchain technology, AI proctoring, and NFT-based certificate minting for secure, transparent, and verifiable academic records.",
  keywords: [
    "blockchain exam platform",
    "AI proctoring",
    "NFT certificates",
    "academic credentialing",
    "secure assessments",
    "verifiable credentials",
    "educational technology",
    "blockchain education",
    "digital certificates",
    "online exams",
    "decentralized education",
    "skill verification",
    "exam integrity",
    "student records",
    "academic blockchain",
    "exam security",
    "decentralized assessments",
    "AI in education",
    "blockchain credentials",
    "digital identity",
    "education technology",
    "skill verification platform",
    "starknet",
  ],
  authors: [{ name: "SKillNet Team" }],
  creator: "SkillNet",
  publisher: "SkillNet",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://skillnet.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://skillnet.com",
    title:
      "SkillNet - Blockchain-Powered Exam Platform & Academic Credentialing",
    description:
      "Revolutionary exam platform with blockchain technology, AI proctoring, and NFT-based certificates for secure academic credentialing.",
    siteName: "SkillNet",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "SkillNet - Decentralized Exam Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "SkillNet - Blockchain-Powered Exam Platform & Academic Credentialing",
    description:
      "Experience the future of education with SkillNet's blockchain exam platform, AI proctoring, and NFT certificates. Secure, transparent, and verifiable academic records.",
    images: ["/twitter-image.png"],
    creator: "@skillnet",
    site: "@skillnet",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <StructuredData />
      </head>
      <body className="bg-[#00031B] text-[#EAEDE7]">
        <ClientProviders>
          <WalletProvider>{children}</WalletProvider>
        </ClientProviders>
      </body>
    </html>
  );
}
