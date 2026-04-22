import React from 'react';
import { FaLaptopCode, FaPenNib, FaBriefcase } from 'react-icons/fa';

const MyServices = () => {
    const services = [
        {
            icon: <FaLaptopCode />,
            title: 'Full Stack Development',
            description: 'I build complete, high-performance web applications using the MERN stack. From database architecture to responsive user interfaces, I handle every layer with precision.',
            features: ['React.js', 'Node.js', 'MongoDB', 'Express.js']
        },
        {
            icon: <FaPenNib />,
            title: 'Frontend Development',
            description: 'Creating stunning, interactive user interfaces with focus on UX/UI design principles. I ensure every pixel is perfect and every interaction is smooth.',
            features: ['React', 'Tailwind CSS', 'Responsive Design', 'Web Performance']
        },
        {
            icon: <FaBriefcase />,
            title: 'Freelance Services',
            description: 'Whether you need a quick fix or a complete overhaul, I deliver reliable, professional solutions that exceed expectations.',
            features: ['Custom Solutions', 'On-time Delivery', 'Quality Assurance', 'Support']
        },
    ];

    return (
        <section id='myservices' className="section-padding bg-gradient-to-b from-neutral-50 via-white to-neutral-50 dark:from-neutral-950 dark:via-neutral-900 dark:to-neutral-950">
            <div className="container-max">
                {/* Section Header */}
                <div className="text-center mb-16 md:mb-24 animate-fade-in">
                    <span className="inline-block px-4 py-2 rounded-full bg-secondary-100 dark:bg-secondary-900/30 text-secondary-700 dark:text-secondary-300 text-sm font-semibold mb-4">
                        My Expertise
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        Services I <span className="gradient-text">Provide</span>
                    </h2>
                    <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
                        Comprehensive solutions tailored to your needs, combining technical expertise with creative problem-solving.
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div 
                            key={index} 
                            className="group animate-fade-in"
                            style={{ animationDelay: `${index * 100}ms` }}
                        >
                            <div className="card-elevated relative overflow-hidden h-full">
                                {/* Gradient overlay on hover */}
                                <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-transparent dark:from-primary-950/20 dark:to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                
                                <div className="relative z-10 p-8 h-full flex flex-col">
                                    {/* Icon */}
                                    <div className="mb-6">
                                        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary-100 to-secondary-100 dark:from-primary-900/30 dark:to-secondary-900/30 flex items-center justify-center text-3xl text-primary-600 dark:text-primary-400 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">
                                            {service.icon}
                                        </div>
                                    </div>

                                    {/* Title */}
                                    <h3 className="text-2xl font-bold text-neutral-900 dark:text-white mb-3">
                                        {service.title}
                                    </h3>

                                    {/* Description */}
                                    <p className="text-neutral-600 dark:text-neutral-400 mb-6 flex-1 leading-relaxed">
                                        {service.description}
                                    </p>

                                    {/* Features */}
                                    <div className="flex flex-wrap gap-2">
                                        {service.features.map((feature, idx) => (
                                            <span 
                                                key={idx}
                                                className="text-xs px-3 py-1 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 font-medium"
                                            >
                                                {feature}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Hover indicator */}
                                    <div className="mt-6 pt-4 border-t border-neutral-200 dark:border-neutral-800">
                                        <div className="flex items-center text-primary-600 dark:text-primary-400 font-semibold text-sm group-hover:translate-x-1 transition-transform duration-300">
                                            Learn more →
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* CTA Section */}
                <div className="mt-20 text-center">
                    <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-6">
                        Interested in collaborating? Let's create something amazing together!
                    </p>
                    <a href="#contact" className="btn-primary inline-flex">
                        Start a Project
                    </a>
                </div>
            </div>
        </section>
    );
};

export default MyServices;
