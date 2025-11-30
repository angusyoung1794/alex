import React, { useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Mail, Play } from 'lucide-react';
import { Button } from '../components/ui/button';
import NavigationButtons from '../components/NavigationButtons';
import YouTubeModal from '../components/YouTubeModal';

const Home = () => {
  const { language, t } = useLanguage();
  const [fogOpacity, setFogOpacity] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    // Animate fog dissipation
    const timer = setTimeout(() => {
      setFogOpacity(0);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const handleMakeOffer = () => {
    const subject = language === 'de' ? 'Angebot machen' : 'Do an offer';
    window.location.href = `mailto:7css77@gmail.com?subject=${encodeURIComponent(subject)}`;
  };

  const getVideoUrl = () => {
    const videos = {
      de: 'https://youtube.com/shorts/WkoMyMRr46g?feature=share',
      en: 'https://youtube.com/shorts/jIrjb2hxF5Y?feature=share',
    };
    return videos[language] || videos.de;
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-purple-950/30 to-slate-950" />

      {/* Hero Section */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-5xl mx-auto">
          {/* Portrait with fog effect */}
          <div className="relative mb-12 flex justify-center">
            <div className="relative">
              <img
                src="https://customer-assets.emergentagent.com/job_1e9b8f76-4521-4fdf-ae91-afad42458ef4/artifacts/2oicmsyy_main_page.jpg"
                alt="Alexey Bespechny"
                className="w-64 h-64 object-cover rounded-full border-4 border-pink-500/30 shadow-2xl shadow-pink-500/20 transition-all duration-1000"
                style={{
                  filter: `blur(${fogOpacity * 8}px)`,
                  opacity: 1 - (fogOpacity * 0.5),
                }}
              />
              
              {/* Animated fog overlay */}
              <div 
                className="absolute inset-0 rounded-full bg-gradient-to-b from-white/40 via-gray-300/30 to-transparent transition-opacity duration-2000 pointer-events-none"
                style={{ opacity: fogOpacity }}
              />
              
              {/* Glow effect */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-pink-500/20 to-purple-500/20 blur-2xl animate-pulse" />
            </div>
          </div>

          {/* Hero Text */}
          <div className="text-center space-y-6 mb-12">
            <h1 
              className="text-6xl md:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-pink-400 tracking-wider"
              style={{
                transform: 'scaleY(1.5)',
                transformOrigin: 'center',
                letterSpacing: '0.1em',
              }}
            >
              {t('heroTitle')}
            </h1>
            <p className="text-2xl md:text-3xl text-gray-300 font-light">
              {t('heroSubtitle')}
            </p>
          </div>

          {/* Contact Info */}
          <div className="text-center mb-8 space-y-2">
            <h2 className="text-3xl font-bold text-white">Alexey Bespechny</h2>
            <p className="text-lg text-gray-400">
              {language === 'de' 
                ? 'Global Sales & Marketing Student (3. Jahr, FH Steyr)' 
                : 'Global Sales & Marketing Student (3rd year, FH Steyr)'}
            </p>
            <p className="text-md text-gray-500 italic max-w-2xl mx-auto">
              {language === 'de'
                ? '„Ich suche mein Pflichtpraktikum ab Sommer 2025 – idealerweise im internationalen Vertrieb, Key Account Management oder Digital Marketing."'
                : '"Looking for my mandatory internship from summer 2025 – ideally in international sales, key account management or digital marketing."'}
            </p>
            <div className="flex items-center justify-center space-x-4 text-gray-400 pt-2">
              <span>+43 681 81411499</span>
              <span>•</span>
              <span>7css77@gmail.com</span>
              <span>•</span>
              <span>Linz/Steyr/Wien/Salzburg</span>
            </div>
          </div>

          {/* CTA Button */}
          <div className="flex justify-center mb-12">
            <Button
              onClick={handleMakeOffer}
              size="lg"
              className="bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-500 hover:to-purple-500 text-white px-12 py-6 text-xl font-bold rounded-full shadow-2xl shadow-pink-500/30 hover:shadow-pink-500/50 transition-all duration-300 hover:scale-105 border-0"
            >
              <Mail className="w-6 h-6 mr-3" />
              {t('makeOffer')}
            </Button>
          </div>

          {/* Promo Section */}
          <div className="bg-slate-900/50 backdrop-blur-md border border-pink-500/30 rounded-2xl p-8 max-w-2xl mx-auto">
            <div className="text-center space-y-4">
              <p className="text-xl text-pink-400 font-semibold">
                {t('promoText')}
              </p>
              <Button
                onClick={() => setIsModalOpen(true)}
                variant="outline"
                className="border-pink-500/50 bg-slate-800/50 text-pink-400 hover:bg-pink-500/10 hover:text-pink-300 hover:border-pink-400 transition-all duration-300"
              >
                <Play className="w-5 h-5 mr-2" />
                {t('watchVideo')}
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Buttons */}
      <NavigationButtons />

      {/* YouTube Modal */}
      <YouTubeModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        videoUrl={getVideoUrl()}
        title={t('promoText')}
      />

      {/* Decorative elements */}
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-pink-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
    </div>
  );
};

export default Home;