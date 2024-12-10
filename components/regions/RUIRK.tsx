import React from "react";

interface RegionProps {
  onMouseEnter: (event: React.MouseEvent) => void;
  onMouseLeave: () => void;
  onClick: () => void;
  isDarkTheme: boolean;
  className?: string;
}

const RUIRK: React.FC<RegionProps> = ({ onMouseEnter, onMouseLeave, onClick, isDarkTheme, className }) => {
  return (
    <g>
      <path
        d="M405.966,224.8344h-2.0125v2.6833h-.6708l-1.3417.6708-.6708.6708-.6708.6708h0l-1.3416-1.3418-.6149.3074-.7269.3635v.6708h0l-1.3417,3.3541-.6708,3.3541.6708,1.3417.6708,2.0125-.6708.6708-.6708,1.3417.6708.6708v1.3417l-2.6833,3.3541-3.2253,3.2253-1.47.1288-.6708.6708v.6708h0l-.6708,3.3541,1.3417,5.3666,2.0125.6708,1.3417,1.3417v2.6833H390.537v.6708l-.6708.6708-.6708.6708,1.3417,1.3417,1.3417,2.0125-.6708,2.0125-1.3417,1.3417v.6708l-1.3417,2.0125h-.6708l-.6708-.6708-.6708-.6708H385.17v-1.3417H384.5l-1.3417-.6708v-2.0125l-.6708-.6708h-1.3416l-2.0126,1.3418-.6708,1.3417v.6708l-5.3666,3.3541-2.6833,5.3666h.6709V285.88L368.4,284.5381l-1.3417-4.025v-1.3417h-1.3417l-.6708.6708-.6708,2.6833h-2.6833l-1.3417-.6708h-2.0125l-2.0125-.6708-2.0125,3.3542-1.3417,3.3541,1.3417.6707.6707,1.3418v3.3541l.6708.6708-.6708.6708h-.6708L352.3,295.9422l-2.6833,2.6833-.6708,2.0125.6708,1.3417-.6708.6708-.6708.6708v1.3417l-.6708,2.0125v2.0125h-.6708l-2.0125.6708L342.9082,310.7v1.3417l.6708.6708,1.3417.6708,1.3417,2.0125,1.3417,2.0125h1.3417L352.3,320.092l3.3541,2.6833h2.6833l.6708.6708v1.3417l.6708.6708,2.6833-2.0125,2.6833-2.6833.6708,1.3417.6708,2.0125,2.6833,2.0125,3.3541,2.0125.6708,2.0125.6708,1.3417h.6708l.6708-.6708,4.6958,4.025v1.3417l.6708,1.3417.6708.6708,1.3417,1.3417V342.23l.6708,0,.6708-.6708h2.6833l2.0125-2.0125v-.6708l-4.6958-1.3417,2.0125-.6708,3.3541-1.3417-.6708-.6708-1.3417-.6708v-.6708l-.6708-.6708v-.6708l2.0125,2.0125,2.6833,1.3417,8.05-8.7208L409.32,312.042l-.6708-5.3666.6708-5.3666.6708-1.3417h1.3417l-.6708-1.3417-1.3417-.6708v-1.3414l-1.3417,0-.6708-3.3541,1.3417-1.3417,2.0125-1.3417.6708.6708h.6708l.6708-1.3417,1.3417-1.3417.6708.6708v.6708h.6708l.6708.6708h3.3541l2.0125-1.3417.6708-1.3417.6708.6708.6708.6708h3.3541l1.3417-.6708v1.3417l1.3417,1.3417h1.3417l1.3417-.6708,2.6833.6708,3.3541-1.3417,3.3541-4.025,3.3541.6711-.6708.6708h-.6708l-1.3417,1.3417,3.3543-.671.6707,0,1.3417.6708.6708-.6708,1.3417-1.3417.6708.6708h.6708v-4.025H449.57l-.6708-4.6958V277.83h.6708v-2.0125h.6708l.6708-.6708-1.3417-1.3417,1.3417-1.3417,2.0125.6708,1.3417.6708,2.6833-.6708-.6708-1.3417v-.6708l-.6708-.6708-.6708-1.3417v-2.0125l-.6708-1.3417v-1.3417l-.6708-1.3417h-6.7083V261.73l-.6708-.6708v-1.3417l-1.3417-.6708-1.3417-1.3417-2.0125-.6708h-2.6833l-2.0122,2.0127-1.3419,0-1.3417.6708L433.47,261.73l-.6708,1.3417h-1.3417l-2.6833,4.025-3.3541,3.3542.6708-2.0125-1.3417-.6708-.6708-1.3417v-.6708l-1.2084,1.2089-.8038.8038-1.3419,0H418.041v.6708H417.37l-2.0125-.6708-.6708,1.3417-3.3541.6708h-1.3417l-.6708-2.6833v-3.3541l.6708-.6708.6708-.6708v-2.0125l1.3417-4.025,1.3417-3.3541-2.0125-2.0125-.6708-3.3541,1.3417-1.3417.6708-1.3417-1.3417-2.0125-1.3417-1.3417v-3.3541l-.6708-4.6958-2.0125-2.0125-2.0122-.6707,1.3414-2.0126.6708-.6708-.6708-2.0125-.6708-1.3417Z"
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        onClick={onClick}
        className={className}
        style={{ fill: isDarkTheme ? '#F0F0F0' : '#0F0F0F' }}
      />
    </g>
  );
};

export default RUIRK;

