import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Link from '../components/Link';
import Helmet from 'react-helmet';
import medicalSiteMockup from '../assets/pom-desktop-mockup.png';
import gameGuruMockup from '../assets/game-guru-mockup.png';

// Default placeholder for projects without images - tiny blurred placeholder
const placeholderImage = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAwIiBoZWlnaHQ9IjYwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjBmMGYwIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIyNCIgZmlsbD0iIzY2NiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPk5vIEltYWdlIEF2YWlsYWJsZTwvdGV4dD48L3N2Zz4=';

// Helper function to get GitHub metadata image URL
const getGitHubMetadataImage = (githubUrl) => {
  if (!githubUrl) return null;
  // Extract owner and repo from GitHub URL
  const match = githubUrl.match(/github\.com\/([^\/]+)\/([^\/]+)/);
  if (!match) return null;
  const [, owner, repo] = match;
  // Return the GitHub repository's social preview image
  return `https://opengraph.githubassets.com/1/${owner}/${repo}`;
};

// Custom hook for lazy loading images
const useImageLoader = (imageUrl, placeholderUrl) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [src, setSrc] = useState(placeholderUrl);
  
  useEffect(() => {
    if (!imageUrl) {
      setLoading(false);
      return;
    }
    
    const img = new Image();
    img.src = imageUrl;
    
    img.onload = () => {
      setSrc(imageUrl);
      setLoading(false);
    };
    
    img.onerror = () => {
      setError(true);
      setLoading(false);
    };
    
    return () => {
      img.onload = null;
      img.onerror = null;
    };
  }, [imageUrl, placeholderUrl]);
  
  return { src, loading, error };
};

// Intersection Observer hook for lazy loading
const useIntersectionObserver = (options = {}) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsVisible(entry.isIntersecting);
    }, options);
    
    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }
    
    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [ref, options]);
  
  return [ref, isVisible];
};

// Optimized image component
const OptimizedImage = ({ src, alt, className, sizes = "100vw" }) => {
  const [ref, isVisible] = useIntersectionObserver({
    rootMargin: '200px 0px', // Load images 200px before they come into view
    threshold: 0.01
  });
  
  const imageUrl = src || placeholderImage;
  const { src: loadedSrc, loading, error } = useImageLoader(
    isVisible ? imageUrl : null, 
    placeholderImage
  );
  
  return (
    <div 
      ref={ref} 
      className={`relative flex items-center justify-center w-full h-full ${className}`}
    >
      <img 
        src={loadedSrc}
        alt={alt}
        loading="lazy"
        className={`
          max-w-full max-h-full object-contain p-2 rounded-xl
          transition-opacity duration-500
          ${loading ? 'opacity-60 blur-sm' : 'opacity-100 blur-0'}
        `}
        onError={(e) => {
          e.target.onerror = null; // Prevent infinite loop
          e.target.src = placeholderImage;
        }}
      />
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}
    </div>
  );
};

const projects = [
  {
    title: 'Medical Practice Site',
    description: 'A website for a client with a medical practice to display services and provide information about the practice.',
    image: medicalSiteMockup,
    technologies: ['React', 'Node.js', 'Firestore', 'Cloud Functions'],
    demo: 'https://docmarenco.com',
    category: 'Full Stack',
  },
  {
    title: 'Game Guru',
    description: 'Collaborated with Daniela Todorova to make an IOS application that uses AI to explain, setup, and manage collections of rule books for tabletop games.',
    image: gameGuruMockup,
    technologies: ['SwiftUI', 'Firebase', 'OpenAI'],
    demo: 'wip',
    category: 'Frontend',
  },  {
    title: 'ObservAR',
    description: 'Currently collaborating with a team to build an tourism AR application where users can explore the world to find historical figures and learn about them.',
    image: '',
    technologies: ['Unity', 'ARCore', 'Firestore', 'OpenAI'],
    demo: 'wip',
    category: 'Full Stack',
  }, {
    title: 'Face First',
    description: 'Currently collaborating with a team to build a video-first dating application. Think Omegle combined with Tinder.',
    image: '',
    technologies: ['Flutter', 'Firestore', 'WebRTC'],
    demo: 'wip',
    category: 'Full Stack',
  },
  {
    title: 'Meeting Booker',
    description: 'A WPF MVVM application that allows users to book meetings and view their schedule.',
    image: '',
    technologies: ['WPF', '.NET', 'MVVM', 'MSSQL', 'Entity Framework'],
    github: 'https://github.com/JohnNooney/BookMeetings',
    category: 'Full Stack',
  },
  {
    title: 'CSV Parser',
    description: 'A tool to parse CSVs containing customer data and add them to a database via a Spring API.',
    image: '',
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
    <>
      <Helmet>
        <title>Projects Showcase | John Nooney Portfolio</title>
        <meta name="description" content="Explore a selection of software development projects by John Nooney, showcasing practical application of technical skills and problem-solving abilities." />
      </Helmet>
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
            <div className="flex flex-wrap justify-center mb-12 px-2 gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`
                    px-4 py-2 rounded-full text-sm font-medium transition-all duration-300
                    ${selectedCategory === category 
                      ? 'bg-blue-600 dark:bg-blue-500 text-white hover:bg-blue-700 dark:hover:bg-blue-600' 
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
                  <div className="relative h-50 sm:h-56 md:h-64 bg-gray-50 dark:bg-gray-700 flex items-center justify-center">
                    <OptimizedImage
                      src={project.image || (project.github && getGitHubMetadataImage(project.github))}
                      alt={project.title}
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
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
                      {project.demo ? (
                        project.demo === "wip" ? (
                          <Link 
                            variant="wip" 
                            className="flex-1 text-center"
                          >
                            Work In Progress
                          </Link>
                        ) : (
                          <Link
                            to={project.demo}
                            external
                            variant="primary"
                            className="flex-1 text-center"
                          >
                            Live Demo
                          </Link>
                        )
                      ) : null}
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
    </>
  );
}
