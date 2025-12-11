import React from 'react';

export const NHSLogo: React.FC<{ className?: string }> = ({ className = "h-8" }) => (
  <div className={`bg-[#005eb8] text-white font-bold italic px-2 py-1 inline-flex items-center justify-center select-none ${className}`}>
    NHS
  </div>
);

export const BrandLogo: React.FC<{ light?: boolean }> = ({ light = false }) => (
  <div className={`font-bold text-2xl tracking-tight flex items-center ${light ? 'text-white' : 'text-[#002f5c]'}`}>
    <span>my</span>
    <span className={light ? 'text-white' : 'text-[#002f5c]'}>digital</span>
    <span className="relative">
      gp
      <span className="absolute -top-1 -right-2 w-2 h-2 bg-[#8c4d9f] rounded-full"></span>
    </span>
  </div>
);