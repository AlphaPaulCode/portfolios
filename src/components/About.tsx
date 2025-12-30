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
          I am an experienced Frontend Engineer with over 5 years of expertise in building dynamic, scalable, and user-centric web and mobile applications. My core strengths lie in React, TypeScript, JavaScript, and modern UI frameworks like Tailwind CSS and MUI. I have a proven track record of delivering high-impact fintech products, architecting robust component libraries, and integrating complex APIs to create seamless user experiences.<br /><br />
          I thrive in fast-paced, high-growth environments, collaborating closely with cross-functional teams to drive innovation and deliver solutions that exceed business goals. My experience spans leading engineering teams, mentoring junior developers, and optimizing development workflows through CI/CD and best practices. I am passionate about performance, accessibility, and building products that make a real difference for users and organizations.<br /><br />
          Let’s build something exceptional together.
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
