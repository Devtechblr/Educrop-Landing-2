import React, { useState, useRef, useEffect } from 'react';
import EducropLogo from './EducropLogo';
import {
  ChevronDown,
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

export default function Navbar({ onOpenOrder, onOpenLogin, onNavigate }) {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navRef = useRef(null);
  const timeoutRef = useRef(null);

  // Clear hover timeout on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setActiveDropdown(null);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Hover handlers with debounce to prevent accidental closes
  const handleMouseEnter = (key) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setActiveDropdown(key);
  };

  const handleMouseLeave = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 150);
  };

  const handleDropdownMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  };

  // 1. Educrop X Ecosystem "What's Inside" data
  const whatsInsideItems = [
    { name: "Connected Classroom Platform", icon: LayoutDashboard },
    { name: "Interactive Whiteboard", icon: PenTool },
    { name: "EduAI", icon: Sparkles },
    { name: "Vision X", icon: Eye },
    { name: "Share X", icon: ScreenShare },
    { name: "Click X", icon: Calculator },
  ];

  // 2. Devices data
  const devicesList = [
    { name: "Educrop X2 75\" (1.90 m)", image: "./assets/device_x2_75.png" },
    { name: "Educrop X2 86\" (2.18 m)", image: "./assets/device_x2_86.png" },
    { name: "Educrop X2 65\" (1.64 m)", image: "./assets/device_x2_65.png" },
  ];

  // 3. Solutions data
  const solutionsList = [
    {
      title: "Schools",
      desc: "Online, hybrid, or in-person, X is for every possible learning environment."
    },
    {
      title: "Higher Education",
      desc: "Help lecturers and teaching professionals to deliver educational excellence."
    },
    {
      title: "Coaching",
      desc: "Level up your teaching with our Classroom Platform."
    }
  ];

  // 4. Support data
  const supportList = [
    "Warranty Checker",
    "Quotation Checker",
    "Customer Support",
    "Installation and Training",
    "Community"
  ];

  // 5. Partner data
  const partnerList = [
    "Partner with us",
    "Our Authorized Partners"
  ];

  const navLinks = [
    { key: 'educropX', label: 'Educrop X' },
    { key: 'devices', label: 'Devices' },
    { key: 'solutions', label: 'Solutions' },
    { key: 'support', label: 'Support' },
    { key: 'partner', label: 'Partner' },
  ];

  const isDropdownOpen = Boolean(activeDropdown);

  return (
    <header
      className="w-full flex flex-col items-center pt-3 pb-1 px-4 sm:px-6 relative z-50"
      ref={navRef}
      onMouseLeave={handleMouseLeave}
    >
      {/* Floating pill navigation bar */}
      <nav className="w-full max-w-[940px] bg-white/85 backdrop-blur-md border border-slate-200/90 rounded-full px-4 sm:px-6 py-2 shadow-[0_6px_25px_-5px_rgba(0,0,0,0.07)] flex items-center justify-between transition-all duration-300 relative z-30">

        {/* Left: Brand Logo & Desktop Navigation */}
        <div className="flex items-center gap-6">
          <div onClick={() => onNavigate && onNavigate('home')} className="cursor-pointer" title="Educrop Home">
            <EducropLogo />
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => {
              const isOpen = activeDropdown === link.key;

              return (
                <div
                  key={link.key}
                  className="relative"
                  onMouseEnter={() => handleMouseEnter(link.key)}
                >
                  <button
                    onClick={() => setActiveDropdown(isOpen ? null : link.key)}
                    className={`relative flex items-center gap-1 text-[13px] font-medium px-2.5 py-1.5 rounded-full transition-colors ${isOpen ? 'text-[#14234b] font-bold' : 'text-[#334155] hover:text-[#14234b] hover:bg-slate-50'
                      }`}
                  >
                    <span>{link.label}</span>
                    <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${isOpen ? 'rotate-180 text-[#14234b]' : 'text-slate-500'}`} />

                    {/* Active indicator bar matching all reference screenshots */}
                    {isOpen && (
                      <span className="absolute bottom-0 left-2.5 right-2.5 h-[2px] bg-[#14234b] rounded-full animate-in fade-in duration-150" />
                    )}
                  </button>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right CTA Buttons */}
        <div className="flex items-center gap-2 sm:gap-2.5">
          {/* Order Now Button */}
          <button
            onClick={onOpenOrder}
            className="bg-[#16284e] hover:bg-[#1d3466] text-white text-[12px] font-semibold px-4 py-1.5 sm:py-2 rounded-md sm:rounded-lg shadow-sm hover:shadow transition-all duration-150 active:scale-95"
          >
            Order Now
          </button>

          {/* Login/Sign up Button */}
          <button
            onClick={onOpenLogin}
            className="bg-white hover:bg-slate-50 text-[#1e293b] text-[12px] font-semibold px-3 sm:px-3.5 py-1.5 sm:py-2 rounded-md sm:rounded-lg border border-slate-300 shadow-sm transition-all duration-150 active:scale-95"
          >
            Login/Sign up
          </button>

          {/* Mobile menu toggle button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-1.5 text-slate-600 hover:text-slate-900 rounded-lg hover:bg-slate-100 transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Floating Mega Dropdown Menus */}
      {isDropdownOpen && (
        <div
          onMouseEnter={handleDropdownMouseEnter}
          onMouseLeave={handleMouseLeave}
          className="absolute top-full left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] max-w-[940px] pt-2 z-50 animate-in fade-in slide-in-from-top-1 duration-150"
        >
          <div className="w-full bg-white rounded-2xl sm:rounded-3xl border border-slate-200/90 shadow-[0_20px_50px_rgba(15,23,42,0.12)] p-6 sm:p-7">

            {/* 1. Teachmint X (Educrop X) Mega Menu */}
            {activeDropdown === 'educropX' && (
              <div className="space-y-6">
                {/* Top Section Banner */}
                <div
                  onClick={() => {
                    setActiveDropdown(null);
                    onOpenOrder();
                  }}
                  className="bg-[#f0f5ff] hover:bg-[#e6effe] transition-colors rounded-xl px-5 py-4 flex items-center justify-between cursor-pointer group"
                >
                  <div>
                    <h3 className="text-[16px] sm:text-[17px] font-bold text-[#14234b]">
                      Teachmint X Ecosystem
                    </h3>
                    <p className="text-[13px] text-slate-500 font-normal mt-0.5">
                      Experience AI Powered Classrooms
                    </p>
                  </div>
                  <div className="w-8 h-8 rounded-full flex items-center justify-center text-[#14234b] group-hover:translate-x-1 transition-transform duration-200">
                    <ArrowRight className="w-5 h-5" />
                  </div>
                </div>

                {/* What's Inside Section */}
                <div>
                  <h4 className="text-[13px] sm:text-[14px] font-bold text-[#14234b] mb-3.5">
                    What&apos;s Inside
                  </h4>

                  {/* 4-column responsive grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
                    {whatsInsideItems.map((item, idx) => {
                      const IconComp = item.icon;
                      return (
                        <div
                          key={idx}
                          onClick={() => {
                            setActiveDropdown(null);
                            if (item.name === "Connected Classroom Platform" && onNavigate) {
                              onNavigate('connected-classroom');
                            } else if (item.name === "Interactive Whiteboard" && onNavigate) {
                              onNavigate('whiteboard');
                            } else {
                              onOpenOrder();
                            }
                          }}
                          className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white border border-slate-200/80 hover:border-sky-400 hover:shadow-sm hover:bg-slate-50/60 transition-all duration-150 cursor-pointer group"
                        >
                          <div className="text-[#14234b] flex-shrink-0 group-hover:text-blue-600 transition-colors">
                            <IconComp className="w-4 h-4" />
                          </div>
                          <span className="text-[13px] font-semibold text-[#14234b] group-hover:text-blue-600 transition-colors">
                            {item.name}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Bottom footnote */}
                <div className="text-[11px] sm:text-[12px] text-slate-400 font-normal select-none">
                  *Available on Teachmint X2 models
                </div>
              </div>
            )}

            {/* 2. Devices Mega Menu */}
            {activeDropdown === 'devices' && (
              <div className="space-y-6">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                  {/* Product Cards Row */}
                  <div className="flex flex-wrap sm:flex-nowrap items-center gap-6 sm:gap-8">
                    {devicesList.map((device, idx) => (
                      <div
                        key={idx}
                        onClick={() => {
                          setActiveDropdown(null);
                          onOpenOrder();
                        }}
                        className="flex flex-col items-start cursor-pointer group"
                      >
                        <div className="w-[170px] sm:w-[190px] h-[105px] sm:h-[115px] flex items-center justify-center p-1 rounded-lg transition-transform duration-200 group-hover:scale-[1.03]">
                          <img
                            src={device.image}
                            alt={device.name}
                            className="w-full h-full object-contain drop-shadow-sm"
                          />
                        </div>
                        <div className="text-[13px] font-bold text-[#14234b] mt-2.5 group-hover:text-sky-600 transition-colors">
                          {device.name}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Explore All Button */}
                  <div className="flex-shrink-0 self-center">
                    <button
                      onClick={() => {
                        setActiveDropdown(null);
                        onOpenOrder();
                      }}
                      className="bg-[#16284e] hover:bg-[#1d3466] text-white text-[13px] font-semibold px-5 py-2.5 rounded-lg shadow-sm hover:shadow transition-all duration-150 active:scale-95 whitespace-nowrap"
                    >
                      Explore All
                    </button>
                  </div>
                </div>

                {/* Bottom footnote */}
                <div className="text-[11px] sm:text-[12px] text-slate-400 font-normal select-none pt-1">
                  *Every board comes with Teachmint X Ecosystem
                </div>
              </div>
            )}

            {/* 3. Solutions Mega Menu (Reference Image 1) */}
            {activeDropdown === 'solutions' && (
              <div className="space-y-4">
                {/* Top Education Banner (spans 2 of 3 columns, matching Reference 1) */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div
                    onClick={() => {
                      setActiveDropdown(null);
                      onOpenOrder();
                    }}
                    className="md:col-span-2 bg-[#f0f5ff] hover:bg-[#e6effe] transition-colors rounded-xl px-5 py-4 flex items-center justify-between cursor-pointer group"
                  >
                    <div>
                      <h3 className="text-[16px] sm:text-[17px] font-bold text-[#14234b]">
                        Education
                      </h3>
                      <p className="text-[13px] text-slate-500 font-normal mt-0.5">
                        Built for every learning environment.
                      </p>
                    </div>
                    <div className="w-8 h-8 rounded-full flex items-center justify-center text-[#14234b] group-hover:translate-x-1 transition-transform duration-200">
                      <ArrowRight className="w-5 h-5" />
                    </div>
                  </div>
                </div>

                {/* 3 Solution Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {solutionsList.map((sol, idx) => (
                    <div
                      key={idx}
                      onClick={() => {
                        setActiveDropdown(null);
                        onOpenOrder();
                      }}
                      className="flex flex-col justify-center p-4 sm:p-5 rounded-xl bg-white border border-slate-200/80 hover:border-sky-400 hover:shadow-sm hover:bg-slate-50/60 transition-all duration-150 cursor-pointer group"
                    >
                      <div className="text-[13px] sm:text-[14px] font-bold text-[#14234b] group-hover:text-blue-600 transition-colors">
                        {sol.title}
                      </div>
                      <p className="text-[11px] sm:text-[12px] text-slate-500 mt-1 leading-snug">
                        {sol.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* 4. Support Mega Menu (Reference Image 2) */}
            {activeDropdown === 'support' && (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
                {supportList.map((item, idx) => (
                  <div
                    key={idx}
                    onClick={() => {
                      setActiveDropdown(null);
                      onOpenOrder();
                    }}
                    className="flex items-center px-5 py-3.5 rounded-xl bg-white border border-slate-200/80 hover:border-sky-400 hover:shadow-sm hover:bg-slate-50/60 transition-all duration-150 cursor-pointer group"
                  >
                    <span className="text-[13px] font-semibold text-[#14234b] group-hover:text-blue-600 transition-colors">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            )}

            {/* 5. Partner Mega Menu (Reference Image 3) */}
            {activeDropdown === 'partner' && (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
                {partnerList.map((item, idx) => (
                  <div
                    key={idx}
                    onClick={() => {
                      setActiveDropdown(null);
                      onOpenOrder();
                    }}
                    className="flex items-center px-5 py-3.5 rounded-xl bg-white border border-slate-200/80 hover:border-sky-400 hover:shadow-sm hover:bg-slate-50/60 transition-all duration-150 cursor-pointer group"
                  >
                    <span className="text-[13px] font-semibold text-[#14234b] group-hover:text-blue-600 transition-colors">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            )}

          </div>
        </div>
      )}

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-4 right-4 mt-2 bg-white/95 backdrop-blur-xl border border-slate-200 rounded-3xl p-4 shadow-2xl z-50 animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="space-y-3">
            {navLinks.map((link) => {
              const isMegaEducrop = link.key === 'educropX';
              const isMegaDevices = link.key === 'devices';
              const isMegaSolutions = link.key === 'solutions';
              const isMegaSupport = link.key === 'support';
              const isMegaPartner = link.key === 'partner';

              return (
                <div key={link.key} className="border-b border-slate-100 pb-2">
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1.5">
                    {link.label}
                  </div>
                  <div className="grid grid-cols-1 gap-1">
                    {isMegaEducrop && whatsInsideItems.slice(0, 4).map((item, idx) => (
                      <button
                        key={idx}
                        onClick={() => {
                          setMobileMenuOpen(false);
                          if (item.name === "Connected Classroom Platform" && onNavigate) {
                            onNavigate('connected-classroom');
                          } else if (item.name === "Interactive Whiteboard" && onNavigate) {
                            onNavigate('whiteboard');
                          } else {
                            onOpenOrder();
                          }
                        }}
                        className="text-left text-xs text-slate-700 py-1 px-2 rounded-lg hover:bg-slate-50 flex items-center justify-between"
                      >
                        <span>{item.name}</span>
                        <ArrowRight className="w-3 h-3 text-slate-400" />
                      </button>
                    ))}

                    {isMegaDevices && devicesList.map((item, idx) => (
                      <button
                        key={idx}
                        onClick={() => {
                          setMobileMenuOpen(false);
                          onOpenOrder();
                        }}
                        className="text-left text-xs text-slate-700 py-1 px-2 rounded-lg hover:bg-slate-50 flex items-center justify-between"
                      >
                        <span>{item.name}</span>
                        <ArrowRight className="w-3 h-3 text-slate-400" />
                      </button>
                    ))}

                    {isMegaSolutions && solutionsList.map((item, idx) => (
                      <button
                        key={idx}
                        onClick={() => {
                          setMobileMenuOpen(false);
                          onOpenOrder();
                        }}
                        className="text-left text-xs text-slate-700 py-1 px-2 rounded-lg hover:bg-slate-50 flex items-center justify-between"
                      >
                        <span>{item.title}</span>
                        <ArrowRight className="w-3 h-3 text-slate-400" />
                      </button>
                    ))}

                    {isMegaSupport && supportList.map((item, idx) => (
                      <button
                        key={idx}
                        onClick={() => {
                          setMobileMenuOpen(false);
                          onOpenOrder();
                        }}
                        className="text-left text-xs text-slate-700 py-1 px-2 rounded-lg hover:bg-slate-50 flex items-center justify-between"
                      >
                        <span>{item}</span>
                        <ArrowRight className="w-3 h-3 text-slate-400" />
                      </button>
                    ))}

                    {isMegaPartner && partnerList.map((item, idx) => (
                      <button
                        key={idx}
                        onClick={() => {
                          setMobileMenuOpen(false);
                          onOpenOrder();
                        }}
                        className="text-left text-xs text-slate-700 py-1 px-2 rounded-lg hover:bg-slate-50 flex items-center justify-between"
                      >
                        <span>{item}</span>
                        <ArrowRight className="w-3 h-3 text-slate-400" />
                      </button>
                    ))}
                  </div>
                </div>
              );
            })}

            <div className="pt-2 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenOrder();
                }}
                className="w-full bg-[#16284e] text-white text-xs font-semibold py-2.5 rounded-xl shadow-sm text-center"
              >
                Order Now
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenLogin();
                }}
                className="w-full bg-slate-100 text-slate-800 text-xs font-semibold py-2.5 rounded-xl text-center"
              >
                Login / Sign up
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
