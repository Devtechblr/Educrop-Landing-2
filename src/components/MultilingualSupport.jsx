import React, { useState } from 'react';
import { 
  Sparkles, 
  ChevronRight, 
  ChevronLeft, 
  PenTool, 
  Eraser, 
  Square, 
  RotateCcw, 
  RotateCw, 
  Settings, 
  Grid,
  Maximize2,
  ZoomIn
} from 'lucide-react';

// Multilingual educational dataset for all 8 languages
const LANGUAGES = {
  en: {
    id: 'en',
    btnLabel: 'English',
    dir: 'ltr',
    ocrSolver: 'OCR Solver',
    equation: 'x² + y² + z² = r²',
    desc1: "This equation defines a sphere centered at the origin at (0,0,0) with radius 'r'.",
    desc2: "It represents the 3D body where every surface point sits at an exact distance 'r' from the center.",
    writingText: 'Writing Text',
    aiPensAndTools: 'AI Pens and Tools',
    tools3d: '3D Tools',
    pointLabel: 'P (x, y, z)',
    radiusLabel: 'r',
    originLabel: '(0,0,0)',
    canvasInfo: 'Educrop Interactive Whiteboard • STEM Solver'
  },
  hi: {
    id: 'hi',
    btnLabel: 'हिन्दी',
    dir: 'ltr',
    ocrSolver: 'ओसीआर सॉल्वर',
    equation: 'x² + y² + z² = r²',
    desc1: "यह समीकरण मूल बिंदु (0,0,0) पर केंद्रित और त्रिज्या 'r' वाले एक गोले को परिभाषित करता है।",
    desc2: "यह उस 3D पिंड का प्रतिनिधित्व करता है जहाँ सतह का प्रत्येक बिंदु केंद्र से ठीक 'r' दूरी पर स्थित होता है।",
    writingText: 'हस्तलेखन पहचान',
    aiPensAndTools: 'एआई पेन और उपकरण',
    tools3d: '3D उपकरण',
    pointLabel: 'P (x, y, z)',
    radiusLabel: 'r',
    originLabel: '(0,0,0)',
    canvasInfo: 'एडुक्रॉप इंटरएक्टिव व्हाइटबोर्ड • गणित सॉल्वर'
  },
  ar: {
    id: 'ar',
    btnLabel: 'العربية',
    dir: 'rtl',
    ocrSolver: 'محلل النصوص OCR',
    equation: 'x² + y² + z² = r²',
    desc1: "تحدد هذه المعادلة كرة متمركزة عند نقطة الأصل (0,0,0) بنصف قطر 'r'.",
    desc2: "إنها تمثل مجسمًا ثلاثي الأبعاد حيث تقع كل نقطة على السطح على مسافة محددة 'r' من المركز.",
    writingText: 'التعرف على الكتابة اليدوية',
    aiPensAndTools: 'أقلام وأدوات الذكاء الاصطناعي',
    tools3d: 'أدوات ثلاثية الأبعاد',
    pointLabel: 'P (x, y, z)',
    radiusLabel: 'r',
    originLabel: '(0,0,0)',
    canvasInfo: 'لوحة إيديوكروب التفاعلية • حل المسائل الرياضية'
  },
  bn: {
    id: 'bn',
    btnLabel: 'বাংলা',
    dir: 'ltr',
    ocrSolver: 'ওসিআর সমাধানকারী',
    equation: 'x² + y² + z² = r²',
    desc1: "এই সমীকরণটি মূলবিন্দু (0,0,0)-তে কেন্দ্র এবং 'r' ব্যাসার্ধযুক্ত একটি গোলককে সংজ্ঞায়িত করে।",
    desc2: "এটি সেই ত্রিমাত্রিক বস্তুকে নির্দেশ করে যার পৃষ্ঠের প্রতিটি বিন্দু কেন্দ্র থেকে ঠিক 'r' দূরত্বে অবস্থিত।",
    writingText: 'হস্তাক্ষর রূপান্তর',
    aiPensAndTools: 'এআই পেন ও টুলস',
    tools3d: 'ত্রিমাত্রিক টুলস',
    pointLabel: 'P (x, y, z)',
    radiusLabel: 'r',
    originLabel: '(0,0,0)',
    canvasInfo: 'এডুক্রপ ইন্টারঅ্যাক্টিভ ক্যানভাস • গণিত সমাধান'
  },
  mr: {
    id: 'mr',
    btnLabel: 'मराठी',
    dir: 'ltr',
    ocrSolver: 'ओसीआर सॉल्व्हर',
    equation: 'x² + y² + z² = r²',
    desc1: "हे समीकरण मूळ बिंदू (0,0,0) वर केंद्र आणि 'r' त्रिज्या असलेल्या एका गोलाची व्याख्या करते.",
    desc2: "हे त्या 3D आकाराचे प्रतिनिधित्व करते ज्याचा प्रत्येक पृष्ठभाग बिंदू केंद्रापासून तंतोतंत 'r' अंतरावर असतो.",
    writingText: 'हस्तलेखन मजकूर',
    aiPensAndTools: 'एआय पेन आणि टूल्स',
    tools3d: '3D टूल्स',
    pointLabel: 'P (x, y, z)',
    radiusLabel: 'r',
    originLabel: '(0,0,0)',
    canvasInfo: 'एड्युकॉप इंटरअॅक्टिव्ह व्हाईटबोर्ड • गणित सोल्यूशन्स'
  },
  kn: {
    id: 'kn',
    btnLabel: 'ಕನ್ನಡ',
    dir: 'ltr',
    ocrSolver: 'ಒಸಿಆರ್ ಸಾಲ್ವರ್',
    equation: 'x² + y² + z² = r²',
    desc1: "ಈ ಸಮೀಕರಣವು ಮೂಲಬಿಂದು (0,0,0) ದಲ್ಲಿ ಕೇಂದ್ರ ಮತ್ತು 'r' ತ್ರಿಜ್ಯವಿರುವ ಗೋಳವನ್ನು ವ್ಯಾಖ್ಯಾನಿಸುತ್ತದೆ.",
    desc2: "ಇದು 3D ಆಕಾರವನ್ನು ಪ್ರತಿನಿಧಿಸುತ್ತದೆ, ಅಲ್ಲಿ ಮೇಲ್ಮೈಯ ಪ್ರತಿಯೊಂದು ಬಿಂದುವೂ ಕೇಂದ್ರದಿಂದ ನಿಖರವಾದ 'r' ದೂರದಲ್ಲಿದೆ.",
    writingText: 'ಕೈಬರಹ ಪಠ್ಯ',
    aiPensAndTools: 'ಎಐ ಪೆನ್ ಮತ್ತು ಪರಿಕರಗಳು',
    tools3d: '3D ಪರಿಕರಗಳು',
    pointLabel: 'P (x, y, z)',
    radiusLabel: 'r',
    originLabel: '(0,0,0)',
    canvasInfo: 'ಎಡುಕ್ರಾಪ್ ಸಂವಾದಾತ್ಮಕ ವೈಟ್‌ಬೋರ್ಡ್ • ಗಣಿತ ಪರಿಹಾರ'
  },
  ta: {
    id: 'ta',
    btnLabel: 'தமிழ்',
    dir: 'ltr',
    ocrSolver: 'ஓசிஆர் தீர்வு கருவி',
    equation: 'x² + y² + z² = r²',
    desc1: "இந்த சமன்பாடு ஆதிப்புள்ளி (0,0,0) ஐ மையமாகக் கொண்ட 'r' ஆரமுடைய ஒரு கோளத்தை வரையறுக்கிறது.",
    desc2: "மேற்பரப்பில் உள்ள ஒவ்வொரு புள்ளியும் மையத்திலிருந்து துல்லியமாக 'r' தொலைவில் அமைந்துள்ள முப்பரிமாண வடிவத்தை இது குறிக்கிறது.",
    writingText: 'கையெழுத்து உரை',
    aiPensAndTools: 'AI பேனாக்கள் மற்றும் கருவிகள்',
    tools3d: '3D கருவிகள்',
    pointLabel: 'P (x, y, z)',
    radiusLabel: 'r',
    originLabel: '(0,0,0)',
    canvasInfo: 'எடுக்ராப் ஊடாடும் வைட்போர்டு • கணித தீர்வு'
  },
  te: {
    id: 'te',
    btnLabel: 'తెలుగు',
    dir: 'ltr',
    ocrSolver: 'ఓసీఆర్ సాల్వర్',
    equation: 'x² + y² + z² = r²',
    desc1: "ఈ సమీకరణం మూలబిందువు (0,0,0) వద్ద కేంద్రం మరియు 'r' వ్యాసార్థం కలిగిన గోళాన్ని నిర్వచిస్తుంది.",
    desc2: "ఉపరితలంపై ప్రతి బిందువు కేంద్రం నుండి ఖచ్చితంగా 'r' దూరంలో ఉండే 3D రూపాన్ని ఇది సూచిస్తుంది.",
    writingText: 'చేతిరాత వచనం',
    aiPensAndTools: 'AI పెన్నులు మరియు పరికరాలు',
    tools3d: '3D పరికరాలు',
    pointLabel: 'P (x, y, z)',
    radiusLabel: 'r',
    originLabel: '(0,0,0)',
    canvasInfo: 'ఎడుక్రాప్ ఇంటరాక్టివ్ వైట్‌బోర్డ్ • గణిత సాధన'
  }
};

const LEFT_LANGS = ['en', 'hi', 'ar', 'bn'];
const RIGHT_LANGS = ['mr', 'kn', 'ta', 'te'];

export default function MultilingualSupport() {
  const [selectedLang, setSelectedLang] = useState('en');
  const current = LANGUAGES[selectedLang] || LANGUAGES.en;
  const isRTL = current.dir === 'rtl';

  return (
    <section className="relative w-full bg-white py-16 sm:py-20 lg:py-24 border-t border-slate-100 select-none overflow-hidden">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* 1. Section Header: Left Heading, Right Description */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 sm:mb-16">
          <div className="max-w-xl">
            <h2 className="text-[26px] sm:text-[34px] md:text-[38px] lg:text-[42px] font-extrabold text-[#111c38] tracking-tight leading-[1.14]">
              Designed for every subject.<br />
              Perfected in classrooms.
            </h2>
          </div>

          <div className="md:max-w-md lg:max-w-lg md:pb-2">
            <p className="text-[13.5px] sm:text-[15px] text-[#5a6578] leading-relaxed">
              Years of real classroom insight, distilled into one whiteboard — so teaching feels effortless, not technical.
            </p>
          </div>
        </div>

        {/* Mobile / Tablet Language Bar (Visible only on smaller screens) */}
        <div className="lg:hidden mb-6">
          <div className="grid grid-cols-4 gap-2 sm:gap-2.5 max-w-md mx-auto">
            {[...LEFT_LANGS, ...RIGHT_LANGS].map((langKey) => {
              const lang = LANGUAGES[langKey];
              const isSelected = selectedLang === langKey;
              return (
                <button
                  key={langKey}
                  onClick={() => setSelectedLang(langKey)}
                  className={`py-2 px-1 text-center rounded-xl text-xs sm:text-[13px] font-semibold transition-all duration-200 ${
                    isSelected
                      ? 'bg-[#0284c7] text-white shadow-md shadow-sky-500/25 border border-[#0284c7]'
                      : 'bg-white text-[#151d28] border border-[#cbe2f8] hover:border-sky-400 hover:text-sky-600 shadow-sm'
                  }`}
                >
                  {lang.btnLabel}
                </button>
              );
            })}
          </div>
        </div>

        {/* 2. Main Content Area: Left Buttons, Center Smartboard, Right Buttons */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-8 xl:gap-10">

          {/* Left Side Language Buttons (Desktop) */}
          <div className="hidden lg:flex flex-col gap-4 xl:gap-5 w-32 xl:w-36 shrink-0">
            {LEFT_LANGS.map((langKey) => {
              const lang = LANGUAGES[langKey];
              const isSelected = selectedLang === langKey;
              return (
                <button
                  key={langKey}
                  onClick={() => setSelectedLang(langKey)}
                  className={`w-full py-3 px-4 rounded-xl text-center text-sm xl:text-[15px] font-semibold transition-all duration-200 cursor-pointer ${
                    isSelected
                      ? 'bg-[#0284c7] text-white shadow-[0_4px_14px_rgba(2,132,199,0.35)] border border-[#0284c7] scale-[1.02]'
                      : 'bg-white text-[#151d28] border border-[#cbe2f8] shadow-[0_2px_8px_rgba(2,132,199,0.04)] hover:border-sky-400 hover:text-sky-600 hover:shadow-sm'
                  }`}
                >
                  {lang.btnLabel}
                </button>
              );
            })}
          </div>

          {/* Central Interactive Smartboard Display Preview */}
          <div className="w-full max-w-[700px] xl:max-w-[740px] shrink-1">
            
            {/* Metallic Bezel Hardware Frame */}
            <div className="relative rounded-[16px] sm:rounded-[22px] p-[5px] sm:p-[7px] bg-gradient-to-b from-[#e8ecf2] via-[#cbd5e1] to-[#9aa6b8] border border-slate-300 shadow-[0_22px_55px_-12px_rgba(15,23,42,0.22),0_8px_20px_-8px_rgba(0,0,0,0.12)]">
              
              {/* Top Camera Bar & Dual Mics */}
              <div className="w-16 h-2 sm:h-2.5 bg-[#171e2e] rounded-full mx-auto flex items-center justify-center gap-1.5 mb-1 sm:mb-1.5 shadow-inner">
                <div className="w-1 h-1 rounded-full bg-slate-600" />
                <div className="w-1.5 h-1.5 rounded-full bg-[#00d2ff] shadow-[0_0_5px_#00d2ff]" />
                <div className="w-1 h-1 rounded-full bg-slate-600" />
              </div>

              {/* Main Whiteboard Screen */}
              <div 
                className="relative rounded-[11px] sm:rounded-[15px] overflow-hidden bg-[#181c26] aspect-[16/10] w-full shadow-inner border border-black/40 text-white font-sans flex flex-col justify-between p-3 sm:p-4"
                dir={isRTL ? 'rtl' : 'ltr'}
              >
                
                {/* Upper Section: OCR Solver + Sphere Math & 3D Diagram */}
                <div className="relative flex-grow flex items-stretch justify-between gap-3 overflow-hidden">
                  
                  {/* Left Column inside Screen: OCR Badge + Equation + Text Explanation + AI Pens & Tools preview */}
                  <div className="flex-1 flex flex-col justify-between pr-1 z-10">
                    
                    <div>
                      {/* OCR Solver Pill Badge */}
                      <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white text-slate-900 text-[9px] sm:text-[10px] font-bold shadow-sm mb-2.5">
                        <Sparkles className="w-2.5 h-2.5 text-sky-600" />
                        <span>{current.ocrSolver}</span>
                      </div>

                      {/* Mathematical Equation */}
                      <div className="text-xl sm:text-2xl lg:text-[26px] font-bold text-white tracking-wide font-mono mb-2">
                        {current.equation}
                      </div>

                      {/* Educational Explanation */}
                      <div className="space-y-1 text-[9.5px] sm:text-[11px] text-slate-300 leading-relaxed max-w-[280px] sm:max-w-[320px]">
                        <p>{current.desc1}</p>
                        <p className="text-slate-400">{current.desc2}</p>
                      </div>
                    </div>

                    {/* Bottom-left sub-card: "Writing Text" / AI Pens and Tools */}
                    <div className="relative mt-2 sm:mt-3">
                      <div className="rounded-xl bg-[#121620]/90 border border-slate-700/80 p-2 sm:p-2.5 w-44 sm:w-52 shadow-lg">
                        <div className="flex items-center justify-between text-[8px] sm:text-[9px] text-slate-400 mb-1">
                          <span className="font-semibold text-white">{current.writingText}</span>
                          <span className="text-[7.5px] text-sky-400">OCR AI</span>
                        </div>
                        
                        {/* Handwriting Recognition Visual */}
                        <div className="flex items-center justify-between gap-1.5">
                          <div className="h-8 flex-1 rounded bg-slate-900/90 border border-slate-800 p-1 flex items-center justify-center">
                            <svg viewBox="0 0 40 20" className="w-full h-full text-sky-400">
                              <ellipse cx="20" cy="10" rx="16" ry="6" fill="none" stroke="currentColor" strokeWidth="1.2" strokeDasharray="2,2" />
                              <line x1="4" y1="10" x2="36" y2="10" stroke="currentColor" strokeWidth="1" />
                            </svg>
                          </div>
                          <div className="h-8 flex-1 rounded bg-slate-900/90 border border-slate-800 p-1 flex items-center justify-center">
                            <svg viewBox="0 0 30 24" className="w-full h-full text-amber-400">
                              <polygon points="15,2 28,8 28,18 15,22 2,18 2,8" fill="none" stroke="currentColor" strokeWidth="1.2" />
                              <line x1="15" y1="8" x2="15" y2="22" stroke="currentColor" strokeWidth="1" />
                            </svg>
                          </div>
                        </div>

                        {/* Color palette dots */}
                        <div className="flex items-center justify-between pt-1.5 mt-1 border-t border-slate-800/80">
                          <div className="flex gap-1">
                            <span className="w-2 h-2 rounded-full bg-blue-500" />
                            <span className="w-2 h-2 rounded-full bg-cyan-400" />
                            <span className="w-2 h-2 rounded-full bg-amber-400" />
                            <span className="w-2 h-2 rounded-full bg-emerald-400" />
                          </div>
                          <span className="text-[7px] text-slate-500 font-mono">0.5mm Pen</span>
                        </div>
                      </div>

                      {/* "AI Pens and Tools" pill badge */}
                      <div className="absolute -bottom-2 right-1 px-2 py-0.5 rounded-full bg-white text-slate-900 text-[8px] sm:text-[8.5px] font-bold shadow-md flex items-center gap-1 border border-slate-200">
                        <PenTool className="w-2 h-2 text-sky-600" />
                        <span>{current.aiPensAndTools}</span>
                      </div>
                    </div>

                  </div>

                  {/* Right Column inside Screen: 3D Tools Pill + 3D Coordinate Sphere Diagram */}
                  <div className="w-[180px] sm:w-[240px] lg:w-[260px] relative flex flex-col items-center justify-center shrink-0">
                    
                    {/* "3D Tools" Pill Badge */}
                    <div className="absolute top-0 right-10 sm:right-14 z-20 px-2.5 py-0.5 rounded-full bg-white text-slate-900 text-[8.5px] sm:text-[9.5px] font-bold shadow-md flex items-center gap-1 border border-slate-200">
                      <Square className="w-2.5 h-2.5 text-sky-600" />
                      <span>{current.tools3d}</span>
                    </div>

                    {/* High-Precision 3D Coordinate Sphere Graphic */}
                    <div className="relative w-full aspect-square flex items-center justify-center">
                      <svg 
                        viewBox="0 0 280 260" 
                        className="w-full h-full overflow-visible select-none"
                      >
                        <defs>
                          {/* Radial gradient for the translucent 3D sphere */}
                          <radialGradient id="sphereGrad" cx="35%" cy="30%" r="65%">
                            <stop offset="0%" stopColor="#dbeafe" stopOpacity="0.8" />
                            <stop offset="45%" stopColor="#bfdbfe" stopOpacity="0.5" />
                            <stop offset="85%" stopColor="#93c5fd" stopOpacity="0.25" />
                            <stop offset="100%" stopColor="#60a5fa" stopOpacity="0.4" />
                          </radialGradient>
                          {/* Glow filter for the point marker */}
                          <filter id="pointGlow" x="-50%" y="-50%" width="200%" height="200%">
                            <feDropShadow dx="0" dy="0" stdDeviation="2" floodColor="#f97316" />
                          </filter>
                        </defs>

                        {/* 3D Coordinate Axes */}
                        {/* Z-Axis (Vertical) */}
                        <line x1="140" y1="230" x2="140" y2="25" stroke="#94a3b8" strokeWidth="1.2" strokeDasharray="3,3" opacity="0.6" />
                        <line x1="140" y1="130" x2="140" y2="20" stroke="#cbd5e1" strokeWidth="1.5" />
                        <polygon points="140,14 136,24 144,24" fill="#cbd5e1" />
                        <text x="140" y="8" fill="#f8fafc" fontSize="13" fontWeight="bold" textAnchor="middle">Z</text>

                        {/* X-Axis (Diagonal Down-Left) */}
                        <line x1="140" y1="130" x2="25" y2="215" stroke="#cbd5e1" strokeWidth="1.5" />
                        <polygon points="20,219 23,208 31,215" fill="#cbd5e1" />
                        <text x="12" y="228" fill="#f8fafc" fontSize="13" fontWeight="bold">X</text>

                        {/* Y-Axis (Diagonal Right) */}
                        <line x1="140" y1="130" x2="260" y2="175" stroke="#cbd5e1" strokeWidth="1.5" />
                        <polygon points="266,177 256,172 258,181" fill="#cbd5e1" />
                        <text x="272" y="182" fill="#f8fafc" fontSize="13" fontWeight="bold">Y</text>

                        {/* 3D Sphere Body */}
                        <circle cx="140" cy="130" r="75" fill="url(#sphereGrad)" stroke="#38bdf8" strokeWidth="1.5" />

                        {/* Equator Ellipse (Horizontal Latitude Ring) */}
                        <ellipse cx="140" cy="130" rx="75" ry="24" fill="none" stroke="#0284c7" strokeWidth="1.2" strokeDasharray="3,2" opacity="0.8" />

                        {/* Prime Meridian Ellipse (Vertical Longitude Ring) */}
                        <ellipse cx="140" cy="130" rx="26" ry="75" fill="none" stroke="#0284c7" strokeWidth="1.2" strokeDasharray="3,2" opacity="0.8" />

                        {/* Origin Center Point (0,0,0) */}
                        <circle cx="140" cy="130" r="3" fill="#cbd5e1" />

                        {/* Radius Vector Line in Bright Red/Orange */}
                        <line x1="140" y1="130" x2="192" y2="84" stroke="#ea580c" strokeWidth="2" />

                        {/* Radius label 'r' */}
                        <text x="160" y="103" fill="#ea580c" fontSize="12" fontWeight="bold" fontStyle="italic">
                          {current.radiusLabel}
                        </text>

                        {/* Point P on Sphere Surface */}
                        <circle cx="192" cy="84" r="4.5" fill="#ea580c" filter="url(#pointGlow)" />
                        <circle cx="192" cy="84" r="2" fill="#ffffff" />

                        {/* Point Label Text: P(x, y, z) */}
                        <text x="200" y="78" fill="#f8fafc" fontSize="11" fontWeight="bold" textAnchor="start">
                          {current.pointLabel}
                        </text>

                        {/* Subtle helper projection line from P to equator plane */}
                        <line x1="192" y1="84" x2="192" y2="136" stroke="#94a3b8" strokeWidth="0.8" strokeDasharray="2,2" opacity="0.6" />
                        <circle cx="192" cy="136" r="1.5" fill="#94a3b8" opacity="0.8" />
                      </svg>
                    </div>

                  </div>

                </div>

                {/* Bottom Floating Whiteboard Toolbar */}
                <div className="relative pt-2 mt-auto border-t border-slate-800/80 flex items-center justify-between text-[9px] text-slate-400">
                  
                  {/* Left App Icons */}
                  <div className="flex items-center gap-1">
                    <span className="w-4 h-4 rounded bg-[#0284c7] flex items-center justify-center text-white text-[7px] font-bold">W</span>
                    <span className="w-4 h-4 rounded bg-emerald-600 flex items-center justify-center text-white text-[7px]">📁</span>
                    <span className="w-4 h-4 rounded bg-purple-600 flex items-center justify-center text-white text-[7px]">⚡</span>
                  </div>

                  {/* Centered Whiteboard Tool Icons Bar */}
                  <div className="flex items-center gap-2 sm:gap-2.5 px-3 py-1 rounded-full bg-slate-900/90 border border-slate-800 shadow">
                    <PenTool className="w-3 h-3 text-sky-400" />
                    <span className="w-3 h-3 text-white font-serif font-bold text-[10px] flex items-center justify-center">T</span>
                    <Eraser className="w-3 h-3 text-slate-400 hover:text-white" />
                    <Square className="w-3 h-3 text-slate-400 hover:text-white" />
                    <RotateCcw className="w-3 h-3 text-slate-400 hover:text-white" />
                    <RotateCw className="w-3 h-3 text-slate-400 hover:text-white" />
                    <Grid className="w-3 h-3 text-slate-400 hover:text-white" />
                    <ZoomIn className="w-3 h-3 text-slate-400 hover:text-white" />
                  </div>

                  {/* Right Page Navigation */}
                  <div className="flex items-center gap-1.5 font-mono text-[9px]">
                    <span className="text-slate-500">&lt;</span>
                    <span className="px-1.5 py-0.5 rounded bg-slate-800 text-slate-300">1/1</span>
                    <span className="text-slate-500">&gt;</span>
                  </div>

                </div>

              </div>

              {/* Bottom Soundbar Frame & Educrop X Branding */}
              <div className="pt-1.5 pb-0.5 px-3 flex items-center justify-between text-[10px] text-slate-500 select-none">
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-[9px] text-slate-600 font-medium">Multi-Touch 4K</span>
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

          {/* Right Side Language Buttons (Desktop) */}
          <div className="hidden lg:flex flex-col gap-4 xl:gap-5 w-32 xl:w-36 shrink-0">
            {RIGHT_LANGS.map((langKey) => {
              const lang = LANGUAGES[langKey];
              const isSelected = selectedLang === langKey;
              return (
                <button
                  key={langKey}
                  onClick={() => setSelectedLang(langKey)}
                  className={`w-full py-3 px-4 rounded-xl text-center text-sm xl:text-[15px] font-semibold transition-all duration-200 cursor-pointer ${
                    isSelected
                      ? 'bg-[#0284c7] text-white shadow-[0_4px_14px_rgba(2,132,199,0.35)] border border-[#0284c7] scale-[1.02]'
                      : 'bg-white text-[#151d28] border border-[#cbe2f8] shadow-[0_2px_8px_rgba(2,132,199,0.04)] hover:border-sky-400 hover:text-sky-600 hover:shadow-sm'
                  }`}
                >
                  {lang.btnLabel}
                </button>
              );
            })}
          </div>

        </div>

        {/* 3. Bottom Centered Text: "Multilingual Support with 90+ global languages" */}
        <div className="text-center mt-10 sm:mt-12">
          <p className="text-lg sm:text-xl md:text-[22px] font-bold text-[#14234b] tracking-tight">
            Multilingual Support with 90+ global languages
          </p>
        </div>

      </div>
    </section>
  );
}

