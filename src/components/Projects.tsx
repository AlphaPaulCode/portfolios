import React from 'react';
import ProjectCard from './ProjectCard';

type Project = {
  id: number;
  title: string;
  description: string;
  techStack: string[];
  link: string;
  linkType: 'code' | 'website';
};

const projects: Project[] = [
    {
        id: 1,
        title: 'Fintech Merchant Portal',
        description: 'An enterprise-grade dashboard for merchants to manage financial operations. Includes real-time KPIs, payment links, bulk payouts, transaction tracking, QR code generation, dispute resolution, and settlement management. Built with React, TypeScript, Tailwind CSS, Material UI, and Redux for a seamless and scalable user experience.',
        techStack: ['React', 'JavaScript', 'Tailwind CSS', 'Material UI', 'Redux', 'Context'],
        link: 'http://Portal.routepay.com',
        linkType: 'website'
      },      
      {
        id: 2,
        title: 'AI-Powered Chatbot (Gemini API)',
        description: 'An intelligent chatbot interface that supports secure, real-time, multi-turn conversations using the Gemini API. Built with React and JWT authentication, it mimics a conversational AI experience with dynamic response handling and contextual awareness.',
        techStack: ['React', 'JavaScript', 'Gemini API', 'JWT'],
        link: 'https://github.com/AlphaPaulCode/Google-Gemini-Clone',
        linkType: 'code'
      },      
  {
    id: 3,
    title: 'AssureBid Admin Portal',
    description: 'An advanced administrative interface for managing the full tender lifecycle, user roles, and platform analytics. The portal includes real-time dashboards showing tender statistics (e.g., pending applications, expiring tenders), role-based access control, and intuitive navigation across modules such as users, settings, analytics, and archives. Built with React and Tailwind CSS, it’s fully responsive and optimized for efficient tender management in enterprise environments.',
    techStack: ['React', 'Tailwind CSS', 'Firebase', 'Javascript'],
    link: 'https://managementinc.assuredbid.co.uk/', 
    linkType: 'website'
  },
  // {
  //   id: 4,
  //   title: 'AssureBid User Portal',
  //   description: 'A secure and user-friendly web application for managing tenders, bids, and user accounts. Features include multi-factor authentication (MFA) using JWT and biometric verification, role-based access, and real-time tracking of submitted and pending tenders. Built with a modern UI, the portal allows users to view, search, filter, and sort available tenders across categories, with detailed information like budget, deadlines, and publish dates. Optimized for performance and security.',
  //   techStack: ['React', 'Node.js', 'Express', 'JWT'],
  //   link: 'https://portal.assuredbid.co.uk/login',
  //   linkType: 'website',
  // },
  {
    id: 5,
    title: 'Payment Portal',
    description: 'A secure and responsive web platform for managing digital payments and transaction histories. Features include multi-factor authentication (MFA) using JWT, secure password hashing, and biometric verification for user safety. Built with React, JavaScript, and Tailwind CSS, the portal provides a clean interface for seamless payment processing, balance tracking, and user management—optimized for performance and accessibility.',
    techStack: ['React', 'JavaScript', 'Material UI', 'JWT'],
    link: 'http://Portal.routepay.com',
    linkType: 'website',
  },
  // {
  //   id: 6,
  //   title: 'Support Portal',
  //   description: 'A robust internal tool designed to streamline customer support and operations. Built with React, JavaScript, MUI, and Tailwind CSS, the portal features responsive dashboards, detailed transaction reports, mobile onboarding tracking, and wallet activity monitoring. Integrated with secure authentication mechanisms including JWT-based MFA and biometric verification, it empowers support teams to efficiently manage inquiries, resolve issues, and maintain full visibility into user activity and system logs.',
  //   techStack: ['React', 'Node.js', 'Express', 'JWT'],
  //   link: 'http://carehub.routepay.com',
  //   linkType: 'website',
  // },
  {
    id: 7,
    title: 'Bioskar Website',
    description: 'Official website for a developer-focused startup aiming to bridge the gap between tech talent and organizations. Built with React, TypeScript, Framer Motion, and Material UI, the site presents Bioskar’s mission to equip developers with the right skills for industry needs while helping companies find talent that matches their technical demands. Includes smooth animations, modern layouts, and scalable component architecture.',
    techStack: ['React', 'TypeScript', 'Framer Motion', 'Material UI'],
    link: 'https://github.com/Bioskar/Bioskar-web-frontend',
    linkType: 'code',
  },
  {
    id: 8,
    title: 'Captain Track (Driver App)',
    description: 'Driver-side mobile app for Captain Track. Built with React Native, Context API, and Expo/EAS; implements complex onboarding flows, in-app navigation, and real-time API integrations for drivers and fleet management.',
    techStack: ['React Native', 'Context API', 'Expo', 'EAS'],
    link: 'https://github.com/NUPAT-TECHNOLOGIES/captain-track-driver',
    linkType: 'code',
  },
  {
    id: 9,
    title: 'Within Africa (Travel Booking)',
    description: 'Travel platform featuring a hotel-booking module with location autocomplete, date-range picker, and guest/room selector; multi-city flight booking with dynamic segment management and passenger detail forms. Implemented responsive UI and performance optimizations.',
    techStack: ['React', 'Tailwind CSS', 'JavaScript'],
    link: 'https://github.com/justinlagos/withinafrica-playground',
    linkType: 'code',
  },
  {
    id: 10,
    title: 'Union Bank Portals (Private)',
    description: 'Multiple enterprise portals (Self Service Portal, Address Verification Portal — Admin & Vendor, Turbo website). Built with React, TypeScript, Tailwind CSS, and MUI; includes robust API integrations, role-based access control, and performant search experiences. Codebase is private and not publicly available.',
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'MUI', 'GraphQL', 'Axios'],
    link: 'Private',
    linkType: 'website',
  }
];

const Projects: React.FC = () => {
    return (
      <section
        id="projects"
        className="relative py-24 px-4 bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] text-white"
      >
       
  
        <div className="relative max-w-6xl mx-auto text-center z-10">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-10 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
            Projects
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto mb-16 text-lg">
            A selection of my recent work—spanning fintech platforms, intelligent interfaces, and startup web apps.
          </p>
  
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>
    );
  };

export default Projects;
