import React from "react";

interface RegionProps {
  onMouseEnter: (event: React.MouseEvent) => void;
  onMouseLeave: () => void;
  onClick: () => void;
  isDarkTheme: boolean;
  className?: string;
}

const RUVLG: React.FC<RegionProps> = ({ onMouseEnter, onMouseLeave, onClick, isDarkTheme, className }) => {
  return (
    <g>
      <path
        d="M124.8884,152.3848h-.6708l-1.3417-.6708v-1.3417l-.6708-.6708h-.6708v-2.6833l.6708-1.3417.6708-2.0125.6708-2.0125-2.0125-2.0125-1.3417-1.3417h-1.3417v.6708l-2.0125.6708-2.6833.6708-.6708-.6708-.6708-1.3417h-1.3417l-.6708.6708v.6708l-1.3417,1.3417-2.0125.6708-2.0125,1.3417v2.0125l-.6708.6708v.6708h.6708l-.6708.6708h-1.3417l-.6708.6708-.6708.6708-1.3417-.6708H98.7261l-.6708,2.0125v1.3417h.6708v.6708h.6708l.6708.6708v4.025H102.08l2.6833.6708v4.025l.6708-.6708,2.0125.6708v-2.0125l.6708-2.0125.6708.6708-.6708,1.3417v2.6833l2.0125,1.3417.6708-.6708h.6708l2.0125,2.0125v3.3541l2.6833,3.3542,2.6833-.6708v-.6708l.6708-.6708,2.0125.6708,2.0125.6708.6708-.6708.6708-.6708v1.3417h.6708l.6708.6708v2.0125l2.6833.6708v.6708h0l.6708.6708,1.3417.6708.6708,1.3417.6708,1.3417,4.6958,3.3541h.6708l.6708-.6708,1.3417.6708h.6708l.6708-.6708.6708-.6708,1.3417.6708.6708,1.3417,1.3417-1.3417-.6708-1.3417.6708-.6708.6708-.6708h-2.0125l-.6708-.6709v-1.3416l1.3417-.6708,1.3416.6708,2.6833-2.0124,1.3417-1.3417-.6708-2.6833-1.3417-.6708v-2.0125h-4.025l-2.0125-2.6833-1.3417-2.0125-1.3417.6708h-2.0125v-1.3417l-1.3417-.6707h-.6708l-.6708-1.3416v-.6708l-.6708-.6708-.6708-.6708h-.6708v-.6708l-1.3417.6708h-2.0125v-1.3417l-.6708-.6708-.6708-.6708-.6708-.6708-.6708-.6708h-.6708v-.6708l-.6708-1.3417Z"
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        onClick={onClick}
        className={className}
        style={{ fill: isDarkTheme ? '#F0F0F0' : '#0F0F0F' }}
      />
    </g>
  );
};

export default RUVLG;

