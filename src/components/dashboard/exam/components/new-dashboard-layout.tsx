"use client";

import { useState, ReactNode, useEffect } from 'react';
import Image from 'next/image';
import { Bell, ChevronDown, EllipsisVertical, Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import DashboardIcon from "../../../../../public/dashboard-square.svg";
import ExamIcon from "../../../../../public/notebook.svg";
import CertificateIcon from "../../../../../public/certificate.svg";
import RegisterIcon from "../../../../../public/pencil-edit.svg";
import UserIcon from "../../../../../public/Ellipse 43.svg";

import HelpIcon from "../../../../../public/help-square.svg";
import SkillNetLogo from "../../../../../public/skillnet-white logo.png";
import MenuCollapseIcon from "../../../../../public/menu-collapse.svg";
import Link from 'next/link';

interface DashboardLayoutProps {
    children: ReactNode;
    title: string;
    activePage: 'dashboard' | 'my-exams' | 'certificates' | 'register' | 'help';
}

export default function DashboardLayout({ children, title, activePage }: DashboardLayoutProps) {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    // Handle responsive behavior
    useEffect(() => {
        const checkScreenSize = () => {
            setIsMobile(window.innerWidth < 1024);
            setSidebarOpen(window.innerWidth >= 1024);
        };

        // Initial check
        checkScreenSize();

        // Add event listener for window resize
        window.addEventListener('resize', checkScreenSize);

        // Cleanup
        return () => window.removeEventListener('resize', checkScreenSize);
    }, []);

    // Close sidebar when clicking outside on mobile
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            const sidebar = document.getElementById('sidebar');
            const menuButton = document.getElementById('menu-button');

            if (isMobile && sidebarOpen && sidebar && menuButton) {
                if (!sidebar.contains(event.target as Node) && !menuButton.contains(event.target as Node)) {
                    setSidebarOpen(false);
                }
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [isMobile, sidebarOpen]);

    const navItems = [
        { key: 'dashboard', label: 'Dashboard', icon: DashboardIcon, href: '/dashboard' },
        { key: 'my-exams', label: 'My Exams', icon: ExamIcon, href: '/dashboard/my-exams' },
        { key: 'certificates', label: 'View Certificates', icon: CertificateIcon, href: '/dashboard/view-certificate' },
        { key: 'register', label: 'Register For Exams', icon: RegisterIcon, href: '/dashboard/register-exam' },
    ];

    // Handle sidebar toggle for mobile view
    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

    // Handle navigation item click for mobile
    const handleNavClick = () => {
        if (isMobile) {
            setSidebarOpen(false);
        }
    };

    return (
        <div className="flex h-screen bg-[#081028] text-white relative overflow-hidden">
            {/* Overlay for mobile */}
            {isMobile && sidebarOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 z-30"
                    onClick={() => setSidebarOpen(false)}
                />
            )}

            {/* Sidebar */}
            <div
                id="sidebar"
                className={cn(
                    "fixed lg:relative z-40 h-full transition-all duration-300 bg-[#00031B]",
                    "w-[278px] md:w-[260px] p-5",
                    isMobile ? (sidebarOpen ? "left-0" : "-left-full") : "left-0"
                )}
            >
                <div className="flex justify-between items-center">
                    <div className="flex items-center space-x-2">
                        <Image src={SkillNetLogo} alt='logo' height={40} width={40} />
                    </div>
                    <button
                        onClick={toggleSidebar}
                        className="p-1 rounded-md hover:bg-[#071630]"
                    >
                        {isMobile ? (
                            <X size={24} />
                        ) : (
                            <Image
                                src={MenuCollapseIcon}
                                alt='collapse menu'
                                height={24}
                                width={24}
                                onClick={() => setSidebarOpen(!sidebarOpen)}
                            />
                        )}
                    </button>
                </div>

                <div className="mt-5 pb-2">
                    <div className="flex items-center space-x-2 h-[48px] p-2 bg-[#071630] rounded-lg">
                        <div className="w-6 h-6 rounded-full overflow-hidden">
                            <Image src={UserIcon} alt="User" width={24} height={24} />
                        </div>
                        <div className="flex-1 truncate">
                            <span className="text-sm">Ebube.bravous.eth</span>
                        </div>
                        <button className="p-1 rounded-md hover:bg-[#0a1d3f]">
                            <EllipsisVertical size={16} />
                        </button>
                    </div>
                </div>

                <nav className="mt-6">
                    <hr className='border border-[#343B4F] mb-6' />
                    <ul className="space-y-3">
                        {navItems.map(item => (
                            <li key={item.key}>
                                <Link
                                    href={item.href}
                                    onClick={handleNavClick}
                                    className={cn(
                                        "flex items-center py-[10px] px-[10px] h-[45px] rounded-[12px] transition-colors",
                                        activePage === item.key
                                            ? "bg-[#071630] text-white"
                                            : "text-gray-400 hover:bg-[#071630] hover:text-white"
                                    )}
                                >
                                    <Image src={item.icon} alt={`${item.label} icon`} width={24} height={24} />
                                    <span className="ml-3">{item.label}</span>
                                </Link>
                            </li>
                        ))}
                        <hr className='border border-[#343B4F] my-4' />
                        <Link
                            href="/dashboard/help-center"
                            onClick={handleNavClick}
                            className={cn(
                                "flex items-center py-[10px] px-[10px] h-[45px] rounded-[12px] transition-colors",
                                activePage === "help"
                                    ? "bg-[#071630] text-white"
                                    : "text-gray-400 hover:bg-[#071630] hover:text-white"
                            )}
                        >
                            <Image src={HelpIcon} alt={`help icon`} width={24} height={24} />
                            <span className="ml-3">Help Center</span>
                        </Link>
                    </ul>
                </nav>
            </div>

            {/* Main Content */}
            <div className={cn(
                "flex-1 flex flex-col overflow-auto transition-all duration-300",
                isMobile ? "w-full" : (sidebarOpen ? "lg:ml-0" : "lg:ml-0")
            )}>
                {/* Top Bar */}
                <header className="flex justify-between items-center py-6 px-7 bg-[#081028] shadow-sm">
                    <div className="flex items-center">
                        <button
                            id="menu-button"
                            className="mr-4 lg:hidden p-2 rounded-md hover:bg-[#071630]"
                            onClick={toggleSidebar}
                        >
                            <Menu size={24} />
                        </button>
                        <h1 className="text-xl font-semibold truncate">{title}</h1>
                    </div>
                    <div className="flex items-center space-x-2">
                        <button className="p-2 rounded-full hover:bg-[#071630] relative">
                            <Bell size={20} />
                            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
                        </button>
                        <h3>Notifications</h3>
                    </div>
                </header>

                {/* Main Content */}
                <main className="flex-1 p-4 md:p-6 overflow-auto bg-[#081028]">
                    {children}
                </main>
            </div>
        </div>
    );
}