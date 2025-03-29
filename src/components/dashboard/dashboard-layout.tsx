"use client";
import { useState, useEffect } from "react";
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

export default function DashboardLayout() {
  const [route,setRoute] = useState("home")
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  function routeHandle(e:string){
    setRoute(e)
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

  return (
    <div className="flex flex-col h-screen bg-black text-white">
      <Navbar
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
      />
      <div className="flex flex-1 overflow-hidden ">
        <Sidebar  isMobileMenuOpen={isMobileMenuOpen} route={routeHandle}  pathname={route} />
                <div className="p-5 w-full"> 
        {route === "home" && <Home/>}
         {route === "ai-support" && <AISupportPage/>}
          {route === "certificate" && <CertificatesPage/>}
         {route === "notification" && <NotificationPage/>}
          {route === "earning" && <EarningsPage/>}
         {route === "profile" && <Profile/>}
          {route === "support" && <SupportPage/>}
         {route === "exam" && <ExamsPage/>}
         {route === "verification" && <VerificationPage/>}
      </div>
      </div>
    </div>
  );
}
