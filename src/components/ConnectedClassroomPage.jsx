import React, { useState } from 'react';
import EducropLogo from './EducropLogo';
import Footer from './Footer';
import { 
  ChevronDown, 
  ShoppingCart, 
  Menu, 
  X, 
  ArrowRight,
  PenTool, 
  Eye, 
  ScreenShare, 
  Calculator, 
  LayoutDashboard, 
  Sparkles 
} from 'lucide-react';

export default function ConnectedClassroomPage({
  onNavigate,
  onOpenOrder,
  onOpenLogin,
  onOpenDemo
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const navLinks = [
    { key: 'educropX', label: 'Educrop X' },
    { key: 'devices', label: 'Devices' },
    { key: 'solutions', label: 'Solutions' },
    { key: 'support', label: 'Support' },
    { key: 'partner', label: 'Partner' },
  ];

  return (
    <div className="relative min-h-screen flex flex-col justify-between bg-white text-slate-900 overflow-x-hidden">
      
      {/* 1. Dedicated Page Dark Navigation Bar (matching reference screenshot) */}
      <header className="w-full bg-[#0b1329] text-white border-b border-slate-800 sticky top-0 z-50">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between">
          
          {/* Left: Brand Logo & Desktop Navigation */}
          <div className="flex items-center gap-6 lg:gap-10">
            <div 
              onClick={() => onNavigate && onNavigate('home')} 
              className="cursor-pointer transition-opacity hover:opacity-90"
              title="Return to Home"
            >
              <EducropLogo className="w-7 h-7 sm:w-8 sm:h-8" textClassName="text-xl sm:text-2xl font-bold text-white tracking-tight" />
            </div>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-5 xl:gap-7">
              {navLinks.map((link) => {
                const isOpen = activeDropdown === link.key;
                return (
                  <div key={link.key} className="relative">
                    <button
                      onClick={() => setActiveDropdown(isOpen ? null : link.key)}
                      className="flex items-center gap-1 text-[13.5px] font-medium text-slate-200 hover:text-white transition-colors cursor-pointer py-1"
                    >
                      <span>{link.label}</span>
                      <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
                    </button>

                    {/* Simple Dropdown Preview */}
                    {isOpen && (
                      <div className="absolute top-full left-0 mt-3 w-56 bg-[#111c38] border border-slate-700/80 rounded-xl p-3 shadow-2xl z-50 text-xs text-slate-200">
                        <div 
                          onClick={() => {
                            setActiveDropdown(null);
                            onNavigate && onNavigate('home');
                          }}
                          className="px-3 py-2 rounded-lg hover:bg-slate-800/80 cursor-pointer font-medium"
                        >
                          Home Overview
                        </div>
                        <div 
                          onClick={() => {
                            setActiveDropdown(null);
                            onNavigate && onNavigate('whiteboard');
                          }}
                          className="px-3 py-2 rounded-lg hover:bg-slate-800/80 cursor-pointer font-medium text-slate-200"
                        >
                          Interactive Whiteboard
                        </div>
                        <div 
                          onClick={() => {
                            setActiveDropdown(null);
                            onOpenOrder && onOpenOrder();
                          }}
                          className="px-3 py-2 rounded-lg hover:bg-slate-800/80 cursor-pointer font-medium text-sky-400"
                        >
                          {link.label} Overview &rarr;
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </nav>
          </div>

          {/* Right: CTA Buttons (Shop Now & Login/Sign up) */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onOpenOrder}
              className="bg-[#1e3a7a] hover:bg-[#0284c7] text-white text-[13px] sm:text-[13.5px] font-semibold px-4 sm:px-5 py-2 sm:py-2.5 rounded-lg flex items-center gap-2 shadow-sm transition-all duration-200 cursor-pointer"
            >
              <ShoppingCart className="w-4 h-4" />
              <span>Shop Now</span>
            </button>

            <button
              onClick={onOpenLogin}
              className="border border-slate-600 hover:border-slate-300 text-white text-[13px] sm:text-[13.5px] font-medium px-4 sm:px-4.5 py-2 sm:py-2.5 rounded-lg transition-colors cursor-pointer"
            >
              Login/Sign up
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={onOpenOrder}
              className="bg-[#1e3a7a] text-white p-2 rounded-lg"
              aria-label="Shop Now"
            >
              <ShoppingCart className="w-4 h-4" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-white p-2 rounded-lg hover:bg-slate-800"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#0e172e] border-t border-slate-800 px-4 py-5 space-y-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onNavigate && onNavigate('home');
              }}
              className="w-full text-left py-2 px-3 text-sm font-semibold text-sky-400 hover:bg-slate-800 rounded-lg flex items-center justify-between"
            >
              <span>Back to Home</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            {navLinks.map((link) => (
              <button
                key={link.key}
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenOrder && onOpenOrder();
                }}
                className="w-full text-left py-2 px-3 text-sm text-slate-200 hover:bg-slate-800 rounded-lg flex items-center justify-between"
              >
                <span>{link.label}</span>
                <ChevronDown className="w-4 h-4 text-slate-400" />
              </button>
            ))}
            <div className="pt-3 border-t border-slate-800 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenOrder && onOpenOrder();
                }}
                className="w-full bg-[#1e3a7a] text-white text-sm font-semibold py-2.5 rounded-lg text-center"
              >
                Shop Now
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenLogin && onOpenLogin();
                }}
                className="w-full border border-slate-600 text-white text-sm font-medium py-2.5 rounded-lg text-center"
              >
                Login/Sign up
              </button>
            </div>
          </div>
        )}
      </header>

      {/* 2. Main Page Body */}
      <main className="flex-grow">
        
        {/* Hero Section (Matching Reference Screenshot) */}
        <section className="relative w-full bg-white pt-12 sm:pt-16 lg:pt-24 pb-12 sm:pb-16 lg:pb-20 overflow-hidden">
          <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-16 items-center">
              
              {/* Left Column: Heading, Description & CTA */}
              <div className="lg:col-span-6 xl:col-span-6 text-left">
                <h1 className="text-[34px] sm:text-[44px] md:text-[50px] lg:text-[54px] font-extrabold text-[#11244e] tracking-tight leading-[1.12]">
                  AI-Powered Connected<br />
                  Classroom Technology
                </h1>

                <p className="text-[16px] sm:text-[18px] md:text-[19px] text-[#475569] leading-relaxed mt-4 sm:mt-5 mb-8 sm:mb-9 max-w-lg font-normal">
                  Transforming classroom engagement seamlessly at every stage of learning.
                </p>

                <div>
                  <button
                    onClick={onOpenOrder}
                    className="bg-[#182956] hover:bg-[#0284c7] text-white font-semibold text-[15px] sm:text-[16px] px-8 py-3.5 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer inline-flex items-center gap-2 group"
                  >
                    <span>Get Started</span>
                  </button>
                </div>
              </div>

              {/* Right Column: Interactive Smartboard & Floating Published Card */}
              <div className="lg:col-span-6 xl:col-span-6 flex justify-center">
                <div className="relative w-full max-w-[560px] lg:max-w-none">
                  
                  {/* Smartboard Display Box */}
                  <div className="relative rounded-2xl overflow-hidden shadow-[0_20px_50px_-15px_rgba(15,23,42,0.14)] border border-slate-100 bg-white">
                    <img
                      src="/assets/connected_classroom_hero.png"
                      alt="Educrop AI-Powered Connected Classroom Technology Interactive Display"
                      className="w-full h-auto object-contain select-none"
                    />
                  </div>

                </div>
              </div>

            </div>
          </div>
        </section>

        {/* 3. Statistics Section (Recreated exactly from reference screenshot) */}
        <section className="relative w-full bg-white py-14 sm:py-20 lg:py-24 border-t border-slate-100">
          <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 lg:gap-12 text-center">
              
              {/* Stat 1: 20 million+ users served */}
              <div>
                <div className="text-[36px] sm:text-[44px] md:text-[48px] font-extrabold text-[#11244e] tracking-tight">
                  20 million+
                </div>
                <div className="text-[15px] sm:text-[16.5px] text-[#475569] font-medium mt-1.5 sm:mt-2">
                  users served
                </div>
              </div>

              {/* Stat 2: 10+ countries */}
              <div>
                <div className="text-[36px] sm:text-[44px] md:text-[48px] font-extrabold text-[#11244e] tracking-tight">
                  10+
                </div>
                <div className="text-[15px] sm:text-[16.5px] text-[#475569] font-medium mt-1.5 sm:mt-2">
                  countries
                </div>
              </div>

              {/* Stat 3: 17 languages supported */}
              <div>
                <div className="text-[36px] sm:text-[44px] md:text-[48px] font-extrabold text-[#11244e] tracking-tight">
                  17
                </div>
                <div className="text-[15px] sm:text-[16.5px] text-[#475569] font-medium mt-1.5 sm:mt-2">
                  languages supported
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* 4. Solutions for Every Learning Need Section */}
        <section className="relative w-full bg-white py-16 sm:py-20 lg:py-24 border-t border-slate-100">
          <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Centered Heading & Subtitle */}
            <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
              <h2 className="text-[32px] sm:text-[38px] md:text-[42px] font-extrabold text-[#11244e] tracking-tight leading-[1.2]">
                Solutions for every learning need
              </h2>
              <p className="text-[15px] sm:text-[16.5px] text-[#5a6578] leading-relaxed mt-2.5 sm:mt-3 font-normal">
                Expand the potential of education for all educational ecosystems.
              </p>
            </div>

            {/* 3 Cards in a Single Row on Desktop */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
              
              {/* Card 1 — K-12 */}
              <div className="group bg-[#161922] rounded-[18px] sm:rounded-[20px] overflow-hidden flex flex-col h-full shadow-[0_12px_32px_rgba(0,0,0,0.12)] hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 border border-slate-800/60">
                <div className="relative w-full aspect-[16/10] overflow-hidden bg-slate-900">
                  <img
                    src="/assets/solution_k12.png"
                    alt="School children in a classroom raising hands during K-12 learning"
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-6 sm:p-7 flex flex-col justify-between flex-grow text-left">
                  <div>
                    <h3 className="text-white font-bold text-[19px] sm:text-[21px] tracking-tight mb-2.5 text-left">
                      K-12
                    </h3>
                    <p className="text-slate-300 text-[13.5px] sm:text-[14.5px] leading-relaxed mb-6 text-left font-normal">
                      Online, hybrid, or in-person, X2 is for every possible learning environment.
                    </p>
                  </div>
                  <div>
                    <button
                      onClick={onOpenOrder}
                      className="inline-flex items-center gap-1.5 text-[#38bdf8] hover:text-[#7dd3fc] text-[13.5px] sm:text-[14px] font-semibold transition-colors cursor-pointer text-left p-0"
                    >
                      <span>Know More</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Card 2 — Coaching */}
              <div className="group bg-[#161922] rounded-[18px] sm:rounded-[20px] overflow-hidden flex flex-col h-full shadow-[0_12px_32px_rgba(0,0,0,0.12)] hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 border border-slate-800/60">
                <div className="relative w-full aspect-[16/10] overflow-hidden bg-slate-900">
                  <img
                    src="/assets/solution_coaching.png"
                    alt="Instructor teaching in front of whiteboard during coaching session"
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-6 sm:p-7 flex flex-col justify-between flex-grow text-left">
                  <div>
                    <h3 className="text-white font-bold text-[19px] sm:text-[21px] tracking-tight mb-2.5 text-left">
                      Coaching
                    </h3>
                    <p className="text-slate-300 text-[13.5px] sm:text-[14.5px] leading-relaxed mb-6 text-left font-normal">
                      Level up your teaching with our AI-Powered Classroom Platform.
                    </p>
                  </div>
                  <div>
                    <button
                      onClick={onOpenOrder}
                      className="inline-flex items-center gap-1.5 text-[#38bdf8] hover:text-[#7dd3fc] text-[13.5px] sm:text-[14px] font-semibold transition-colors cursor-pointer text-left p-0"
                    >
                      <span>Know More</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Card 3 — Higher Education */}
              <div className="group bg-[#161922] rounded-[18px] sm:rounded-[20px] overflow-hidden flex flex-col h-full shadow-[0_12px_32px_rgba(0,0,0,0.12)] hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 border border-slate-800/60">
                <div className="relative w-full aspect-[16/10] overflow-hidden bg-slate-900">
                  <img
                    src="/assets/solution_higher_ed.png"
                    alt="Students attending a university lecture in a higher education hall"
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-6 sm:p-7 flex flex-col justify-between flex-grow text-left">
                  <div>
                    <h3 className="text-white font-bold text-[19px] sm:text-[21px] tracking-tight mb-2.5 text-left">
                      Higher Education
                    </h3>
                    <p className="text-slate-300 text-[13.5px] sm:text-[14.5px] leading-relaxed mb-6 text-left font-normal">
                      Help lecturers and teachers to deliver educational excellence.
                    </p>
                  </div>
                  <div>
                    <button
                      onClick={onOpenOrder}
                      className="inline-flex items-center gap-1.5 text-[#38bdf8] hover:text-[#7dd3fc] text-[13.5px] sm:text-[14px] font-semibold transition-colors cursor-pointer text-left p-0"
                    >
                      <span>Know More</span>
                    </button>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

      </main>

      {/* 4. Educrop Footer Section */}
      <Footer />

    </div>
  );
}
