import { motion } from 'framer-motion';

export default function About() {
  return (
    <div className="container mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto"
      >
        <h1 className="section-title mb-12">About Me</h1>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md">
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
              I am a passionate Software Engineer with a strong foundation in both frontend and backend development.
              My journey in software development has been driven by a curiosity to solve complex problems and create
              meaningful solutions that impact users' lives.
            </p>

            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">Education</h2>
                <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-md">
                  <h3 className="text-xl font-medium text-gray-800 dark:text-gray-200">
                    Bachelor's in Computer Science
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    University of Example, 2020-2024
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">Interests</h2>
                <ul className="grid grid-cols-2 gap-3 text-gray-700 dark:text-gray-300">
                  <li className="flex items-center space-x-2">
                    <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clipRule="evenodd" />
                    </svg>
                    <span>Web Development</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clipRule="evenodd" />
                    </svg>
                    <span>Cloud Computing</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clipRule="evenodd" />
                    </svg>
                    <span>Machine Learning</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clipRule="evenodd" />
                    </svg>
                    <span>Open Source</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="hidden md:block">
            <div className="bg-gray-100 dark:bg-gray-700 rounded-lg overflow-hidden shadow-lg">
              <div className="aspect-w-1 aspect-h-1">
                <img 
                  src="../assets/profile-image.jpg" 
                  alt="John Nooney" 
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
