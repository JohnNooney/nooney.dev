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
    category: 'Full Stack',
  },
  {
    title: 'Game Guru',
    description: 'Collaborated with Daniela Todorova to make an IOS application that uses AI to explain, setup, and manage collections of rule books for tabletop games.',
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
    category: 'Full Stack',
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

const categories = [
  'All', 
  ...new Set(projects.map(project => project.category))
];

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Filter projects based on selected category
  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <section className="min-h-screen bg-sky-50 dark:bg-gray-900 py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl font-bold text-center mb-12 text-blue-800 dark:text-blue-400">
            My Projects
          </h1>

          {/* Category Filter */}
          <div className="flex justify-center mb-12 space-x-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`
                  px-4 py-2 rounded-full text-sm font-medium transition-all duration-300
                  ${selectedCategory === category 
                    ? 'bg-primary text-white' 
                    : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
                  }
                `}
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
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden flex flex-col"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-48 object-cover bg-gray-200 dark:bg-gray-600"
                  />
                </div>
                
                <div className="p-6 flex-grow flex flex-col">
                  <h3 className="text-2xl font-bold text-blue-500 dark:text-blue-300 mb-4">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-300 mb-6 flex-grow">
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

                  <div className="flex justify-between gap-4">
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

          {/* Navigation Links */}
          <div className="flex justify-center mt-12 space-x-4">
            <Link 
              to="/contact" 
              variant="primary" 
              className="px-6 py-3"
            >
              Contact Me
            </Link>
            <Link 
              to="/experience" 
              variant="secondary" 
              className="px-6 py-3"
            >
              View Experience
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
