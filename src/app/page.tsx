"use client";
import Benefits from "@/components/Benefits";
import FAQ from "@/components/FAQ";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import HowItwork from "@/components/How-It-work";
import Image from "next/image";

function HomePage() {
  return (
    <>
      <main className="min-h-screen">
        <Hero />
        <Features />
        <HowItwork />
        <Benefits />
        <FAQ />
      </main>
    </>
  );
}

export default HomePage;
