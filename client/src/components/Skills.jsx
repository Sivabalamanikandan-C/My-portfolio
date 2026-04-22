import React from 'react';
import SkillTemplate from '../Cards/SkillTemplate';
import html from '../Assets/html.png'
import css from '../Assets/css.png'
import tailwindcss from '../Assets/tailwind-css.png'
import bootstrap from '../Assets/bootstrap.png'
import javascript from '../Assets/javascript.png'
import react from '../Assets/react.png'
import nodejs from '../Assets/nodejs.png'
import express from '../Assets/express.png'
import mongodb from '../Assets/mongodb.png'
import git from '../Assets/git.png'
import github from '../Assets/github.png'

function Skill() {
    const imageData = [
        { imgSrc: html, name: 'HTML' },
        { imgSrc: css, name: 'CSS' },
        { imgSrc: tailwindcss, name: 'TailwindCSS' },
        { imgSrc: bootstrap, name: 'Bootstrap' },
        { imgSrc: javascript, name: 'Javascript' },
        { imgSrc: react, name: 'React JS' },
        { imgSrc: nodejs, name: 'Node JS' },
        { imgSrc: express, name: 'Express JS' },
        { imgSrc: mongodb, name: 'MongoDB' },
        { imgSrc: git, name: 'Git' },
        { imgSrc: github, name: 'Github' },
    ];

    return (
        <section id="skills" className="section-padding bg-gradient-to-b from-neutral-50 via-white to-neutral-50 dark:from-neutral-950 dark:via-neutral-900 dark:to-neutral-950">
            <div className="container-max">
                {/* Section Header */}
                <div className="text-center mb-16 md:mb-20 animate-fade-in">
                    <span className="inline-block px-4 py-2 rounded-full bg-accent-100 dark:bg-accent-900/30 text-accent-700 dark:text-accent-300 text-sm font-semibold mb-4">
                        My Stack
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        Technologies &<span className="gradient-text"> Tools</span>
                    </h2>
                    <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
                        I work with modern technologies and frameworks to build scalable, performant applications.
                    </p>
                </div>

                {/* Skills Container */}
                <div className="relative">
                    {/* Gradient fade on sides */}
                    <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white dark:from-neutral-950 to-transparent z-10 pointer-events-none"></div>
                    <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white dark:from-neutral-950 to-transparent z-10 pointer-events-none"></div>

                    {/* Skills Marquee */}
                    <marquee behavior="scroll" direction="left" scrollamount="3" className="py-8 hover:pause">
                        <div className="flex gap-12 md:gap-16">
                            {imageData.map((image, index) => (
                                <SkillTemplate 
                                    key={index} 
                                    imgSrc={image.imgSrc} 
                                    name={image.name} 
                                />
                            ))}
                            {/* Duplicate for seamless loop */}
                            {imageData.map((image, index) => (
                                <SkillTemplate 
                                    key={`dup-${index}`} 
                                    imgSrc={image.imgSrc} 
                                    name={image.name} 
                                />
                            ))}
                        </div>
                    </marquee>
                </div>

                {/* Skills Grid */}
                <div className="mt-20">
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
                        {imageData.map((skill, index) => (
                            <div 
                                key={index}
                                className="card-base p-6 flex flex-col items-center text-center group hover:shadow-lg transition-all duration-300"
                            >
                                <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
                                    <img 
                                        src={skill.imgSrc} 
                                        alt={skill.name} 
                                        className="w-16 h-16 object-contain" 
                                    />
                                </div>
                                <p className="font-semibold text-neutral-900 dark:text-white text-sm md:text-base">
                                    {skill.name}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Skill;
