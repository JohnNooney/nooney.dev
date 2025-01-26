import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from '../components/Link';

const projects = [
  {
    title: 'E-commerce Platform',
    description: 'A full-stack e-commerce platform with real-time inventory management and payment processing.',
    image: '/project1.jpg',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    github: 'https://github.com/username/project1',
    demo: 'https://project1-demo.com',
    category: 'Full Stack',
  },
  {
    title: 'Task Management App',
    description: 'A collaborative task management application with real-time updates and team features.',
    image: '/project2.jpg',
    technologies: ['Vue.js', 'Firebase', 'Tailwind CSS'],
    github: 'https://github.com/username/project2',
    demo: 'https://project2-demo.com',
    category: 'Frontend',
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

                <div className="flex space-x-4">
                  <Link
                    to={project.github}
                    external
                    variant="outline"
                    className="flex-1 text-center"
                  >
                    View Code
                  </Link>
                  <Link
                    to={project.demo}
                    external
                    variant="primary"
                    className="flex-1 text-center"
                  >
                    Live Demo
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
