"use client";
import { useState, useEffect, useRef } from "react";
import Navbar from "./navbar";
import Sidebar from "./sidebar";
import Home from "@/app/dashboard/institution/home";
import AISupportPage from "@/app/dashboard/institution/ai-support";
import CertificatesPage from "@/app/dashboard/institution/certificate";
import NotificationPage from "@/app/dashboard/institution/notification";
import EarningsPage from "@/app/dashboard/institution/earning";
import Profile from "@/app/dashboard/institution/profile";
import SupportPage from "@/app/dashboard/institution/support";
import ExamsPage from "@/app/dashboard/institution/exam";
import VerificationPage from "@/app/dashboard/institution/verification";
import CandidatePage from "@/app/dashboard/institution/candidates/page";

export default function DashboardLayout() {
  const [route,setRoute] = useState("Home")
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const overlayRef = useRef<HTMLDivElement>(null);

  function routeHandle(selectedRoute: string) {
    setRoute(selectedRoute);

  }

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (route === "ai-support") {
    return (
      <div
        ref={overlayRef}
        onClick={(e) => {
          // If the click happens on the overlay (not on its children), close the modal.
          if (e.target === overlayRef.current) {
            setRoute("home");
          }
        }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-md"
      >
        <div className="relative">
          <AISupportPage goBack={() => setRoute("home")} />
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-screen bg-black text-white">
      <Navbar
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
      />

      <div className="flex flex-1 ">
        <Sidebar
          isMobileMenuOpen={isMobileMenuOpen}
          route={routeHandle}
          pathname={route}
        />
        <div className="p-5 w-full">
          {route === "home" && <Home />}
          {route === "certificate" && <CertificatesPage />}
          {route === "notification" && <NotificationPage />}
          {route === "earning" && <EarningsPage />}
          {route === "profile" && <Profile />}
          {route === "support" && <SupportPage />}
          {route === "exam" && <ExamsPage />}
          {route === "verification" && <VerificationPage />}
        </div>
      </div>
    </div>
  );
}                                