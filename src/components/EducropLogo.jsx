import React from 'react';

export default function EducropLogo({ className = "w-7 h-7", textClassName = "text-xl font-bold text-[#14234b]" }) {
  return (
    <div className="flex items-center gap-2 select-none cursor-pointer">
      {/* Education themed emblem: glowing graduation cap + dynamic learning prism */}
      <div className={`relative flex items-center justify-center ${className}`}>
        <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-sm">
          {/* Outer shield / pebble rounded shape */}
          <rect width="40" height="40" rx="10" fill="url(#eduGrad)" />
          {/* Inner academic mortarboard cap */}
          <path d="M10 18L20 13L30 18L20 23L10 18Z" fill="#ffffff" />
          <path d="M14 20.5V26C14 28 16.5 30 20 30C23.5 30 26 28 26 26V20.5" stroke="#ffffff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M30 18V24" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" />
          <circle cx="30" cy="25" r="1.5" fill="#38bdf8" />
          {/* Small spark of knowledge */}
          <circle cx="20" cy="18" r="1.5" fill="#0284c7" />
          <defs>
            <linearGradient id="eduGrad" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
              <stop stopColor="#0ea5e9" />
              <stop offset="1" stopColor="#0284c7" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <span className={`tracking-tight font-extrabold ${textClassName}`}>
        Educrop
      </span>
    </div>
  );
}

