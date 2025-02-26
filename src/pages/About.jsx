import { motion } from 'framer-motion';
import { 
  AcademicCapIcon, 
  BriefcaseIcon, 
  CodeBracketIcon, 
  EnvelopeIcon 
} from '@heroicons/react/24/solid';
import Link from '../components/Link';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export default function About() {
  return (
    <section className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 py-16 relative overflow-hidden">
      {/* Background blur effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-pink-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-4000"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial="hidden"
          animate="show"
          variants={container}
          className="text-center mb-16"
        >
          <motion.h1 
            variants={item}
            className="text-4xl font-bold mb-6 text-blue-800 dark:text-blue-400"
          >
            About Me
          </motion.h1>
        </motion.div>

        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-xl shadow-lg overflow-hidden mb-16"
          >
            <div className="flex flex-col md:flex-row items-center p-12">
              {/* Profile Image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="w-48 h-48 md:w-64 md:h-64 flex-shrink-0 mb-8 md:mb-0 md:mr-16"
              >
                <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-blue-600 dark:border-blue-400 shadow-2xl">
                  <motion.img 
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                    src="/profile-pic.jpg"
                    alt="John Nooney" 
                    className="object-cover w-full h-full"
                  />
                </div>
              </motion.div>

              {/* Introduction */}
              <motion.div
                variants={fadeInUp}
                initial="initial"
                animate="animate"
                className="flex-grow"
              >
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                  Software Engineer
                </h2>
                <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                  A versatile Software Engineer with 4+ years of experience transforming complex enterprise 
                  solutions. I specialize in cloud architecture, DevOps practices, and full-stack development,
                  with a proven track record of increasing deployment efficiency by 200% and improving release 
                  predictability by 77%.
                </p>
                <motion.div 
                  variants={stagger}
                  className="flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Link
                      to="/experience"
                      className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white transition-all duration-200 shadow-lg hover:shadow-xl"
                    >
                      View Experience
                    </Link>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Link
                      to="/projects"
                      className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3 rounded-lg border-2 border-gray-300 dark:border-gray-400 text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-200 shadow-lg hover:shadow-xl"
                    >
                      See Projects
                    </Link>
                  </motion.div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>

          {/* Main Content */}
          <motion.div 
            variants={container}
            initial="hidden"
            animate="show"
            className="space-y-16"
          >
            {/* Technical Focus Section */}
            <motion.section 
              variants={item}
              className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg p-12 rounded-xl shadow-lg"
            >
              <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">
                Technical Focus
              </h2>
              <motion.div 
                variants={container}
                initial="hidden"
                animate="show"
                className="grid md:grid-cols-2 gap-8"
              >
                {[
                  {
                    title: "Cloud & DevOps",
                    description: "Expertise in GCP, Kubernetes, and Terraform, with a focus on automated deployment pipelines and cloud-native solutions."
                  },
                  {
                    title: "Architecture",
                    description: "Specialized in transforming monolithic applications into scalable microservices using event-driven patterns."
                  },
                  {
                    title: "Backend Development",
                    description: "Strong foundation in Java Spring, .NET, and Node.js, building robust and scalable APIs."
                  },
                  {
                    title: "Frontend Development",
                    description: "Experience with modern frameworks like React and Angular, creating responsive user interfaces."
                  }
                ].map((focus, index) => (
                  <motion.div
                    key={focus.title}
                    variants={item}
                    whileHover={{ scale: 1.02 }}
                    className="bg-white/60 dark:bg-gray-700/60 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-200"
                  >
                    <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400 mb-4">{focus.title}</h3>
                    <p className="text-gray-700 dark:text-gray-300 text-lg">{focus.description}</p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.section>

            {/* Background Section */}
            <motion.section 
              variants={item}
              className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg p-12 rounded-xl shadow-lg"
            >
              <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">
                Background
              </h2>
              <div className="grid md:grid-cols-2 gap-12">
                <motion.div variants={fadeInUp}>
                  <h3 className="text-2xl font-semibold text-blue-600 dark:text-blue-400 mb-4">
                    Education
                  </h3>
                  <motion.div 
                    whileHover={{ scale: 1.02 }}
                    className="bg-white/60 dark:bg-gray-700/60 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-200"
                  >
                    <h4 className="text-xl font-medium text-gray-900 dark:text-white mb-2">
                      Bachelor's (Hons) in Computer Science
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      University of Abertay, 2018-2022
                    </p>
                  </motion.div>
                </motion.div>
                <motion.div variants={fadeInUp}>
                  <h3 className="text-2xl font-semibold text-blue-600 dark:text-blue-400 mb-4">
                    Interests
                  </h3>
                  <motion.div 
                    variants={container}
                    initial="hidden"
                    animate="show"
                    className="grid grid-cols-2 gap-4"
                  >
                    {['Self Hosting', 'Cloud Computing', 'Machine Learning', 'Open Source'].map((interest, index) => (
                      <motion.div 
                        key={index}
                        variants={item}
                        whileHover={{ scale: 1.05 }}
                        className="bg-white/60 dark:bg-gray-700/60 p-4 rounded-xl flex items-center justify-center text-center text-gray-700 dark:text-gray-300 shadow-md hover:shadow-lg transition-all duration-200"
                      >
                        {interest}
                      </motion.div>
                    ))}
                  </motion.div>
                </motion.div>
              </div>
            </motion.section>
          </motion.div>
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
      </div>
    </section>
  );
}
