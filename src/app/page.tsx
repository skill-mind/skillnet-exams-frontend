"use client";
import Benefits from "@/components/Benefits";
import FAQ from "@/components/FAQ";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import HowItwork from "@/components/How-It-work";
import Navbar from "@/components/Navbar";

function HomePage() {
  return (
    <>
      <main className="min-h-screen">
        <Navbar />
        <Hero />
        <Features />
        <HowItwork />
        <Benefits />
        <FAQ />
        <Footer />
      </main>
    </>
  );
}

export default HomePage;
