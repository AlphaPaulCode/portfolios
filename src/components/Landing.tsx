import React from 'react';
import { motion } from 'framer-motion';
import profilepic from '../components/images/Nigerian-Tech-Enthusiast.png'; // Adjust the path as necessary

const Landing: React.FC = () => {
  return (
    <section
      id="landing"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] text-white px-4"
    >
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center py-20">
        {/* Text content */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center md:text-left px-4"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
            Welcome to <br className="hidden md:block" /> <span className="text-pink-400">My Portfolio</span>
          </h1>
          <p className="text-lg md:text-xl text-white/80">
            Where exotic design meets simplicity. Dive into my world of clean code, rich interfaces, and modern web experiences.
          </p>
        </motion.div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex justify-center"
        >
          <img
            src={profilepic} 
            alt="Paul Erioro"
            className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover shadow-2xl border-4 border-pink-500"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Landing;
