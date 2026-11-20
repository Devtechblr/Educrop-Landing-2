import React, { useState, useEffect } from 'react';
import AnnouncementBar from './components/AnnouncementBar';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import FeatureShowcase from './components/FeatureShowcase';
import MultilingualSupport from './components/MultilingualSupport';
import VisionXSection from './components/VisionXSection';
import SupportSection from './components/SupportSection';
import Footer from './components/Footer';
import ConnectedClassroomPage from './components/ConnectedClassroomPage';
import InteractiveWhiteboardPage from './components/InteractiveWhiteboardPage';
import { OrderModal, LoginModal, DemoModal, AppPreviewModal } from './components/Modals';

export default function App() {
  const [currentPage, setCurrentPage] = useState(() => {
    if (typeof window !== 'undefined') {
      if (window.location.hash === '#connected-classroom') return 'connected-classroom';
      if (window.location.hash === '#whiteboard' || window.location.hash === '#interactive-whiteboard') return 'whiteboard';
    }
    return 'home';
  });
  const [orderModalOpen, setOrderModalOpen] = useState(false);
  const [loginModalOpen, setLoginModalOpen] = useState(false);
  const [demoModalOpen, setDemoModalOpen] = useState(false);
  const [activeApp, setActiveApp] = useState(null);

  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash === '#connected-classroom') {
        setCurrentPage('connected-classroom');
      } else if (window.location.hash === '#whiteboard' || window.location.hash === '#interactive-whiteboard') {
        setCurrentPage('whiteboard');
      } else {
        setCurrentPage('home');
      }
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (page) => {
    setCurrentPage(page);
    if (page === 'connected-classroom') {
      window.location.hash = '#connected-classroom';
    } else if (page === 'whiteboard') {
      window.location.hash = '#interactive-whiteboard';
    } else {
      window.location.hash = '';
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSearchSelect = (query) => {
    setActiveApp('eduai');
  };

  return (
    <div className="relative min-h-screen flex flex-col justify-start bg-[#e9edf2] overflow-x-hidden">
      
      {currentPage === 'connected-classroom' ? (
        <ConnectedClassroomPage
          onNavigate={handleNavigate}
          onOpenOrder={() => setOrderModalOpen(true)}
          onOpenLogin={() => setLoginModalOpen(true)}
          onOpenDemo={() => setDemoModalOpen(true)}
        />
      ) : currentPage === 'whiteboard' ? (
        <InteractiveWhiteboardPage
          onNavigate={handleNavigate}
          onOpenOrder={() => setOrderModalOpen(true)}
          onOpenLogin={() => setLoginModalOpen(true)}
          onOpenDemo={() => setDemoModalOpen(true)}
        />
      ) : (
        <>
          {/* 1. Top Announcement Bar */}
          <AnnouncementBar />

          {/* 2. Floating Rounded Navigation Bar */}
          <Navbar 
            onOpenOrder={() => setOrderModalOpen(true)}
            onOpenLogin={() => setLoginModalOpen(true)}
            onNavigate={handleNavigate}
          />

          {/* 3. Hero Section with Exact Reference Design */}
          <main className="flex-grow flex flex-col justify-between">
            <HeroSection 
              onOpenGetStarted={() => setOrderModalOpen(true)}
              onOpenDemo={() => setDemoModalOpen(true)}
              onOpenApp={(id) => setActiveApp(id)}
              onSearchSelect={handleSearchSelect}
            />

            {/* 4. Auto-Looping Feature Showcase Section */}
            <FeatureShowcase />

            {/* 5. Interactive Multilingual Support Section */}
            <MultilingualSupport />

            {/* 6. Vision X - Device and Admin Management Section */}
            <VisionXSection />

            {/* 7. Support Beyond Software Section */}
            <SupportSection />
          </main>

          {/* 8. Footer Section */}
          <Footer />
        </>
      )}

      {/* Interactive Modals */}
      <OrderModal 
        isOpen={orderModalOpen} 
        onClose={() => setOrderModalOpen(false)} 
      />

      <LoginModal 
        isOpen={loginModalOpen} 
        onClose={() => setLoginModalOpen(false)} 
      />

      <DemoModal 
        isOpen={demoModalOpen} 
        onClose={() => setDemoModalOpen(false)} 
      />

      <AppPreviewModal 
        appId={activeApp} 
        onClose={() => setActiveApp(null)} 
      />

    </div>
  );
}

