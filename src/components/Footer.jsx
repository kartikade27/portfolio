import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Footer = () => {
    return (
        <motion.footer
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-gray-100 py-10"
            style={{ fontFamily: 'Roboto, sans-serif' }}
        >
            <div className="container mx-auto px-6 text-gray-900">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    {/* Navigation Links */}
                    <nav className="mb-6 md:mb-0 space-x-4 text-gray-900">
                        <a href="#home" className="hover:text-black transition duration-300">Home</a>
                        <a href="#about" className="hover:text-black transition duration-300">About</a>
                        <a href="#projects" className="hover:text-black transition duration-300">Projects</a>
                        <a href="#contact" className="hover:text-black transition duration-300">Contact</a>
                    </nav>

                    {/* Social Media Icons */}
                    <div className="flex space-x-6">
                        {[
                            { href: "https://github.com/yourprofile", icon: <FaGithub size={24} /> },
                            { href: "https://linkedin.com/in/yourprofile", icon: <FaLinkedin size={24} /> },
                            { href: "https://twitter.com/yourprofile", icon: <FaTwitter size={24} /> }
                        ].map((item, index) => (
                            <motion.a
                                key={index}
                                href={item.href}
                                whileHover={{ scale: 1.2, rotate: 5 }}
                                whileTap={{ scale: 0.9 }}
                                className="text-gray-600 hover:text-gray-900 transition duration-300"
                            >
                                {item.icon}
                            </motion.a>
                        ))}
                    </div>
                </div>

                {/* Copyright Section */}
                <div className="mt-8 text-center text-gray-900 text-sm">
                    &copy; {new Date().getFullYear()} MyPortfolio. All rights reserved.
                </div>
            </div>
        </motion.footer>
    );
};

export default Footer;
