import type React from "react";
import Footer from "@/components/dashboard/exam/components/footer";
import Navbar from "@/components/dashboard/exam/components/navbar";

import { WalletProvider } from "@/useContext/WalletContext";
import { Providers } from "@/components/Providers";
import { Suspense } from "react";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Providers>
      <WalletProvider>
        <div className="flex min-h-screen flex-col bg-black text-white px-6  md:px-8 lg:px-16 xl:px-24">
          <Suspense fallback={<div className="h-24 bg-black"></div>}>
            <Navbar />
          </Suspense>
          <main className="flex-l flex-grow">
            <div>{children}</div>
          </main>
          <Footer />
        </div>
      </WalletProvider>
    </Providers>
  );
}
