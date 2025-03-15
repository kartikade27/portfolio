import React from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { FaJava, FaReact, FaDatabase, FaJs, FaHtml5, FaCss3Alt } from "react-icons/fa";
import { SiSpringboot, SiTailwindcss } from "react-icons/si";

const techIcons = [
  { icon: <FaJava />, color: "#f89820" },
  { icon: <FaReact />, color: "#61DBFB" },
  { icon: <FaDatabase />, color: "#00758F" },
  { icon: <FaJs />, color: "#F7DF1E" },
  { icon: <FaHtml5 />, color: "#E34F26" },
  { icon: <FaCss3Alt />, color: "#1572B6" },
  { icon: <SiSpringboot />, color: "#6DB33F" },
  { icon: <SiTailwindcss />, color: "#38B2AC" },
];

const generateRandomPosition = () => ({
  x: Math.random() * window.innerWidth - window.innerWidth / 2,
  y: Math.random() * window.innerHeight - window.innerHeight / 2,
});

const Hero = () => {
  return (
    <div className="relative h-[80vh] md:h-[70vh] flex flex-col justify-center items-center text-white overflow-hidden bg-black">
      {/* Floating Tech Icons */}
      {techIcons.map((tech, index) => (
        <motion.div
          key={index}
          className="absolute text-5xl opacity-70"
          style={{ color: tech.color }}
          initial={generateRandomPosition()}
          animate={{
            x: [
              Math.random() * window.innerWidth - window.innerWidth / 2,
              Math.random() * window.innerWidth - window.innerWidth / 2,
            ],
            y: [
              Math.random() * window.innerHeight - window.innerHeight / 2,
              Math.random() * window.innerHeight - window.innerHeight / 2,
            ],
            rotate: [0, 360],
          }}
          transition={{
            duration: 6 + Math.random() * 4,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {tech.icon}
        </motion.div>
      ))}

      {/* Hero Content */}
      <div className="relative z-10 container mx-auto px-6 py-12 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-yellow-400">
          Hi, I'm{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400">
            Kartik Ade
          </span>
        </h1>
        <p className="text-lg md:text-xl mb-3 text-gray-200">
          I'm a Software Developer specialized in{" "}
        </p>

        {/* Type Animation for Full Stack Development */}
        <p className="text-xl md:text-2xl font-semibold mb-6 text-yellow-400">
          <TypeAnimation
            sequence={[
              "Full Stack Development", 2000,
              "Frontend Development", 2000,
              "Backend Development", 2000,
            ]}
            wrapper="span"
            cursor={true}
            repeat={Infinity}
          />
        </p>

        <a
          href="#contact"
          className="inline-block bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-semibold py-3 px-8 rounded-xl shadow-lg hover:scale-105 transition transform duration-300"
        >
          Contact Me
        </a>
      </div>
    </div>
  );
};

export default Hero;
