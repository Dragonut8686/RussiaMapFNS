import React from "react";

interface RegionProps {
  onMouseEnter: (event: React.MouseEvent) => void;
  onMouseLeave: () => void;
  onClick: () => void;
  isDarkTheme: boolean;
  className?: string;
}

const RUCU: React.FC<RegionProps> = ({ onMouseEnter, onMouseLeave, onClick, isDarkTheme, className }) => {
  return (
    <g>
      <path
        d="M122.8759,205.38l-.6708-.6708h-2.0125l-.6708.6708-1.3417.6708h0v2.0125l.6708,1.3417h-2.0125l-1.3417.6708v.6708h-.6708v.6708h.6708l-.6708,2.6833,1.3417,2.0125,2.0125,1.3417.6708-.6708h.6708l.6708.6708h2.6833l.6708-2.0125-.6708-.6708v-.6708l3.3541-.6708h0v-.6708h2.0125l-.6708-2.0125v-1.3417l-.6708-.6708v-.6708l-.6708-2.0125-3.3541-.6708Z"
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        onClick={onClick}
        className={className}
        style={{ fill: isDarkTheme ? '#F0F0F0' : '#0F0F0F' }}
      />
    </g>
  );
};

export default RUCU;
