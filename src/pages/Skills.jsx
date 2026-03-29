const skillCards = [
  {
    icon: '⬡',
    title: 'Cloud & DevOps',
    desc: 'Expertise in GCP, Kubernetes, and Terraform, with a focus on automated deployment pipelines and cloud-native solutions.',
    pills: [
      { label: 'Kubernetes', cls: 'accent' },
      { label: 'Helm', cls: 'accent' },
      { label: 'GCP', cls: '' },
      { label: 'Terraform', cls: 'accent' },
      { label: 'Docker', cls: '' },
    ],
  },
  {
    icon: '◈',
    title: 'CI/CD & Automation',
    desc: 'End-to-end pipeline design from code commit to production. Expertise in building automated deployment workflows, release orchestration, and continuous delivery systems that improve reliability and velocity.',
    pills: [
      { label: 'Jenkins', cls: 'orange' },
      { label: 'GitHub Actions', cls: '' },
      { label: 'Shell Scripts', cls: '' },
      { label: 'Helm Charts', cls: '' },
    ],
  },
  {
    icon: '☁',
    title: 'Architecture',
    desc: 'Specialized in transforming monolithic applications into scalable microservices using event-driven patterns.',
    pills: [
      { label: 'Microservices', cls: '' },
      { label: 'Kafka', cls: 'green' },
      { label: 'Spring', cls: '' },
      { label: 'Event-Driven', cls: '' },
    ],
  },
  {
    icon: '⌗',
    title: 'Backend Development',
    desc: 'Strong foundation in Java Spring, .NET, and Node.js, building robust and scalable APIs and data pipelines.',
    pills: [
      { label: 'Java', cls: 'accent' },
      { label: 'C#', cls: 'accent' },
      { label: '.NET', cls: '' },
      { label: 'Node.js', cls: '' },
      { label: 'PostgreSQL', cls: '' },
    ],
  },
  {
    icon: '◎',
    title: 'Frontend Development',
    desc: 'Experience with modern frameworks like React, Angular, and Flutter, creating responsive and interactive user interfaces.',
    pills: [
      { label: 'React', cls: 'green' },
      { label: 'Angular', cls: 'green' },
      { label: 'Flutter', cls: '' },
      { label: 'SwiftUI', cls: '' },
      { label: 'TypeScript', cls: '' },
    ],
  },
  {
    icon: '⬟',
    title: 'Languages & Tools',
    desc: 'Polyglot engineer comfortable across the full stack, from systems languages to scripting and infrastructure as code.',
    pills: [
      { label: 'Python', cls: 'orange' },
      { label: 'C++', cls: '' },
      { label: 'Swift', cls: '' },
      { label: 'Git', cls: '' },
      { label: 'Django', cls: '' },
    ],
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
              {card.pills.map((p) => (
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
