import React from "react";

const CardTemplate = ({ title, children }) => {
  return (
    <div className="card-elevated p-8 flex flex-col h-full hover:shadow-2xl transition-all duration-300 group">
      {/* Gradient border effect on hover */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary-500/0 to-secondary-500/0 group-hover:from-primary-500/5 group-hover:to-secondary-500/5 transition-all duration-300 pointer-events-none"></div>
      
      <div className="relative z-10">
        {/* Title */}
        <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-4">
          {title}
        </h2>

        {/* Content */}
        <div className="flex flex-1 flex-col gap-2 text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed">
          {children}
        </div>
      </div>
    </div>
  );
};

export default CardTemplate;
