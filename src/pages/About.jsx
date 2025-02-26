import { motion } from 'framer-motion';
import { 
  AcademicCapIcon, 
  BriefcaseIcon, 
  CodeBracketIcon, 
  EnvelopeIcon 
} from '@heroicons/react/24/solid';
import Link from '../components/Link';

export default function About() {
  return (
    <section className="min-h-screen bg-gray-50 dark:bg-gray-900 py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-8xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold mb-6 text-blue-800 dark:text-blue-400">
              About Me
            </h1>
          </div>

          <div className="max-w-7xl mx-auto">
            {/* Hero Section */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden mb-16">
              <div className="flex flex-col md:flex-row items-center p-12">
                {/* Profile Image */}
                <div className="w-48 h-48 md:w-64 md:h-64 flex-shrink-0 mb-8 md:mb-0 md:mr-16">
                  <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-blue-600 dark:border-blue-400">
                    <img 
                      src="/profile-pic.jpg"
                      alt="John Nooney" 
                      className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                </div>

                {/* Introduction */}
                <div className="flex-grow">
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                    Software Engineer
                  </h2>
                  <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                    A versatile Software Engineer with 4+ years of experience transforming complex enterprise 
                    solutions. I specialize in cloud architecture, DevOps practices, and full-stack development,
                    with a proven track record of increasing deployment efficiency by 200% and improving release 
                    predictability by 77%.
                  </p>
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Link
                      to="/experience"
                      className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white transition-colors duration-200"
                    >
                      View Experience
                    </Link>
                    <Link
                      to="/projects"
                      className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3 rounded-lg border-2 border-gray-300 dark:border-gray-400 text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200"
                    >
                      See Projects
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="space-y-16">
              {/* Technical Focus Section */}
              <section className="bg-white dark:bg-gray-800 p-12 rounded-xl shadow-lg">
                <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">
                  Technical Focus
                </h2>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-xl">
                      <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400 mb-4">Cloud & DevOps</h3>
                      <p className="text-gray-700 dark:text-gray-300 text-lg">
                        Expertise in GCP, Kubernetes, and Terraform, with a focus on automated deployment pipelines and 
                        cloud-native solutions.
                      </p>
                    </div>
                    <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-xl">
                      <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400 mb-4">Architecture</h3>
                      <p className="text-gray-700 dark:text-gray-300 text-lg">
                        Specialized in transforming monolithic applications into scalable microservices using 
                        event-driven patterns.
                      </p>
                    </div>
                  </div>
                  <div className="space-y-6">
                    <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-xl">
                      <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400 mb-4">Backend Development</h3>
                      <p className="text-gray-700 dark:text-gray-300 text-lg">
                        Strong foundation in Java Spring, .NET, and Node.js, building robust and scalable APIs.
                      </p>
                    </div>
                    <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-xl">
                      <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400 mb-4">Frontend Development</h3>
                      <p className="text-gray-700 dark:text-gray-300 text-lg">
                        Experience with modern frameworks like React and Angular, creating responsive user interfaces.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Background Section */}
              <section className="bg-white dark:bg-gray-800 p-12 rounded-xl shadow-lg">
                <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">
                  Background
                </h2>
                <div className="grid md:grid-cols-2 gap-12">
                  <div>
                    <h3 className="text-2xl font-semibold text-blue-600 dark:text-blue-400 mb-4">
                      Education
                    </h3>
                    <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-xl">
                      <h4 className="text-xl font-medium text-gray-900 dark:text-white mb-2">
                        Bachelor's (Hons) in Computer Science
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400">
                        University of Abertay, 2018-2022
                      </p>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-blue-600 dark:text-blue-400 mb-4">
                      Interests
                    </h3>
                    <div className="grid grid-cols-2 gap-4">
                      {['Self Hosting', 'Cloud Computing', 'Machine Learning', 'Open Source'].map((interest, index) => (
                        <div 
                          key={index} 
                          className="bg-gray-50 dark:bg-gray-700 p-4 rounded-xl flex items-center justify-center text-center text-gray-700 dark:text-gray-300"
                        >
                          {interest}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>

          {/* Call to Action Section */}
          <div className="mt-20">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
              Explore My Journey
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
              <Link 
                to="/experience" 
                variant="about"
                className="flex flex-col"
              >
                <div className="flex flex-col items-center justify-center flex-grow">
                  <BriefcaseIcon className="h-12 w-12 mt-4 mb-4" />
                  <br/>
                  <span className="font-semibold text-lg text-center">Professional Experience</span>
                </div>

                <div className="text-center mt-auto pb-4">
                  <span className="text-sm opacity-80">
                    Discover my career journey
                  </span>
                </div>
              </Link>

              <Link 
                to="/skills" 
                variant="about"
                className="flex flex-col"
              >
                <div className="flex flex-col items-center justify-center flex-grow">
                  <CodeBracketIcon className="h-12 w-12 mt-4 mb-4" />
                  <br/>
                  <span className="font-semibold text-lg text-center">Technical Skills</span>
                </div>

                <div className="text-center mt-auto pb-4">
                  <span className="text-sm opacity-80">
                    Explore my tech expertise
                  </span>
                </div>
              </Link>

              <Link 
                to="/projects" 
                variant="about"
                className="flex flex-col"
              >
                <div className="flex flex-col items-center justify-center flex-grow">
                  <AcademicCapIcon className="h-12 w-12 mt-4 mb-4" />
                  <br/>
                  <span className="font-semibold text-lg text-center">My Projects</span>
                </div>

                <div className="text-center mt-auto pb-4">
                  <span className="text-sm opacity-80">
                    See what I've built
                  </span>
                </div>
              </Link>

              <Link 
                to="/contact" 
                variant="about"
                className="flex flex-col"
              >
                <div className="flex flex-col items-center justify-center flex-grow">
                  <EnvelopeIcon className="h-12 w-12 mt-4 mb-4" />
                <br/>
                  <span className="font-semibold text-lg text-center">Get in Touch</span>
                </div>
                
                <div className="text-center mt-auto pb-4">
                  <span className="text-sm opacity-80">
                    Let's connect
                  </span>
                </div>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
