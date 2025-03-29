import { DollarSignIcon } from "lucide-react";

// Sample data for payment notifications
const paymentNotifications = [
  {
    id: 1,
    amount: "$15",
    account: "0x411a0fc0a...",
    time: "15 mins ago",
  },
  {
    id: 2,
    amount: "$150",
    account: "0x411a0fc0a...",
    time: "1 week ago",
  },
];

const PaymentsTab = () => {
  return (
    <div className="space-y-4">
      {paymentNotifications.map((notification) => (
        <div
          key={notification.id}
          className="flex p-4 rounded-xl mb-2 bg-[#1a1a1a] hover:bg-[#252525] transition-all duration-200 hover:translate-y-[-1px] hover:shadow-lg hover:border-[#444] border border-transparent"
        >
          <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-[#3a3a3a] to-[#252525] mr-4">
            <DollarSignIcon size={20} className="text-white" />
          </div>
          <div className="flex-1">
            <p className="font-medium">
              {notification.amount} was paid to your account by{" "}
              {notification.account}
            </p>
          </div>
          <div className="text-xs text-gray-500">{notification.time}</div>
        </div>
      ))}
    </div>
  );
};

export default PaymentsTab;
