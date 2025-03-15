import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-gray-100 py-10 font-roboto">
            <div className="container mx-auto px-6 text-gray-900">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    {/* Navigation Links */}
                    <nav className="mb-6 md:mb-0 space-x-4 text-gray-900">
                        <a href="#home" className="hover:text-black transition duration-300 btn btn-ghost btn-sm">
                            Home
                        </a>
                        <a href="#about" className="hover:text-black transition duration-300 btn btn-ghost btn-sm">
                            About
                        </a>
                        <a href="#projects" className="hover:text-black transition duration-300 btn btn-ghost btn-sm">
                            Projects
                        </a>
                        <a href="#contact" className="hover:text-black transition duration-300 btn btn-ghost btn-sm">
                            Contact
                        </a>
                    </nav>

                    {/* Social Media Icons */}
                    <div className="flex space-x-6">
                        {[
                            { href: "https://github.com/yourprofile", icon: <FaGithub size={24} /> },
                            { href: "https://linkedin.com/in/yourprofile", icon: <FaLinkedin size={24} /> },
                            { href: "https://twitter.com/yourprofile", icon: <FaTwitter size={24} /> },
                        ].map((item, index) => (
                            <a
                                key={index}
                                href={item.href}
                                className="text-gray-600 hover:text-gray-900 transition duration-300 btn btn-ghost btn-circle"
                            >
                                {item.icon}
                            </a>
                        ))}
                    </div>
                </div>

                {/* Copyright Section */}
                <div className="mt-8 text-center text-gray-900 text-sm">
                    &copy; {new Date().getFullYear()} MyPortfolio. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
