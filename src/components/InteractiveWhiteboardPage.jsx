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
  Sparkles,
  FilePlus2,
  Box,
  BookOpen
} from 'lucide-react';

/**
 * Custom Math Function Icon (fx) matching the OCR card in reference screenshot
 */
function MathFunctionIcon({ className = "w-6 h-6" }) {
  return (
    <svg 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2.2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
      aria-hidden="true"
    >
      <rect width="18" height="18" x="3" y="3" rx="4" />
      <path d="M8.5 16c1.8 0 2.5-.8 2.5-4V8c0-1.8-.8-2.5-2.5-2.5" />
      <path d="M8.5 11.5h3.5" />
      <path d="M14 16l4-5.5" />
      <path d="M18 16l-4-5.5" />
    </svg>
  );
}

/**
 * Custom Diagonal Texture / Grid Pattern Icon matching Customizable Background card
 */
function TextureGridIcon({ className = "w-6 h-6" }) {
  return (
    <svg 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2.2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
      aria-hidden="true"
    >
      <rect width="18" height="18" x="3" y="3" rx="4" />
      <line x1="3" y1="11" x2="11" y2="3" />
      <line x1="3" y1="17" x2="17" y2="3" />
      <line x1="7" y1="21" x2="21" y2="7" />
      <line x1="13" y1="21" x2="21" y2="13" />
    </svg>
  );
}

const WHITEBOARD_FEATURES = [
  {
    id: 'write-annotate',
    title: 'Write and Annotate',
    description: 'Write and annotate with adjustable pen features.',
    image: '/assets/wb_feature_annotate.png',
    alt: 'Whiteboard write and annotate tool with adjustable pen settings and color palette',
    icon: PenTool
  },
  {
    id: 'ocr',
    title: 'Optical Character Recognition (OCR)',
    description: 'Write equations and EduAI solves them for you.',
    image: '/assets/wb_feature_ocr.png',
    alt: 'Optical Character Recognition solving handwritten mathematical equations',
    icon: MathFunctionIcon
  },
  {
    id: 'import-files',
    title: 'Import Files',
    description: 'Import videos, images & pdf to Whiteboard.',
    image: '/assets/wb_feature_import.png',
    alt: 'Whiteboard file import tool supporting PDF, PPT, videos, and images',
    icon: FilePlus2
  },
  {
    id: 'customizable-background',
    title: 'Customizable Background',
    description: 'Customizable background themes & colours.',
    image: '/assets/wb_feature_background.png',
    alt: 'Customizable background themes and paper grid patterns for interactive whiteboard',
    icon: TextureGridIcon
  },
  {
    id: '2d-3d-shapes',
    title: '2D & 3D Shapes',
    description: 'Instantly Generate 2D & 3D Shapes for efficient teaching.',
    image: '/assets/wb_feature_shapes.png',
    alt: 'Interactive 2D and 3D geometric shape generation tool with lengths and angles toggles',
    icon: Box
  },
  {
    id: 'curriculum-books',
    title: 'Curriculum Books',
    description: 'Instant access to curriculum books on the Whiteboard.',
    image: '/assets/wb_feature_books.png',
    alt: 'Instant access to curriculum textbooks and educational library on the Whiteboard',
    icon: BookOpen
  }
];

export default function InteractiveWhiteboardPage({
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

  const whatsInsideItems = [
    { name: "Connected Classroom Platform", icon: LayoutDashboard, route: 'connected-classroom' },
    { name: "Interactive Whiteboard", icon: PenTool, route: 'whiteboard' },
    { name: "EduAI", icon: Sparkles, route: 'home' },
    { name: "Vision X", icon: Eye, route: 'home' },
    { name: "Share X", icon: ScreenShare, route: 'home' },
    { name: "Click X", icon: Calculator, route: 'home' },
  ];

  const handleDropdownItemClick = (item) => {
    setActiveDropdown(null);
    setMobileMenuOpen(false);
    if (item.route && onNavigate) {
      onNavigate(item.route);
    } else {
      onOpenOrder && onOpenOrder();
    }
  };

  return (
    <div className="relative min-h-screen flex flex-col justify-between bg-black text-white overflow-x-hidden selection:bg-yellow-400 selection:text-black">
      
      {/* 1. Dark Navigation Bar (matching reference screenshot) */}
      <header className="w-full bg-[#0b1329] text-white border-b border-slate-800 sticky top-0 z-50">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between">
          
          {/* Left: Brand Logo & Desktop Navigation */}
          <div className="flex items-center gap-6 lg:gap-10">
            <div 
              onClick={() => onNavigate && onNavigate('home')} 
              className="cursor-pointer transition-opacity hover:opacity-90 flex items-center"
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

                    {/* Educrop X Dropdown Menu */}
                    {isOpen && link.key === 'educropX' && (
                      <div className="absolute top-full left-0 mt-3 w-64 bg-[#111c38] border border-slate-700/80 rounded-xl p-3 shadow-2xl z-50 text-xs text-slate-200">
                        <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider px-3 py-1 mb-1">
                          What's Inside
                        </div>
                        {whatsInsideItems.map((item) => {
                          const IconComp = item.icon;
                          const isCurrent = item.route === 'whiteboard';
                          return (
                            <div
                              key={item.name}
                              onClick={() => handleDropdownItemClick(item)}
                              className={`flex items-center gap-2.5 px-3 py-2 rounded-lg cursor-pointer transition-colors ${
                                isCurrent 
                                  ? 'bg-sky-500/20 text-sky-400 font-semibold' 
                                  : 'hover:bg-slate-800/80 text-slate-200'
                              }`}
                            >
                              <IconComp className="w-4 h-4 text-sky-400 shrink-0" />
                              <span>{item.name}</span>
                            </div>
                          );
                        })}
                      </div>
                    )}

                    {/* Generic Dropdown for other links */}
                    {isOpen && link.key !== 'educropX' && (
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
            <div className="text-xs font-bold text-slate-400 uppercase tracking-wider px-3 pt-2">
              Educrop X Ecosystem
            </div>
            {whatsInsideItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleDropdownItemClick(item)}
                className="w-full text-left py-2 px-3 text-sm text-slate-200 hover:bg-slate-800 rounded-lg flex items-center justify-between"
              >
                <span>{item.name}</span>
                <ArrowRight className="w-4 h-4 text-slate-500" />
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

      {/* 2. Main Body with Immersive Black Canvas */}
      <main className="flex-grow relative bg-black overflow-hidden">
        
        {/* Section 1: Hero Section (CONNECT · INTERACT · COLLABORATE) */}
        <section className="relative pt-12 sm:pt-16 lg:pt-20 pb-16 sm:pb-24 overflow-hidden">
          
          {/* Subtle Decorative Chalk Doodles (matching reference screenshot) */}
          <div className="absolute top-8 right-6 sm:right-16 pointer-events-none opacity-40 hidden sm:block">
            <svg className="w-14 h-14 text-white" viewBox="0 0 60 60" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <path d="M20 40L8 52" />
              <path d="M30 30L20 12" />
              <path d="M42 42L54 30" />
            </svg>
          </div>

          <div className="absolute top-44 left-3 sm:left-8 pointer-events-none opacity-35 hidden sm:block">
            <svg className="w-16 h-16 text-white" viewBox="0 0 70 70" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
              <path d="M12 35C18 28 30 25 34 38C36 48 26 54 18 50C12 48 10 38 22 34C34 30 46 42 42 54" />
              <path d="M4 24L11 30" />
              <path d="M6 54L14 60" />
            </svg>
          </div>

          <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            
            {/* Eyebrow: CONNECT . INTERACT . COLLABORATE */}
            <div className="inline-block mb-3 sm:mb-4">
              <span className="text-[11px] sm:text-[13px] font-bold text-slate-300 tracking-[0.25em] sm:tracking-[0.3em] uppercase">
                CONNECT &bull; INTERACT &bull; COLLABORATE
              </span>
            </div>

            {/* Heading with Yellow Underline on Interactive Whiteboard */}
            <h1 className="text-[32px] sm:text-[42px] md:text-[48px] lg:text-[52px] font-extrabold text-white tracking-tight leading-[1.18] mb-4">
              AI-Powered{' '}
              <span className="relative inline-block whitespace-nowrap">
                Interactive Whiteboard
                {/* Playful Yellow Chalk Underline matching screenshot */}
                <svg
                  viewBox="0 0 280 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute -bottom-2 sm:-bottom-2.5 left-0 w-full h-2.5 sm:h-3 text-[#facc15] overflow-visible pointer-events-none"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M3 13C60 6 180 3 277 11C230 15 120 17 40 14"
                    stroke="currentColor"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </h1>

            {/* Description */}
            <p className="text-[14px] sm:text-[15.5px] md:text-[16px] text-slate-300 max-w-2xl mx-auto leading-relaxed mb-8 sm:mb-9 font-normal">
              Elevate your teaching with our interactive whiteboard, featuring AI-powered tools for a smarter, more engaging and collaborative learning experience.
            </p>

            {/* Centered CTA: Get Started Button */}
            <div className="mb-12 sm:mb-16">
              <button
                onClick={onOpenOrder}
                className="bg-gradient-to-r from-[#172554] to-[#1e3a8a] hover:from-[#1d4ed8] hover:to-[#0284c7] text-white font-semibold text-[14px] sm:text-[15px] px-8 py-3 rounded-lg border border-blue-400/30 shadow-[0_4px_24px_rgba(30,58,138,0.35)] hover:shadow-[0_4px_30px_rgba(2,132,199,0.5)] transition-all duration-200 cursor-pointer"
              >
                Get started
              </button>
            </div>

            {/* Whiteboard Device Preview Mockup */}
            <div className="relative max-w-[960px] mx-auto">
              
              {/* Outer Device Frame (Dark Charcoal Bezel) */}
              <div className="relative rounded-[24px] sm:rounded-[32px] p-3 sm:p-5 lg:p-6 bg-[#161b26] border border-slate-700/70 shadow-[0_30px_70px_-15px_rgba(0,0,0,0.9),0_0_60px_rgba(30,58,138,0.18)] overflow-hidden">
                
                {/* Inner Whiteboard Screen Image */}
                <div className="relative rounded-[14px] sm:rounded-[20px] overflow-hidden bg-white shadow-inner aspect-[16/10] w-full flex items-center justify-center">
                  <img
                    src="/assets/whiteboard_preview.png"
                    alt="Educrop AI-Powered Interactive Whiteboard Earth Structure Lesson Canvas"
                    className="w-full h-full object-contain select-none"
                  />
                </div>

              </div>

              {/* Subtle Floor Glow */}
              <div className="w-[85%] h-8 bg-sky-500/10 blur-2xl mx-auto -mt-3 rounded-full pointer-events-none" />

            </div>

          </div>
        </section>

        {/* Section 2: Features Section (Teach, Annotate, Engage: The Ultimate Interactive Whiteboard Experience) */}
        <section className="relative pt-12 sm:pt-16 lg:pt-20 pb-20 sm:pb-28 border-t border-slate-900 overflow-hidden">
          <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            
            {/* Section Heading with Yellow Brush Underline */}
            <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-18">
              <h2 className="text-[28px] sm:text-[36px] md:text-[42px] font-extrabold text-white tracking-tight leading-[1.25]">
                Teach, Annotate, Engage: The Ultimate<br />
                <span className="relative inline-block whitespace-nowrap mt-1 sm:mt-1.5">
                  Interactive Whiteboard Experience
                  {/* Yellow Brush Underline */}
                  <svg
                    viewBox="0 0 360 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute -bottom-2 sm:-bottom-2.5 left-0 w-full h-2.5 sm:h-3 text-[#f59e0b] overflow-visible pointer-events-none"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M4 13C80 6 220 3 356 11C300 15 160 17 50 14"
                      stroke="currentColor"
                      strokeWidth="3.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </h2>
            </div>

            {/* 6 Feature Cards in a 3-Column Grid on Desktop */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
              {WHITEBOARD_FEATURES.map((feature) => {
                const IconComponent = feature.icon;
                return (
                  <div
                    key={feature.id}
                    className="group relative bg-white rounded-[18px] sm:rounded-[22px] overflow-hidden flex flex-col h-full border border-slate-800/80 shadow-[0_15px_35px_-8px_rgba(0,0,0,0.7)] hover:shadow-[0_20px_45px_rgba(2,132,199,0.15)] hover:border-slate-700 hover:-translate-y-1 transition-all duration-300"
                  >
                    {/* Top Image: Feature Interface Screenshot */}
                    <div className="relative w-full aspect-[16/11] sm:aspect-[16/10] overflow-hidden bg-black flex items-center justify-center border-b border-slate-800">
                      <img
                        src={feature.image}
                        alt={feature.alt}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>

                    {/* Bottom Content Area: White Background with Matching Navy Icon & Description */}
                    <div className="bg-white px-5 py-4 sm:px-6 sm:py-5 flex items-center gap-3.5 sm:gap-4 flex-grow">
                      <div className="text-[#14234b] shrink-0 p-1 rounded-lg group-hover:scale-110 transition-transform">
                        <IconComponent className="w-6 h-6 sm:w-7 sm:h-7 text-[#14234b]" />
                      </div>
                      <p className="text-[13.5px] sm:text-[14.5px] font-semibold text-[#14234b] leading-snug text-left">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>
        </section>

      </main>

      {/* 3. Educrop Footer Section */}
      <Footer />

    </div>
  );
}
