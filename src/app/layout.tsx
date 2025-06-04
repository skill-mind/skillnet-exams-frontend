import { Metadata } from "next";
import { Providers } from "@/components/Providers";
import { WalletProvider } from "@/components/WalletProvider";
import "@/app/globals.css";

export const metadata: Metadata = {
  title: {
    default: "Skillnet Exam Hub - Decentralized Learning & Certification",
    template: "%s | Skillnet Exam Hub",
  },
  description:
    "Skillnet Exam Hub is a decentralized platform for skill acquisition, professional growth, and certification. Learn from experts and verify credentials securely on the blockchain.",
  openGraph: {
    title: "Skillnet Exam Hub - Decentralized Learning & Certification",
    description:
      "Join Skillnet Exam Hub to gain industry-relevant skills, earn blockchain-verified certifications, and accelerate your career growth.",
    url: "https://www.skillnetexamhub.com",
    siteName: "Skillnet Exam Hub",
    images: [
      {
        url: "/images/seo-skillnet-sample.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Skillnet Exam Hub - Decentralized Learning & Certification",
    description:
      "Master new skills, earn blockchain-verified certifications, and grow professionally with Skillnet Exam Hub.",
    images: ["/images/seo-skillnet-sample.jpg"],
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
  alternates: {
    canonical: "https://www.skillnetexamhub.com",
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
    <html className="scroll-smooth" lang="en">
      <body className="bg-[#00031B] text-[#EAEDE7]">
        <Providers>
          <WalletProvider>{children}</WalletProvider>
        </Providers>
      </body>
    </html>
  );
}
