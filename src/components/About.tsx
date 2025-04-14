import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 text-white relative"
    >
      <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          About Me
        </motion.h2>

        <motion.p
          className="text-lg md:text-xl mb-6 leading-relaxed text-white/90"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          I'm a Frontend Engineer passionate about crafting visually striking and highly interactive
          web experiences. I blend modern UI trends with functional design to build apps that feel
          smooth, responsive, and just a bit exotic ✨.
        </motion.p>

        <motion.p
          className="text-md md:text-lg text-white/80"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          🔧 Tech I use daily: <br />
          <span className="text-white font-medium">
            React, JavaScript, TypeScript, Tailwind CSS, Node.js, Material UI, Framer Motion
          </span>
        </motion.p>
      </div>

    </section>
  );
};

export default About;
