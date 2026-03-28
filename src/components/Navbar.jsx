import { useState } from 'react';

const navigation = [
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="site-nav" aria-label="Main Navigation">
      <div className="nav-inner">
        <a href="#" className="nav-logo">
          J.NOONEY<span>.DEV</span>
        </a>
        <div className={`nav-links${isOpen ? ' open' : ''}`}>
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </a>
          ))}
        </div>
        <div className="nav-status">
          <div className="status-dot" />
          available for work
        </div>
        <button
          className="nav-toggle"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-label="Toggle menu"
        >
          {isOpen ? '✕' : '☰'}
        </button>
      </div>
    </nav>
  );
}
