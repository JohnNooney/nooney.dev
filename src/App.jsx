import { useEffect, useRef } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Skills from './pages/Skills';
import Experience from './pages/Experience';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

function App() {
  const cursorRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const ring = ringRef.current;
    if (!cursor || !ring) return;

    const onMove = (e) => {
      cursor.style.left = e.clientX + 'px';
      cursor.style.top = e.clientY + 'px';
      ring.style.left = e.clientX + 'px';
      ring.style.top = e.clientY + 'px';
    };
    document.addEventListener('mousemove', onMove);

    const interactiveSelector = 'a, button, .contact-link, .skill-card, .project-card, .cert-badge';
    const onEnter = () => {
      ring.style.width = '44px';
      ring.style.height = '44px';
      ring.style.borderColor = 'rgba(0,212,255,0.8)';
    };
    const onLeave = () => {
      ring.style.width = '28px';
      ring.style.height = '28px';
      ring.style.borderColor = 'rgba(0,212,255,0.4)';
    };

    const addListeners = () => {
      document.querySelectorAll(interactiveSelector).forEach((el) => {
        el.addEventListener('mouseenter', onEnter);
        el.addEventListener('mouseleave', onLeave);
      });
    };

    addListeners();
    const observer = new MutationObserver(addListeners);
    observer.observe(document.body, { childList: true, subtree: true });

    // Scroll reveal
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.08 }
    );
    document.querySelectorAll('.reveal').forEach((el) => revealObserver.observe(el));

    return () => {
      document.removeEventListener('mousemove', onMove);
      observer.disconnect();
      revealObserver.disconnect();
    };
  }, []);

  return (
    <>
      <div id="cursor" ref={cursorRef} />
      <div id="cursor-ring" ref={ringRef} />
      <Navbar />
      <div className="page">
        <Home />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </div>
      <Footer />
    </>
  );
}

export default App;
