import React, { useState } from 'react';
import { X, CheckCircle, Sparkles, Monitor, Play, Shield, ArrowRight, BookOpen, Send } from 'lucide-react';

export function OrderModal({ isOpen, onClose }) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    school: '',
    email: '',
    phone: '',
    size: '75',
    quantity: '1'
  });

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-slate-200">
        <button 
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-slate-400 hover:text-slate-700 rounded-full hover:bg-slate-100 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-8">
            <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-2">Order Inquiry Received!</h3>
            <p className="text-sm text-slate-600 mb-6">
              Thank you, {formData.name || 'Educator'}. An Educrop classroom specialist will contact you within 2 hours with an official quote and free demo scheduling.
            </p>
            <button
              onClick={() => { setSubmitted(false); onClose(); }}
              className="px-6 py-2.5 bg-[#14234b] text-white text-sm font-semibold rounded-xl hover:bg-[#1a2e63]"
            >
              Done
            </button>
          </div>
        ) : (
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold uppercase tracking-wider bg-sky-100 text-sky-800">
                Official Quote
              </span>
            </div>
            <h2 className="text-2xl font-bold text-[#14234b] mb-1">
              Order Educrop X
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mb-6">
              India&apos;s #1 AI-Powered Connected Classroom Device for your school or institute.
            </p>

            <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Contact Name</label>
                  <input
                    type="text"
                    required
                    placeholder="Principal / Admin Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full text-xs px-3 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-sky-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">School / Institute</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. DPS International"
                    value={formData.school}
                    onChange={(e) => setFormData({ ...formData, school: e.target.value })}
                    className="w-full text-xs px-3 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-sky-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Email Address</label>
                  <input
                    type="email"
                    required
                    placeholder="admin@school.edu"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full text-xs px-3 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-sky-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Mobile Number</label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full text-xs px-3 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-sky-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Display Size</label>
                  <select
                    value={formData.size}
                    onChange={(e) => setFormData({ ...formData, size: e.target.value })}
                    className="w-full text-xs px-3 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-sky-500"
                  >
                    <option value="65">Educrop X 65&quot; (Medium Classrooms)</option>
                    <option value="75">Educrop X 75&quot; (Most Popular)</option>
                    <option value="86">Educrop X 86&quot; (Large Lecture Halls)</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Number of Classrooms</label>
                  <select
                    value={formData.quantity}
                    onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                    className="w-full text-xs px-3 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-sky-500"
                  >
                    <option value="1">1 Display (Pilot Lab)</option>
                    <option value="2-5">2 to 5 Classrooms</option>
                    <option value="6-15">6 to 15 Classrooms</option>
                    <option value="15+">15+ Classrooms (Campus-wide)</option>
                  </select>
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3 bg-[#14234b] hover:bg-[#1b2f63] text-white text-sm font-semibold rounded-xl shadow-lg transition-colors flex items-center justify-center gap-2"
                >
                  <span>Request Instant Institutional Quote</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}

export function LoginModal({ isOpen, onClose }) {
  const [tab, setTab] = useState('login');

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-md bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-slate-200">
        <button 
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-slate-400 hover:text-slate-700 rounded-full hover:bg-slate-100 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="text-center mb-6">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-[#0284c7] to-[#38bdf8] flex items-center justify-center mx-auto mb-3 shadow-md">
            <Shield className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-xl font-bold text-[#14234b]">
            Educrop Cloud Portal
          </h2>
          <p className="text-xs text-slate-500 mt-1">
            Access your synchronized classroom lessons, attendance & EduAI
          </p>
        </div>

        {/* Tab switch */}
        <div className="flex bg-slate-100 p-1 rounded-xl mb-6 text-xs font-semibold">
          <button
            onClick={() => setTab('login')}
            className={`flex-1 py-2 rounded-lg transition-all ${
              tab === 'login' ? 'bg-white text-[#14234b] shadow-sm' : 'text-slate-500 hover:text-slate-900'
            }`}
          >
            Teacher / School Login
          </button>
          <button
            onClick={() => setTab('signup')}
            className={`flex-1 py-2 rounded-lg transition-all ${
              tab === 'signup' ? 'bg-white text-[#14234b] shadow-sm' : 'text-slate-500 hover:text-slate-900'
            }`}
          >
            Create School Account
          </button>
        </div>

        <form onSubmit={(e) => { e.preventDefault(); alert("Educrop Cloud session initiated."); onClose(); }} className="space-y-3.5">
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">Email or Mobile Number</label>
            <input
              type="text"
              required
              placeholder="teacher@school.edu / 9876543210"
              className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-sky-500"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">Password</label>
            <input
              type="password"
              required
              placeholder="••••••••"
              className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-sky-500"
            />
          </div>

          <div className="flex items-center justify-between text-[11px] text-slate-500 pt-1">
            <label className="flex items-center gap-1.5 cursor-pointer">
              <input type="checkbox" defaultChecked className="rounded text-sky-600 focus:ring-0" />
              <span>Remember me</span>
            </label>
            <a href="#forgot" className="text-sky-600 hover:underline">Forgot password?</a>
          </div>

          <button
            type="submit"
            className="w-full py-2.5 bg-[#14234b] hover:bg-[#1c2f63] text-white text-xs font-semibold rounded-xl shadow transition-colors mt-2"
          >
            {tab === 'login' ? 'Sign In to Educrop' : 'Register Institution'}
          </button>
        </form>
      </div>
    </div>
  );
}

export function DemoModal({ isOpen, onClose }) {
  const [activeStep, setActiveStep] = useState(0);

  if (!isOpen) return null;

  const demoFeatures = [
    {
      title: "EduAI Quiz & Lesson Copilot",
      desc: "Instantly create curriculum-aligned quizzes, explanations, and diagrams with a simple voice or text prompt.",
      badge: "AI Powered",
      color: "from-purple-900 to-indigo-950"
    },
    {
      title: "40-Point Zero-Latency Whiteboard",
      desc: "Multiple students can write simultaneously with natural handwriting recognition, mathematical formula solving, and shape drawing.",
      badge: "Whiteboard",
      color: "from-blue-900 to-slate-950"
    },
    {
      title: "Share X Wireless Casting",
      desc: "Connect up to 9 student or teacher devices (Laptops, Tablets, Phones) wirelessly with 2-way touch back control.",
      badge: "Wireless",
      color: "from-cyan-900 to-slate-950"
    },
    {
      title: "VisionX Smart Classroom Analytics",
      desc: "Built-in 4K auto-framing camera tracks the teacher seamlessly and provides attendance & engagement insights.",
      badge: "VisionX",
      color: "from-slate-900 to-sky-950"
    }
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-3xl bg-white rounded-3xl overflow-hidden shadow-2xl border border-slate-200">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 bg-black/40 hover:bg-black/70 text-white rounded-full transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Video / Interactive Visual Area */}
        <div className={`relative w-full aspect-video bg-gradient-to-tr ${demoFeatures[activeStep].color} p-6 sm:p-10 flex flex-col justify-between text-white overflow-hidden`}>
          <div className="flex items-center gap-2">
            <span className="px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-white/20 backdrop-blur-md border border-white/20">
              {demoFeatures[activeStep].badge}
            </span>
            <span className="text-xs text-white/70">Educrop X Interactive Demo</span>
          </div>

          <div className="my-auto max-w-lg">
            <h3 className="text-2xl sm:text-3xl font-extrabold mb-2 tracking-tight">
              {demoFeatures[activeStep].title}
            </h3>
            <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
              {demoFeatures[activeStep].desc}
            </p>
          </div>

          <div className="flex items-center justify-between z-10 pt-4">
            <div className="flex items-center gap-2">
              {demoFeatures.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveStep(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    activeStep === i ? 'w-8 bg-cyan-400' : 'w-2 bg-white/40 hover:bg-white/70'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={() => setActiveStep((activeStep + 1) % demoFeatures.length)}
              className="px-4 py-2 bg-white text-slate-900 text-xs font-semibold rounded-xl flex items-center gap-1.5 hover:bg-cyan-300 transition-colors"
            >
              <span>Next Feature</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Bottom Feature Tabs */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 grid grid-cols-2 sm:grid-cols-4 gap-2">
          {demoFeatures.map((f, i) => (
            <button
              key={i}
              onClick={() => setActiveStep(i)}
              className={`p-2.5 rounded-xl text-left transition-all ${
                activeStep === i ? 'bg-white shadow-sm border border-slate-200 text-[#14234b]' : 'text-slate-500 hover:text-slate-800'
              }`}
            >
              <div className="text-[11px] font-bold truncate">{f.title}</div>
              <div className="text-[10px] text-slate-400 truncate">{f.badge}</div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export function AppPreviewModal({ appId, onClose }) {
  if (!appId) return null;

  const appDetails = {
    whiteboard: {
      title: "Educrop Whiteboard",
      subtitle: "Multi-Touch Interactive Canvas",
      description: "Infinite collaborative canvas with 40 touch points, smart handwriting smoothing, geometric shape recognition, and automatic cloud sync to student devices.",
      badge: "Built-in App",
      iconColor: "bg-[#0091ff]"
    },
    google: {
      title: "Google EDLA Certified Workspace",
      subtitle: "Google Drive, Docs, Sheets & Play Store",
      description: "Direct native access to Google Classroom, Docs, Sheets, Slides, and the Google Play Store with enterprise security and single sign-on.",
      badge: "Google Certified",
      iconColor: "bg-white border border-slate-200"
    },
    eduai: {
      title: "EduAI Teaching Assistant",
      subtitle: "AI Copilot for Educators",
      description: "Generates interactive quizzes on any syllabus topic in 3 seconds, explains complex concepts with visual analogies, and generates tailored homework assignments.",
      badge: "EduAI 2.0",
      iconColor: "bg-purple-600"
    },
    sharex: {
      title: "Share X Wireless Casting",
      subtitle: "9-Screen Split Wireless Projection",
      description: "Cast screens from Windows, Mac, iOS, Android, and Chromebooks without cables. Supports 2-way touch back and teacher moderation mode.",
      badge: "Ultra Low Latency",
      iconColor: "bg-sky-600"
    },
    visionx: {
      title: "VisionX Classroom AI",
      subtitle: "Integrated 4K Camera & Audio Tracking",
      description: "8-array microphone with acoustic echo cancellation and AI facial tracking that automatically pans and zooms on the speaker during hybrid classes.",
      badge: "Smart Hardware",
      iconColor: "bg-slate-900"
    }
  };

  const app = appDetails[appId];
  if (!app) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-md bg-white rounded-3xl p-6 shadow-2xl border border-slate-200">
        <button 
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-slate-400 hover:text-slate-700 rounded-full hover:bg-slate-100 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-4">
          <div className={`w-12 h-12 rounded-2xl ${app.iconColor} flex items-center justify-center shadow-md`}>
            <Sparkles className="w-6 h-6 text-white" />
          </div>
          <div>
            <span className="px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-slate-100 text-slate-700">
              {app.badge}
            </span>
            <h3 className="text-lg font-bold text-[#14234b]">{app.title}</h3>
          </div>
        </div>

        <p className="text-xs font-semibold text-slate-700 mb-1">{app.subtitle}</p>
        <p className="text-xs text-slate-500 leading-relaxed mb-6">{app.description}</p>

        <div className="flex gap-2">
          <button
            onClick={onClose}
            className="flex-1 py-2.5 bg-[#14234b] text-white text-xs font-semibold rounded-xl hover:bg-[#1c2e5a] transition-colors"
          >
            Launch on Educrop X
          </button>
        </div>
      </div>
    </div>
  );
}

