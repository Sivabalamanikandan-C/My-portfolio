import React from 'react';
import { FaWhatsapp, FaInstagram, FaLinkedin, FaGithub, FaArrowRight } from 'react-icons/fa';
import AnimatedName from '../Cards/AnimatedName';
import resume from "../document/Sivabala_Manikandan_Resume.pdf"
import profileImg from '../Assets/profilepic.jpeg'

const HeroSection = () => {
    const socialLinks = [
        { icon: FaInstagram, url: 'https://www.instagram.com/its__mani__kandan/', color: 'hover:text-pink-500', label: 'Instagram' },
        { icon: FaLinkedin, url: 'https://www.linkedin.com/in/sivabala-manikandan-c-791541312/', color: 'hover:text-blue-500', label: 'LinkedIn' },
        { icon: FaGithub, url: 'https://github.com/Sivabalamanikandan-C', color: 'hover:text-neutral-800 dark:hover:text-white', label: 'GitHub' },
    ];

    return (
        <section 
            className="relative pt-24 pb-6 md:pt-32 md:pb-24 px-4 md:px-8 bg-gradient-to-br from-white via-blue-50/5 to-white dark:from-neutral-950 dark:via-primary-950/10 dark:to-neutral-950 overflow-hidden" 
            id='hero_section' 
            data-aos="fade-down" 
            data-aos-duration="1500"
        >
            {/* Animated background elements */}
            <div className="absolute top-10 right-5 w-72 h-72 bg-primary-200 dark:bg-primary-900/30 rounded-full mix-blend-multiply filter blur-3xl opacity-20 dark:opacity-10 animate-float"></div>
            <div className="absolute -bottom-8 left-10 w-72 h-72 bg-secondary-200 dark:bg-secondary-900/30 rounded-full mix-blend-multiply filter blur-3xl opacity-20 dark:opacity-10 animate-float animation-delay-2000"></div>

            <div className="container-max relative z-10">
                <div className="flex flex-col items-center justify-center gap-8 md:gap-12">
                    {/* Profile Image */}
                    <div className="animate-fade-in-down">
                        <div className="relative w-40 h-40 md:w-56 md:h-56 lg:w-64 lg:h-64">
                            {/* Animated border */}
                            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary-600 via-secondary-600 to-accent-600 p-1 opacity-0 hover:opacity-100 transition-opacity duration-500 group">
                                <div className="w-full h-full rounded-3xl bg-white dark:bg-neutral-950"></div>
                            </div>
                            {/* Image */}
                            <img
                                src={profileImg}
                                alt="Profile"
                                className="w-full h-full rounded-3xl object-cover shadow-2xl hover:shadow-3xl transition-shadow duration-300 border-4 border-white dark:border-neutral-900"
                            />
                            {/* Glow effect */}
                            <div className="absolute inset-0 rounded-3xl box-shadow-glow opacity-0 hover:opacity-100 transition-all duration-300"></div>
                        </div>
                    </div>

                    {/* Text Content */}
                    <div className="text-center max-w-3xl animate-fade-in">
                        {/* Greeting */}
                        <div className="mb-4">
                            <span className="inline-block px-4 py-2 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-sm font-semibold">
                                Welcome to my portfolio
                            </span>
                        </div>

                        {/* Main Heading */}
                        <h1 className="mb-7 text-2xl md:text-4xl font-bold tracking-tight">
                            Hi,<AnimatedName />
                        </h1>

                        {/* Subtitle */}
                        <p className="mb-8 text-lg md:text-2xl text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-2xl mx-auto">
                            Full Stack Developer specializing in <span className="font-semibold text-primary-600 dark:text-primary-400">MERN stack</span>. I craft modern, responsive web applications with clean code and creative design.
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
                            <a 
                                href="#contact" 
                                className="btn-primary group inline-flex items-center gap-2"
                            >
                                Get In Touch
                                <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
                            </a>
                            <a 
                                href={resume} 
                                download="Sivabala_Manikandan_Resume.pdf" 
                                className="btn-outline inline-flex items-center gap-2"
                            >
                                Download Resume
                                <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
                            </a>
                        </div>

                        {/* Social Links */}
                        <div className="flex justify-center gap-6 md:gap-8">
                            {socialLinks.map(({ icon: Icon, url, color, label }) => (
                                <a
                                    key={label}
                                    href={url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={label}
                                    className={`p-3 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 text-2xl shadow-md hover:shadow-lg hover:scale-110 hover:-translate-y-1 transition-all duration-300 ${color}`}
                                >
                                    <Icon />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
