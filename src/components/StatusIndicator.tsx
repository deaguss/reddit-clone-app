import { User } from 'next-auth';
import { FC, HTMLAttributes } from 'react';

interface StatusIndicatorProps extends HTMLAttributes<HTMLDivElement> {
  user?: Pick<User, 'name'>; 
  isUserPresent: boolean; 
}

const StatusIndicator: FC<StatusIndicatorProps> = ({ 
    user,
    isUserPresent,
    ...props
 }) => {
  const status = isUserPresent ? "online" : "offline";

  const statusConfig = {
    online: {
      className: "bg-green-500",
      text: "Online"
    },
    offline: {
      className: "bg-red-500",
      text: "Offline"
    },
    default: {
      className: "bg-yellow-300",
      text: "Pending"
    }
  };

  const { className, text } = statusConfig[status];

  return (
    <div {...props} className="relative">
      <span className={`absolute w-1.5 h-1.5 me-3 rounded-full bottom-[5px] -left-2 ${className}`}></span>
      <p className='text-[9px] text-[#889295]'>{text}</p>
    </div>
  );
};

export default StatusIndicator
