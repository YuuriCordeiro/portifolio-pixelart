import React, { useEffect, useState, useRef } from 'react';

interface TypingTextProps {
  text: string;
  speed?: number;
}

const TypingText: React.FC<TypingTextProps> = ({ text, speed = 50 }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [cursorVisible, setCursorVisible] = useState(true);

  useEffect(() => {
    let index = 0;
    const typingInterval = setInterval(() => {
      setDisplayedText(prev => prev + (text[index] ?? ""));
      index++;
      if (index >= text.length) clearInterval(typingInterval);
    }, speed);

    const cursorInterval = setInterval(() => {
      setCursorVisible(prev => !prev);
    }, 500);

    return () => {
      clearInterval(typingInterval);
      clearInterval(cursorInterval);
    };
  }, [text, speed]);

  return (
    <p className="text-black text-xl font-normal leading-8 ml-2.5 mt-6 max-md:text-base max-md:max-w-full">
      {displayedText}
      <span className={`ml-1 ${cursorVisible ? 'opacity-100' : 'opacity-0'}`}>|</span>
    </p>
  );
};

export const ContactSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [startTyping, setStartTyping] = useState(false);

  const socialLinks = [
    {
      src: "https://api.builder.io/api/v1/image/assets/3451d94033364897b1822b0a13d108ce/ee85d27652c95ec1fb2145b2d1caa1be7fbf2f18?placeholderIfAbsent=true",
      alt: "WhatsApp",
      href: "https://wa.me/5524999671855?text=Ol%C3%A1%20viajante!%20vim%20atrav%C3%A9s%20do%20seu%20site%20para%20me%20conectar%20com%20você!"
    },
    {
      src: "https://api.builder.io/api/v1/image/assets/3451d94033364897b1822b0a13d108ce/922c319fa4af2d88b26bb81411223737976d5c89?placeholderIfAbsent=true",
      alt: "Instagram",
      href: "https://www.instagram.com/cordeiroy/"
    },
    {
      src: "https://api.builder.io/api/v1/image/assets/3451d94033364897b1822b0a13d108ce/4a4efeffd64397664a0a954fa966496ccd238fca?placeholderIfAbsent=true",
      alt: "LinkedIn",
      href: "https://www.linkedin.com/in/yuri-cordeiroo/"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setStartTyping(true);
            observer.disconnect(); // Ativa apenas uma vez
          }
        });
      },
      { threshold: 0.3 } // Começa quando 30% da seção aparecer
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="contato" className="mt-[89px] max-md:max-w-full max-md:mt-10">
      <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
        <div className="flex w-full gap-5 max-md:flex-col max-md:gap-5">
          <article className="bg-[rgba(234,216,140,1)] rounded-[20px] drop-shadow-[4px_4px_0_rgba(0,0,0,1)] flex flex-col justify-between w-[67%] max-md:w-full mx-auto px-[35px] py-[45px] border-[rgba(213,167,54,1)] border-solid border-[10px] max-md:px-5">
            <h2 className="text-[rgba(3,4,1,1)] text-xl font-heading leading-none max-md:text-lg max-md:max-w-full">
              Convite do Explorador
            </h2>
            {startTyping && (
              <TypingText text="Seempre pronto para novas aventuras! Se você quer trocar ideias, criar projetos ou compartilhar conhecimentos, vamos nos conectar." />
            )}

            <div className="self-center flex w-[391px] max-w-full items-stretch gap-5 justify-between mt-10 max-md:mt-6">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:scale-110 transition-transform"
                >
                  <img
                    src={link.src}
                    alt={link.alt}
                    className="aspect-[1] object-contain w-[60px] shrink-0 drop-shadow-[4px_4px_0_rgba(0,0,0,1)]"
                  />
                </a>
              ))}
            </div>
          </article>

          <div className="w-[33%] max-md:w-full max-md:mt-5 flex">
            <img
              src="https://api.builder.io/api/v1/image/assets/3451d94033364897b1822b0a13d108ce/1a2762651634022697f38454608bada0f2c5e572?placeholderIfAbsent=true"
              alt="Contact illustration"
              className="w-full object-cover h-full drop-shadow-[4px_4px_0_rgba(0,0,0,1)] max-md:rounded-[20px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
