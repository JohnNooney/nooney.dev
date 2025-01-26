import { motion } from 'framer-motion';

const experiences = [
  {
    title: 'Software Engineer II',
    company: 'Candescent',
    location: 'Scotland',
    period: {
      start: 'Oct 2024',
      end: 'Present',
      duration: '4 months'
    },
    description: 'Worked with the release Support team to bolster the release pipleine for 5 teams',
    achievements: [
      'Trained new team members on release management best practices',
      'Improved release predictability by 77% through multi-stage deployment process',
      'Defined detailed processes for each release stage'
    ],
    technologies: [
      'Helm',
      'Kubernetes',
      'Terraform',
      'Google Cloud Platform (GCP)',
      'Docker', 
      'Shell Scripts'
    ],
    keyResponsibilities: [
      'Improved deployment processes',
      'Trained new team members',
      'Coordinating release processes',
      'Customer issue resolution'
    ]
  },
  {
    title: 'Software Engineer II',
    company: 'NCR Voyix',
    location: 'Scotland',
    period: {
      start: 'Aug 2023',
      end: 'Oct 2024',
      duration: '1 year 1 months'
    },
    description: 'Assisted in the creation of a release support team, streamlining collaboration between development and production for a new ITM software solution.',
    achievements: [
      'Created a release support team to improve development and production collaboration',
      'Improved release predictability by 77% through multi-stage deployment process',
      'Increased deployment frequency by 200% using Jenkins pipelines and automation scripts',
      'Established effective customer communication channels to minimize deployment downtime'
    ],
    technologies: [
      'Jenkins',
      'Kubernetes',
      'Terraform',
      'Google Cloud Platform (GCP)',
      'Automation Scripts'
    ],
    keyResponsibilities: [
      'Managing GCP deployments',
      'Developing deployment automation',
      'Coordinating release processes',
      'Customer issue resolution'
    ]
  },
  {
    title: 'Software Engineer I',
    company: 'NCR',
    location: 'Scotland',
    period: {
      start: 'Sep 2021',
      end: 'Aug 2023',
      duration: '2 years'
    },
    description: 'Transformed a monolithic ATM application into a microservices architecture while championing software development best practices.',
    achievements: [
      'Successfully converted monolithic ATM application to microservices architecture',
      'Implemented Test-Driven Development (TDD) and CI/CD pipelines',
      'Developed robust Java APIs and interactive front-ends',
      'Designed scalable event-driven architecture'
    ],
    technologies: [
      'Java',
      '.NET',
      'Microservices',
      'CI/CD',
      'Front-end Development',
      'Event-Driven Architecture'
    ],
    keyResponsibilities: [
      'Application architecture design',
      'API development',
      'Front-end implementation',
      'Quality assurance',
      'Code analysis'
    ]
  },
  {
    title: 'Cloud Engineer',
    company: 'NCR',
    location: 'Scotland',
    period: {
      start: 'Jun 2021',
      end: 'Sep 2021',
      duration: '4 months'
    },
    description: 'Internship focused on cloud deployment and innovative knowledge management solutions.',
    achievements: [
      'Built a knowledge management tool using Confluence documentation',
      'Created a graph database-powered Q&A chatbot',
      'Gained hands-on experience with cloud deployment technologies'
    ],
    technologies: [
      'Google Cloud Platform (GCP)',
      'Terraform',
      'Graph Databases',
      'Chatbot Development'
    ],
    keyResponsibilities: [
      'Cloud infrastructure development',
      'Knowledge management tool creation',
      'Exploring innovative technology solutions'
    ]
  }
];

export default function Experience() {
  return (
    <section className="min-h-screen bg-gray-50 dark:bg-gray-900 py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            Professional Experience
          </h1>

          <div className="max-w-4xl mx-auto">
            {experiences.map((experience, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="mb-12 relative pl-8 border-l-2 border-primary last:mb-0"
              >
                <div className="absolute w-4 h-4 bg-primary rounded-full -left-[9px] top-0" />
                
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-left">
                    {experience.title}
                  </h3>
                  <h4 className="text-lg font-semibold text-primary mt-1 text-left">
                    {experience.company} - {experience.location}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 mt-1 text-left">
                    {experience.period.start} - {experience.period.end} 
                    {' '}({experience.period.duration})
                  </p>
                  
                  <p className="mt-4 text-gray-700 dark:text-gray-300 text-left mb-10">
                    {experience.description}
                  </p>

                  {experience.achievements && (
                    <div className="mt-4 text-left">
                      <h5 className="font-semibold mb-2 text-gray-900 dark:text-white text-left">
                        Key Achievements:
                      </h5>
                      <ul className="list-disc list-outside space-y-2 text-gray-700 dark:text-gray-300 pl-5 text-left">
                        {experience.achievements.map((achievement, i) => (
                          <li key={i} className="pl-2">{achievement}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {experience.keyResponsibilities && (
                    <div className="mt-4 text-left">
                      <h5 className="font-semibold mb-2 text-gray-900 dark:text-white text-left">
                        Key Responsibilities:
                      </h5>
                      <ul className="list-disc list-outside space-y-2 text-gray-700 dark:text-gray-300 pl-5 text-left">
                        {experience.keyResponsibilities.map((responsibility, i) => (
                          <li key={i} className="pl-2">{responsibility}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <div className="mt-4 flex flex-wrap gap-2">
                    {experience.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm text-gray-700 dark:text-gray-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
