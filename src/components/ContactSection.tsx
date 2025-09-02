import React, { useRef, useState, useEffect } from 'react';

export const ContactSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [displayedText, setDisplayedText] = useState('');
  const [hasAnimated, setHasAnimated] = useState(false); // garante que a animação só rode uma vez

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

  const dialogueText = `Sempre pronto para novas aventuras! 
Se você quer trocar ideias, criar projetos ou compartilhar conhecimentos, vamos nos conectar.`;

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);

            let currentIndex = 0;
            const interval = setInterval(() => {
              setDisplayedText(dialogueText.slice(0, currentIndex + 1));
              currentIndex++;
              if (currentIndex === dialogueText.length) clearInterval(interval);
            }, 40); // velocidade da digitação
          }
        });
      },
      { threshold: 0.2 } // 20% do elemento precisa estar visível
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, [dialogueText, hasAnimated]);

  return (
    <section
      ref={sectionRef}
      id="contato"
      className="flex justify-center mt-24 max-md:mt-10"
    >
      <article className="bg-[rgba(234,216,140,1)] rounded-2xl border-4 border-[rgba(213,167,54,1)] flex flex-col justify-between w-full max-w-3xl p-8 text-center
                          shadow-[4px_4px_0_rgba(0,0,0,1)]">
        <h2 className="tracking-in-expand-fwd text-[rgba(3,4,1,1)] text-2xl font-heading leading-none max-md:text-xl max-md:leading-snug">
          Convite do Explorador
        </h2>

        <p className="text-black text-lg font-normal leading-8 mt-6 max-w-[600px] mx-auto max-md:text-base whitespace-pre-line">
          {displayedText}
        </p>

        <div className="flex w-full max-w-[400px] mx-auto items-center gap-5 justify-center mt-10 max-md:mt-6">
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
                className="aspect-square w-14 object-contain drop-shadow-[4px_4px_0_rgba(0,0,0,1)]"
              />
            </a>
          ))}
        </div>
      </article>
    </section>
  );
};
