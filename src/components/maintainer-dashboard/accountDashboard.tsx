import type React from "react";

interface AccountStats {
  id: string;
  value: string | number;
  label: string;
}

const AccountDashboard: React.FC = () => {
  // Account information data

  // Account statistics data
  const accountStats: AccountStats[] = [
    {
      id: "wallet",
      value: "0xD8E...C9F5",
      label: "Wallet Address",
    },
    {
      id: "jobs",
      value: 24,
      label: "Job Posted",
    },
    {
      id: "applicants",
      value: 187,
      label: "Applicants Reviewed",
    },
    {
      id: "hired",
      value: 12,
      label: "People Hired",
    },
    {
      id: "exams",
      value: 8,
      label: "Exams Created",
    },
  ];

  return (
    <div className="mt-28">
      <h3 className="text-sm font-medium text-gray-300 mb-4">
        User Detail
      </h3>
      <div className=" rounded-xl">
        {/* Account header with logo and info */}
        <div className="flex flex-col md:flex-row gap-6 mb-8">
          {/* Logo/Avatar */}
          <div className="flex-shrink-0">
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center">
              <svg
                className="w-16 h-16"
                viewBox="0 0 100 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M30 20C30 31.0457 21.0457 40 10 40V60C21.0457 60 30 68.9543 30 80H50C50 68.9543 58.9543 60 70 60V40C58.9543 40 50 31.0457 50 20H30Z"
                  fill="#4FD1C5"
                />
                <path
                  d="M70 20C70 31.0457 78.9543 40 90 40V60C78.9543 60 70 68.9543 70 80H50C50 68.9543 41.0457 60 30 60V40C41.0457 40 50 31.0457 50 20H70Z"
                  fill="#F56565"
                />
                <path
                  d="M50 40C55.5228 40 60 44.4772 60 50C60 55.5228 55.5228 60 50 60C44.4772 60 40 55.5228 40 50C40 44.4772 44.4772 40 50 40Z"
                  fill="#2D3748"
                />
              </svg>
            </div>
          </div>

          {/* Account Information */}
          <div className="flex gap-8">
            <div className="flex-1">
              <h2>Company Name</h2>
              <h3 className="text-[#ABABAB] text-sm font-medium mb-1">
                Account Type
              </h3>
            </div>
            <div className="flex-1">
              <h3 className="text-[#ABABAB] text-sm font-medium mb-1">
                Company Size: <span className="text-white">101-500 employees</span>
              </h3>
            </div>
            <div className="flex-1">
              <h3 className="text-[#ABABAB] text-sm font-medium mb-1">
                Location: <span className="text-white">Kaduna, Nigeria</span>
              </h3>
            </div>
            <div className="flex-1">
              <h3 className="text-[#ABABAB] text-sm font-medium mb-1">
                Joined: <span className="text-white">May 1, 2021</span>
              </h3>
            </div> 
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {accountStats.map((stat) => (
            <div
              key={stat.id}
              className="bg-[#161716] text-white p-6 rounded-lg"
            >
              <div className="text-lg font-[600] mb-2">{stat.value}</div>
              <div className="text-gray-300 text-[14px] font-[500]">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AccountDashboard;
