import React from "react";

interface RegionProps {
  onMouseEnter: (event: React.MouseEvent) => void;
  onMouseLeave: () => void;
  onClick: () => void;
  isDarkTheme: boolean;
  className?: string;
}

const RUROS: React.FC<RegionProps> = ({ onMouseEnter, onMouseLeave, onClick, isDarkTheme, className }) => {
  return (
    <g>
      <path
        d="M68.1362,227.5177H67.6l-.47.6708-2.8846.6708-2.75-.6708-1.5429-1.3417-2.1467,2.0125-2.8175-.6708-.47.6708v1.3417h.5367l.4025.6708H52.573l-.2012.6708.2012.6708-.5367,1.3417-.47.6708-1.2075,1.3417-1.7442.6708-2.1467-1.3417-2.08-2.0125H41.7726l-1.2075-.6708-1.6771,1.3417-1.8112,1.3417,1.14.6708.6037.6708,1.9454.6708,1.4758.6708-.1342.6708h-.4025l-.5367,1.3417-.4025-.6708h-.6708l-1.2075-.6708H37.8147l-.1342.6708.2683.6708-.8721.6708-.3354.6708,2.08.6708,3.0187,1.3417.805.6708.2683,1.3417-.6037.6708h-.47l.1342.6708.2683.6708-.2683.6708-.3354.6708,1.5429,2.6833h1.14l-.3354.6708h-.4025l.0671,1.3417-.3354.6708,1.3417.6708,1.14,1.3417,2.415-.6708,1.8112-.6708,2.8846,2.0125,2.08,4.6958,1.2075.6708,1.0062-.6708.3354.6708h.2683l.7379-.6708.5367-1.3417h3.4212l.1342-.6708.1342-.6708,1.8783-1.3417.9392-2.0125H63.5746l-1.14-.6708.4025-.6708-.4025-.6708-.47-.6708H60.8912l.3354-.6708v-.6708h-1.14l.6708-4.025-1.0062-2.0125-.6708-1.3417.3354-.6708h.6708l.805-.6708.8721-.6708,2.2137.6708,2.415-1.3417-.1342-2.0125-.3354-1.3417-.4025-.6708h-.2683l1.8783-2.0125,1.8112-1.3417L68.27,230.201l-.1342-2.6833Z"
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        onClick={onClick}
        className={className}
        style={{ fill: isDarkTheme ? '#F0F0F0' : '#0F0F0F' }}
      />
    </g>
  );
};

export default RUROS;

