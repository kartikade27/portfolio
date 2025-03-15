import React, { useState } from "react";
import { motion } from "framer-motion";
import eventImg from '../assets/img/event-managment-system.webp'
const Project = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: "Event Managament System",
      description: "The Event Management System is a platform for organizing and managing events efficiently, allowing users to register, access schedules.",
      technologies: ["Spring boot", "java", "MYSQL", "Swagger"],
      imageUrl: `${eventImg}`,
      githubLink: "https://github.com/example/e-commerce",
    },
    {
      title: "Job Portal",
      description: "A job portal application with Spring Boot backend.",
      technologies: ["Spring Boot", "React", "PostgreSQL"],
      imageUrl: "https://cdn.pixabay.com/photo/2021/08/04/13/06/software-developer-6521720_1280.jpg",
      githubLink: "https://github.com/example/job-portal",
    },
    {
      title: "Hotel Booking System",
      description: "A hotel management system using JSP, Servlets & Hibernate.",
      technologies: ["JSP", "Servlets", "Hibernate", "MySQL"],
      imageUrl: "https://cdn.pixabay.com/photo/2021/08/04/13/06/software-developer-6521720_1280.jpg",
      githubLink: "https://github.com/example/hotel-booking",
    },
  ];

  return (
    <section id="projects" className="bg-gray-900 py-20" style={{ fontFamily: "Roboto, sans-serif" }}>
      <div className="container mx-auto px-6 text-center">
        {/* Title */}
        <h2 className="text-4xl font-extrabold text-white mb-12">
          My
          <span className="bg-gradient-to-r ml-2 from-blue-400 to-purple-500 text-transparent bg-clip-text">
            Projects
          </span>
        </h2>

        {/* Grid */}
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="card bg-white shadow-xl rounded-lg overflow-hidden border border-white/20 transition-all duration-300"
            >
              {/* Image */}
              <figure className="w-full h-64 overflow-hidden">
                <img src={project.imageUrl} alt={project.title} className="w-full h-full object-cover" />
              </figure>

              {/* Content */}
              <div className="card-body p-6 text-start">
                <h3 className="text-2xl font-bold text-gray-800">{project.title}</h3>
                <p className="text-gray-600 mt-2">{project.description}</p>

                {/* DaisyUI Styled Button */}
                <div className="card-actions mt-4">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="inline-block mt-8 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold py-3 px-6 rounded-lg shadow-lg hover:opacity-80 transition duration-300 tracking-wider"
                  >
                    View Project
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal Popup */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50 ">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-lg p-6 w-[90%] md:w-[50%] shadow-xl"
          >
            {/* Image */}
            <img src={selectedProject.imageUrl} alt={selectedProject.title} className="w-full h-64 object-cover rounded-lg" />

            {/* Content */}
            <h3 className="text-3xl font-bold text-gray-800 mt-4">{selectedProject.title}</h3>
            <p className="text-gray-600 mt-2">{selectedProject.description}</p>

            {/* Technologies Used (Now a List) */}
            <h4 className="text-lg font-semibold text-gray-700 mt-4">Technologies Used:</h4>
            <ul className="list-disc list-inside text-gray-600 mt-2 space-y-4">
              {selectedProject.technologies.map((tech, index) => (
                <li key={index} className="text-gray-700 font-medium">
                  {tech}
                </li>
              ))}
            </ul>
           

            {/* GitHub Link */}
            <div className="mt-3">
              <a
                href={selectedProject.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-8 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold py-3 px-6 rounded-lg shadow-lg hover:opacity-80 transition duration-300 tracking-wider"
              >
                View on GitHub
              </a>
            </div>

            {/* Close Button */}
            <div className="text-right mt-4">
              <button
                onClick={() => setSelectedProject(null)}
                className="btn btn-error text-black px-4 py-2 rounded-lg"
              >
                Close
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </section>
  );
};

export default Project;
