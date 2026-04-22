import React from "react";

const CardTemplate = ({ icon, title, description }) => {
  return (
    <div className="bg-white shadow-lg rounded-2xl  h-full p-6 flex flex-col items-center text-center">
      <div className="text-4xl mb-4">
        {icon}
      </div>
      <h2 className="text-xl font-bold mb-4 text-black">{title}</h2>
      <p className="text-black text-sm leading-relaxed">{description}</p>
    </div>
  );
};

export default CardTemplate;
