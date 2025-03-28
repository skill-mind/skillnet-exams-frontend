import React, { useState } from 'react';
import Image from "next/image";

interface EditProfileProps {
  onBack?: () => void;
  onSave?: (profileData: {
    companyName: string;
    companyType: string;
    about: string;
  }) => void;
}

const EditProfile: React.FC<EditProfileProps> = ({ onBack, onSave }) => {
  const [companyName, setCompanyName] = useState("SkillNet Org");
  const [companyType, setCompanyType] = useState("Design company");
  const [about, setAbout] = useState(`SkillNet Org is a forward-thinking design agency specializing in UI/UX, branding, and product design. 
We craft seamless, intuitive, and visually stunning experiences that captivate users and drive business growth. Our team of creative strategists, designers, and developers collaborate to transform ideas into reality—whether it's building digital products, designing brand identities, or optimizing user experiences. At Innovate Designs, we believe in blending creativity with cutting-edge technology to deliver impactful solutions that stand out in today's competitive market. Let's design the future, together.`);

  const handleSave = () => {
    if (onSave) {
      onSave({
        companyName,
        companyType,
        about
      });
    }

    if (onBack) {
      onBack();
    }
  };

  return (
    <div className="min-h-screen bg-black text-white p-4 sm:p-6">
      <div className="container mx-auto max-w-2xl">
        <div className="mt-8 px-4 sm:px-0">
          <div className="flex flex-col items-center sm:flex-row sm:items-start gap-6 mb-8">
            <div className="w-24 h-24 rounded-full bg-white flex items-center justify-center overflow-hidden">
              <Image
                src="/Ellipse 1 (1).svg"
                alt="Company Logo"
                width={96}
                height={96}
                className="object-cover"
              />
            </div>
            <div className="w-full">
              <div className="mb-4">
                <label className="block text-gray-400 mb-2">Enter company name</label>
                <input 
                  type="text" 
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                  className="w-full bg-[#1a1a1a] border border-gray-700 rounded p-2 text-white text-sm font-normal"
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-400 mb-2">Company</label>
                <input 
                  type="text" 
                  value={companyType}
                  onChange={(e) => setCompanyType(e.target.value)}
                  className="w-full bg-[#1a1a1a] border border-gray-700 rounded p-2 text-white text-sm font-normal"
                />
              </div>
            </div>
          </div>

          <div className="bg-[#1a1a1a] text-black rounded-xl">
            <div className='flex flex-col sm:flex-row justify-between items-center border-gray-700 p-4'>
              <p className="text-white mb-2 sm:mb-0">About</p>
              <button   
                onClick={handleSave}  
                className="text-white border border-black rounded-2xl px-4 py-2 hover:bg-[#2e2d2d] w-full sm:w-auto"
              >
                Save
              </button>
            </div>
            <textarea
              value={about}
              onChange={(e) => setAbout(e.target.value)}
              className="w-full bg-[#1a1a1a] text-gray-300 leading-relaxed p-3 whitespace-pre-wrap"
              rows={6}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;