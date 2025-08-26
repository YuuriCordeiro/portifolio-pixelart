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
      className={`
        bg-[rgba(213,167,54,1)]
        flex flex-col items-stretch justify-center
        px-[3px] py-1 rounded-[18px]
        hover:scale-105 transition-transform
        drop-shadow-[4px_4px_0_rgba(0,0,0,1)]
        ${className || ''}
      `}
    >
      <div className="bg-[rgba(213,194,115,1)] flex items-stretch gap-5 flex-1 p-5 rounded-2xl">
        <img
          src={icon}
          alt={iconAlt || title}
          className="aspect-[1] object-contain w-[50px] shrink-0"
        />
        <div className="flex flex-col justify-center grow shrink-0 basis-0 w-fit">
          <h3 className="text-xl font-press leading-[1.6]">{title}</h3>
          <p className="text-lg font-openSans leading-8 mt-[9px]">{description}</p>
        </div>
      </div>
    </div>
  );
};
