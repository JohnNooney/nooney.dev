import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Link from '../components/Link';
import { 
  BriefcaseIcon, 
  CodeBracketIcon,
  AcademicCapIcon,
  EnvelopeIcon 
} from '@heroicons/react/24/solid';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const stagger = {
  visible: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

export default function About() {
  const heroRef = useRef(null);
  const technicalRef = useRef(null);
  const backgroundRef = useRef(null);
  const ctaRef = useRef(null);

  const heroInView = useInView(heroRef, { once: true, margin: "-100px" });
  const technicalInView = useInView(technicalRef, { once: true, margin: "-100px" });
  const backgroundInView = useInView(backgroundRef, { once: true, margin: "-100px" });
  const ctaInView = useInView(ctaRef, { once: true, margin: "-100px" });

  return (
    <section className="min-h-screen bg-gray-100 dark:bg-gray-900 py-16 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial="hidden"
          animate={heroInView ? "visible" : "hidden"}
          variants={container}
          className="text-center mb-16"
          ref={heroRef}
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
            ref={heroRef}
            initial={{ opacity: 0 }}
            animate={heroInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white/95 dark:bg-gray-800/80 backdrop-blur-lg rounded-xl shadow-lg overflow-hidden mb-16"
          >
            <div className="flex flex-col md:flex-row items-center p-12">
              {/* Profile Image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={heroInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
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
                initial="hidden"
                animate={heroInView ? "visible" : "hidden"}
                className="flex-grow text-left md:text-center"
              >
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                  Software Engineer
                </h2>
                <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                  A passionate Software Engineer with a proven track record in transforming complex enterprise 
                  solutions. I blend technical expertise in cloud architecture, DevOps practices, and full-stack 
                  development with strong collaborative skills. My approach combines innovative problem-solving 
                  with a commitment to clean, maintainable code. Whether working on scalable applications, 
                  optimizing deployment pipelines, or creating intuitive user experiences, I deliver solutions 
                  that drive business value while adapting quickly to new technologies and environments.
                </p>
                <motion.div 
                  variants={stagger}
                  className="flex flex-col sm:flex-row items-center justify-start md:justify-center gap-4"
                >
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Link
                      to="/experience"
                      className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white transition-all duration-200 shadow-md hover:shadow-xl"
                    >
                      View Experience
                    </Link>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Link
                      to="/projects"
                      className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3 rounded-lg border-2 border-gray-300 dark:border-gray-400 text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-200 shadow-md hover:shadow-xl"
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
            animate={technicalInView ? "visible" : "hidden"}
            className="space-y-16"
            ref={technicalRef}
          >
            {/* Technical Focus Section */}
            <motion.section 
              variants={item}
              className="bg-white/95 dark:bg-gray-800/80 backdrop-blur-lg p-12 rounded-xl shadow-lg"
            >
              <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">
                Technical Focus
              </h2>
              <motion.div 
                variants={container}
                initial="hidden"
                animate={technicalInView ? "visible" : "hidden"}
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
                    className="bg-gray-50/80 dark:bg-gray-700/60 p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-200"
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
              initial="hidden"
              animate={backgroundInView ? "visible" : "hidden"}
              className="bg-white/95 dark:bg-gray-800/80 backdrop-blur-lg p-12 rounded-xl shadow-lg"
              ref={backgroundRef}
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
                    className="bg-gray-50/80 dark:bg-gray-700/60 p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-200"
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
                    animate={backgroundInView ? "visible" : "hidden"}
                    className="grid grid-cols-2 gap-4"
                  >
                    {['Self Hosting', 'Cloud Computing', 'Machine Learning', 'Open Source'].map((interest, index) => (
                      <motion.div 
                        key={index}
                        variants={item}
                        whileHover={{ scale: 1.05 }}
                        className="bg-gray-50/80 dark:bg-gray-700/60 p-4 rounded-xl flex items-center justify-center text-center text-gray-700 dark:text-gray-300 shadow-sm hover:shadow-md transition-all duration-200"
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
        <motion.div 
          className="mt-20"
          initial="hidden"
          animate={ctaInView ? "visible" : "hidden"}
          variants={container}
          ref={ctaRef}
        >
          <motion.h2 
            variants={item}
            className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white"
          >
            Explore My Journey
          </motion.h2>
          
          <motion.div 
            variants={container}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10"
          >
            {[
              {
                to: "/experience",
                icon: <BriefcaseIcon className="h-12 w-12 mt-4 mb-4" />,
                title: "Professional Experience",
                subtitle: "Discover my career journey"
              },
              {
                to: "/skills",
                icon: <CodeBracketIcon className="h-12 w-12 mt-4 mb-4" />,
                title: "Technical Skills",
                subtitle: "Explore my tech expertise"
              },
              {
                to: "/projects",
                icon: <AcademicCapIcon className="h-12 w-12 mt-4 mb-4" />,
                title: "My Projects",
                subtitle: "See what I've built"
              },
              {
                to: "/contact",
                icon: <EnvelopeIcon className="h-12 w-12 mt-4 mb-4" />,
                title: "Get in Touch",
                subtitle: "Let's connect"
              }
            ].map((item, index) => (
              <motion.div variants={item} key={item.to}>
                <Link 
                  to={item.to}
                  variant="about"
                  className="flex flex-col"
                >
                  <div className="flex flex-col items-center justify-center flex-grow">
                    {item.icon}
                    <br/>
                    <span className="font-semibold text-lg text-center">{item.title}</span>
                  </div>
                  <div className="text-center mt-auto pb-4">
                    <span className="text-sm opacity-80">
                      {item.subtitle}
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
