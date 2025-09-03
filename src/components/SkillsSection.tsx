import React, { useState } from 'react'; 
import { SkillCard } from './SkillCard';

export const SkillsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'sword' | 'book' | 'shield' | 'chest'>('chest'); // chest selecionado por padrão

  const tabs = [
    { id: 'chest', label: 'Baú', icon: "/imagens/bau.png" },
    { id: 'sword', label: 'Espada', icon: "/imagens/espada.png" }, 
    { id: 'book', label: 'Livro', icon: "/imagens/livro.png" },
    { id: 'shield', label: 'Escudo', icon: "/imagens/escudo.png" },
  ];

  const tabContents = {
    sword: {
      headerTitle: "Design & UI/UX",
      headerSubtitle: "Habilidades do Mestre Artesão",
      quote: "Com minhas ferramentas em mãos, crio mapas e relíquias digitais que guiam aventureiros pelo mundo virtual.",
      skills: [
        { title: "Figma", description: "Criação de telas, protótipos e desenhos de aplicativos.", icon: "/imagens/figma.png" },
        { title: "Design System", description: "Organizo cores, fontes e componentes para deixar tudo consistente.", icon: "/imagens/design.png" },
        { title: "Layouts Responsivos", description: "Tudo funciona bem em computador, tablet ou celular.", icon: "/imagens/layout.png" },
        { title: "Usabilidade & Acessibilidade", description: "Faço interfaces fáceis e acessíveis para todos.", icon: "/imagens/usab.png" },
        { title: "Wireframes & Protótipos", description: "Desenho rascunhos e modelos de sites e apps.", icon: "/imagens/wireframe.png" },
      ]
    },
    book: {
      headerTitle: "Ferramentas & Métodos",
      headerSubtitle: "Meu kit de explorador",
      quote: "Descubro novas ideias e aprendo sempre para melhorar minhas criações.",
      skills: [
        { title: "Pesquisa & Inspiração", description: "Busco ideias e referências para criar coisas melhores.", icon: "/imagens/pesq.png" },
        { title: "Aprendizado Contínuo", description: "Estudo sozinho para evoluir minhas habilidades.", icon: "/imagens/auto.png" },
        { title: "Trabalho em Equipe", description: "Colaboro com outros aventureiros para alcançar objetivos juntos.", icon: "/imagens/eqp.png" },
      ]
    },
    shield: {
      headerTitle: "Tecnologia & Segurança",
      headerSubtitle: "Meu kit de aprendiz",
      quote: "Estou aprendendo a proteger meus mapas e ferramentas digitais.",
      skills: [
        { title: "Noções de Cibersegurança", description: "Conheço os cuidados básicos para manter tudo seguro.", icon: "/imagens/cibersec.png" },
        { title: "Redes & Infraestrutura", description: "Entendo como computadores e servidores se conectam.", icon: "/imagens/redes.png" },
        { title: "DevOps & Segurança de Aplicações", description: "Tenho interesse em manter aplicativos seguros e funcionando bem.", icon: "/imagens/devops.png" },
      ]
    },
    chest: { 
      headerTitle: "Skills",
      skills: [
        { id: 'sword', icon: "/imagens/espada.png", title: "Design & UI/UX", subtitle: "Habilidades do Mestre Artesão" },
        { id: 'book', icon: "/imagens/livro.png", title: "Ferramentas & Métodos", subtitle: "Meu kit de explorador" },
        { id: 'shield', icon: "/imagens/escudo.png", title: "Tecnologia & Segurança", subtitle: "Meu kit de aprendiz" },
      ]
    }
  };

  const currentContent = tabContents[activeTab];

  return (
    <section id="skills" className="flex flex-col items-stretch mt-16 md:mt-20 lg:mt-24">
      {/* Abas */}
      <div className="flex gap-3 mb-6 justify-center flex-wrap sm:flex-nowrap">
        {tabs.map(tab => (
          <div
            key={tab.id}
            onClick={() => setActiveTab(tab.id as any)}
            className={`
              flex items-center justify-center cursor-pointer p-2 sm:p-3 border-4 transition-transform hover:scale-105 rounded-xl
              border-[#D5A736] drop-shadow-[4px_4px_0_rgba(0,0,0,1)] dark:border-[#64411D] dark:border-[#64411D] dark:bg-[#221510]
              ${activeTab === tab.id ? 'bg-[#D5C273] dark:bg-[#221510]' : 'bg-[#EAD88C] dark:bg-[#472D23]'}
              w-14 h-14 sm:w-20 sm:h-20
            `}
          >
            <img src={tab.icon} alt={tab.label} className="w-10 h-10 sm:w-16 sm:h-16 object-contain" />
          </div>
        ))}
      </div>

      {/* Conteúdo da aba */}
      <div className="bg-[#EAD88C] border-8 border-solid border-[#D5A736] dark:border-[#64411D] dark:bg-[#221510] p-6 sm:p-8 flex flex-col gap-5 rounded-2xl drop-shadow-[4px_4px_0_rgba(0,0,0,1)]">
        {activeTab !== 'chest' && (
          <>
            <header className="flex flex-col gap-2">
              <h2 className="text-sm sm:text-base md:text-lg font-openSans font-bold">{currentContent.headerTitle}</h2>
              {'headerSubtitle' in currentContent && currentContent.headerSubtitle && (
                <p className="text-xs sm:text-sm md:text-base font-openSans font-semibold m-0">
                  {currentContent.headerSubtitle}
                </p>
              )}
            </header>
            {'quote' in currentContent && currentContent.quote && (
              <blockquote className="text-xs sm:text-sm md:text-base font-openSans m-0">{currentContent.quote}</blockquote>
            )}
            <div className="grid grid-cols-2 gap-5 max-md:grid-cols-1 items-stretch">
              {currentContent.skills.map((skill, idx) => (
                <SkillCard 
                  key={idx} 
                  icon={skill.icon || ''} 
                  title={skill.title} 
                  description={skill.description} 
                  className="h-full"
                />
              ))}
            </div>
          </>
        )}

        {activeTab === 'chest' && (
          <div className="flex flex-col gap-5">
            <div className="grid grid-cols-3 gap-3 max-md:grid-cols-1 items-stretch">
              {currentContent.skills.map(skill => (
                <div
                  key={skill.id}
                  className="flex items-center gap-3 cursor-pointer p-3 bg-[#D5C273] border-4 border-[#D5A736] dark:border-[#64411D] dark:bg-[#221510] hover:scale-105 transition-transform rounded-xl drop-shadow-[4px_4px_0_rgba(0,0,0,1)]"
                  onClick={() => setActiveTab(skill.id as any)}
                >
                  <img src={skill.icon} alt={skill.title} className="w-10 h-10 sm:w-16 sm:h-16 object-contain" />
                  <div>
                    <h2 className="text-sm sm:text-base md:text-lg font-openSans font-bold">{skill.title}</h2>
                    <p className="text-xs sm:text-sm md:text-base font-openSans font-semibold">{skill.subtitle}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
