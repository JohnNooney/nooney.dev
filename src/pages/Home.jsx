import { useEffect, useRef } from 'react';

export default function Home() {
  const cmdRef = useRef(null);

  useEffect(() => {
    const cmds = [
      'kubectl get pods -A | grep -v Running',
      'terraform plan -out=infra.tfplan',
      'docker stats --no-stream | head -5',
      'helm upgrade --install app ./chart',
      'gcloud builds list --limit=5',
    ];
    let ci = 0;
    const interval = setInterval(() => {
      ci = (ci + 1) % cmds.length;
      if (cmdRef.current) cmdRef.current.textContent = cmds[ci];
    }, 12000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero" style={{ borderTop: 'none', padding: 0 }}>
      <div className="hero-left fade-in">
        <div className="hero-eyebrow">// full stack engineer &amp; devops engineer</div>
        <div className="hero-name">
          JOHN<br /><span className="line2">NOONEY</span>
        </div>
        <div className="hero-title">Full Stack Engineer · DevOps Engineer</div>
        <p className="hero-desc">
          4+ years building and scaling resilient enterprise applications. I bridge the gap between
          development and operations, from full-stack development to CI/CD pipelines,
          containerization, and cloud infrastructure.
        </p>
        <div className="hero-tags">
          <span className="tag accent">Kubernetes</span>
          <span className="tag green">GCP</span>
          <span className="tag orange">Terraform</span>
          <span className="tag">TypeScript / Java / C#</span>
          <span className="tag">CI/CD</span>
          <span className="tag">Docker</span>
          <span className="tag">React</span>
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
              <span className="t-cmd" ref={cmdRef}>cat whoami.yaml</span>
            </div>
            <div style={{ marginTop: 8 }}>
              <span className="t-key">name:</span> <span className="t-val">"John Nooney"</span><br />
              <span className="t-key">role:</span> <span className="t-val">"Full Stack Engineer / DevOps"</span><br />
              <span className="t-key">yoe:</span> <span className="t-val">4+</span><br />
              <span className="t-key">stack:</span><br />
              &nbsp;&nbsp;<span className="t-comment"># languages</span><br />
              &nbsp;&nbsp;- <span className="t-val">C#, Java, TypeScript, Python</span><br />
              &nbsp;&nbsp;<span className="t-comment"># infra</span><br />
              &nbsp;&nbsp;- <span className="t-val">K8s, Terraform, Jenkins, GCP, AWS</span><br />
              &nbsp;&nbsp;<span className="t-comment"># frontend</span><br />
              &nbsp;&nbsp;- <span className="t-val">React, Angular, Flutter</span><br />
              <span className="t-key">education:</span> <span className="t-val">"BSc (Hons) Computer Science"</span><br />
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
            <div className="uptime-value">300+</div>
            <div className="uptime-subtitle">Across CANDESCENT, NCR VOYIX & NCR</div>
          </div>
          <div className="uptime-cell">
            <div className="uptime-label">Technologies</div>
            <div className="uptime-value">24+</div>
            <div className="uptime-subtitle">Used across all roles</div>
          </div>
          <div className="uptime-cell">
            <div className="uptime-label">Release Predictability</div>
            <div className="uptime-value warn">+77%</div>
            <div className="uptime-subtitle">Across NCR VOYIX and Candescent</div>
          </div>
          <div className="uptime-cell">
            <div className="uptime-label">Deploy Freq. Increase</div>
            <div className="uptime-value">+200%</div>
            <div className="uptime-subtitle">Across NCR VOYIX and Candescent</div>
          </div>
        </div>
      </div>
    </section>
  );
}
