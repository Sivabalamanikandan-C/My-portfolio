import React, { useState } from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import bulkmailer from '../assets/bulkmailer.png'
import actodoreact from '../assets/actodoreact.png'
import weatherappreact from '../assets/weatherappreact.png'
import loginformvalidation from '../assets/loginformvalidation.png'
import NostraEcommerce from '../assets/NostraEcommerce.png'
import greenden from '../assets/Greenden.png'
import tripadvisor from "../assets/Tripadvisor.png"
import udemy from "../assets/udemy.png"
import elearning from '../assets/elearning.jpg'

const projects = [
    { id: 1, title: 'E-Learning Platform', description: 'An online platform where instructors can upload courses and students can learn.', image: elearning, github: 'https://github.com/Sivabalamanikandan-C/E-Learning-platform.git', live: 'https://elearningplatform-hazel.vercel.app/', tags: ['React', 'Node.js','Express js', 'MongoDB'] },
    { id: 2, title: 'Bulk Mailer', description: 'MERN stack application for bulk email distribution', image: bulkmailer, github: 'https://github.com/Sivabalamanikandan-C/Bulk-mailer.git', live: 'https://bulkmailerfrontend.vercel.app/', tags: ['React', 'Node.js','Express js', 'MongoDB'] },
    { id: 3, title: 'Weather App', description: 'Real-time weather application with interactive maps', image: weatherappreact, github: 'https://github.com/Sivabalamanikandan-C/weather-app-React.git', live: 'https://weather-app-react-nu-six.vercel.app/', tags: ['React', 'Tailwind CSS', 'API'] },
    { id: 4, title: 'Actodo', description: 'A beautiful task management application', image: actodoreact, github: 'https://github.com/Sivabalamanikandan-C/Actodo-React.git', live: 'https://actodo-react-seven-gilt.vercel.app/', tags: ['React', 'Tailwind CSS'] },
    { id: 5, title: 'Nostra Ecommerce', description: 'Full-featured e-commerce shopping platform', image: NostraEcommerce, github: 'https://github.com/Sivabalamanikandan-C/Nostra-Ecommerce.git', live: 'https://sivabalamanikandan-c.github.io/Nostra-Ecommerce/', tags: ['HTML', 'CSS', 'JavaScript'] },
    { id: 6, title: 'Form Validation', description: 'Advanced form validation with error handling', image: loginformvalidation, github: 'https://github.com/Sivabalamanikandan-C/Form-validation.git', live: 'https://sivabalamanikandan-c.github.io/Form-validation/', tags: ['HTML', 'CSS', 'JavaScript'] },
    { id: 7, title: 'Greenden', description: 'Plant store UI with modern design', image: greenden, github: 'https://github.com/Sivabalamanikandan-C/Greenden-Using-Tailwind.git', live: 'https://sivabalamanikandan-c.github.io/Greenden-Using-Tailwind/', tags: ['Tailwind CSS', 'Responsive'] },
    { id: 8, title: 'Trip Advisor Clone', description: 'Travel website UI recreation', image: tripadvisor, github: 'https://github.com/Sivabalamanikandan-C/Tripadvisor-Clone.git', live: 'https://sivabalamanikandan-c.github.io/Tripadvisor-Clone/', tags: ['HTML', 'CSS'] },
    { id: 9, title: 'Udemy Clone', description: 'Online learning platform UI design', image: udemy, github: 'https://github.com/Sivabalamanikandan-C/Udemy_clone.git', live: 'https://sivabalamanikandan-c.github.io/Udemy_clone/', tags: ['HTML', 'CSS'] },
];

const ProjectSlider = () => {
    const [filter, setFilter] = useState('all');

    const allTags = ['all', ...new Set(projects.flatMap(p => p.tags))];

    const filteredProjects = filter === 'all' 
        ? projects 
        : projects.filter(p => p.tags.includes(filter));

    return (
        <section id="projects" className="section-padding bg-gradient-to-b from-white via-neutral-50 to-white dark:from-neutral-950 dark:via-neutral-900 dark:to-neutral-950">
            <div className="container-max">
                {/* Section Header */}
                <div className="text-center mb-16 md:mb-20 animate-fade-in">
                    <span className="inline-block px-4 py-2 rounded-full bg-accent-100 dark:bg-accent-900/30 text-accent-700 dark:text-accent-300 text-sm font-semibold mb-4">
                        My Work
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        Featured <span className="gradient-text">Projects</span>
                    </h2>
                    <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
                        A selection of projects that showcase my skills and experience in web development.
                    </p>
                </div>

                {/* Filter Tags */}
                <div className="flex justify-center flex-wrap gap-3 mb-16">
                    {allTags.map((tag) => (
                        <button
                            key={tag}
                            onClick={() => setFilter(tag)}
                            className={`px-5 py-2 rounded-full font-medium text-sm transition-all duration-300 ${
                                filter === tag
                                    ? 'bg-gradient-to-r from-primary-600 to-secondary-600 text-white shadow-lg'
                                    : 'bg-neutral-200 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-300 dark:hover:bg-neutral-700'
                            }`}
                        >
                            {tag.charAt(0).toUpperCase() + tag.slice(1)}
                        </button>
                    ))}
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredProjects.map((project, index) => (
                        <div 
                            key={project.id} 
                            className="group animate-fade-in"
                            style={{ animationDelay: `${index * 50}ms` }}
                        >
                            <div className="card-elevated overflow-hidden h-full flex flex-col">
                                {/* Image Container */}
                                <div className="relative overflow-hidden bg-neutral-200 dark:bg-neutral-800 aspect-video">
                                    <img 
                                        src={project.image} 
                                        alt={project.title} 
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                                    />
                                    
                                    {/* Overlay on hover */}
                                    <div className="absolute inset-0 bg-black/70 dark:bg-black/80 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col items-center justify-center p-6 gap-4">
                                        <div className="flex gap-4">
                                            <a 
                                                href={project.github} 
                                                target="_blank" 
                                                rel="noopener noreferrer"
                                                className="p-3 rounded-full bg-white/20 hover:bg-white/30 text-white transition-all duration-300 hover:scale-110"
                                                title="GitHub Repository"
                                            >
                                                <FaGithub size={20} />
                                            </a>
                                            {project.live && (
                                                <a 
                                                    href={project.live} 
                                                    target="_blank" 
                                                    rel="noopener noreferrer"
                                                    className="p-3 rounded-full bg-white/20 hover:bg-white/30 text-white transition-all duration-300 hover:scale-110"
                                                    title="Live Demo"
                                                >
                                                    <FaExternalLinkAlt size={20} />
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-6 flex flex-col flex-1">
                                    <h3 className="text-xl md:text-2xl font-bold text-neutral-900 dark:text-white mb-2">
                                        {project.title}
                                    </h3>
                                    <p className="text-neutral-600 dark:text-neutral-400 text-sm mb-4 flex-1">
                                        {project.description}
                                    </p>

                                    {/* Tags */}
                                    <div className="flex flex-wrap gap-2 pt-4 border-t border-neutral-200 dark:border-neutral-800">
                                        {project.tags.map((tag) => (
                                            <span 
                                                key={tag}
                                                className="text-xs px-2.5 py-1 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 font-medium"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* CTA */}
                <div className="mt-20 text-center">
                    <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-6">Want to see more projects?</p>
                    <a href="https://github.com/Sivabalamanikandan-C" target="_blank" rel="noopener noreferrer" className="btn-secondary inline-flex items-center gap-2">
                        <FaGithub /> Visit My GitHub
                    </a>
                </div>
            </div>
        </section>
    );
};

export default ProjectSlider;
