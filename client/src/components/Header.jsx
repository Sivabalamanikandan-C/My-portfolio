import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import resume from "../document/Sivabala_Manikandan_Resume.pdf"

const Header = () => {
    const [navOpen, setNavOpen] = useState(false);

    const toggleNav = () => {
        setNavOpen(!navOpen);
    };

    const navLinks = [
        { name: 'Home', href: '#' },
        { name: 'About', href: '#about' },
        { name: 'Services', href: '#myservices' },
        { name: 'Projects', href: '#projects' },
        { name: 'Contact', href: '#contact' }
    ];

    return (
        <header className="fixed w-full top-0 z-50 bg-white/95 dark:bg-neutral-950/95 backdrop-blur-md border-b border-neutral-200 dark:border-neutral-800 transition-colors duration-300" id="header">
            <nav className="container-max flex justify-between items-center px-4 md:px-8 py-4">
                {/* Logo */}
                <div className="flex items-center gap-2">
                    <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-primary-600 to-secondary-600 shadow-md hover:shadow-lg transition-all duration-300">
                        <span className="text-xl font-bold text-white">SM</span>
                    </div>
                    <div className="hidden sm:flex flex-col">
                        <h1 className="font-bold text-lg md:text-xl tracking-tight text-neutral-900 dark:text-white">
                            Sivabala
                        </h1>
                        <p className="text-xs text-primary-600 dark:text-secondary-400 font-semibold">Full Stack Developer</p>
                    </div>
                </div>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-8">
                    <ul className="flex gap-8">
                        {navLinks.map((link) => (
                            <li key={link.name}>
                                <a 
                                    href={link.href}
                                    className="relative text-neutral-700 dark:text-neutral-300 font-medium text-sm hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-300 group"
                                >
                                    {link.name}
                                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-600 to-secondary-600 group-hover:w-full transition-all duration-300"></span>
                                </a>
                            </li>
                        ))}
                    </ul>

                    {/* Download CV Button */}
                    <a 
                        href={resume} 
                        download="Sivabala_Manikandan_Resume.pdf" 
                        className="btn-primary relative overflow-hidden"
                    >
                        <span className="relative z-10">Download CV</span>
                        <div className="absolute inset-0 bg-gradient-to-r from-primary-700 to-secondary-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </a>
                </div>

                {/* Mobile Menu Button */}
                <button
                    onClick={toggleNav}
                    className="md:hidden p-2 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-xl transition-colors duration-300"
                >
                    {navOpen ? (
                        <FaTimes className="text-2xl text-neutral-900 dark:text-white" />
                    ) : (
                        <FaBars className="text-2xl text-neutral-900 dark:text-white" />
                    )}
                </button>

                {/* Mobile Navigation */}
                <div 
                    className={`absolute top-full left-0 right-0 bg-white dark:bg-neutral-950 border-b border-neutral-200 dark:border-neutral-800 md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
                        navOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
                    }`}
                >
                    <div className="px-4 py-6 space-y-4">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={toggleNav}
                                className="block px-4 py-2 text-neutral-700 dark:text-neutral-300 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-neutral-50 dark:hover:bg-neutral-900 rounded-lg font-medium transition-all duration-300"
                            >
                                {link.name}
                            </a>
                        ))}
                        <a 
                            href={resume} 
                            download="Sivabala_Manikandan_Resume.pdf"
                            className="block w-full btn-primary text-center mt-4"
                            onClick={toggleNav}
                        >
                            Download CV
                        </a>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;
