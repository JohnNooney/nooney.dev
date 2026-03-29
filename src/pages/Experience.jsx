const experiences = [
  {
    date: 'Oct 2024 — Present',
    role: 'Software Engineer II',
    company: 'CANDESCENT · Scotland',
    desc: 'Key member of the Release Support team, enabling development teams to focus on feature work while ensuring smooth releases, deployments, and production issue resolution. Reduced critical post-deployment manual steps by 60% through enhanced Helm charts and Terraform configurations.',
    pills: [
      { label: 'Helm', cls: 'accent' },
      { label: 'K8s', cls: 'accent' },
      { label: 'Terraform', cls: '' },
      { label: 'GCP', cls: '' },
      { label: 'Jenkins', cls: '' },
    ],
  },
  {
    date: 'Aug 2023 — Oct 2024',
    role: 'Software Engineer II',
    company: 'NCR VOYIX · Scotland',
    desc: 'Created a release support team to improve development and production collaboration. Improved releases from 1 out of 10 deployed without issue to 8 out of 10 through multi-stage deployment process, and increased deployment frequency from twice a month to weekly using Jenkins pipelines and automation scripts.',
    pills: [
      { label: 'Jenkins', cls: 'orange' },
      { label: 'Kubernetes', cls: '' },
      { label: 'Terraform', cls: '' },
      { label: 'GCP', cls: '' },
    ],
  },
  {
    date: 'Sep 2021 — Aug 2023',
    role: 'Software Engineer I',
    company: 'NCR · Scotland',
    desc: 'Transformed a monolithic ATM application into a microservices architecture while championing software development best practices. Implemented TDD and CI/CD pipelines, developed robust Java APIs and interactive front-ends.',
    pills: [
      { label: 'Java', cls: 'accent' },
      { label: '.NET', cls: '' },
      { label: 'Spring', cls: '' },
      { label: 'Angular', cls: 'green' },
      { label: 'Kafka', cls: '' },
    ],
  },
  {
    date: 'Jun 2021 — Sep 2021',
    role: 'Cloud Engineer (Intern)',
    company: 'NCR · Scotland',
    desc: 'Built a knowledge management tool using Confluence documentation and created a graph database-powered Q&A chatbot. Gained hands-on experience with cloud deployment technologies.',
    pills: [
      { label: 'GCP', cls: '' },
      { label: 'Terraform', cls: '' },
      { label: 'Graph DBs', cls: 'green' },
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="site-section">
      <div className="section-num">02</div>
      <div className="section-label">02 — Experience</div>
      <h2 className="section-heading">Career Timeline</h2>
      <div className="timeline">
        {experiences.map((exp) => (
          <div key={exp.date} className="tl-item reveal">
            <div className="tl-date">{exp.date}</div>
            <div className="tl-role">{exp.role}</div>
            <div className="tl-company">{exp.company}</div>
            <p className="tl-desc">{exp.desc}</p>
            <div className="skill-pills">
              {exp.pills.map((p) => (
                <span key={p.label} className={`pill${p.cls ? ' ' + p.cls : ''}`}>
                  {p.label}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
