import React from 'react';
import { motion } from 'framer-motion';

const skills = [
  'HTML', 'CSS', 'JavaScript', 'React', 'Java', 'Servlet', 'JSP',
  'Tailwind CSS', 'MySQL', 'Spring MVC', 'Spring Security', 'Spring Boot'
];

const Skills = () => {
  return (
    <section id="skills" className="bg-gray-900 py-20" style={{ fontFamily: 'Roboto, sans-serif' }}>
      <div className="container mx-auto px-6 text-center">
        {/* Title */}
        <h2 className="text-4xl font-extrabold text-white mb-12">
          <span className="bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
            My Skills
          </span>
        </h2>

        {/* Skills Grid */}
        <div className="flex flex-wrap justify-center gap-4">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white bg-opacity-10 backdrop-blur-lg text-gray-900 px-6 py-3 rounded-full shadow-lg hover:bg-opacity-30 transition duration-300 text-sm font-semibold tracking-wide"
            >
              {skill}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
