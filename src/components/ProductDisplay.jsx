import React, { useState, useEffect } from 'react';
import { Mic, Sparkles } from 'lucide-react';

export default function ProductDisplay({ onOpenApp, onSearchSelect }) {
  const [promptText, setPromptText] = useState("Make a quiz on the water cycle");
  const [isTyping, setIsTyping] = useState(false);

  const samplePrompts = [
    "Make a quiz on the water cycle",
    "Explain photosynthesis with 3D models",
    "Solve 2x² + 5x - 12 = 0 step by step",
    "Generate 5 MCQs on World War II",
    "Draw an interactive diagram of human heart"
  ];

  // Rotate through sample prompts subtly
  useEffect(() => {
    let promptIndex = 0;
    const interval = setInterval(() => {
      promptIndex = (promptIndex + 1) % samplePrompts.length;
      setPromptText(samplePrompts[promptIndex]);
    }, 4500);
    return () => clearInterval(interval);
  }, []);

  const apps = [
    {
      id: 'whiteboard',
      name: 'Whiteboard',
      color: 'bg-[#0091ff]',
      icon: (
        <svg viewBox="0 0 36 36" fill="none" className="w-6 h-6 sm:w-7 sm:h-7 text-white">
          <path d="M7 26C11 18 13 14 17 21C21 28 23 15 29 11" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M25 25L28 28" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
      )
    },
    {
      id: 'google',
      name: 'Google',
      color: 'bg-white shadow-sm',
      icon: (
        <svg viewBox="0 0 36 36" fill="none" className="w-6 h-6 sm:w-7 sm:h-7">
          {/* Google Workspace style 4-color grid */}
          <rect x="6" y="6" width="10" height="10" rx="2" fill="#4285F4" />
          <rect x="20" y="6" width="10" height="10" rx="2" fill="#EA4335" />
          <rect x="6" y="20" width="10" height="10" rx="2" fill="#34A853" />
          <rect x="20" y="20" width="10" height="10" rx="2" fill="#FBBC05" />
        </svg>
      )
    },
    {
      id: 'eduai',
      name: 'EduAI',
      color: 'bg-gradient-to-tr from-[#3b1578] via-[#5c1cb0] to-[#7928ca]',
      icon: (
        <div className="relative flex items-center justify-center">
          <svg viewBox="0 0 36 36" fill="none" className="w-6 h-6 sm:w-7 sm:h-7 text-white">
            <path d="M18 6L30 13V23L18 30L6 23V13L18 6Z" fill="#7928ca" stroke="#c084fc" strokeWidth="1.5" />
            <path d="M18 6V30M6 13L30 23M30 13L6 23" stroke="#a855f7" strokeWidth="1.2" opacity="0.6" />
          </svg>
          <Sparkles className="w-3.5 h-3.5 text-yellow-300 absolute -top-1 -right-1 animate-pulse" />
        </div>
      )
    },
    {
      id: 'sharex',
      name: 'Share X',
      color: 'bg-[#0284c7]',
      icon: (
        <svg viewBox="0 0 36 36" fill="none" className="w-6 h-6 sm:w-7 sm:h-7 text-white">
          {/* Big monitor */}
          <rect x="5" y="7" width="20" height="15" rx="2" stroke="currentColor" strokeWidth="2.2" />
          <path d="M11 26H19M15 22V26" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
          {/* Overlapping mobile phone */}
          <rect x="18" y="14" width="13" height="17" rx="2.5" fill="#0284c7" stroke="#ffffff" strokeWidth="2.2" />
          <circle cx="24.5" cy="27.5" r="1" fill="#ffffff" />
        </svg>
      )
    },
    {
      id: 'visionx',
      name: 'VisionX',
      color: 'bg-[#0f1f3d]',
      icon: (
        <svg viewBox="0 0 36 36" fill="none" className="w-6 h-6 sm:w-7 sm:h-7 text-[#00f2fe]">
          <circle cx="18" cy="18" r="14" fill="#0a1226" stroke="#00d2ff" strokeWidth="1.8" />
          <circle cx="18" cy="18" r="7" fill="#00f2fe" opacity="0.8" />
          <circle cx="18" cy="18" r="3.5" fill="#ffffff" />
          <circle cx="15.5" cy="15.5" r="1.5" fill="#ffffff" />
        </svg>
      )
    }
  ];

  return (
    <div className="relative mx-auto w-full max-w-[620px] sm:max-w-[680px] md:max-w-[740px] lg:max-w-[760px] select-none">
      
      {/* Outer Metallic Bezel of the Interactive Flat Panel */}
      <div className="relative rounded-[14px] sm:rounded-[18px] p-[5px] sm:p-[6px] md:p-[7px] bg-gradient-to-b from-[#ccd3dd] via-[#98a5b5] to-[#7a8799] shadow-[0_22px_45px_-8px_rgba(15,23,42,0.45),0_12px_24px_-10px_rgba(0,0,0,0.3),inset_0_1px_1px_rgba(255,255,255,0.8)] border border-[#b0bccb]">
        
        {/* Top Hardware Sensors / 4K Camera Notch */}
        <div className="absolute top-[2px] left-1/2 -translate-x-1/2 z-30 flex items-center gap-1.5 px-3 py-[2px] bg-[#222834] rounded-full border border-slate-700/60 shadow-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-slate-500/80"></span>
          <span className="w-1.5 h-1.5 rounded-full bg-slate-500/80"></span>
          {/* Main 4K Camera Lens with subtle blue lens reflection */}
          <div className="w-2.5 h-2.5 rounded-full bg-[#0a0e17] border border-cyan-500/40 flex items-center justify-center">
            <span className="w-1 h-1 rounded-full bg-cyan-400"></span>
          </div>
          <span className="w-1.5 h-1.5 rounded-full bg-slate-500/80"></span>
          <span className="w-1.5 h-1.5 rounded-full bg-slate-500/80"></span>
        </div>

        {/* Inner Screen Display (16:10 ratio) */}
        <div className="relative w-full aspect-[16/10] bg-[#02050f] rounded-[9px] sm:rounded-[12px] overflow-hidden flex flex-col items-center justify-between pt-6 sm:pt-8 md:pt-9 pb-3 sm:pb-4 px-4 sm:px-8 border border-black/80 shadow-[inset_0_0_20px_rgba(0,0,0,0.9)]">
          
          {/* Dynamic Cyber Light Grid / Perspective Ground Glow at bottom */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {/* Dark deep navy gradient background */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#02040d] via-[#040a1d] to-[#041935] opacity-95"></div>

            {/* Glowing Perspective Light Trails at the bottom */}
            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-[140%] h-[55%] opacity-90">
              <svg viewBox="0 0 800 300" preserveAspectRatio="none" className="w-full h-full">
                <defs>
                  <linearGradient id="laserCyan" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#00f2fe" stopOpacity="0" />
                    <stop offset="30%" stopColor="#00c6ff" stopOpacity="0.8" />
                    <stop offset="50%" stopColor="#38ef7d" stopOpacity="0.9" />
                    <stop offset="70%" stopColor="#0072ff" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#00f2fe" stopOpacity="0" />
                  </linearGradient>
                  <linearGradient id="glowRays" x1="50%" y1="0%" x2="50%" y2="100%">
                    <stop offset="0%" stopColor="#00d2ff" stopOpacity="0" />
                    <stop offset="40%" stopColor="#00d2ff" stopOpacity="0.25" />
                    <stop offset="100%" stopColor="#38ef7d" stopOpacity="0.75" />
                  </linearGradient>
                </defs>

                {/* Perspective speed rays */}
                <path d="M400 30 L0 300 M400 30 L100 300 M400 30 L220 300 M400 30 L320 300 M400 30 L400 300 M400 30 L480 300 M400 30 L580 300 M400 30 L700 300 M400 30 L800 300" stroke="url(#laserCyan)" strokeWidth="1.2" opacity="0.65" />
                
                {/* Horizontal speed grid lines */}
                <line x1="120" y1="120" x2="680" y2="120" stroke="#00c6ff" strokeWidth="0.8" opacity="0.4" />
                <line x1="80" y1="170" x2="720" y2="170" stroke="#00f2fe" strokeWidth="1" opacity="0.6" />
                <line x1="30" y1="225" x2="770" y2="225" stroke="#38ef7d" strokeWidth="1.6" opacity="0.8" />
                <line x1="0" y1="275" x2="800" y2="275" stroke="#00d2ff" strokeWidth="2.4" opacity="0.95" />

                {/* Bottom ambient glow */}
                <ellipse cx="400" cy="270" rx="350" ry="60" fill="url(#glowRays)" />
              </svg>
            </div>
          </div>

          {/* Top Screen Branding: Educrop X */}
          <div className="relative z-10 flex items-center justify-center gap-2">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold tracking-tight text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
              Educrop <span className="bg-gradient-to-r from-[#00d2ff] to-[#0072ff] bg-clip-text text-transparent">X</span>
            </h2>
          </div>

          {/* Center: Search / Prompt Pill Bar */}
          <div className="relative z-10 w-full max-w-[370px] sm:max-w-[430px] md:max-w-[480px]">
            <div 
              onClick={() => onSearchSelect && onSearchSelect(promptText)}
              className="group cursor-pointer bg-white rounded-full py-1.5 sm:py-2 px-3 sm:px-4 flex items-center justify-between shadow-[0_8px_25px_rgba(0,0,0,0.35),0_0_15px_rgba(0,210,255,0.2)] border border-white/80 transition-all duration-200 hover:scale-[1.02] hover:shadow-[0_10px_30px_rgba(0,210,255,0.3)]"
            >
              <div className="flex items-center gap-2 sm:gap-2.5 overflow-hidden w-full">
                {/* AI Sparkle Icon with gradient badge */}
                <div className="flex-shrink-0 w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-gradient-to-tr from-[#6366f1] via-[#8b5cf6] to-[#ec4899] flex items-center justify-center shadow-sm">
                  <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" />
                </div>
                {/* Prompt Text / Animated Placeholder */}
                <span className="text-[11px] sm:text-[13px] text-slate-700 font-medium truncate select-none">
                  {promptText}
                </span>
              </div>
              
              {/* Microphone Icon */}
              <div className="flex-shrink-0 text-slate-400 group-hover:text-sky-600 transition-colors pl-2">
                <Mic className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
              </div>
            </div>
          </div>

          {/* Bottom: 5 Application Icons */}
          <div className="relative z-10 w-full max-w-[480px] flex items-center justify-between px-2 sm:px-4 pt-1 sm:pt-2">
            {apps.map((app) => (
              <button
                key={app.id}
                onClick={() => onOpenApp && onOpenApp(app.id)}
                className="group flex flex-col items-center gap-1 sm:gap-1.5 transition-all duration-150 hover:-translate-y-1 focus:outline-none"
              >
                {/* Icon Squircle */}
                <div className={`w-9 h-9 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-xl sm:rounded-2xl ${app.color} flex items-center justify-center shadow-[0_4px_12px_rgba(0,0,0,0.4)] group-hover:shadow-[0_0_16px_rgba(0,210,255,0.6)] group-hover:scale-105 transition-all duration-200`}>
                  {app.icon}
                </div>
                {/* App Label */}
                <span className="text-[10px] sm:text-[11.5px] font-semibold text-white/90 group-hover:text-white drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)] tracking-tight">
                  {app.name}
                </span>
              </button>
            ))}
          </div>

        </div>

        {/* Bottom Speaker Bar with Centered "Educrop X" Branding */}
        <div className="w-full pt-1 sm:pt-1.5 pb-0.5 px-3 flex items-center justify-center">
          <div className="flex items-center gap-1 select-none opacity-85">
            <span className="text-[7.5px] sm:text-[9px] font-bold tracking-wider uppercase text-[#384659]">
              Educrop X
            </span>
          </div>
        </div>

      </div>

    </div>
  );
}

