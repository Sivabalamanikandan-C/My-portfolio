import React from 'react';

const SkillTemplate = ({ imgSrc, name }) => {
    return (
        <div className="flex flex-col items-center gap-3 px-6">
            <div className="w-20 h-20 flex items-center justify-center rounded-2xl bg-neutral-100 dark:bg-neutral-800 group-hover:shadow-lg transition-all duration-300">
                <img 
                    src={imgSrc} 
                    alt={name} 
                    className="w-16 h-16 object-contain hover:scale-110 transition-transform duration-300" 
                />
            </div>
            <p className="text-sm md:text-base font-semibold text-neutral-700 dark:text-neutral-300 text-center whitespace-nowrap">
                {name}
            </p>
        </div>
    );
};

export default SkillTemplate;
