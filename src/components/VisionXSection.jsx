import React, { useState, useEffect, useRef } from 'react';
import { Eye } from 'lucide-react';

/**
 * Vision X - Device and Admin Management Section
 * 4 Interactive feature tabs matching reference layout and behavior
 */
const VISION_TABS = [
  {
    id: 'live-monitoring',
    title: 'Live Classroom Monitoring',
    desc: 'Watch real-time video, audio, and on-screen activity from every connected classroom — fullscreen anytime.',
    image: '/assets/visionx_live_monitoring.png',
    alt: 'Educrop Vision X live classroom monitoring dashboard with real-time multi-classroom camera feeds'
  },
  {
    id: 'device-control',
    title: 'Device Control & Global Settings',
    desc: 'Centrally manage, block, and unblock any Educrop device and its applications — from one dashboard.',
    image: '/assets/visionx_device_control.png',
    alt: 'School administrator managing Educrop devices and centralized settings on a laptop'
  },
  {
    id: 'broadcast-messaging',
    title: 'Broadcast Messaging & Alerts',
    desc: 'Send announcements to all or selected classrooms, and track delivery, view and acknowledgements in real time.',
    image: '/assets/visionx_broadcast_messaging.png',
    alt: 'Digital smart display showing principal broadcast alert and urgent reminder notification'
  },
  {
    id: 'privacy-security',
    title: 'Privacy & Security',
    desc: 'Keep your data secure with admin-only access and protection built into every operation.',
    image: '/assets/visionx_privacy_security.png',
    alt: 'Advanced encrypted digital security shield representing Educrop admin protection and privacy'
  }
];

const AUTO_ROTATE_DELAY = 6000; // 6 seconds auto-rotation

export default function VisionXSection() {
  const [activeTab, setActiveTab] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const sectionRef = useRef(null);
  const [isInView, setIsInView] = useState(false);

  // IntersectionObserver to only rotate when in viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Automatic tab rotation (pauses on hover or manual focus)
  useEffect(() => {
    if (!isInView || isPaused) return;

    const timer = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % VISION_TABS.length);
    }, AUTO_ROTATE_DELAY);

    return () => clearInterval(timer);
  }, [isInView, isPaused]);

  return (
    <section
      id="vision-x"
      ref={sectionRef}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      className="relative w-full bg-white py-16 sm:py-20 lg:py-24 border-t border-slate-100 select-none overflow-hidden"
    >
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 sm:mb-16">
          <div>
            {/* Badge: Eye icon + Vision X */}
            <div className="flex items-center gap-2.5 mb-2.5 sm:mb-3">
              <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-gradient-to-tr from-[#0284c7] to-[#38bdf8] flex items-center justify-center text-white shadow-md shadow-sky-500/20">
                <Eye className="w-4 h-4 sm:w-5 sm:h-5 text-white stroke-[2.4]" />
              </div>
              <span className="text-[20px] sm:text-[23px] font-bold text-[#111c38] tracking-tight">
                Vision X
              </span>
            </div>

            {/* Main Heading */}
            <h2 className="text-[28px] sm:text-[34px] md:text-[38px] lg:text-[42px] font-extrabold text-[#111c38] tracking-tight leading-[1.14]">
              Device and Admin Management
            </h2>
          </div>

          {/* Subtitle on the Right */}
          <div className="md:max-w-xs lg:max-w-sm md:pb-2">
            <p className="text-[14px] sm:text-[15.5px] text-[#5a6578] leading-relaxed">
              Manage and protect every device, every campus — from one dashboard.
            </p>
          </div>
        </div>

        {/* Main Two-Column Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 xl:gap-16 items-center">

          {/* Left Column: Visual Showcase Card */}
          <div className="lg:col-span-6 xl:col-span-6 w-full flex justify-center">
            <div className="w-full max-w-[560px] lg:max-w-none">
              
              {/* Outer Card with subtle border and soft elevation */}
              <div className="relative rounded-[24px] sm:rounded-[32px] p-4 sm:p-6 lg:p-7 bg-[#f8fbff] border border-[#e2eaf5] shadow-[0_12px_40px_-10px_rgba(2,132,199,0.08)] overflow-hidden">
                
                {/* Inner Image Screen with 16:10 Aspect Ratio */}
                <div className="relative rounded-[16px] sm:rounded-[20px] overflow-hidden bg-[#0f172a] shadow-md border border-slate-200/60 aspect-[16/10] w-full">
                  {VISION_TABS.map((tab, idx) => {
                    const isActive = activeTab === idx;
                    return (
                      <div
                        key={tab.id}
                        className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${
                          isActive ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
                        }`}
                      >
                        <img
                          src={tab.image}
                          alt={tab.alt}
                          className="w-full h-full object-cover select-none"
                          loading="lazy"
                        />
                      </div>
                    );
                  })}
                </div>

              </div>

            </div>
          </div>

          {/* Right Column: 4 Interactive Feature Items */}
          <div className="lg:col-span-6 xl:col-span-6 flex flex-col justify-center space-y-4 sm:space-y-6 lg:pl-4 xl:pl-8">
            {VISION_TABS.map((tab, idx) => {
              const isActive = activeTab === idx;
              return (
                <div
                  key={tab.id}
                  onClick={() => setActiveTab(idx)}
                  className="cursor-pointer group select-none transition-all duration-200"
                >
                  <div
                    className={`pl-5 sm:pl-6 border-l-[3px] transition-all duration-300 ${
                      isActive
                        ? 'border-[#111c38]'
                        : 'border-[#e2e8f0] group-hover:border-slate-300'
                    }`}
                  >
                    <h3
                      className={`text-[17px] sm:text-[19px] lg:text-[20px] transition-colors duration-200 ${
                        isActive
                          ? 'font-bold text-[#111c38]'
                          : 'font-semibold text-[#8a99ad] group-hover:text-slate-600'
                      }`}
                    >
                      {tab.title}
                    </h3>

                    {/* Collapsible / Expanding description */}
                    <div
                      className={`overflow-hidden transition-all duration-300 ease-in-out ${
                        isActive ? 'max-h-28 opacity-100 mt-2' : 'max-h-0 opacity-0 mt-0'
                      }`}
                    >
                      <p className="text-[13.5px] sm:text-[14.5px] text-[#5a6578] leading-relaxed max-w-xl">
                        {tab.desc}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
