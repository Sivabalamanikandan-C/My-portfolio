import React from "react";

const Card = ({name,title,description}) => {
    return (
        <div className="flex h-[300px] w-full flex-col justify-between overflow-hidden rounded-b-lg border-t-2 bg-white px-4 py-4 shadow-md sm:h-[320px]">
            <p className="text-lg font-bold font-sans">{name}</p>
            <div className="flex flex-1 flex-col justify-between overflow-y-auto py-2">
                <p className="text-black text-sm pl-4">
                    {title}<br />
                    <span className="font-bold">{description}</span>
                </p>
            </div>
        </div>
    );
};

export default Card;
