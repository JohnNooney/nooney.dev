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
      { label: 'GCP Cloud Functions', cls: 'green' },
    ],
    links: { demo: 'https://docmarenco.com' },
  },
  {
    dotCls: 'green',
    type: 'Personal · Open Source',
    title: 'Hadoop Helper',
    desc: 'Reduces Hadoop setup time from hours to minutes by providing automated UI-driven provisioning of containerized clusters, empowering developers to experiment with big data infrastructure without manual configuration.',
    pills: [
      { label: 'React', cls: '' },
      { label: 'Node.js', cls: '' },
      { label: 'Hadoop', cls: '' },
      { label: 'Docker', cls: 'accent' }
    ],
    links: { github: 'https://github.com/JohnNooney/HadoopHelper' },
  },
  {
    dotCls: 'green',
    type: 'Personal · Open Source',
    title: 'RPi Airplay Reciever',
    desc: 'A Raspberry Pi-based AirPlay receiver that replicates the cloud-connected architecture of commercial streaming devices like Chromecast and Apple TV. Features a cloud-hosted admin dashboard for real-time device telemetry and analytics, built atop the RPiPlay open-source receiver stack.',
    pills: [
      { label: 'AWS', cls: 'orange' },
      { label: 'Python', cls: 'accent' },
      { label: 'Node.js', cls: '' },
      { label: 'Raspberry Pi', cls: '' },
      { label: 'Docker', cls: '' }
    ],
    links: { github: 'https://github.com/JohnNooney/RPiAirplayReciever' },
  },
  {
    dotCls: 'orange',
    type: 'Collaboration · In Progress',
    title: 'Game Guru',
    desc: 'An intelligent iOS companion that leverages RAG based semantic search to query tabletop rulebooks and surface precise, contextual answers. Eliminating tedious manual lookups and streamlining game setup. Built with SwiftUI and Firebase.',
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
  }
  // {
  //   dotCls: 'orange',
  //   type: 'Collaboration · In Progress',
  //   title: 'Face First',
  //   desc: 'A video-first dating application using real-time WebRTC communication. Think Omegle combined with Tinder.',
  //   pills: [
  //     { label: 'Flutter', cls: 'accent' },
  //     { label: 'Firestore', cls: '' },
  //     { label: 'WebRTC', cls: 'green' },
  //   ],
  //   links: {},
  // }
  // {
  //   dotCls: 'green',
  //   type: 'Personal · Open Source',
  //   title: 'Meeting Booker',
  //   desc: 'A WPF MVVM application that allows users to book meetings and view their schedule with a SQL Server backend.',
  //   pills: [
  //     { label: 'WPF', cls: '' },
  //     { label: '.NET', cls: 'accent' },
  //     { label: 'MSSQL', cls: '' },
  //     { label: 'Entity Framework', cls: '' },
  //   ],
  //   links: { github: 'https://github.com/JohnNooney/BookMeetings' },
  // },
  // {
  //   dotCls: 'orange',
  //   type: 'Personal · Open Source',
  //   title: 'CSV Parser',
  //   desc: 'A tool to parse CSVs containing customer data and add them to a database via a Spring REST API.',
  //   pills: [
  //     { label: 'Spring', cls: 'orange' },
  //     { label: 'Java', cls: '' },
  //     { label: 'PostgreSQL', cls: '' },
  //   ],
  //   links: { github: 'https://github.com/JohnNooney/java-rest-app-demo' },
  // },
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
                      Live Site →
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
          </div>
        ))}
      </div>
    </section>
  );
}
