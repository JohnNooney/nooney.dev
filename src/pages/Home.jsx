import { getPillClass } from '../data/techColors';

const heroTags = [
  'Kubernetes',
  'GCP / AWS',
  'Terraform',
  'TypeScript / Java / C#',
  'CI/CD',
  'Docker',
  'React',
];

export default function Home() {
  return (
    <>
    <section className="hero" style={{ borderTop: 'none', padding: 0 }}>
      <div className="hero-left fade-in">
        <div className="hero-eyebrow">// based in Germany (soon)</div>
        <div className="hero-name">
          JOHN<br /><span className="line2">NOONEY</span>
        </div>
        <div className="hero-title">Full Stack · DevOps Engineer</div>
        <p className="hero-desc">
          5+ years building and scaling resilient enterprise applications. I bridge the gap between
          development and operations, from full-stack development to CI/CD pipelines,
          containerization, and cloud infrastructure.
        </p>
        <div className="hero-tags">
          {heroTags.map((label) => {
            const cls = getPillClass(label);
            return (
              <span key={label} className={`tag${cls ? ' ' + cls : ''}`}>
                {label}
              </span>
            );
          })}
        </div>
        <div className="hero-cta">
          <a href="#contact" className="btn-primary">→ Let's Talk</a>
          <a href="#projects" className="btn-ghost">View Work</a>
        </div>
      </div>

      <div className="hero-right fade-in" style={{ animationDelay: '0.3s' }}>
        <div className="terminal">
          <div className="terminal-header">
            <div className="term-dot" />
            <div className="term-dot" />
            <div className="term-dot" />
            <span className="term-title">zsh — john@dev-01</span>
          </div>
          <div className="terminal-body">
            <div>
              <span className="t-prompt">john@dev-01</span>{' '}
              <span className="t-comment">~</span>{' '}
              <span className="t-cmd">cat status.yaml</span>
            </div>
            <div style={{ marginTop: 8 }}>
              <span className="t-key">education:</span> <span className="t-val">"BSc (Hons) Computer Science"</span><br />
              <span className="t-key">focus:</span> <span className="t-val">"Agentic workflows &amp; automation (n8n, RAGFlow)"</span><br />
              <span className="t-key">available_for:</span> <span className="t-val">"remote / hybrid roles"</span><br />
              <span className="t-key">open_to_work:</span> <span className="t-val">true</span>
            </div>
            <div style={{ marginTop: 12 }}>
              <span className="t-prompt">john@dev-01</span>{' '}
              <span className="t-comment">~</span>{' '}
              <span className="t-cursor" />
            </div>
          </div>
        </div>

        <div className="uptime-grid">
          <div className="uptime-cell">
            <div className="uptime-label">Deployments Owned</div>
            <div className="uptime-value">100+</div>
            <div className="uptime-subtitle">Across CANDESCENT, NCR VOYIX & NCR</div>
          </div>
          <div className="uptime-cell">
            <div className="uptime-label">Technologies</div>
            <div className="uptime-value">24+</div>
            <div className="uptime-subtitle">Used across all roles</div>
          </div>
          <div className="uptime-cell">
            <div className="uptime-label">Release Predictability</div>
            <div className="uptime-value warn">8x Increase</div>
            <div className="uptime-subtitle">Across NCR VOYIX and Candescent</div>
          </div>
          <div className="uptime-cell">
            <div className="uptime-label">Deploy Freq. Increase</div>
            <div className="uptime-value">1x/mo → Weekly</div>
            <div className="uptime-subtitle">Across NCR VOYIX and Candescent</div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}
