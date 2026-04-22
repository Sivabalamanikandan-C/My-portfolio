import React from "react";
import CartTemplate from "./CartTemplate";
import { FaCode, FaGraduationCap, FaToolbox, FaLanguage, FaPhone } from "react-icons/fa";

const ProfileCards = () => {
  const profileData = [
    {
      title: "Specialized",
      icon: FaCode,
      content: (
        <div className="space-y-2">
          <p>Front-end Developer</p>
          <p>Back-end Developer</p>
          <p>MERN Stack Developer</p>
        </div>
      )
    },
    {
      title: "Education",
      icon: FaGraduationCap,
      content: (
        <div className="space-y-3">
          <div>
            <p className="font-semibold text-neutral-900 dark:text-white">Bachelor of Computer Science</p>
            <p className="text-sm">The Madura College</p>
            <p className="text-xs text-neutral-500">2021 - 2024</p>
          </div>
          <div>
            <p className="font-semibold text-neutral-900 dark:text-white">M.Sc Computer Science</p>
            <p className="text-sm">The Madura College</p>
            <p className="text-xs text-neutral-500">2024 - 2026</p>
          </div>
        </div>
      )
    },
    {
      title: "Tech Stack",
      icon: FaToolbox,
      content: (
        <div className="flex flex-wrap gap-2">
          {['React', 'Node', 'Express', 'MongoDB'].map((tech) => (
            <span 
              key={tech}
              className="px-3 py-1 rounded-full text-xs font-medium bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300"
            >
              {tech}
            </span>
          ))}
        </div>
      )
    },
    {
      title: "Languages",
      icon: FaLanguage,
      content: (
        <div className="space-y-1">
          <p>English</p>
          <p>Tamil</p>
        </div>
      )
    },
    {
      title: "Contact Info",
      icon: FaPhone,
      content: (
        <div className="space-y-2">
          <div>
            <p className="text-xs text-neutral-500 dark:text-neutral-400 mb-1">Email</p>
            <a href="mailto:sivabalamanikandan03@gmail.com" className="text-primary-600 dark:text-primary-400 hover:underline text-sm break-all">
              sivabalamanikandan03@gmail.com
            </a>
          </div>
          <div>
            <p className="text-xs text-neutral-500 dark:text-neutral-400 mb-1">Phone</p>
            <a href="tel:+919751357984" className="text-primary-600 dark:text-primary-400 hover:underline text-sm">
              +91 9751357984
            </a>
          </div>
        </div>
      )
    }
  ];

  return (
    <section className="section-padding bg-gradient-to-b from-neutral-50 via-white to-neutral-50 dark:from-neutral-950 dark:via-neutral-900 dark:to-neutral-950">
      <div className="container-max">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <span className="inline-block px-4 py-2 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-sm font-semibold mb-4">
            About Me
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Who Am <span className="gradient-text">I</span>
          </h2>
          <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
            I'm a passionate Full Stack Developer specializing in MERN stack technologies. Currently pursuing M.Sc in Computer Science while building modern, scalable web applications.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {profileData.map((card, index) => {
            const IconComponent = card.icon;
            return (
              <div key={index} className="group">
                <div className="card-base p-8 h-full relative overflow-hidden">
                  {/* Icon Background */}
                  <div className="absolute top-4 right-4 w-12 h-12 rounded-xl bg-gradient-to-br from-primary-100 to-secondary-100 dark:from-primary-900/20 dark:to-secondary-900/20 flex items-center justify-center text-primary-600 dark:text-primary-400 opacity-50 group-hover:opacity-100 transition-opacity duration-300">
                    <IconComponent size={24} />
                  </div>

                  <div className="relative z-10">
                    <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-4 pr-14">
                      {card.title}
                    </h3>
                    <div className="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed">
                      {card.content}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProfileCards;
