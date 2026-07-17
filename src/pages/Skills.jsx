import { getPillClass } from '../data/techColors';

const skillCards = [
  {
    icon: '⬡',
    title: 'Cloud & DevOps',
    desc: 'Expertise in GCP, Kubernetes, and Terraform, with a focus on automated deployment pipelines and cloud-native solutions.',
    pills: ['Kubernetes', 'Helm', 'GCP', 'AWS', 'Terraform', 'Docker'],
  },
  {
    icon: '◈',
    title: 'CI/CD & Automation',
    desc: 'End-to-end pipeline design from code commit to production. Expertise in building automated deployment workflows, release orchestration, and continuous delivery systems that improve reliability and velocity.',
    pills: ['Jenkins', 'GitHub Actions', 'Shell Scripts', 'Helm Charts'],
  },
  {
    icon: '☁',
    title: 'Architecture',
    desc: 'Specialized in transforming monolithic applications into scalable microservices using event-driven patterns.',
    pills: ['Microservices', 'Kafka', 'Spring', 'Event-Driven'],
  },
  {
    icon: '⌗',
    title: 'Backend Development',
    desc: 'Strong foundation in Java Spring, .NET, and Node.js, building robust and scalable APIs and data pipelines.',
    pills: ['Java', 'C#', '.NET', 'Node.js', 'PostgreSQL'],
  },
  {
    icon: '◎',
    title: 'Frontend Development',
    desc: 'Experience with modern frameworks like React, Angular, and Flutter, creating responsive and interactive user interfaces.',
    pills: ['React', 'Angular', 'Flutter', 'SwiftUI', 'TypeScript'],
  },
  {
    icon: '⬟',
    title: 'Languages & Tools',
    desc: 'Polyglot engineer comfortable across the full stack, from systems languages to scripting and infrastructure as code.',
    pills: ['Python', 'C++', 'Swift', 'Git', 'Django'],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="site-section">
      <div className="section-num">01</div>
      <div className="section-label">01 — Technical Expertise</div>
      <h2 className="section-heading">What I Build &amp; Operate</h2>
      <div className="skills-grid">
        {skillCards.map((card) => (
          <div key={card.title} className="skill-card reveal">
            <span className="skill-card-icon">{card.icon}</span>
            <div className="skill-card-title">{card.title}</div>
            <p className="skill-card-desc">{card.desc}</p>
            <div className="skill-pills">
              {card.pills.map((label) => {
                const cls = getPillClass(label);
                return (
                  <span key={label} className={`pill${cls ? ' ' + cls : ''}`}>
                    {label}
                  </span>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
