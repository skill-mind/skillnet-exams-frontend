import Image from "next/image";

interface StatCardProps {
  icon: "percentage" | "briefcase" | "certificate" | "message-square";
  value: string;
  label: string;
  iconColor: string;
}

export default function StatCard({ icon, value, label, iconColor }: StatCardProps) {
  const renderIcon = () => {
    let src = "";
    let altText = "";

    switch (icon) {
      case "percentage":
        src = "/per.svg";
        altText = "Percentage";
        break;
      case "briefcase":
        src = "/box.svg";
        altText = "Briefcase";
        break;
      case "certificate":
        src = "/box.svg";
        altText = "Certificate";
        break;
      case "message-square":
        src = "/msg.svg";
        altText = "Message Square";
        break;
      default:
        return null;
    }
    return <Image src={src} alt={altText} fill style={{ objectFit: "contain" }} />;
  };

  return (
    <div className="flex items-center p-4 border border-gray-800 shadow-md rounded-lg" style={{ background: "#161716" }}>
      {/* Icon Section - Filling container without extra background */}
      <div className="h-12 w-12 relative mr-4 overflow-hidden">
        {renderIcon()}
      </div>
      {/* Value and Label */}
      <div>
        <h2 className="text-2xl font-semibold text-white">{value}</h2>
        <p className="text-sm text-gray-400">{label}</p>
      </div>
    </div>
  );
}
