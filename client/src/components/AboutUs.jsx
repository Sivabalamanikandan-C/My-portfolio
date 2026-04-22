import React from 'react';
import Card from '../Cards/Card';

import {
    FaCode,
    FaGraduationCap,
    FaTools,
    FaLanguage,
    FaPhone
} from "react-icons/fa";

const AboutUs = () => {
    return (
        <section id="about" className="py-16 bg-gray-50 text-black">

            {/* Heading */}
            <h2 className="text-4xl font-bold text-center mb-4">
                About Me
            </h2>

            <p className="text-center text-black max-w-2xl mx-auto">
                I am Sivabala Manikandan, a Full Stack Developer specializing in the MERN stack.
                Currently pursuing my Master of Science in Computer Science (M.Sc CS),
                I build responsive and scalable web applications.
            </p>

            {/* Grid */}
            {/* <div className="w-[100%] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 m-auto my-12 items-start">

                <Card 
                    icon={<FaCode />}
                    title="Specialized"
                    description="Front-end Developer, Back-end Developer, MERN Stack Developer"
                />

                <Card
                    icon={<FaGraduationCap />}
                    title="Education"
                    description={
                        <div>
                            <p className="font-semibold">Bachelor of Computer Science</p>
                            <p>The Madura College</p>
                            <p className="mb-3 text-gray-400">2021 - 2024</p>

                            <p className="font-semibold">M.Sc Computer Science</p>
                            <p>The Madura College</p>
                            <p className="text-gray-400">2024 - 2026</p>
                        </div>
                    }
                />

                <Card
                    icon={<FaTools />}
                    title="Skills"
                    description={
                        <div className="flex flex-wrap gap-2">
                            <span className="bg-gray-100 px-2 py-1 rounded">React</span>
                            <span className="bg-gray-100 px-2 py-1 rounded">Node</span>
                            <span className="bg-gray-100 px-2 py-1 rounded">Express</span>
                            <span className="bg-gray-100 px-2 py-1 rounded">MongoDB</span>
                        </div>
                    }
                />

                <Card
                    icon={<FaLanguage />}
                    title="Language"
                    description="English, Tamil"
                />

                <Card
                    icon={<FaPhone />}
                    title="Contact"
                    description={
                        <div>
                            <p>Email: sivabalamanikandan03@gmail.com</p>
                            <p className="mt-1">Phone: +91 9751357984</p>
                        </div>
                    }
                />

            </div> */}
        </section>
    );
};

export default AboutUs;