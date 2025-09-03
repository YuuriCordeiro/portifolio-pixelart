import React, { useState, useEffect } from 'react';

interface SectionProps {
  id: string;
  title: string;
  subtitle?: string;
  text: string;
  children?: React.ReactNode; // adicionamos aqui para evitar erros
}

// Componente genérico de seção
const Section: React.FC<SectionProps & { typingText?: boolean }> = ({
  id,
  title,
  subtitle,
  text,
  typingText = false,
  children,
}) => {
  const [displayedText, setDisplayedText] = useState(typingText ? '' : text);

  useEffect(() => {
    if (!typingText) return;

    let currentIndex = 0;
    const interval = setInterval(() => {
      setDisplayedText(text.slice(0, currentIndex + 1));
      currentIndex++;
      if (currentIndex === text.length) clearInterval(interval);
    }, 30);

    return () => clearInterval(interval);
  }, [text, typingText]);

  return (
    <section id={id} className="mt-[55px] max-md:max-w-full max-md:mt-10 px-5">
      <div className="flex gap-5 max-md:flex-col items-start">
        {children}

        <div className="w-full max-md:w-full">
          <article className="bg-[rgba(234,216,140,1)] dark:bg-[#221510] flex flex-col w-full pt-[45px] pb-[60px] px-[30px] border-[rgba(213,167,54,1)] dark:border-[#64411D] border-solid border-[10px] drop-shadow-[4px_4px_0_rgba(0,0,0,1)] max-md:pt-10 max-md:pb-10 max-md:px-5">
            <h2 className="tracking-in-expand-fwd font-heading text-[1.3rem] sm:text-4xl leading-none text-[rgba(3,4,1,1)] dark:text-[#FFF7F1] text-left">
              {title}
            </h2>
            {subtitle && (
              <p className="tracking-in-expand-fwd mt-3 sm:mt-5 font-heading text-[0.9rem] sm:text-2xl text-black dark:text-[#FFF7F1] text-left">
                {subtitle}
              </p>
            )}
            <p className="mt-3 sm:mt-[17px] text-sm sm:text-xl leading-6 sm:leading-8 font-body text-black dark:text-[#FFF7F1] text-left whitespace-pre-line">
              {displayedText}
            </p>
          </article>
        </div>
      </div>
    </section>
  );
};

// Seção Sobre específica
export const AboutSection: React.FC = () => {
  const dialogueText = `Saudações, explorador digital!
Sou seu guia neste universo de ideias, criando design UX/UI com propósito e conexão.
Estudo tecnologia e cibersegurança, buscando tornar cada experiência simples, inclusiva e impactante.`;

  return (
    <Section
      id="sobre"
      title="Yuri Cordeiro"
      subtitle="UX/UI Designer"
      text={dialogueText}
      typingText={true}
    >
      {/* Imagem light mode */}
      <div className="w-[32%] max-md:w-full flex justify-center max-md:mb-5">
        <img
          src="/imagens/perfil.png"
          alt="Yuri Cordeiro profile photo"
          className="aspect-[0.69] object-contain w-full max-w-[250px] drop-shadow-[4px_4px_0_rgba(0,0,0,1)] scale-up-center dark:hidden"
        />

        {/* Imagem dark mode */}
        <img
          src="/imagens/perfildark.png"
          alt="Yuri Cordeiro profile photo"
          className="aspect-[0.69] object-contain w-full max-w-[250px] drop-shadow-[4px_4px_0_rgba(0,0,0,1)] scale-up-center hidden dark:block"
        />
      </div>
    </Section>
  );
};
