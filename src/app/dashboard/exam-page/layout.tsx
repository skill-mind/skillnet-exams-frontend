import type React from "react";
import Footer from "@/components/dashboard/exam/components/footer";
import Navbar from "@/components/dashboard/exam/components/navbar";
import { Suspense, useState } from "react";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col bg-white dark:bg-black text-black dark:text-white px-6  md:px-8 lg:px-16 xl:px-24">
      <Suspense
        fallback={
          <div className="h-16 bg-white dark:bg-black border-b border-gray-800"></div>
        }
      >
        <Navbar />
      </Suspense>
      <main className="flex-l flex-grow">
        <div>{children}</div>
      </main>
      <Footer />
    </div>
  );
}
