import React, { createContext, useContext, useState } from 'react';

const LanguageContext = createContext();

const translations = {
  de: {
    // Header
    downloadCV: 'CV herunterladen',
    
    // Home
    heroTitle: 'Echte Profis gefragt?',
    heroSubtitle: 'Wir haben 8 Jahre für Sie gelernt.',
    makeOffer: 'Angebot machen',
    promoText: 'Klicken Sie auf \'Angebot machen\' und erhalten Sie 100 Euro.',
    watchVideo: 'Video ansehen',
    
    // Navigation
    navAbout: 'Über mich',
    navEducation: 'Ausbildung',
    navExperience: 'Erfahrung & Projekte',
    navSkills: 'Kompetenzen',
    navContact: 'Kontakt',
    
    // About
    aboutTitle: 'Über mich',
    aboutText1: 'Seit meinem 14. Lebensjahr lebe und studiere ich selbstständig in Österreich. Diese Erfahrung hat mich früh unabhängig, belastbar und interkulturell höchst kompetent gemacht.',
    aboutText2: 'Aktuell studiere ich im 6. Semester „Global Sales and Marketing" an der FH Oberösterreich in Steyr (100 % englischsprachig). Mein Auslandssemester an der Providence University in Taiwan (2024/25) vertieft gerade meine Chinesisch-Kenntnisse und mein Verständnis für den asiatischen Markt.',
    aboutText3: 'Ich brenne für nachhaltige Technologien, internationale Geschäftsentwicklung und überzeugende Kommunikation – ob auf der Bühne oder im Kundengespräch.',
    
    // Education
    educationTitle: 'Ausbildung',
    edu1Title: 'Bachelor of Arts – Global Sales & Marketing',
    edu1Location: 'FH Oberösterreich, Campus Steyr',
    edu1Date: 'Seit 09.2023 (Abschluss 2026)',
    edu2Title: 'Auslandssemester',
    edu2Location: 'Providence University 靜宜大學, Taichung, Taiwan',
    edu2Date: '09.2024 – 02.2025',
    edu3Title: 'Handelsakademie Oberwart (HAK) – Schwerpunkt Unternehmensführung',
    edu3Location: 'Matura mit Auszeichnung',
    edu3Date: '2023',
    
    // Experience
    experienceTitle: 'Erfahrung & Projekte',
    exp1Title: 'Praktikant Nachhaltigkeit & XR-Technologien',
    exp1Company: 'NXRT GmbH, Wien',
    exp1Desc: 'Analyse der SDGs-Relevanz von AR/VR-Lösungen, Erstellung von Präsentationen für Investoren',
    exp2Title: 'Service & Upselling',
    exp2Company: 'Restaurant La Galeria, Steyr',
    exp2Date: '2023–2024',
    exp2Desc: 'Deutliche Umsatzsteigerung durch aktives Upselling und Kundenbindung',
    exp3Title: 'Junior Company',
    exp3Company: 'HAK Oberwart',
    exp3Desc: 'Gründung und Führung eines echten Schülerunternehmens (Produktion, Marketing, Finanzen)',
    exp4Title: 'Österreichischer Rhetorik-Meister',
    exp4Company: 'SAG\'S MULTI!',
    exp4Date: '2020/21',
    exp5Title: 'Bootcamp Wien',
    exp5Desc: 'SDGs, Moonshot-Thinking, Exponential Technologies & Pitching',
    
    // Skills
    skillsTitle: 'Kompetenzen',
    skillsLanguages: 'Sprachen',
    skillsIT: 'IT',
    skillsSoft: 'Soft Skills',
    langRussian: 'Russisch (Muttersprache)',
    langGerman: 'Deutsch (C2 verhandlungssicher)',
    langEnglish: 'Englisch (C1)',
    langSpanish: 'Spanisch (B2)',
    langChinese: 'Chinesisch (B1, intensiv im Aufbau)',
    itSAP: 'SAP (MM, FI, SD)',
    itExcel: 'Excel (fortgeschritten)',
    itAccess: 'Access',
    itOffice: 'Office 365',
    softUpselling: 'Upselling & Verkaufstechniken',
    softIntercultural: 'Interkulturelle Kommunikation',
    softPresentation: 'Präsentation & Rhetorik',
    softEntrepreneurial: 'Unternehmerisches Denken',
    softResilience: 'Hohe Belastbarkeit',
    
    // Contact
    contactTitle: 'Kontakt',
    contactIntro: 'Ich freue mich auf Ihre Nachricht!',
    contactInternship: 'Pflichtpraktikum ab Juli/August 2025 (6. Semester)',
    contactFlexible: 'Flexibel einsetzbar in Linz, Steyr, Wien oder remote',
    
    // Footer
    footerRights: '© 2025 Alexey Bespechny. Alle Rechte vorbehalten.',
  },
  en: {
    // Header
    downloadCV: 'Download CV',
    
    // Home
    heroTitle: 'Need a real pro?',
    heroSubtitle: 'We trained for 8 years to serve you.',
    makeOffer: 'Do an offer',
    promoText: 'Click the \'Make an Offer\' button and receive 100 euros.',
    watchVideo: 'Watch Video',
    
    // Navigation
    navAbout: 'About Me',
    navEducation: 'Education',
    navExperience: 'Experience & Projects',
    navSkills: 'Skills',
    navContact: 'Contact',
    
    // About
    aboutTitle: 'About Me',
    aboutText1: 'I have been living and studying independently in Austria since the age of 14 – an experience that made me mature, resilient and truly intercultural.',
    aboutText2: 'Currently in my 6th semester of the English-taught Bachelor programme "Global Sales & Marketing" at FH Upper Austria (Steyr Campus). Spending my exchange semester 2024/25 at Providence University in Taiwan to strengthen my Chinese and deepen my understanding of Asian markets.',
    aboutText3: 'Passionate about sustainable technologies, international business development and persuasive communication – on stage and in front of clients.',
    
    // Education
    educationTitle: 'Education',
    edu1Title: 'B.A. Global Sales & Marketing',
    edu1Location: 'University of Applied Sciences Upper Austria, Steyr Campus',
    edu1Date: 'since 09.2023 (graduation 2026)',
    edu2Title: 'Exchange semester',
    edu2Location: 'Providence University, Taiwan',
    edu2Date: 'Sep 2024 – Feb 2025',
    edu3Title: 'Handelsakademie Oberwart (commercial college) – focus business management',
    edu3Location: 'Graduated with distinction',
    edu3Date: '2023',
    
    // Experience
    experienceTitle: 'Experience & Projects',
    exp1Title: 'Sustainability & XR Intern',
    exp1Company: 'NXRT GmbH, Vienna',
    exp1Desc: 'SDG relevance analysis of AR/VR solutions, investor presentations',
    exp2Title: 'Service & Upselling',
    exp2Company: 'La Galeria Italian Restaurant, Steyr',
    exp2Date: '2023–2024',
    exp2Desc: 'Significant revenue increase through active upselling',
    exp3Title: 'Junior Company',
    exp3Company: 'founded and managed a real student company (full cycle)',
    exp3Desc: '',
    exp4Title: 'Austrian public speaking champion',
    exp4Company: 'SAG\'S MULTI!',
    exp4Date: '2020/21',
    exp5Title: 'Vienna Bootcamp',
    exp5Desc: 'SDGs, Moonshot Thinking, Exponential Tech & Pitch Training',
    
    // Skills
    skillsTitle: 'Skills',
    skillsLanguages: 'Languages',
    skillsIT: 'Tools',
    skillsSoft: 'Key Strengths',
    langRussian: 'Russian (native)',
    langGerman: 'German (C2/business fluent)',
    langEnglish: 'English (C1)',
    langSpanish: 'Spanish (B2)',
    langChinese: 'Chinese (B1, currently intensifying)',
    itSAP: 'SAP (MM, FI, SD)',
    itExcel: 'Advanced Excel',
    itAccess: 'Access',
    itOffice: 'Office 365',
    softUpselling: 'Upselling & sales techniques',
    softIntercultural: 'Intercultural competence',
    softPresentation: 'Public speaking & pitching',
    softEntrepreneurial: 'Entrepreneurial mindset',
    softResilience: 'High resilience',
    
    // Contact
    contactTitle: 'Contact',
    contactIntro: 'Looking forward to your message!',
    contactInternship: 'Mandatory internship from July/August 2025 (6th semester)',
    contactFlexible: 'Flexible deployment in Linz, Steyr, Vienna or remote',
    
    // Footer
    footerRights: '© 2025 Alexey Bespechny. All rights reserved.',
  },
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('de');

  const t = (key) => translations[language][key] || key;

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'de' ? 'en' : 'de');
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
};