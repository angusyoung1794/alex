import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { ArrowLeft, Languages, Laptop, Award } from 'lucide-react';
import { Button } from '../components/ui/button';
import NavigationButtons from '../components/NavigationButtons';

const Skills = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();

  const skillCategories = [
    {
      title: t('skillsLanguages'),
      icon: Languages,
      skills: [
        t('langRussian'),
        t('langGerman'),
        t('langEnglish'),
        t('langSpanish'),
        t('langChinese'),
      ],
      color: 'pink',
    },
    {
      title: t('skillsIT'),
      icon: Laptop,
      skills: [
        t('itSAP'),
        t('itExcel'),
        t('itAccess'),
        t('itOffice'),
      ],
      color: 'purple',
    },
    {
      title: t('skillsSoft'),
      icon: Award,
      skills: [
        t('softUpselling'),
        t('softIntercultural'),
        t('softPresentation'),
        t('softEntrepreneurial'),
        t('softResilience'),
      ],
      color: 'pink',
    },
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Back Button */}
        <Button
          onClick={() => navigate('/')}
          variant="outline"
          className="mb-8 border-pink-500/30 bg-slate-900/50 text-pink-400 hover:bg-pink-500/10 hover:text-pink-300 hover:border-pink-400 transition-all duration-300"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          {t('language') === 'de' ? 'Zurück' : 'Back'}
        </Button>

        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center space-x-3 mb-4">
            <Award className="w-8 h-8 text-pink-400" />
            <h1 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400">
              {t('skillsTitle')}
            </h1>
          </div>
          <div className="w-24 h-1 mx-auto bg-gradient-to-r from-pink-500 to-purple-500 rounded-full" />
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={index}
                className={`bg-slate-900/50 backdrop-blur-md border border-${category.color}-500/20 rounded-2xl p-8 hover:border-${category.color}-500/40 transition-all duration-500 hover:shadow-xl hover:shadow-${category.color}-500/10 transform hover:-translate-y-2`}
                style={{
                  animation: 'fadeInScale 0.6s ease-out forwards',
                  animationDelay: `${index * 150}ms`,
                  opacity: 0,
                }}
              >
                {/* Icon Header */}
                <div className="flex items-center space-x-3 mb-6">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br from-${category.color}-500/20 to-purple-500/20 flex items-center justify-center`}>
                    <Icon className={`w-6 h-6 text-${category.color}-400`} />
                  </div>
                  <h3 className="text-2xl font-bold text-white">
                    {category.title}
                  </h3>
                </div>

                {/* Skills List */}
                <ul className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <li
                      key={skillIndex}
                      className="flex items-start group"
                    >
                      <span className="text-pink-400 mr-2 group-hover:scale-125 transition-transform duration-300">→</span>
                      <span className="text-gray-300 leading-relaxed group-hover:text-white transition-colors duration-300">
                        {skill}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>

      {/* Background decoration */}
      <div className="fixed top-1/4 left-10 w-96 h-96 bg-pink-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="fixed bottom-1/4 right-10 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />

      <style jsx>{`
        @keyframes fadeInScale {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
    </div>
  );
};

export default Skills;