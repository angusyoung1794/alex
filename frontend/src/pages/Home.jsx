import React, { useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Mail, Play } from 'lucide-react';
import { Button } from '../components/ui/button';
import NavigationButtons from '../components/NavigationButtons';

const Home = () => {
  const { language, t } = useLanguage();
  const [fogOpacity, setFogOpacity] = useState(1);

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

  
  const getVideoUrl = (lang) => {
    const videos = {
      de: 'https://www.youtube.com/watch?v=WkoMyMRr46g',
      en: 'https://www.youtube.com/watch?v=jIrjb2hxF5Y',
      es: 'https://www.youtube.com/watch?v=L477pGiLIeo',
      zh: 'https://www.youtube.com/watch?v=dV2Z2tTVE6U',
    };
    return videos[lang];
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-black" />

      {/* Hero Section */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-5xl mx-auto">
          {/* Portrait with fog effect - Larger, no border */}
          <div className="relative mb-12 flex justify-center">
            <div className="relative">
              <img
                src="https://customer-assets.emergentagent.com/job_1e9b8f76-4521-4fdf-ae91-afad42458ef4/artifacts/2oicmsyy_main_page.jpg"
                alt="Aleksei Bespechnyi"
                className="w-96 h-96 object-cover rounded-full shadow-2xl shadow-pink-500/20 transition-all duration-1000"
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
              className="text-3xl md:text-4xl font-bold text-gray-600 tracking-wider"
              style={{
                transform: 'scaleY(1.5)',
                transformOrigin: 'center',
                letterSpacing: '0.1em',
              }}
            >
              {t('heroTitle')}
            </h1>
            <p className="text-4xl md:text-5xl text-white font-medium">
              {t('heroSubtitle')}
            </p>
          </div>

          {/* Contact Info */}
          <div className="text-center mb-8 space-y-2 px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-white">Aleksei Bespechnyi</h2>
            <p className="text-base md:text-lg text-gray-400">
              {language === 'de' 
                ? 'Bachelor Global Sales & Marketing Student (3. Jahr, FH Steyr)' 
                : 'Bachelor Global Sales & Marketing Student (3rd year, FH Steyr)'}
            </p>
            <p className="text-sm md:text-base text-gray-500 italic max-w-2xl mx-auto px-4">
              {language === 'de'
                ? '„Ich suche mein Pflichtpraktikum ab Sommer 2025 – idealerweise im internationalen Vertrieb, Key Account Management oder Digital Marketing."'
                : '"Looking for my mandatory internship from summer 2025 – ideally in international sales, key account management or digital marketing."'}
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center md:space-x-4 text-gray-400 pt-2 space-y-1 md:space-y-0 text-sm md:text-base">
              <span>+43 681 81411499</span>
              <span className="hidden md:inline">•</span>
              <span>7css77@gmail.com</span>
              <span className="hidden md:inline">•</span>
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

          {/* Promo Section with 4 languages */}
          <div className="bg-slate-900/50 backdrop-blur-md border border-pink-500/30 rounded-2xl p-8 max-w-4xl mx-auto">
            <div className="text-center space-y-6">
              <h3 className="text-2xl text-white font-bold mb-4">
                {language === 'de' ? 'Video-Angebote' : 'Video Offers'}
              </h3>
              
              {/* Deutsch Video */}
              <div className="bg-slate-800/50 border border-pink-500/20 rounded-xl p-4 mb-4 hover:border-pink-500/40 transition-all duration-300">
                <p className="text-sm md:text-base text-gray-300 mb-3">
                  {t('promoTextDeutsch')}
                </p>
                <a
                  href={getVideoUrl('de')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-500 hover:to-purple-500 text-white border-0 transition-all duration-300 shadow-lg shadow-pink-500/20 hover:shadow-pink-500/40 px-4 py-2 rounded-md text-sm font-medium"
                  style={{ touchAction: 'manipulation' }}
                >
                  <Play className="w-4 h-4 mr-2" />
                  Deutsch
                </a>
              </div>

              {/* English Video */}
              <div className="bg-slate-800/50 border border-pink-500/20 rounded-xl p-4 mb-4 hover:border-pink-500/40 transition-all duration-300">
                <p className="text-sm md:text-base text-gray-300 mb-3">
                  {t('promoTextEnglish')}
                </p>
                <a
                  href={getVideoUrl('en')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-500 hover:to-purple-500 text-white border-0 transition-all duration-300 shadow-lg shadow-pink-500/20 hover:shadow-pink-500/40 px-4 py-2 rounded-md text-sm font-medium"
                  style={{ touchAction: 'manipulation' }}
                >
                  <Play className="w-4 h-4 mr-2" />
                  English
                </a>
              </div>

              {/* Español Video */}
              <div className="bg-slate-800/50 border border-pink-500/20 rounded-xl p-4 mb-4 hover:border-pink-500/40 transition-all duration-300">
                <p className="text-sm md:text-base text-gray-300 mb-3">
                  {t('promoTextEspanol')}
                </p>
                <a
                  href={getVideoUrl('es')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-500 hover:to-purple-500 text-white border-0 transition-all duration-300 shadow-lg shadow-pink-500/20 hover:shadow-pink-500/40 px-4 py-2 rounded-md text-sm font-medium"
                  style={{ touchAction: 'manipulation' }}
                >
                  <Play className="w-4 h-4 mr-2" />
                  Español
                </a>
              </div>

              {/* Chinese Video */}
              <div className="bg-slate-800/50 border border-pink-500/20 rounded-xl p-4 hover:border-pink-500/40 transition-all duration-300">
                <p className="text-sm md:text-base text-gray-300 mb-3">
                  {t('promoTextChinese')}
                </p>
                <a
                  href={getVideoUrl('zh')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-500 hover:to-purple-500 text-white border-0 transition-all duration-300 shadow-lg shadow-pink-500/20 hover:shadow-pink-500/40 px-4 py-2 rounded-md text-sm font-medium"
                  style={{ touchAction: 'manipulation' }}
                >
                  <Play className="w-4 h-4 mr-2" />
                  中文
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Buttons */}
      <NavigationButtons />

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
};

export default Home;
