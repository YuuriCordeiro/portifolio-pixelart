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
    <div className="flex flex-col relative min-h-screen overflow-hidden items-center pt-[75px] pb-11 px-20 max-md:px-5">
      <img
        src="https://api.builder.io/api/v1/image/assets/3451d94033364897b1822b0a13d108ce/ec812f8c3a6a77955b660e39cd09be378a13e207?placeholderIfAbsent=true"
        alt="Background"
        className="absolute h-full w-full object-cover inset-0"
      />

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
