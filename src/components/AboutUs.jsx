import React from 'react';
import man from "../assets/img/man.jpg";

const AboutUs = () => {
    return (
        <section id="about" className="bg-gray-900 py-16" style={{ fontFamily: 'Roboto, sans-serif' }}>
            <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center">

                {/* Image Section */}
                <div className="lg:w-1/2">
                    <img src={man} className="rounded-lg shadow-2xl w-full max-w-md mx-auto lg:mx-0" alt="Profile" />
                </div>

                {/* Text Section */}
                <div className="lg:w-1/2 lg:pl-12 mt-8 lg:mt-0 text-center lg:text-left">
                    <h1 className="text-4xl font-extrabold text-white mb-4">
                        About <span className="bg-gradient-to-r from-purple-500 to-indigo-500 text-transparent bg-clip-text">Me</span>
                    </h1>
                    <div className="bg-white bg-opacity-10 p-6 rounded-lg shadow-lg">
                        <p className="text-gray-600 text-lg leading-relaxed text-start">
                            Seeking an opportunity in a challenging environment to prove my skills and utilize my knowledge and intelligence for the growth of the organization.
                            Passionate Java Developer with a strong understanding of Core Java, Spring Boot, and backend development. Eager to apply my technical skills to real-world projects and grow as a software professional.
                        </p>
                    </div>

                    {/* Button */}
                    <a
                        href="#contact"
                        className="inline-block mt-8 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold py-3 px-6 rounded-lg shadow-lg hover:opacity-80 transition duration-300 tracking-wider"
                    >
                        Contact Me
                    </a>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;
