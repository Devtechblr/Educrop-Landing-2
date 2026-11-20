import React from 'react';
import ProductDisplay from './ProductDisplay';

export default function HeroSection({ onOpenGetStarted, onOpenDemo, onOpenApp, onSearchSelect }) {
  return (
    <section className="relative w-full flex-grow flex flex-col justify-between items-center overflow-hidden min-h-[calc(100vh-75px)]">
      
      {/* Background Classroom Image Layer */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat pointer-events-none z-0"
        style={{
          backgroundImage: `url('./assets/classroom_backdrop_wall_2k.png')`,
          backgroundPosition: 'center 40%',
        }}
      >
        {/* Subtle lighting overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#e5eaf1]/20 via-transparent to-[#dce2ec]/30 pointer-events-none" />
      </div>

      {/* Main Hero Content Container */}
      <div className="relative z-10 w-full max-w-[1200px] mx-auto px-4 sm:px-6 flex flex-col items-center justify-between flex-grow pt-2 sm:pt-4 pb-4 sm:pb-6">
        
        {/* 1. Main Heading */}
        <div className="text-center pt-1 pb-3 sm:pb-4 select-none">
          <h1 className="text-[26px] sm:text-[34px] md:text-[40px] lg:text-[42px] font-extrabold text-[#14234b] leading-[1.12] tracking-tight">
            AI-Powered<br />
            <span className="inline-flex items-center">
              Connected Classroom
              <sup className="text-[13px] sm:text-[16px] md:text-[18px] font-bold text-[#14234b] ml-0.5 -top-3 sm:-top-3.5">®</sup>
              &nbsp;Device
            </span>
          </h1>
        </div>

        {/* 2. Main Product Display (Interactive Smart Classroom Display) */}
        <div className="w-full flex justify-center my-auto py-1">
          <ProductDisplay 
            onOpenApp={onOpenApp}
            onSearchSelect={onSearchSelect}
          />
        </div>

        {/* 3. Hero CTA Buttons */}
        <div className="flex items-center justify-center gap-3 sm:gap-4 pt-3 sm:pt-5 pb-1 z-20">
          
          {/* Get Started Button */}
          <button
            onClick={onOpenGetStarted}
            className="group relative px-6 sm:px-7 py-2 sm:py-2.5 rounded-lg sm:rounded-xl font-semibold text-[13px] sm:text-[14px] text-white bg-gradient-to-b from-[#2a426e] via-[#1c2e52] to-[#142344] shadow-[0_4px_16px_rgba(20,35,68,0.3)] border border-slate-600/40 hover:shadow-[0_6px_20px_rgba(20,35,68,0.45)] hover:from-[#324f84] hover:to-[#172950] active:scale-95 transition-all duration-150 cursor-pointer"
          >
            <span className="relative z-10">Get Started</span>
            <div className="absolute inset-0 rounded-lg sm:rounded-xl bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
          </button>

          {/* Watch Demo Button */}
          <button
            onClick={onOpenDemo}
            className="group px-6 sm:px-7 py-2 sm:py-2.5 rounded-lg sm:rounded-xl font-semibold text-[13px] sm:text-[14px] text-[#14234b] bg-white/95 backdrop-blur-sm border-[1.5px] border-[#14234b]/80 shadow-[0_4px_12px_rgba(0,0,0,0.05)] hover:bg-slate-50 hover:border-[#14234b] hover:shadow-[0_6px_16px_rgba(0,0,0,0.08)] active:scale-95 transition-all duration-150 cursor-pointer"
          >
            <span>Watch Demo</span>
          </button>

        </div>

      </div>

    </section>
  );
}
