const projects = [
  {
    featured: true,
    dotCls: '',
    type: 'Client · Live',
    title: 'Medical Practice Site',
    desc: 'A website for a client with a medical practice to display services and provide information about the practice. Built with React and Firebase, deployed to production.',
    pills: [
      { label: 'React', cls: 'accent' },
      { label: 'Node.js', cls: '' },
      { label: 'Firestore', cls: '' },
      { label: 'Cloud Functions', cls: 'green' },
    ],
    links: { demo: 'https://docmarenco.com' },
  },
  {
    dotCls: 'green',
    type: 'Collaboration · In Progress',
    title: 'Game Guru',
    desc: 'An iOS application that uses AI to explain, setup, and manage collections of rule books for tabletop games. Built with SwiftUI and Firebase.',
    pills: [
      { label: 'SwiftUI', cls: 'accent' },
      { label: 'Firebase', cls: '' },
      { label: 'OpenAI', cls: 'green' },
    ],
    links: {},
  },
  {
    dotCls: 'orange',
    type: 'Collaboration · In Progress',
    title: 'ObservAR',
    desc: 'A tourism AR application where users explore the world to find historical figures and learn about them. Built with Unity and ARCore.',
    pills: [
      { label: 'Unity', cls: 'orange' },
      { label: 'ARCore', cls: '' },
      { label: 'Firestore', cls: '' },
      { label: 'OpenAI', cls: '' },
    ],
    links: {},
  },
  {
    dotCls: '',
    type: 'Collaboration · In Progress',
    title: 'Face First',
    desc: 'A video-first dating application using real-time WebRTC communication. Think Omegle combined with Tinder.',
    pills: [
      { label: 'Flutter', cls: 'accent' },
      { label: 'Firestore', cls: '' },
      { label: 'WebRTC', cls: 'green' },
    ],
    links: {},
  },
  {
    dotCls: 'green',
    type: 'Personal · Open Source',
    title: 'Meeting Booker',
    desc: 'A WPF MVVM application that allows users to book meetings and view their schedule with a SQL Server backend.',
    pills: [
      { label: 'WPF', cls: '' },
      { label: '.NET', cls: 'accent' },
      { label: 'MSSQL', cls: '' },
      { label: 'Entity Framework', cls: '' },
    ],
    links: { github: 'https://github.com/JohnNooney/BookMeetings' },
  },
  {
    dotCls: 'orange',
    type: 'Personal · Open Source',
    title: 'CSV Parser',
    desc: 'A tool to parse CSVs containing customer data and add them to a database via a Spring REST API.',
    pills: [
      { label: 'Spring', cls: 'orange' },
      { label: 'Java', cls: '' },
      { label: 'PostgreSQL', cls: '' },
    ],
    links: { github: 'https://github.com/JohnNooney/java-rest-app-demo' },
  },
];

export default function Projects() {
  return (
    <section id="projects" className="site-section">
      <div className="section-num">03</div>
      <div className="section-label">03 — Selected Work</div>
      <h2 className="section-heading">Projects &amp; Collaborations</h2>
      <div className="projects-grid">
        {projects.map((p) => (
          <div
            key={p.title}
            className={`project-card reveal${p.featured ? ' featured' : ''}`}
          >
            <div>
              <div className="project-type">
                <span className={`project-type-dot${p.dotCls ? ' ' + p.dotCls : ''}`} />
                {p.type}
              </div>
              <div className="project-title">{p.title}</div>
              <p className="project-desc">{p.desc}</p>
              <div className="skill-pills" style={{ marginBottom: 24 }}>
                {p.pills.map((pill) => (
                  <span key={pill.label} className={`pill${pill.cls ? ' ' + pill.cls : ''}`}>
                    {pill.label}
                  </span>
                ))}
              </div>
              {(p.links.demo || p.links.github) && (
                <div className="project-links">
                  {p.links.demo && (
                    <a href={p.links.demo} target="_blank" rel="noopener noreferrer">
                      Live Demo →
                    </a>
                  )}
                  {p.links.github && (
                    <a href={p.links.github} target="_blank" rel="noopener noreferrer">
                      View Code →
                    </a>
                  )}
                </div>
              )}
            </div>
            {p.featured && (
              <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <div style={{
                  background: 'var(--bg3)',
                  border: '1px solid var(--border)',
                  padding: 28,
                }}>
                  <div style={{ fontSize: 9, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--text3)', marginBottom: 16 }}>
                    // Tech Stack
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 8 }}>
                    {['React', 'Node.js', 'Firestore', 'GCP'].map((node) => (
                      <div key={node} style={{
                        border: '1px solid rgba(0,212,255,0.4)',
                        padding: 8,
                        textAlign: 'center',
                        fontSize: 9,
                        color: 'var(--accent)',
                        letterSpacing: '0.08em',
                      }}>
                        {node}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
