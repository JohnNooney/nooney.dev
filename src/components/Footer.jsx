export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-copy">
          &copy; {new Date().getFullYear()} John Nooney
        </div>
        <div className="footer-links">
          <a href="https://github.com/JohnNooney" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/johnnooney/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="mailto:john@nooney.dev">Email</a>
        </div>
      </div>
    </footer>
  );
}
