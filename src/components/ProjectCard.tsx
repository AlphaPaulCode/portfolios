import React from 'react';
import { motion } from 'framer-motion';

type Project = {
  id: number;
  title: string;
  description: string;
  techStack: string[];
  link: string;
  linkType: 'code' | 'website';
};

type Props = {
  project: Project;
};

const ProjectCard: React.FC<Props> = ({ project }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      className="bg-white rounded-lg shadow-lg p-6 hover:shadow-2xl transition"
    >
      <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
      <p className="text-gray-700 mb-4">{project.description}</p>
      <div className="mb-4">
        {project.techStack.map((tech, index) => (
          <span key={index} className="inline-block bg-exotic text-white rounded-full px-3 py-1 text-sm font-semibold mr-2">
            {tech}
          </span>
        ))}
      </div>
      <a
  href={project.link}
  target="_blank"
  rel="noopener noreferrer"
  className="text-exotic border border-exotic rounded px-4 py-2 hover:bg-exotic hover:text-white transition"
>
  {project.linkType === 'code' ? 'View Code' : 'View Website'}
</a>
    </motion.div>
  );
};

export default ProjectCard;
