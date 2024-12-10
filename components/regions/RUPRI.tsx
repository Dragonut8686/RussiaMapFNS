import React from "react";

interface RegionProps {
  onMouseEnter: (event: React.MouseEvent) => void;
  onMouseLeave: () => void;
  onClick: () => void;
  isDarkTheme: boolean;
  className?: string;
}

const RUPRI: React.FC<RegionProps> = ({ onMouseEnter, onMouseLeave, onClick, isDarkTheme, className }) => {
  return (
    <g>
      <path
        d="M583.0651,336.1921h-2.0125l-1.3417-.6708V334.18l.6708-1.3417-.6708-1.3417-1.3417-1.3417-.6708-.6708h0l-2.6834,1.3414-1.3416,2.0128h-1.3417v.6708l.6708.6708.6708.6708v.6708l.6708.6708h2.6833l-1.3417,4.025-2.6833,1.3417v2.6833l-2.6833,2.0125-3.3541,1.3417-.6708-.6708-.6708-.6708-.6708.6708-.6708.6708v-1.3417l-.6708-.6708-.6708.6708-.6708-.6708h-.6708l-1.3417,2.0125-.6708,2.0125V350.95l-1.3417,1.3417v7.3791l-.6708,1.3417.6708,1.3417-.6708.6708-.6708,1.3417.6708,2.0125-1.3417,1.3417h-5.3666l-2.0125.6708-.6708,2.6833-1.3417.6708-.6708.6708.6708,1.3417.6708,1.3417,2.0125,4.025.6708,4.025.6708.6708v.6708l-.6708,4.6958-2.0125.6708-.6708,1.3417h.6708l.6708.6708.6708,1.3417.6708,1.3417.6708-1.3417v-.6708l-.6708-.6708-.6708-.6708h3.3541v-1.3417l.6708-2.6833,1.3417-2.0125-.6708-.6708.6708-.6708h.6708v2.0125l.6708-.6708.6708-.6708.6708-.6708V383.15l.6708,2.0125v1.3417h.6708v-.6708h.6708l.6708.6708.6708-.6708h0l1.3417.6708.6708.6708h0v-1.3417l.6708.6708h0l1.3417-.6708,1.3417-1.3417,4.025-4.025,2.6833-4.6958.6708-.6708v-1.3417h.6708v-2.6833l.6708-2.0125v-1.3417l1.3417-1.3417.6708-3.3541L578.3693,359l1.3417-4.025,1.3417-3.3541.6708-3.3541.6708-4.025v-3.3542l.6708-2.6833Z"
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        onClick={onClick}
        className={className}
        style={{ fill: isDarkTheme ? '#F0F0F0' : '#0F0F0F' }}
      />
    </g>
  );
};

export default RUPRI;
