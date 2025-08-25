import React from 'react';

interface LogoProps {
  color?: 'black' | 'white';
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ color = 'white', className = '' }) => {
  const borderColor = color === 'white' ? 'border-white' : 'border-black';
  const fillColor = color === 'white' ? 'bg-white' : 'bg-black';

  return (
    <div className={`flex items-center space-x-1 ${className}`}>
      {/* First rectangle - fully filled */}
      <div className={`w-6 h-10 ${fillColor}`}></div>

      {/* Second rectangle - outlined, with left 30% filled */}
      <div className={`w-8 h-10 border-2 ${borderColor} relative`}>
        {/* Left 30% filled */}
        <div className={`absolute left-0 top-0 w-[40%] h-full ${fillColor}`}></div>
      </div>
    </div>
  );
};

export default Logo;