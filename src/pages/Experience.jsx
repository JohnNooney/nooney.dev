import { motion } from 'framer-motion';
import Link from '../components/Link';

// Helper function to calculate duration between dates
const calculateDuration = (startDate, endDate) => {
  // Parse dates with month names
  const parseDate = (dateStr) => {
    if (dateStr === 'Present') return new Date();
    
    const months = {
      'Jan': 0, 'Feb': 1, 'Mar': 2, 'Apr': 3, 'May': 4, 'Jun': 5,
      'Jul': 6, 'Aug': 7, 'Sep': 8, 'Oct': 9, 'Nov': 10, 'Dec': 11
    };
    
    const [monthStr, yearStr] = dateStr.split(' ');
    const month = months[monthStr];
    const year = parseInt(yearStr);
    
    return new Date(year, month);
  };
  
  const start = parseDate(startDate);
  const end = parseDate(endDate);
  
  // Calculate difference in years and months
  let years = end.getFullYear() - start.getFullYear();
  let months = end.getMonth() - start.getMonth();
  
  // Adjust if months is negative
  if (months < 0) {
    years--;
    months += 12;
  }
  
  // Format the duration string
  let duration = '';
  if (years > 0) {
    duration += `${years} year${years !== 1 ? 's' : ''}`;
  }
  if (months > 0) {
    duration += duration ? ' ' : '';
    duration += `${months} month${months !== 1 ? 's' : ''}`;
  }
  if (!duration) {
    duration = 'Less than a month';
  }
  
  return duration;
};

const experiences = [
  {
    title: 'Software Engineer II',
    company: 'Candescent',
    location: 'Scotland',
    period: {
      start: 'Oct 2024',
      end: 'Present'
    },
    description: 'Serve as a key member of the Release Support team, enabling development teams to focus on feature work while ensuring smooth releases, deployments, and production issue resolution.',
    achievements: [
      'Reduced critical post-deployment manual steps by 60% through enhanced Helm charts and Terraform configurations',
      'Decreased mean time to resolution for customer-reported issues by implementing a structured triage workflow and comprehensive logging strategy',
      'Streamlined cross-team release coordination by developing a centralized documentation system that improved visibility and accountability'
    ],
    technologies: [
      'Helm',
      'Kubernetes',
      'Terraform',
      'Google Cloud Platform (GCP)',
      'Docker', 
      'Shell Scripts',
      'Jenkins',
      'Log Analysis Tools'
    ],
    keyResponsibilities: [
      'Orchestrating multi-team release bundles from testing through production deployment',
      'Triaging customer-reported issues and creating detailed bug reports with log analysis',
      'Automating infrastructure provisioning to eliminate manual configuration steps',
      'Providing technical guidance to development teams on deployment requirements',
      'Managing incident response and coordinating resolution efforts across teams'
    ]
  },
  {
    title: 'Software Engineer II',
    company: 'NCR Voyix',
    location: 'Scotland',
    period: {
      start: 'Aug 2023',
      end: 'Oct 2024'
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
      end: 'Aug 2023'
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
      'Spring',
      'Jenkins',
      'Angular JS',
      'Kafka'
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
      end: 'Sep 2021'
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
    <section className="min-h-screen bg-sky-50 dark:bg-gray-900 py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl font-bold text-center mb-12 text-blue-800 dark:text-blue-400">
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
                
                <div className="bg-gray-50 dark:bg-gray-800 rounded-lg shadow-md p-6">
                  <h3 className="text-2xl font-bold text-blue-500 dark:text-blue-300 text-left">
                    {experience.title}
                  </h3>
                  <h4 className="text-lg font-semibold text-primary mt-1 text-left">
                    {experience.company} - {experience.location}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 mt-1 text-left">
                    {experience.period.start} - {experience.period.end} 
                    {' '}({calculateDuration(experience.period.start, experience.period.end)})
                  </p>
                  
                  <p className="mt-4 text-gray-700 dark:text-gray-300 text-left mb-8">
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

          <div className="flex justify-center mt-12 space-x-4">
            <Link 
              to="/projects" 
              variant="primary" 
              className="px-6 py-3"
            >
              Explore Projects
            </Link>
            <Link 
              to="/skills" 
              variant="secondary" 
              className="px-6 py-3"
            >
              View My Skills
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
