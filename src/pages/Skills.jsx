import { motion } from 'framer-motion';
import Link from '../components/Link';
import { Helmet } from 'react-helmet';

const skillCategories = [
  {
    title: 'Languages',
    skills: [
      { 
        name: 'C#', 
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg'
      },
      { 
        name: 'Java', 
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg'
      },
      { 
        name: 'Python', 
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg'
      },
      { 
        name: 'TypeScript', 
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg'
      },
      { 
        name: 'Swift', 
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg'
      },
      {
        name: 'C++',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg'
      }
    ],
  },
  {
    title: 'Frontend',
    skills: [
      { 
        name: 'React', 
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg'
      },
      { 
        name: 'HTML5', 
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg'
      },
      { 
        name: 'CSS3', 
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg'
      },
      { 
        name: 'Flutter', 
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg'
      },
      { 
        name: 'SwiftUI', 
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg'
      },
      {
        name: 'Angular',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg'
      }
    ],
  },
  {
    title: 'Backend',
    skills: [
      { 
        name: 'Node.js', 
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg'
      },
      { 
        name: 'Spring', 
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg'
      },
      { 
        name: 'Express', 
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg'
      },
      { 
        name: 'PostgreSQL', 
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg'
      },
      { 
        name: '.NET', 
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg'
      },
      {
        name: 'Django',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg'
      }
    ],
  },
  {
    title: 'Tools & Technologies',
    skills: [
      { 
        name: 'Git', 
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg'
      },
      { 
        name: 'Docker', 
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg'
      },
      { 
        name: 'Google Cloud', 
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg'
      },
      { 
        name: 'Jenkins', 
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg'
      },
      { 
        name: 'Kubernetes', 
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg'
      },
      {
        name: 'Terraform',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg'
      }
    ],
  },
];

export default function Skills() {
  return (
    <>
      <Helmet>
        <title>Skills & Expertise | Portfolio</title>
        <meta name="description" content="Explore the technical skills and expertise of the portfolio owner, including programming languages, frameworks, databases, and cloud technologies." />
      </Helmet>
      <section className="min-h-screen bg-sky-50 dark:bg-gray-900 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-6xl mx-auto"
          >
            <h1 className="text-4xl font-bold text-center mb-12 text-blue-800 dark:text-blue-400">
              Skills & Expertise
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {skillCategories.map((category, categoryIndex) => (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: categoryIndex * 0.1 }}
                  className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl"
                >
                  <h2 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white text-center">
                    {category.title}
                  </h2>
                  <div className="grid grid-cols-3 gap-6">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: skillIndex * 0.1 }}
                        className="flex flex-col items-center justify-center p-4 rounded-lg bg-gray-50 dark:bg-gray-700 hover:shadow-md transition-all duration-300"
                        title={skill.name}
                      >
                        <img
                          src={skill.icon}
                          alt={`${skill.name} icon`}
                          className="w-12 h-12 mb-2 transition-transform duration-300 hover:scale-110"
                        />
                        <span className="text-sm text-center text-gray-800 dark:text-gray-200">
                          {skill.name}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Navigation Links */}
            <div className="flex justify-center mt-12 space-x-4">
              <Link 
                to="/experience" 
                variant="primary" 
                className="px-6 py-3"
              >
                View Experience
              </Link>
              <Link 
                to="/projects" 
                variant="secondary" 
                className="px-6 py-3"
              >
                Explore Projects
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
