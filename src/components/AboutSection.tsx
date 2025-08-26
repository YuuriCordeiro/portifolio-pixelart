import React, { useState, useEffect, useRef } from 'react';

// Componente de texto digitando letra por letra
const TypingText: React.FC<{ text: string; speed?: number }> = ({ text, speed = 50 }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [cursorVisible, setCursorVisible] = useState(true);
  const indexRef = useRef(0);

  useEffect(() => {
    const typeNext = () => {
      if (indexRef.current < text.length) {
        setDisplayedText((prev) => prev + text.charAt(indexRef.current));
        indexRef.current += 1;
        setTimeout(typeNext, speed);
      }
    };

    typeNext();

    const cursorInterval = setInterval(() => {
      setCursorVisible((prev) => !prev);
    }, 500);

    return () => clearInterval(cursorInterval);
  }, [text, speed]);

  return (
    <p className="mt-3 sm:mt-[17px] text-sm sm:text-xl leading-6 sm:leading-8 font-body text-black text-left">
      {displayedText}
      <span className={`inline-block ${cursorVisible ? '' : 'invisible'}`}>|</span>
    </p>
  );
};

// Seção Sobre
export const AboutSection: React.FC = () => {
  const dialogueText = `Saaudações, explorador digital!
Sou seu guia neste universo de ideias, criando design UX/UI com propósito e conexão. Estudo tecnologia e cibersegurança, buscando tornar cada experiência simples, inclusiva e impactante.`;

  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setFadeIn(true), 100);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <section id="sobre" className="mt-[55px] max-md:max-w-full max-md:mt-10 px-5">
      <div className="flex gap-5 max-md:flex-col items-start">
        {/* Imagem do personagem */}
        <div className="w-[32%] max-md:w-full flex justify-center max-md:mb-5">
          <img
            src="/imagens/perfil.png"
            alt="Yuri Cordeiro profile photo"
            className="aspect-[0.69] object-contain w-full max-w-[250px] drop-shadow-[4px_4px_0_rgba(0,0,0,1)]"
          />
        </div>

        {/* Caixa de diálogo */}
        <div className="w-[68%] max-md:w-full">
          <article className="bg-[rgba(234,216,140,1)] flex flex-col w-full pt-[45px] pb-[60px] px-[30px] border-[rgba(213,167,54,1)] border-solid border-[10px] drop-shadow-[4px_4px_0_rgba(0,0,0,1)] max-md:pt-10 max-md:pb-10 max-md:px-5">
            <h2
              className={`font-heading text-[1.3rem] sm:text-4xl leading-none text-[rgba(3,4,1,1)] text-left transition-all duration-300 transform ${
                fadeIn ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-5'
              }`}
            >
              Yuri Cordeiro
            </h2>
            <p
              className={`mt-3 sm:mt-5 font-heading text-[0.9rem] sm:text-2xl text-black text-left transition-all duration-300 transform ${
                fadeIn ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-5'
              }`}
            >
              UX/UI Designer
            </p>

            {/* Texto com efeito de digitação */}
            <TypingText text={dialogueText} speed={50} />
          </article>
        </div>
      </div>
    </section>
  );
};
