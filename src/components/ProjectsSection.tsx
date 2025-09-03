import React, { useState } from "react"; 

export const ProjectsSection: React.FC = () => {
  const projectImages = [
    "/imagens/chambinho.png",
    "/imagens/sparkmind.png",
    "/imagens/grt.png",
    "/imagens/codigocerto.png",
    "/imagens/rioselection.png",
    "/imagens/bicraft.png",
    "/imagens/tjb.png",
  ];

  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isChestOpen, setIsChestOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section id="projetos" className="flex flex-col items-center mt-20 px-4 sm:px-10">
      {/* Baú + fada */}
      <div className="relative flex flex-col items-center text-center w-full">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 w-full">
          {/* Fada + fala */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 mb-6">
            <img
              src="/imagens/fada.png"
              alt="Fadinha"
              className="w-14 pulsate-float" // animação pulsante + flutuante
            />

            <div
              className="px-4 py-3 bg-[#eaeaea] dark:bg-[#222] border-4 border-black dark:border-white 
                         font-['Press_Start_2P'] text-xs text-black dark:text-white 
                         max-w-[220px] leading-relaxed text-left
                         drop-shadow-[4px_4px_0_rgba(0,0,0,1)] rounded-sm"
            >
              {!isChestOpen
                ? "HEY, LISTEN! Clique no baú para conferir os projetos."
                : "Esses são alguns projetos que o Yúri já fez!"}
            </div>
          </div>

          {/* Baú */}
          <img
            src={isChestOpen ? "/imagens/bau-aberto.png" : "/imagens/bau-fechado.png"}
            alt={isChestOpen ? "Baú aberto" : "Baú fechado"}
            className={`w-56 cursor-pointer transition-transform ${
              isHovered ? "shake-bottom" : ""
            }`}
            onClick={() => setIsChestOpen((prev) => !prev)}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          />
        </div>
      </div>

      {/* Conteúdo revelado só quando o baú abre */}
      {isChestOpen && (
        <div
          className="bg-[rgba(140,61,44,1)] dark:bg-[#251D21] 
                     drop-shadow-[4px_4px_0_rgba(0,0,0,1)] 
                     w-full flex flex-col items-stretch mt-4 pb-10 px-4 sm:px-10 
                     border-[rgba(209,141,114,1)] dark:border-[#3D3232] 
                     border-solid border-[10px] rounded-[20px] 
                     animate-fade-in-up"
        >
          <header
            className="bg-[rgba(140,61,44,1)] dark:bg-[#251D21] 
                       drop-shadow-[4px_4px_0_rgba(0,0,0,1)] 
                       z-10 flex -mt-8 flex-col items-stretch 
                       text-lg sm:text-xl text-[rgba(235,227,172,1)] font-['Press_Start_2P'] 
                       text-center leading-none justify-center 
                       px-4 sm:px-10 py-4 sm:py-6 rounded-[20px] 
                       border-[rgba(209,141,114,1)] dark:border-[#3D3232] 
                       border-solid border-[5px]"
          >
            <h2>Projetos</h2>
          </header>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mt-5">
            {projectImages.map((src, index) => (
              <div
                key={index}
                className="w-full border-2 border-[rgba(209,141,114,1)] dark:border-[#3D3232] drop-shadow-[4px_4px_0_rgba(0,0,0,1)] cursor-pointer rounded-[12px] animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <img
                  src={src}
                  alt={`Project ${index + 1}`}
                  className="aspect-[1.74] object-top object-cover w-full rounded-[12px] hover:scale-105 transition-transform"
                  onClick={() => setSelectedImage(src)}
                />
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <img
            src={selectedImage}
            alt="Project full view"
            className="max-h-[90vh] max-w-[90vw] object-contain"
          />
        </div>
      )}
    </section>
  );
};
