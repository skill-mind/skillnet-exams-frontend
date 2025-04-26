"use client";

import DashboardLayout from '@/components/dashboard/exam/components/new-dashboard-layout';


export default function HelpPage() {

    return (
        <DashboardLayout title="Help" activePage="help">
            <div className="flex flex-wrap gap-4 mb-8 p-5 rounded-md bg-[#0B1739]">
                <h1>New To SkillNet</h1>
                <p className='text-[14px] text-[#D9D9D9] p-4'>SkillNet is not just an exam platform—it's a game-changer. Designed to deliver secure, transparent, and verifiable academic records, SkillNet leverages cutting-edge blockchain technology, AI proctoring, and NFT-based certificate minting</p>
                <button className='bg-transparent h-[38px] border border-gray-700 px-5 text-[14x] rounded-full'>Explore SkillNet</button>
            </div>
        </DashboardLayout>
    );
}