import React from 'react';
import { motion } from 'framer-motion';

const Landing: React.FC = () => {
  return (
    <section id="landing" className="min-h-screen flex items-center justify-center bg-exotic-gradient text-white">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center px-4"
      >
        <h1 className="text-5xl md:text-7xl font-bold mb-4">Welcome to My Portfolio</h1>
        <p className="text-xl md:text-2xl">Exotic designs meet simplicity. Explore my projects!</p>
      </motion.div>
    </section>
  );
};

export default Landing;
