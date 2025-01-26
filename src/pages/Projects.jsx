import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from '../components/Link';

const projects = [
  {
    title: 'Medical Practice Site',
    description: 'A website for a client with a medical practice to display services and provide information about the practice.',
    image: '/project1.jpg',
    technologies: ['React', 'Node.js', 'Firestore', 'Cloud Functions'],
    demo: 'https://docmarenco.com',
    category: 'Fullstack',
  },
  {
    title: 'Game Guru',
    description: 'An IOS application that uses AI to explain, setup, and manage collections of rule books for tabletop games.',
    image: '/project2.jpg',
    technologies: ['SwiftUI', 'Firebase', 'OpenAI'],
    demo: 'https://project2-demo.com',
    category: 'Frontend',
  },
  {
    title: 'Meeting Booker',
    description: 'A WPF MVVM application that allows users to book meetings and view their schedule.',
    image: '/project2.jpg',
    technologies: ['WPF', '.NET', 'MVVM', 'MSSQL', 'Entity Framework'],
    github: 'https://github.com/JohnNooney/BookMeetings',
    category: 'Fullstack',
  },
  {
    title: 'CSV Parser',
    description: 'A tool to parse CSVs containing customer data and add them to a database via a Spring API.',
    image: '/project2.jpg',
    technologies: ['Spring', 'Java', 'PostgreSQL'],
    github: 'https://github.com/JohnNooney/java-rest-app-demo',
    category: 'Backend',
  },
  // Add more projects as needed
];

const categories = ['All', 'Full Stack', 'Frontend', 'Backend'];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = projects.filter(project =>
    activeCategory === 'All' ? true : project.category === activeCategory
  );

  return (
    <div className="container mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="section-title text-center mb-12 font-bold">Projects</h1>

        {/* Category Filter */}
        <div className="flex justify-center space-x-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-md transition-colors duration-200 ${
                activeCategory === category
                  ? 'bg-primary text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-md overflow-hidden dark:bg-gray-800"
            >
              <div className="aspect-w-16 aspect-h-9 bg-gray-100 dark:bg-gray-700">
                {/* Replace with actual project image */}
                <div className="w-full h-48 bg-gray-200 dark:bg-gray-600" />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm text-gray-700 dark:text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex justify-between gap-4 mt-4">
                  {project.github && (
                    <Link
                      to={project.github}
                      external
                      variant="outline"
                      className="flex-1 text-center"
                    >
                      View Code
                    </Link>
                  )}
                  {project.demo && (
                    <Link
                      to={project.demo}
                      external
                      variant="primary"
                      className="flex-1 text-center"
                    >
                      Live Demo
                    </Link>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
