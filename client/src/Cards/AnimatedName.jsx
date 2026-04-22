import React, { useState, useEffect } from 'react';

const AnimatedText = () => {
    const text = "I'm Sivabala Manikandan C";
    const [visibleLetters, setVisibleLetters] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setVisibleLetters((prev) => (prev < text.length ? prev + 1 : 0));
        }, 150);

        return () => clearInterval(timer);
    }, [text.length]);

    return (
        <span className="inline-block gradient-text text-blue-800">
            {text.split('').map((letter, index) => (
                <span
                    key={index}
                    className={`inline-block transition-all duration-200 ease-out ${
                        index < visibleLetters
                            ? 'opacity-100 translate-y-0'
                            : 'opacity-0 translate-y-2'
                    } ${letter === ' ' ? 'mx-1' : ''}`}
                >
                    {letter}
                </span>
            ))}
        </span>
    );
};

export default AnimatedText;