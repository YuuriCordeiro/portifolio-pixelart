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

  const extraBlocks = [1, 2];

  return (
    <section
      id="projetos"
      className="bg-[rgba(140,61,44,1)] drop-shadow-[4px_4px_0_rgba(0,0,0,1)] flex w-full flex-col items-stretch mt-[127px] pb-[88px] px-[43px] border-[rgba(209,141,114,1)] border-solid border-[10px] rounded-[20px] max-md:max-w-full max-md:mr-[3px] max-md:mt-10 max-md:px-5"
    >
      <header
        className="bg-[rgba(140,61,44,1)] drop-shadow-[4px_4px_0_rgba(0,0,0,1)] z-10 flex mt-[-34px] flex-col items-stretch text-xl text-[rgba(235,227,172,1)] font-['Press_Start_2P'] whitespace-nowrap text-center leading-none justify-center px-[70px] py-[27px] rounded-[20px] border-[rgba(209,141,114,1)] border-solid border-[5px] max-md:px-5"
      >
        <h2 className="drop-shadow-[4px_4px_0_rgba(0,0,0,1)]">Projetos</h2>
      </header>

      <div className="mt-[37px] max-md:max-w-full max-md:mr-0.5">
        <div className="grid grid-cols-3 gap-5 max-md:grid-cols-1">
          {projectImages.map((src, index) => (
            <div
              key={index}
              className="w-full border-2 border-[rgba(209,141,114,1)] drop-shadow-[4px_4px_0_rgba(0,0,0,1)] cursor-pointer rounded-[12px]"
            >
              <img
                src={src}
                alt={`Project ${index + 1}`}
                className="aspect-[1.74] object-top object-cover w-full rounded-[12px] hover:scale-105 transition-transform"
                onClick={() => setSelectedImage(src)}
              />
            </div>
          ))}

          {extraBlocks.map((_, index) => (
            <div
              key={`extra-${index}`}
              className="w-full aspect-[1.74] bg-[#C1683D] border-2 border-[rgba(209,141,114,1)] drop-shadow-[4px_4px_0_rgba(0,0,0,1)] rounded-[12px] hidden md:block"
            />
          ))}
        </div>
      </div>

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
