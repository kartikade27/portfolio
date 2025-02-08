import React from 'react';
import { motion } from 'framer-motion';

const ProjectCard = ({ title, description, imageUrl, projectLink }) => {
    return (
        <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative bg-white   p-6 rounded-2xl shadow-lg overflow-hidden transition-all duration-300 border border-white/20"
        >
            {/* Image */}
            <div className="h-50 w-full rounded-lg overflow-hidden">
                <img src={imageUrl} alt={title} className="w-full h-full object-cover" />
            </div>

            {/* Content */}
            <div className="mt-4">
                <h3 className="text-2xl font-bold text-gray-800">{title}</h3>
                <p className="text-gray-600 mt-2">{description}</p>
            </div>

            {/* Button */}
            <a
                href={projectLink}
                className="mt-4 inline-block px-6 py-2 rounded-lg text-white font-bold transition-all duration-300 relative bg-gradient-to-r from-blue-400 to-purple-500 hover:shadow-[0px_0px_20px_rgba(96,165,250,0.6)]"
            >
                View Project
            </a>
        </motion.div>
    );
};

const Project = () => {
    const projects = [
        {
            title: 'E-Commerce Platform',
            description: 'A fully responsive e-commerce website built with React & Tailwind.',
            imageUrl: 'https://cdn.pixabay.com/photo/2021/08/04/13/06/software-developer-6521720_1280.jpg',
            projectLink: '#',
        },
        {
            title: 'Job Portal',
            description: 'A job portal application with Spring Boot backend.',
            imageUrl: 'https://cdn.pixabay.com/photo/2021/08/04/13/06/software-developer-6521720_1280.jpg',
            projectLink: '#',
        },
        {
            title: 'Hotel Booking System',
            description: 'A hotel management system using JSP, Servlets & Hibernate.',
            imageUrl: 'https://cdn.pixabay.com/photo/2021/08/04/13/06/software-developer-6521720_1280.jpg',
            projectLink: '#',
        },
    ];

    return (
        <section id="projects" className="bg-gray-900 py-20" style={{ fontFamily: 'Roboto, sans-serif' }}>
            <div className="container mx-auto px-6 text-center">
                {/* Title */}
                <h2 className="text-4xl font-extrabold text-white mb-12">
                    <span className="bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">My Projects</span>
                </h2>

                {/* Grid */}
                <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    {projects.map((project, index) => (
                        <ProjectCard
                            key={index}
                            title={project.title}
                            description={project.description}
                            imageUrl={project.imageUrl}
                            projectLink={project.projectLink}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Project;
