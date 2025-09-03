import React from 'react';

interface SkillCardProps {
  icon: string;
  title: string;
  description: string;
  iconAlt?: string;
  className?: string;
}

export const SkillCard: React.FC<SkillCardProps> = ({ icon, title, description, iconAlt, className }) => {
  return (
    <div
      className={`bg-[#D5A736] dark:bg-[#221510] flex flex-col items-stretch justify-center px-[3px] py-1 rounded-[18px] hover:scale-105 transition-transform drop-shadow-[4px_4px_0_rgba(0,0,0,1)] border-4 border-[#D5A736] dark:border-[#64411D] ${className || ''}`}
    >
      <div className="bg-[#D5C273] dark:bg-[#221510] flex items-stretch gap-5 flex-1 p-5 rounded-2xl">
        <img src={icon} alt={iconAlt || title} className="aspect-[1] object-contain w-[50px] shrink-0" />
        <div className="flex flex-col justify-center grow shrink-0 basis-0 w-fit text-[#000] dark:text-[#FFF7F1]">
          <h3 className="text-base sm:text-lg md:text-xl font-press font-bold leading-[1.4]">{title}</h3>
          <p className="text-sm sm:text-base md:text-lg font-openSans leading-6 sm:leading-7 md:leading-8 mt-2">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};
