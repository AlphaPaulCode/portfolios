import React from 'react';
import { Mail, Linkedin, Github } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-br from-purple-700 via-indigo-700 to-blue-700 text-white"
    >
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-extrabold mb-4 tracking-tight">Get in Touch</h2>
        <p className="text-white/80 text-lg mb-10">
          I'm always open to discussing new projects, collaborations, or just tech stuff. Reach out 👇
        </p>

        <div className="flex justify-center flex-wrap gap-6 text-white text-md font-medium">
          <a
            href="mailto:erioroegbelughepaul@gmail.com"
            className="flex items-center space-x-2 hover:text-yellow-300 transition"
          >
            <Mail className="w-5 h-5" />
            <span>Email</span>
          </a>

          <a
            href="https://www.linkedin.com/in/paul-erioro-egbeluhe-68a95b243/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 hover:text-yellow-300 transition"
          >
            <Linkedin className="w-5 h-5" />
            <span>LinkedIn</span>
          </a>

          <a
            href="https://github.com/AlphaPaulCode"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 hover:text-yellow-300 transition"
          >
            <Github className="w-5 h-5" />
            <span>GitHub</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
