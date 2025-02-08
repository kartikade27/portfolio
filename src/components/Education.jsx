import React from 'react';
import { motion } from 'framer-motion';

const educationData = [
    { title: "Bachelor of Computer Application", date: "2019-2022", institution: "Sahyog College of IT & Managament" },
    { title: "Higher Secondary Certificate", date: "2017-2019", institution: "GSS College Majiwada" },
    { title: "Secondary School Certificate", date: "2015-2017", institution: "GSS School Majiwada" },
];

const Education = () => {
    return (
        <section id="education" className="bg-gray-900 py-20" style={{ fontFamily: 'Roboto, sans-serif' }}>
            <div className="container mx-auto px-6 text-center">
                {/* Title */}
                <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-12">
                    <span className="bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">My Education</span>
                </h2>

                {/* Timeline Container */}
                <div className="relative border-l-4 border-gray-700 ml-4 md:ml-20">
                    {educationData.map((edu, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: index * 0.2 }}
                            className="relative mb-10 pl-8"
                        >
                            {/* Dot Indicator */}
                            <span className="absolute left-[-12px] top-13 h-5 w-5 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"></span>

                            {/* Content Card */}
                            <div className="bg-white bg-opacity-10 backdrop-blur-lg p-6 rounded-lg shadow-lg text-left">
                                <h3 className="text-2xl font-semibold text-gary-900">{edu.title}</h3>
                                <p className="text-sm text-gray-500">{edu.date}</p>
                                <p className="text-md text-gray-500 mt-2">{edu.institution}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Education;
