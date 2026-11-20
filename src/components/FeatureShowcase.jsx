import React, { useState, useEffect, useRef } from 'react';
import { 
  Sparkles, 
  ChevronRight, 
  ChevronLeft, 
  Check, 
  Play, 
  Mic, 
  PenTool, 
  Eraser, 
  Square, 
  RotateCcw, 
  Settings, 
  ShieldCheck, 
  BrainCircuit,
  Volume2
} from 'lucide-react';

// Feature metadata matching the reference screenshots exactly
const FEATURES = [
  {
    id: 'beyond-whiteboard',
    title: 'EduAI beyond the Whiteboard',
    desc: 'An AI assistant that works across every app on the board. Explain, annotate and search beyond the Teachmint Whiteboard.',
    badge: 'Multi-App Assistant',
  },
  {
    id: 'ai-whiteboards',
    title: 'AI Whiteboards',
    desc: 'Instantly generate curriculum-aligned content for every grade level and subject.',
    badge: 'Interactive Canvas',
  },
  {
    id: 'quiz-generator',
    title: 'Quick Quiz & Homework Generator',
    desc: 'Create quick quizzes and homework in seconds, tailored to what you just taught.',
    badge: 'Instant Assessments',
  },
  {
    id: 'summarizer',
    title: 'AI Summarizer & Class Recap',
    desc: 'Auto-generate summaries and class recaps from any lesson to lock in learning retention.',
    badge: 'Learning Retention',
  },
  {
    id: 'ai-studio',
    title: 'AI Studio',
    desc: 'Instantly access ready-to-teach content mapped to your curriculum, grade, subject and textbook.',
    badge: 'Curriculum Studio',
  },
  {
    id: 'ask-anything',
    title: 'Ask Anything',
    desc: 'Bring any concept or student question to life instantly with student-safe answers, without breaking class flow.',
    badge: 'Student-Safe AI',
  },
];

const FEATURE_DURATION = 4500; // 4.5 seconds per feature
const ITEM_HEIGHT = 104; // Item height in px for smooth vertical translation

export default function FeatureShowcase() {
  // Start on index 1 (AI Whiteboards) to match Reference Screenshot 1
  const [activeIndex, setActiveIndex] = useState(1);
  const [virtualIndex, setVirtualIndex] = useState(FEATURES.length + 1); // 7 (so index 0 is visible above it in slot 1)
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  const [animationKey, setAnimationKey] = useState(0);

  const sectionRef = useRef(null);
  const timerRef = useRef(null);

  // IntersectionObserver: automatically start animation when section enters viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Main automatic looping timer
  useEffect(() => {
    if (!isVisible) return;

    timerRef.current = setTimeout(() => {
      setVirtualIndex((prev) => prev + 1);
      setActiveIndex((prev) => (prev + 1) % FEATURES.length);
      setAnimationKey((k) => k + 1);
    }, FEATURE_DURATION);

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [isVisible, activeIndex, virtualIndex]);

  // Seamless wrapping: silently reset virtualIndex when it gets high, with no visual jump
  useEffect(() => {
    if (virtualIndex >= 36) {
      const resetTimer = setTimeout(() => {
        setIsTransitioning(false);
        setVirtualIndex((prev) => (prev % FEATURES.length) + FEATURES.length);
        setTimeout(() => setIsTransitioning(true), 50);
      }, 550);
      return () => clearTimeout(resetTimer);
    }
  }, [virtualIndex]);

  // Interactive click handler: clicking any feature immediately switches to it
  const handleSelect = (featureIdx) => {
    if (timerRef.current) clearTimeout(timerRef.current);

    const currentOrig = virtualIndex % FEATURES.length;
    let diff = featureIdx - currentOrig;
    if (diff < -2) diff += FEATURES.length;
    if (diff > 3) diff -= FEATURES.length;

    setVirtualIndex((prev) => prev + diff);
    setActiveIndex(featureIdx);
    setAnimationKey((k) => k + 1);
  };

  // Build extended list of repeated items (8 cycles = 48 items)
  const extendedItems = Array.from({ length: 48 }, (_, i) => ({
    ...FEATURES[i % FEATURES.length],
    origIndex: i % FEATURES.length,
    listIndex: i,
  }));

  // Target translation offset so active item is positioned in Slot 2 (second from top)
  const translateYOffset = Math.max(0, (virtualIndex - 1) * ITEM_HEIGHT);

  return (
    <section 
      ref={sectionRef}
      className="relative w-full bg-white py-16 sm:py-20 lg:py-24 border-t border-slate-100 select-none overflow-hidden"
    >
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header: Badge + Heading on Left, Subtitle on Right */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 sm:mb-16">
          <div className="max-w-xl">
            
            {/* Pill Badge with subtle vibrant gradient border glow */}
            <div className="p-[1px] rounded-full bg-gradient-to-r from-violet-500 via-fuchsia-500 to-sky-400 inline-block mb-3 sm:mb-4 shadow-[0_2px_12px_rgba(139,92,246,0.18)]">
              <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#141b2d]">
                <div className="w-5 h-5 rounded-md bg-gradient-to-tr from-[#3b82f6] via-[#6366f1] to-[#a855f7] flex items-center justify-center shadow-inner">
                  <Play className="w-2.5 h-2.5 text-white fill-white ml-0.5" />
                </div>
                <span className="text-white text-xs sm:text-[13px] font-bold tracking-wide">
                  EduAI
                </span>
              </div>
            </div>

            {/* Main Heading */}
            <h2 className="text-[26px] sm:text-[34px] md:text-[38px] lg:text-[42px] font-extrabold text-[#111c38] tracking-tight leading-[1.14]">
              Intelligent and Safe Teaching<br />
              Assistant
            </h2>
          </div>

          {/* Right Subtitle / Description */}
          <div className="md:max-w-md lg:max-w-lg md:pb-2">
            <p className="text-[13.5px] sm:text-[15px] text-[#5a6578] leading-relaxed">
              From zero-prep lesson plans to automated assessments — EduAI handles the heavy lifting so teachers can focus on teaching.
            </p>
          </div>
        </div>

        {/* Two-Column Feature Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          
          {/* Left Column: Interactive Smartboard / Laptop Screenshot */}
          <div className="lg:col-span-7 w-full flex justify-center">
            <div className="w-full max-w-[620px] lg:max-w-[660px]">
              
              {/* Outer Metallic Bezel Frame */}
              <div className="relative rounded-[16px] sm:rounded-[22px] p-[5px] sm:p-[7px] bg-gradient-to-b from-[#e8ecf2] via-[#cbd5e1] to-[#9aa6b8] border border-slate-300 shadow-[0_22px_55px_-12px_rgba(15,23,42,0.22),0_8px_20px_-8px_rgba(0,0,0,0.12)]">
                
                {/* Top Camera Bar & Dual Mics */}
                <div className="w-16 h-2 sm:h-2.5 bg-[#171e2e] rounded-full mx-auto flex items-center justify-center gap-1.5 mb-1 sm:mb-1.5 shadow-inner">
                  <div className="w-1 h-1 rounded-full bg-slate-600" />
                  <div className="w-1.5 h-1.5 rounded-full bg-[#00d2ff] shadow-[0_0_5px_#00d2ff]" />
                  <div className="w-1 h-1 rounded-full bg-slate-600" />
                </div>

                {/* Main Glass Screen with 16:10 Aspect Ratio */}
                <div className="relative rounded-[11px] sm:rounded-[15px] overflow-hidden bg-[#10141f] aspect-[16/10] w-full shadow-inner border border-black/40">
                  
                  {/* Synchronized Screen Views with smooth crossfade transition */}
                  <div className="relative w-full h-full">
                    {FEATURES.map((feature, idx) => {
                      const isActive = activeIndex === idx;
                      return (
                        <div
                          key={feature.id}
                          className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${
                            isActive ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
                          }`}
                        >
                          <ScreenRenderer featureIndex={idx} />
                        </div>
                      );
                    })}
                  </div>

                  {/* On-screen floating sidebar handles */}
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 z-20 pointer-events-none">
                    <div className="w-3.5 h-8 bg-white/15 backdrop-blur-md border border-white/20 rounded-r-md flex items-center justify-center text-white/70 shadow-sm">
                      <ChevronLeft className="w-3 h-3" />
                    </div>
                  </div>
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 z-20 pointer-events-none">
                    <div className="w-3.5 h-8 bg-white/15 backdrop-blur-md border border-white/20 rounded-l-md flex items-center justify-center text-white/70 shadow-sm">
                      <ChevronRight className="w-3 h-3" />
                    </div>
                  </div>

                </div>

                {/* Bottom Soundbar Frame & Educrop X Branding */}
                <div className="pt-1.5 pb-0.5 px-3 flex items-center justify-between text-[10px] text-slate-500 select-none">
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-[9px] text-slate-600 font-medium">4K EDLA Certified</span>
                  </div>
                  <div className="text-[10px] font-semibold tracking-wider text-slate-600 uppercase">
                    Educrop X
                  </div>
                  <div className="w-2.5 h-2.5 rounded-full border border-slate-400/50 flex items-center justify-center">
                    <div className="w-1 h-1 rounded-full bg-sky-500" />
                  </div>
                </div>

              </div>

              {/* Diffuse Surface Drop Shadow */}
              <div className="w-[92%] h-4 bg-slate-900/10 blur-xl mx-auto -mt-2 rounded-full pointer-events-none" />

            </div>
          </div>

          {/* Right Column: Animated Auto-Looping Feature List */}
          <div className="lg:col-span-5 w-full">
            <div className="relative w-full max-w-[500px] mx-auto lg:mx-0">
              
              {/* Container showing ~3.5 items vertically with smooth translation */}
              <div 
                className="relative overflow-hidden"
                style={{ height: `${ITEM_HEIGHT * 3.8}px` }}
              >
                {/* Sliding Track */}
                <div 
                  className={`flex flex-col ${
                    isTransitioning 
                      ? 'transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]' 
                      : ''
                  }`}
                  style={{
                    transform: `translateY(-${translateYOffset}px)`,
                  }}
                >
                  {extendedItems.map((item) => {
                    const isActive = item.origIndex === activeIndex;

                    return (
                      <div
                        key={item.listIndex}
                        onClick={() => handleSelect(item.origIndex)}
                        style={{ height: `${ITEM_HEIGHT}px` }}
                        className="flex flex-col justify-between py-2.5 cursor-pointer group transition-all"
                      >
                        <div className="pr-2">
                          {/* Title: Dark navy when active, light blue-grey when inactive */}
                          <h3 
                            className={`text-[17px] sm:text-[19px] font-bold tracking-tight transition-colors duration-300 ${
                              isActive ? 'text-[#151d28]' : 'text-[#9aa0ac] group-hover:text-slate-600'
                            }`}
                          >
                            {item.title}
                          </h3>

                          {/* Description: Dark slate when active, light blue-grey when inactive */}
                          <p 
                            className={`text-[12.5px] sm:text-[13.5px] leading-relaxed transition-colors duration-300 mt-1 line-clamp-2 ${
                              isActive ? 'text-[#596068]' : 'text-[#a4a8b3] group-hover:text-slate-500'
                            }`}
                          >
                            {item.desc}
                          </p>
                        </div>

                        {/* Thin horizontal divider & animated blue progress line */}
                        <div className="relative w-full h-[1.5px] bg-slate-200/70 overflow-hidden mt-2">
                          {isActive && (
                            <div 
                              key={`progress-${activeIndex}-${animationKey}`}
                              className="absolute top-0 left-0 h-full bg-[#1a66e5] rounded-full"
                              style={{
                                animation: `featureProgress ${FEATURE_DURATION}ms linear forwards`,
                              }}
                            />
                          )}
                        </div>

                      </div>
                    );
                  })}
                </div>

                {/* Subtle top & bottom fade for seamless clipping */}
                <div className="absolute top-0 left-0 right-0 h-4 bg-gradient-to-b from-white to-transparent pointer-events-none z-10" />
                <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-white via-white/80 to-transparent pointer-events-none z-10" />

              </div>

            </div>
          </div>

        </div>

      </div>

      {/* Global CSS Keyframe for the horizontal blue progress line */}
      <style>{`
        @keyframes featureProgress {
          0% {
            width: 0%;
          }
          100% {
            width: 100%;
          }
        }
      `}</style>

    </section>
  );
}

// Subcomponent to render authentic screen UI for each of the 6 features
function ScreenRenderer({ featureIndex }) {
  switch (featureIndex) {
    case 0:
      return <ScreenEduAiBeyondWhiteboard />;
    case 1:
      return <ScreenAiWhiteboards />;
    case 2:
      return <ScreenQuizGenerator />;
    case 3:
      return <ScreenAiSummarizer />;
    case 4:
      return <ScreenAiStudio />;
    case 5:
      return <ScreenAskAnything />;
    default:
      return <ScreenAiWhiteboards />;
  }
}

// 0. EduAI beyond the Whiteboard
function ScreenEduAiBeyondWhiteboard() {
  return (
    <div className="relative w-full h-full bg-[#111625] text-white flex flex-col justify-between p-2 sm:p-3 select-none overflow-hidden font-sans">
      {/* Top Bar */}
      <div className="flex items-center justify-between text-[9px] sm:text-[10px] text-slate-400 border-b border-slate-800/80 pb-1.5">
        <div className="flex items-center gap-2">
          <span className="px-1.5 py-0.5 rounded bg-slate-800 text-slate-300 font-mono text-[8px] sm:text-[9px]">
            Classroom ID: 0823791725
          </span>
          <span className="text-slate-300 font-medium">Browser Mode • Interactive Anatomy</span>
        </div>
        <div className="flex items-center gap-2 text-slate-400">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
          <span>Active Across Apps</span>
        </div>
      </div>

      {/* Main Canvas with Floating EduAI Copilot Card */}
      <div className="relative flex-grow flex items-center justify-center p-2">
        {/* Background Educational Graphic */}
        <div className="absolute inset-2 rounded-lg bg-slate-900/70 border border-slate-800/60 p-3 flex flex-col justify-between opacity-60">
          <div className="text-[11px] font-bold text-slate-400">Human Circulatory & Respiratory System</div>
          <div className="grid grid-cols-3 gap-2 my-auto">
            <div className="h-14 rounded bg-slate-800/80 border border-slate-700/50 flex flex-col items-center justify-center p-1">
              <span className="text-[9px] text-sky-400 font-semibold">Left Ventricle</span>
              <span className="text-[8px] text-slate-400">Oxygenated Flow</span>
            </div>
            <div className="h-14 rounded bg-slate-800/80 border border-slate-700/50 flex flex-col items-center justify-center p-1">
              <span className="text-[9px] text-rose-400 font-semibold">Aorta Valve</span>
              <span className="text-[8px] text-slate-400">Systemic Pulse</span>
            </div>
            <div className="h-14 rounded bg-slate-800/80 border border-slate-700/50 flex flex-col items-center justify-center p-1">
              <span className="text-[9px] text-amber-400 font-semibold">Pulmonary Artery</span>
              <span className="text-[8px] text-slate-400">Gas Exchange</span>
            </div>
          </div>
        </div>

        {/* Floating EduAI Overlay Card */}
        <div className="relative z-10 w-full max-w-[340px] sm:max-w-[380px] rounded-xl bg-[#171f33]/95 backdrop-blur-md border border-purple-500/40 p-3 shadow-2xl shadow-purple-900/30">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-1.5">
              <div className="w-4 h-4 rounded bg-gradient-to-tr from-purple-500 to-indigo-500 flex items-center justify-center shadow">
                <Sparkles className="w-2.5 h-2.5 text-white" />
              </div>
              <span className="text-[11px] font-bold text-white tracking-tight">EduAI Universal Copilot</span>
            </div>
            <span className="px-1.5 py-0.5 rounded text-[8px] font-semibold bg-purple-500/20 text-purple-300 border border-purple-500/30">
              Live Overlay
            </span>
          </div>

          <div className="text-[10px] sm:text-[11px] text-slate-200 leading-snug bg-slate-900/80 p-2 rounded-lg border border-slate-700/60 mb-2">
            <span className="text-purple-300 font-semibold">Prompt: </span>
            &quot;Explain pulmonary vs systemic circulation with real-time screen annotation&quot;
          </div>

          <div className="flex items-center justify-between text-[9px] text-slate-300 pt-0.5">
            <div className="flex items-center gap-1">
              <Mic className="w-3 h-3 text-red-400 animate-pulse" />
              <span>Voice Activated</span>
            </div>
            <div className="flex gap-1.5">
              <button className="px-2 py-0.5 rounded bg-purple-600 hover:bg-purple-500 text-white font-medium text-[9px]">
                Annotate Page
              </button>
              <button className="px-2 py-0.5 rounded bg-slate-700 hover:bg-slate-600 text-white font-medium text-[9px]">
                Clip to Board
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="flex items-center justify-between text-[9px] text-slate-400 border-t border-slate-800/80 pt-1">
        <span>EduAI overlay enabled on all 3rd party apps</span>
        <span className="text-sky-400 font-medium">Teachmint OS 4.0</span>
      </div>
    </div>
  );
}

// 1. AI Whiteboards (Exact Reference Screenshot 1)
function ScreenAiWhiteboards() {
  return (
    <div className="relative w-full h-full bg-[#181c26] text-white flex flex-col justify-between p-2 sm:p-3 select-none overflow-hidden font-sans">
      {/* Top Header Bar */}
      <div className="flex items-center justify-between text-[9px] sm:text-[10px] text-slate-400 border-b border-slate-800/80 pb-1.5">
        <div className="flex items-center gap-2">
          <span className="px-1.5 py-0.5 rounded bg-slate-800 text-slate-300 font-mono text-[8px] sm:text-[9px]">
            Classroom ID: 0823791725
          </span>
          <div className="flex items-center gap-1 text-slate-300">
            <span className="text-slate-400 text-xs">←</span>
            <span className="font-semibold text-white text-[10px] sm:text-[11px]">Preview Whiteboard</span>
          </div>
        </div>
        <div className="flex items-center gap-2 text-[9px] text-slate-400">
          <span>AI Content Generated</span>
        </div>
      </div>

      {/* Main Slide Content Area */}
      <div className="relative flex-grow flex items-stretch gap-2.5 py-1.5 overflow-hidden">
        
        {/* Left Toolbar Strip (Whiteboard Tools) */}
        <div className="w-6 sm:w-7 rounded-lg bg-slate-900/90 border border-slate-800 flex flex-col items-center justify-between py-2 text-slate-400 shrink-0">
          <div className="flex flex-col gap-2 items-center">
            <PenTool className="w-3 h-3 text-sky-400" />
            <Eraser className="w-3 h-3 hover:text-white" />
            <Square className="w-3 h-3 hover:text-white" />
            <RotateCcw className="w-3 h-3 hover:text-white" />
          </div>
          <div className="flex flex-col gap-1 items-center">
            <Settings className="w-3 h-3 text-slate-500" />
          </div>
        </div>

        {/* Slide 1: Welcome to Our Cosmic Neighborhood: The Solar System */}
        <div className="flex-1 rounded-xl bg-[#1e2330] border border-slate-800 p-2.5 sm:p-3 flex flex-col justify-between overflow-hidden">
          
          <div>
            <div className="flex items-center gap-1.5 mb-1.5">
              <span className="w-4 h-4 rounded bg-sky-500/20 text-sky-400 flex items-center justify-center font-bold text-[9px]">
                1
              </span>
              <h4 className="text-[11px] sm:text-[13px] font-bold text-white tracking-tight">
                Welcome to Our Cosmic Neighborhood: The Solar System
              </h4>
            </div>

            <div className="grid grid-cols-12 gap-2 items-center">
              {/* Text Description */}
              <div className="col-span-7 sm:col-span-8">
                <p className="text-[8.5px] sm:text-[9.5px] text-slate-300 leading-relaxed line-clamp-4">
                  The Solar System is our home in the vast universe, consisting of the Sun, eight planets, numerous moons, asteroids, comets, and other celestial objects. It was formed about 4.6 billion years ago from a giant swirling cloud of gas and dust. Understanding the Solar System helps us appreciate our place in the cosmos.
                </p>
              </div>

              {/* Solar System Graphic Illustration */}
              <div className="col-span-5 sm:col-span-4 rounded-lg bg-slate-950/80 border border-slate-800 p-1.5 flex items-center justify-center">
                <div className="relative w-full aspect-[16/9] flex items-center justify-center">
                  {/* Sun */}
                  <div className="w-5 h-5 rounded-full bg-gradient-to-r from-amber-400 to-orange-500 shadow-[0_0_12px_#f59e0b] shrink-0 mr-1" />
                  {/* Planetary dots & Saturn Ring */}
                  <div className="flex items-center gap-1">
                    <div className="w-1.5 h-1.5 rounded-full bg-slate-400" />
                    <div className="w-2 h-2 rounded-full bg-amber-200" />
                    <div className="w-2.5 h-2.5 rounded-full bg-blue-400 shadow-[0_0_4px_#60a5fa]" />
                    <div className="w-1.5 h-1.5 rounded-full bg-red-400" />
                    <div className="w-3.5 h-3.5 rounded-full bg-amber-600 flex items-center justify-center">
                      <div className="w-2 h-0.5 bg-amber-200" />
                    </div>
                    <div className="relative flex items-center justify-center">
                      <div className="w-3 h-3 rounded-full bg-yellow-600" />
                      <div className="absolute w-5 h-1 border border-yellow-300/80 rounded-full rotate-[-20deg]" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Slide 2 Preview Below */}
          <div className="rounded-lg bg-slate-900/60 border border-slate-800/80 p-1.5 mt-1">
            <div className="flex items-center gap-1.5">
              <span className="w-3.5 h-3.5 rounded bg-slate-800 text-slate-400 flex items-center justify-center font-bold text-[8px]">
                2
              </span>
              <span className="text-[9px] sm:text-[10px] font-semibold text-slate-300">
                The Sun: Our Star, Source of Life
              </span>
            </div>
          </div>

        </div>

      </div>

      {/* Bottom Bar matching screenshot */}
      <div className="flex items-center justify-between text-[9px] text-slate-400 border-t border-slate-800/80 pt-1">
        <div className="flex items-center gap-2">
          <Settings className="w-3 h-3 text-slate-500" />
          <button className="px-2 py-0.5 rounded bg-[#0284c7] hover:bg-sky-600 text-white font-medium text-[9px] transition-colors">
            Import Current Page
          </button>
        </div>
        <div className="font-mono text-[9px] text-slate-400">
          Page 1 of 10
        </div>
      </div>
    </div>
  );
}

// 2. Quick Quiz & Homework Generator
function ScreenQuizGenerator() {
  return (
    <div className="relative w-full h-full bg-[#141824] text-white flex flex-col justify-between p-2 sm:p-3 select-none overflow-hidden font-sans">
      {/* Top Header */}
      <div className="flex items-center justify-between text-[9px] sm:text-[10px] text-slate-400 border-b border-slate-800/80 pb-1.5">
        <div className="flex items-center gap-2">
          <span className="px-1.5 py-0.5 rounded bg-slate-800 text-slate-300 font-mono text-[8px] sm:text-[9px]">
            Classroom ID: 0823791725
          </span>
          <span className="font-semibold text-white text-[10px] sm:text-[11px]">EduAI Quiz & Assessment Engine</span>
        </div>
        <span className="px-1.5 py-0.5 rounded text-[8px] font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
          Generated in 3s
        </span>
      </div>

      {/* Question Cards */}
      <div className="flex-grow flex flex-col justify-center gap-2 py-1">
        <div className="rounded-xl bg-[#1d2335] border border-slate-700/80 p-2.5 sm:p-3 shadow">
          <div className="flex items-center justify-between mb-1">
            <span className="text-[9px] font-bold text-sky-400 uppercase tracking-wide">Question 1 • Multiple Choice</span>
            <span className="text-[8px] text-slate-400">NCERT Class 10 Biology</span>
          </div>

          <p className="text-[10.5px] sm:text-[11.5px] font-semibold text-white mb-2 leading-snug">
            Which pigment is primarily responsible for absorbing light energy during photosynthesis?
          </p>

          <div className="grid grid-cols-2 gap-1.5">
            <div className="rounded-lg bg-emerald-950/60 border border-emerald-500/60 p-1.5 flex items-center justify-between text-[9px]">
              <span className="font-medium text-emerald-300">A. Chlorophyll a</span>
              <Check className="w-3 h-3 text-emerald-400" />
            </div>
            <div className="rounded-lg bg-slate-900/60 border border-slate-800 p-1.5 text-[9px] text-slate-400">
              B. Carotenoid
            </div>
            <div className="rounded-lg bg-slate-900/60 border border-slate-800 p-1.5 text-[9px] text-slate-400">
              C. Anthocyanin
            </div>
            <div className="rounded-lg bg-slate-900/60 border border-slate-800 p-1.5 text-[9px] text-slate-400">
              D. Xanthophyll
            </div>
          </div>
        </div>

        <div className="rounded-lg bg-slate-900/70 border border-slate-800/80 p-2 flex items-center justify-between text-[9px] text-slate-300">
          <span>Question 2: In which organelle does the Calvin cycle occur?</span>
          <span className="text-sky-400 font-semibold">Stroma</span>
        </div>
      </div>

      {/* Bottom Actions */}
      <div className="flex items-center justify-between text-[9px] border-t border-slate-800/80 pt-1">
        <span className="text-slate-400">88% Projected Class Mastery</span>
        <div className="flex gap-1.5">
          <button className="px-2.5 py-0.5 rounded bg-sky-600 hover:bg-sky-500 text-white font-medium text-[9px]">
            Assign as Homework
          </button>
          <button className="px-2 py-0.5 rounded bg-slate-700 hover:bg-slate-600 text-slate-200 text-[9px]">
            Push Live Poll
          </button>
        </div>
      </div>
    </div>
  );
}

// 3. AI Summarizer & Class Recap
function ScreenAiSummarizer() {
  return (
    <div className="relative w-full h-full bg-[#121622] text-white flex flex-col justify-between p-2 sm:p-3 select-none overflow-hidden font-sans">
      {/* Top Header */}
      <div className="flex items-center justify-between text-[9px] sm:text-[10px] text-slate-400 border-b border-slate-800/80 pb-1.5">
        <div className="flex items-center gap-2">
          <span className="px-1.5 py-0.5 rounded bg-slate-800 text-slate-300 font-mono text-[8px] sm:text-[9px]">
            Classroom ID: 0823791725
          </span>
          <span className="font-semibold text-white text-[10px] sm:text-[11px]">AI Class Recap & Learning Retention</span>
        </div>
        <span className="text-purple-400 text-[9px]">45 min lesson summarized</span>
      </div>

      {/* Summary Card */}
      <div className="flex-grow flex flex-col justify-center py-1">
        <div className="rounded-xl bg-[#1b2133] border border-slate-700 p-2.5 sm:p-3 shadow-lg">
          <div className="flex items-center justify-between mb-1.5">
            <h4 className="text-[11px] sm:text-[12px] font-bold text-white">
              Lesson Summary: Classical Redox Reactions
            </h4>
            <span className="px-1.5 py-0.5 rounded text-[8px] bg-purple-500/20 text-purple-300 font-semibold">
              High Retention Deck
            </span>
          </div>

          <div className="space-y-1 text-[9px] sm:text-[10px] text-slate-300">
            <div className="flex items-start gap-1.5">
              <span className="text-amber-400 font-bold">⚡</span>
              <span><strong>Oxidation:</strong> Loss of electrons / Increase in oxidation number (OIL)</span>
            </div>
            <div className="flex items-start gap-1.5">
              <span className="text-sky-400 font-bold">🧪</span>
              <span><strong>Reduction:</strong> Gain of electrons / Decrease in oxidation number (RIG)</span>
            </div>
            <div className="flex items-start gap-1.5">
              <span className="text-emerald-400 font-bold">🔄</span>
              <span><strong>Simultaneous:</strong> Where there is oxidation, there is always reduction.</span>
            </div>
          </div>

          <div className="mt-2.5 pt-2 border-t border-slate-700/80 flex items-center justify-between text-[8.5px] text-slate-400">
            <span>5 practice problems attached to parent WhatsApp digest</span>
            <span className="text-emerald-400 font-medium">94% Retention Score</span>
          </div>
        </div>
      </div>

      {/* Bottom Actions */}
      <div className="flex items-center justify-between text-[9px] border-t border-slate-800/80 pt-1">
        <span className="text-slate-400">Auto-sent to connected student devices</span>
        <button className="px-2.5 py-0.5 rounded bg-purple-600 hover:bg-purple-500 text-white font-medium text-[9px]">
          Share Recap PDF
        </button>
      </div>
    </div>
  );
}

// 4. AI Studio (Exact Reference Screenshot 2)
function ScreenAiStudio() {
  return (
    <div className="relative w-full h-full bg-[#181c26] text-white flex flex-col justify-between p-2 sm:p-3 select-none overflow-hidden font-sans">
      {/* Top Header */}
      <div className="flex items-center justify-between text-[9px] sm:text-[10px] text-slate-400 border-b border-slate-800/80 pb-1.5">
        <div className="flex items-center gap-2">
          <span className="px-1.5 py-0.5 rounded bg-slate-800 text-slate-300 font-mono text-[8px] sm:text-[9px]">
            Classroom ID: 0823791725
          </span>
          <div className="flex items-center gap-1 text-slate-300">
            <span className="text-slate-400 text-xs">←</span>
            <span className="font-semibold text-white text-[10px] sm:text-[11px]">LearnBook</span>
            <span className="text-slate-400">• Chapter 1 - Redox Reactions</span>
          </div>
        </div>
        <div className="flex items-center gap-2 text-[9px] text-slate-400">
          <span className="px-1.5 py-0.5 rounded bg-slate-800 text-slate-300 text-[8px]">Chapter PDF</span>
        </div>
      </div>

      {/* Tabs Row */}
      <div className="flex items-center gap-3 text-[9px] sm:text-[10px] text-slate-400 border-b border-slate-800/60 py-1">
        <span className="text-sky-400 font-semibold border-b-2 border-sky-400 pb-0.5">Whiteboard</span>
        <span className="hover:text-slate-200">Video</span>
        <span className="hover:text-slate-200">Mindmap</span>
        <span className="hover:text-slate-200">Quiz</span>
        <span className="hover:text-slate-200">Notes</span>
      </div>

      {/* Main Two-Column Content Deck */}
      <div className="flex-grow grid grid-cols-12 gap-2 py-1.5 overflow-hidden">
        
        {/* Left Decks Sidebar */}
        <div className="col-span-4 rounded-lg bg-slate-900/80 border border-slate-800 p-1.5 space-y-1 text-[8.5px] overflow-hidden">
          <div className="text-[8px] font-bold uppercase tracking-wider text-slate-500 mb-1">
            Whiteboard Decks
          </div>
          <div className="rounded bg-sky-950/80 border border-sky-500/60 p-1 text-sky-200 font-medium truncate">
            1. Classical and E... <span className="text-[7.5px] text-sky-400">20 pgs</span>
          </div>
          <div className="rounded bg-slate-800/50 p-1 text-slate-400 truncate">
            2. Oxidation Num...
          </div>
          <div className="rounded bg-slate-800/50 p-1 text-slate-400 truncate">
            3. Balancing Red...
          </div>
          <div className="rounded bg-slate-800/50 p-1 text-slate-400 truncate">
            4. Redox Reactio...
          </div>
        </div>

        {/* Right Main Content Card */}
        <div className="col-span-8 rounded-xl bg-[#1e2330] border border-slate-800 p-2 sm:p-2.5 flex flex-col justify-between overflow-hidden">
          <div>
            <div className="flex items-center justify-between mb-1">
              <span className="text-[9px] sm:text-[10px] font-bold text-white truncate">
                Classical and Electron Transfer Ideas of Redox Reactions
              </span>
              <span className="text-[8px] text-slate-400 px-1 py-0.2 rounded bg-slate-800 shrink-0">
                20 pages
              </span>
            </div>

            <div className="rounded-lg bg-slate-950/90 border border-slate-800 p-2 space-y-1">
              <div className="text-[8.5px] text-amber-300 font-semibold uppercase tracking-wider">
                Welcome to Redox Reactions!
              </div>
              <div className="text-[9.5px] font-bold text-white">
                What are Redox Reactions?
              </div>
              <ul className="text-[8px] sm:text-[8.5px] text-slate-300 space-y-0.5 list-disc list-inside">
                <li>Burning of fuels for energy</li>
                <li>Electrochemical processes (batteries)</li>
                <li>Corrosion of metals</li>
                <li>Biological processes</li>
              </ul>
              <div className="mt-1 p-1 rounded bg-amber-950/40 border border-amber-500/40 text-[8px] text-amber-200 font-medium">
                Where there is oxidation, there is always reduction.
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between pt-1">
            <span className="text-[8px] font-mono text-slate-400">Page 1 of 20</span>
            <div className="flex gap-1">
              <button className="px-2 py-0.5 rounded bg-slate-800 text-slate-300 text-[8.5px]">
                Import Current Page
              </button>
              <button className="px-2 py-0.5 rounded bg-[#0284c7] text-white font-medium text-[8.5px]">
                Import All Pages
              </button>
            </div>
          </div>
        </div>

      </div>

      {/* Bottom Status */}
      <div className="flex items-center justify-between text-[9px] text-slate-400 border-t border-slate-800/80 pt-1">
        <span>Instant curriculum mapping for CBSE, ICSE & State Boards</span>
        <span className="text-sky-400 font-medium">AI Studio Ready</span>
      </div>
    </div>
  );
}

// 5. Ask Anything
function ScreenAskAnything() {
  return (
    <div className="relative w-full h-full bg-[#111726] text-white flex flex-col justify-between p-2 sm:p-3 select-none overflow-hidden font-sans">
      {/* Top Header */}
      <div className="flex items-center justify-between text-[9px] sm:text-[10px] text-slate-400 border-b border-slate-800/80 pb-1.5">
        <div className="flex items-center gap-2">
          <span className="px-1.5 py-0.5 rounded bg-slate-800 text-slate-300 font-mono text-[8px] sm:text-[9px]">
            Classroom ID: 0823791725
          </span>
          <span className="font-semibold text-white text-[10px] sm:text-[11px]">EduAI Ask Anything</span>
        </div>
        <div className="flex items-center gap-1 text-emerald-400 text-[8.5px]">
          <ShieldCheck className="w-3 h-3 text-emerald-400" />
          <span>Student Safe Verified</span>
        </div>
      </div>

      {/* Student Question & AI Safe Answer */}
      <div className="flex-grow flex flex-col justify-center gap-2 py-1">
        {/* Student Question bubble */}
        <div className="rounded-lg bg-slate-800/80 border border-slate-700/70 p-2 text-[9.5px] sm:text-[10.5px]">
          <span className="text-sky-400 font-semibold">Student: </span>
          &quot;Why does the Moon have thousands of craters, but Earth hardly has any?&quot;
        </div>

        {/* AI Answer Card */}
        <div className="rounded-xl bg-[#1d2438] border border-sky-500/40 p-2.5 sm:p-3 shadow-lg">
          <div className="flex items-center gap-1.5 mb-1.5">
            <BrainCircuit className="w-3.5 h-3.5 text-sky-400" />
            <span className="text-[10px] sm:text-[11px] font-bold text-white">
              EduAI Verified Classroom Explanation
            </span>
          </div>

          <div className="space-y-1 text-[8.5px] sm:text-[9.5px] text-slate-300 leading-relaxed">
            <p>
              <strong>1. Atmosphere:</strong> Earth&apos;s dense air burns up most meteoroids before impact.
            </p>
            <p>
              <strong>2. Active Weather & Erosion:</strong> Rain, wind, and volcanoes continually erase craters on Earth. The Moon has no atmosphere or weather.
            </p>
            <p>
              <strong>3. Oceans:</strong> 71% of Earth is water, hiding ancient impact basins.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="flex items-center justify-between text-[9px] border-t border-slate-800/80 pt-1">
        <span className="text-slate-400">Zero class disruption • K-12 safe content guardrails</span>
        <button className="px-2 py-0.5 rounded bg-sky-600 hover:bg-sky-500 text-white font-medium text-[9px]">
          Push Diagram to Board
        </button>
      </div>
    </div>
  );
}
