import React from "react";

interface RegionProps {
  onMouseEnter: (event: React.MouseEvent) => void;
  onMouseLeave: () => void;
  onClick: () => void;
  isDarkTheme: boolean;
  className?: string;
}

const RUORE: React.FC<RegionProps> = ({ onMouseEnter, onMouseLeave, onClick, isDarkTheme, className }) => {
  return (
    <g>
      <path
        d="M141.6591,252.3384l.6708-2.0125h-.6708l-.6708-.6708v-.6708h0l-.6708-.6708-.6708-.6708v-4.025l.3748-1.1244.296-.8881-1.3417-1.3417v-1.3417l.6708-.6708h0V237.58h-.6708l-1.3417-2.0125-2.0125.6708-1.3416,2.6834-1.3417.6708-1.3417.6708-1.3417,2.0125-1.3417,1.3417h-1.3417l-.6708.6708-2.6833,1.3417-2.0125,2.0125-5.3666.6708v.6708l1.3417,2.0125v1.3417h0l2.0125,1.3417h3.3541v3.3541l2.0125.6708,1.3417,1.3417.6708,1.3417V261.73l.6708,2.6833.6708,2.6833-.6708.6708v1.3417l1.3417-.6708.6708-1.3417.6708.6708h.6708V269.78l1.3417,1.3417.6708,1.3417h2.0125l.6708-.6708.6708-.6708,2.6833.6708,2.6833,1.3417.6708,1.3417v.6708h1.3417l1.3417-.6708.6708.6708.6708.6708h1.3417l.6708,2.0125-.6708,1.3417,3.3541,4.6958h2.0125l1.3417-1.3417.6708,1.3417v.6708l4.6958,2.0125,4.025-3.3541-2.0125-3.3541-2.0125-2.6833h.6708v-.6708l-.6708-1.3417v-1.3417h-.6708l1.3417-2.0125,1.3417-.6708-2.0125-2.0125-2.0125-.6708-.6708.6708h-.6708v-1.3417l-.6708-.6708-.6708,1.3417h-1.3417l-1.3417,2.6833-2.6833-.6708-.6708-.6708-1.3417-.6708h-2.6833l-.6708-.6708-.6708-1.3417h-.6708l1.3417-3.3541-.6708-.6708-.6708-.6708,1.3417-1.3417,1.3417-2.0125-2.0125-.6709-1.3417,1.3417H142.33l-1.3417-4.025H142.33v-.6709l-.6708-1.3416v-1.3417Z"
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        onClick={onClick}
        className={className}
        style={{ fill: isDarkTheme ? '#F0F0F0' : '#0F0F0F' }}
      />
    </g>
  );
};

export default RUORE;
