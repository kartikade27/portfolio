import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <div
      id="home"
      className="relative bg-cover bg-center h-screen flex flex-col justify-center items-center text-white overflow-hidden"
      style={{ backgroundImage: "url('https://cdn.pixabay.com/photo/2021/08/04/13/06/software-developer-6521720_1280.jpg')", fontFamily: 'Roboto, sans-serif' }}
    >
      {/* Glassmorphism Overlay */}
      <div className="absolute inset-0 bg-white bg-opacity-75 backdrop-blur-xl"></div>

      {/* Hero Content */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 container mx-auto px-4 py-16 flex flex-col md:flex-row items-center justify-between"
      >
        {/* Text Section */}
        <div className="text-center md:text-left md:w-1/2">
          <h1 className="text-5xl font-extrabold mb-4 text-gray-900">
            Hi, I'm{' '}
            <span className="bg-gradient-to-r from-purple-500 to-indigo-500 text-transparent bg-clip-text">
              Kartik Ade
            </span>
          </h1>
          <p className="text-xl md:text-2xl mb-2 text-gray-800">
            I'm a Software Developer specialized in{' '}
           
          </p>
          <p className='text-xl md:text-2xl mb-6 text-gray-800'>
          <TypeAnimation
              sequence={[
                'Frontend Development',
                2000,
                'Backend Development',
                2000,
                'Full Stack Development',
                2000,
              ]}
              wrapper="span"
              cursor={true}
              repeat={Infinity}
              style={{ display: 'inline-block', color: 'black', fontWeight: 'bold' }}
            />
          </p>

          {/* CTA Button */}
          <motion.a
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            href="#contact"
            className="inline-block bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold py-3 px-6 rounded-lg shadow-lg hover:opacity-80 transition duration-300 tracking-wider"
          >
            Contact Me
          </motion.a>
        </div>

        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: 'easeInOut' }}
          className="mt-8 md:mt-0 md:w-1/2 flex justify-center"
        >
          <img
            src="https://cdn.pixabay.com/photo/2021/08/04/13/06/software-developer-6521720_1280.jpg"
            alt="Developer"
            className="rounded-lg shadow-2xl w-full max-w-md"
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;
