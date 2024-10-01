import { NotificationType } from "@/types/type";

const Notification = ({ message }: NotificationType) => {
  return (
    <div className="bg-[#7B3AED] h-[50px] text-center flex items-center justify-center">
      <p className="text-white">{message}</p>
    </div>
  );
};

export default Notification;
