import React from 'react';
import { Header } from '@/components/Header';
import { AboutSection } from '@/components/AboutSection';
import { ProjectsSection } from '@/components/ProjectsSection';
import { SkillsSection } from '@/components/SkillsSection';
import { ContactSection } from '@/components/ContactSection';
import { Footer } from '@/components/Footer';

const Index = () => {
  const handleNavigate = (section: string) => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div
      className="flex flex-col relative min-h-screen overflow-hidden items-center
                 pt-[75px] pb-11 px-20 max-md:px-5
                 bg-site-bg-light dark:bg-site-bg-dark bg-cover bg-center"
    >
      <main className="relative flex w-full max-w-[1173px] flex-col items-stretch max-md:max-w-full">
        <Header onNavigate={handleNavigate} />
        <AboutSection />
        <ProjectsSection />
        <SkillsSection />
        <ContactSection />
        <Footer />
      </main>
    </div>
  );
};

export default Index;
