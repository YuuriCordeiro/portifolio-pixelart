import React, { useState } from 'react';

interface HeaderProps {
  onNavigate?: (section: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onNavigate }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavClick = (section: string) => {
    if (onNavigate) {
      onNavigate(section);
    }
    setMenuOpen(false);
  };

  return (
    <header className="relative flex w-full max-w-[1173px] flex-col items-stretch mx-auto">
      {/* Header com nome menor e sombra pixelada */}
      <div
        className="
          bg-[#81482A] dark:bg-[#34251D]
          flex flex-col max-md:flex-row items-center max-md:justify-start
          text-[48px] text-[rgba(235,227,172,1)] font-heading text-center leading-none justify-center
          px-[40px] py-6
          border-[rgba(213,167,54,1)] dark:border-[#64411D] border-solid border-[8px]
          max-md:max-w-full max-md:text-[28px] max-md:px-5 max-md:py-4
          drop-shadow-[4px_4px_0_rgba(0,0,0,1)]
        "
      >
        <h1 className="tracking-in-expand-fwd font-heading max-md:text-[28px] drop-shadow-[4px_4px_0_rgba(0,0,0,1)] max-md:text-left max-md:pl-4">
          Yuri Cordeiro
        </h1>

        {/* Botão hambúrguer para mobile */}
        <button
          className="ml-auto block max-md:block md:hidden text-[rgba(235,227,172,1)] font-heading text-3xl px-4 py-2 drop-shadow-[2px_2px_0_rgba(0,0,0,1)] focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Nav desktop */}
      <nav
        className="
          hidden md:flex dark:bg-[#34251D] bg-[#81482A]
          self-center flex w-[900px] max-w-full flex-col items-center
          text-lg text-[rgba(235,227,172,1)] font-heading whitespace-nowrap text-center
          leading-[48px] justify-center mt-6 px-6 py-3
          rounded-[80px] border-[rgba(213,167,54,1)] dark:border-[#64411D] border-solid border-[8px]
          drop-shadow-[2px_2px_0_rgba(0,0,0,1)]
        "
      >
        <div className="flex w-[600px] max-w-full items-stretch gap-6 flex-wrap">
          <button className="tracking-in-expand-fwd grow text-[rgba(235,227,172,1)] hover:text-[rgba(213,167,54,1)] transition-colors cursor-pointer font-heading drop-shadow-[2px_2px_0_rgba(0,0,0,1)]" onClick={() => handleNavClick('sobre')}>Sobre</button>
          <button className="tracking-in-expand-fwd grow shrink w-[130px] text-[rgba(235,227,172,1)] hover:text-[rgba(213,167,54,1)] transition-colors cursor-pointer font-heading drop-shadow-[2px_2px_0_rgba(0,0,0,1)]" onClick={() => handleNavClick('projetos')}>Projetos</button>
          <button className="tracking-in-expand-fwd grow shrink w-[90px] text-[rgba(235,227,172,1)] hover:text-[rgba(213,167,54,1)] transition-colors cursor-pointer font-heading drop-shadow-[2px_2px_0_rgba(0,0,0,1)]" onClick={() => handleNavClick('skills')}>Skills</button>
          <button className="tracking-in-expand-fwd grow shrink w-[110px] text-[rgba(235,227,172,1)] hover:text-[rgba(213,167,54,1)] transition-colors cursor-pointer font-heading drop-shadow-[2px_2px_0_rgba(0,0,0,1)]" onClick={() => handleNavClick('contato')}>Contato</button>
        </div>
      </nav>

      {/* Menu mobile */}
      {menuOpen && (
        <div className="md:hidden flex flex-col dark:bg-[#34251D] bg-[rgba(12,71,0,1)] mt-2 px-6 py-4 rounded-[20px] dark:border-[#64411D] border-[rgba(213,167,54,1)] border-solid border-4 drop-shadow-[4px_4px_0_rgba(0,0,0,1)] space-y-2">
          <button className="tracking-in-expand-fwd w-full text-left text-[rgba(235,227,172,1)] hover:text-[rgba(213,167,54,1)] transition-colors font-heading drop-shadow-[2px_2px_0_rgba(0,0,0,1)]" onClick={() => handleNavClick('sobre')}>Sobre</button>
          <button className="tracking-in-expand-fwd w-full text-left text-[rgba(235,227,172,1)] hover:text-[rgba(213,167,54,1)] transition-colors font-heading drop-shadow-[2px_2px_0_rgba(0,0,0,1)]" onClick={() => handleNavClick('projetos')}>Projetos</button>
          <button className="tracking-in-expand-fwd w-full text-left text-[rgba(235,227,172,1)] hover:text-[rgba(213,167,54,1)] transition-colors font-heading drop-shadow-[2px_2px_0_rgba(0,0,0,1)]" onClick={() => handleNavClick('skills')}>Skills</button>
          <button className="tracking-in-expand-fwd w-full text-left text-[rgba(235,227,172,1)] hover:text-[rgba(213,167,54,1)] transition-colors font-heading drop-shadow-[2px_2px_0_rgba(0,0,0,1)]" onClick={() => handleNavClick('contato')}>Contato</button>
        </div>
      )}
    </header>
  );
};
