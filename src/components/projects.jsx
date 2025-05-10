import React from 'react';


const projects = [
  {
    title: 'Inventory-management-Mobile-App',
    description: 'A user-friendly mobile application designed to help businesses efficiently track, manage, and organize inventory in real-time. Built with Flutter and integrated with Firebase, it offers features like stock monitoring,.',
    link: 'https://github.com/Dilshan-Kavishaka-Karunarathna/Inventory-management-Mobile-App',
  },
  {
    title: 'Tourism-Srilanka',
    description: 'A modern, responsive website showcasing the beauty, culture, and attractions of Sri Lanka. Designed to help travelers explore destinations, plan trips, and discover local experiences with ease. Built using HTML and Tailwind CSS and Javascript for fast performance and a seamless user experience.',
    link: 'https://github.com/Dilshan-Kavishaka-Karunarathna/Tourism-Srilanka',
  },
  {
    title: 'E-Commerce-Site',
    description: 'A modern, responsive e-commerce platform built with React, Tailwind CSS, and shadcn/ui, offering a smooth shopping experience with clean UI and fast performance. Currently in development.',
    link: 'https://github.com/Dilshan-Kavishaka-Karunarathna/E-Commerce-Site',
  },

];

const Projects = () => {
  return (
    <section id='projects'className="py-10 ">
      <h2 className="text-4xl text-center mb-8 text-red-500 font-extrabold font-serif">My Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
        {projects.map((project, index) => (
          <div key={index} className="transition duration-300 bg-gradient-to-br from-gray-800 via-gray-900 to-black mt-10 text-white hover:scale-110 rounded-3xl shadow-2xl border-gray-700 shadow-md rounded-lg p-6 text-center">
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p className="text-gray-300 mb-4">{project.description}</p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline"
            >
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;