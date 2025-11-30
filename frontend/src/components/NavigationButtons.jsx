import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { User, GraduationCap, Briefcase, Award, Mail } from 'lucide-react';

const NavigationButtons = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { t } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show buttons after a short delay
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  const navItems = [
    { path: '/about', label: t('navAbout'), icon: User, delay: 0 },
    { path: '/education', label: t('navEducation'), icon: GraduationCap, delay: 100 },
    { path: '/experience', label: t('navExperience'), icon: Briefcase, delay: 200 },
    { path: '/skills', label: t('navSkills'), icon: Award, delay: 300 },
    { path: '/contact', label: t('navContact'), icon: Mail, delay: 400 },
  ];

  const isHomePage = location.pathname === '/';

  if (!isHomePage) return null;

  return (
    <div className="fixed right-8 top-1/2 -translate-y-1/2 z-40 flex flex-col space-y-4">
      {navItems.map((item, index) => {
        const Icon = item.icon;
        return (
          <button
            key={item.path}
            onClick={() => navigate(item.path)}
            className={`group relative bg-gradient-to-r from-slate-800/90 to-slate-900/90 backdrop-blur-md border border-pink-500/30 rounded-l-2xl px-6 py-4 transition-all duration-500 hover:scale-105 hover:border-pink-400 hover:shadow-xl hover:shadow-pink-500/20 ${
              isVisible 
                ? 'translate-x-0 opacity-100' 
                : 'translate-x-[200px] opacity-0'
            }`}
            style={{ 
              transitionDelay: isVisible ? `${item.delay}ms` : '0ms',
            }}
          >
            <div className="flex items-center space-x-3">
              <Icon className="w-5 h-5 text-pink-400 transition-transform duration-300 group-hover:scale-110" />
              <span className="text-white font-medium whitespace-nowrap">
                {item.label}
              </span>
            </div>
            
            {/* Hover glow effect */}
            <div className="absolute inset-0 rounded-l-2xl bg-gradient-to-r from-pink-500/0 to-purple-500/0 group-hover:from-pink-500/10 group-hover:to-purple-500/10 transition-all duration-300" />
          </button>
        );
      })}
    </div>
  );
};

export default NavigationButtons;