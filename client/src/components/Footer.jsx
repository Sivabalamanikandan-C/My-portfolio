import React from 'react';
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';
import { HiMail } from 'react-icons/hi';

const Footer = () => {
    const currentYear = new Date().getFullYear();
    
    const socialLinks = [
        { icon: FaInstagram, url: 'https://www.instagram.com/its__mani__kandan/', label: 'Instagram', color: 'hover:bg-pink-600' },
        { icon: FaLinkedin, url: 'https://www.linkedin.com/in/sivabala-manikandan-c-791541312/', label: 'LinkedIn', color: 'hover:bg-blue-600' },
        { icon: FaGithub, url: 'https://github.com/Sivabalamanikandan-C', label: 'GitHub', color: 'hover:bg-neutral-600' },
    ];

    const navLinks = [
        { name: 'Home', href: '#' },
        { name: 'About', href: '#about' },
        { name: 'Services', href: '#myservices' },
        { name: 'Projects', href: '#projects' },
        { name: 'Contact', href: '#contact' }
    ];

    return (
        <footer className="bg-neutral-900 dark:bg-neutral-950 text-neutral-100 border-t border-neutral-800">
            <div className="container-max px-4 md:px-8">
                {/* Main Footer Content */}
                <div className="py-16 md:py-20">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                        {/* Brand Section */}
                        <div className="md:col-span-1">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center shadow-lg">
                                    <span className="text-lg font-bold text-white">SM</span>
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg text-white">Sivabala</h3>
                                    <p className="text-xs text-neutral-500">Full Stack Developer</p>
                                </div>
                            </div>
                            <p className="text-neutral-400 text-sm leading-relaxed">
                                Building modern, responsive web applications with clean code and creative design.
                            </p>
                        </div>

                        {/* Quick Links */}
                        <div>
                            <h4 className="font-semibold text-white mb-6">Navigation</h4>
                            <nav className="space-y-3">
                                {navLinks.map((link) => (
                                    <a
                                        key={link.name}
                                        href={link.href}
                                        className="text-neutral-400 hover:text-primary-400 text-sm block transition-all duration-300 hover:translate-x-1"
                                    >
                                        {link.name}
                                    </a>
                                ))}
                            </nav>
                        </div>

                        {/* Services */}
                        <div>
                            <h4 className="font-semibold text-white mb-6">Services</h4>
                            <ul className="space-y-3 text-neutral-400 text-sm">
                                <li className="hover:text-primary-400 transition-colors cursor-pointer">Full Stack Development</li>
                                <li className="hover:text-primary-400 transition-colors cursor-pointer">Frontend Development</li>
                                <li className="hover:text-primary-400 transition-colors cursor-pointer">Freelance Services</li>
                                <li className="hover:text-primary-400 transition-colors cursor-pointer">Custom Solutions</li>
                            </ul>
                        </div>

                        {/* Contact Info */}
                        <div>
                            <h4 className="font-semibold text-white mb-6">Contact</h4>
                            <div className="space-y-4 text-sm">
                                <div className="flex items-start gap-3">
                                    <HiMail className="text-primary-500 mt-0.5 flex-shrink-0" size={18} />
                                    <div>
                                        <p className="text-neutral-400 text-xs mb-1">Email</p>
                                        <a href="mailto:sivabalamanikandan03@gmail.com" className="text-neutral-300 hover:text-primary-400 transition-colors break-all">
                                            sivabalamanikandan03@gmail.com
                                        </a>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <span className="text-primary-500 text-lg flex-shrink-0">📱</span>
                                    <div>
                                        <p className="text-neutral-400 text-xs mb-1">Phone</p>
                                        <a href="tel:+919751357984" className="text-neutral-300 hover:text-primary-400 transition-colors">
                                            +91 9751357984
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Divider */}
                    <div className="divider"></div>
                </div>

                {/* Bottom Section */}
                <div className="py-8 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-neutral-500 text-sm">
                        &copy; {currentYear} Sivabala Manikandan. All rights reserved.
                    </p>

                    {/* Social Links */}
                    <div className="flex gap-4">
                        {socialLinks.map(({ icon: Icon, url, label, color }) => (
                            <a
                                key={label}
                                href={url}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={label}
                                title={label}
                                className={`w-11 h-11 rounded-full bg-neutral-800 text-neutral-300 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:text-white ${color}`}
                            >
                                <Icon size={20} />
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
