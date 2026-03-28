import { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  // Initialize EmailJS
  useEffect(() => {
    emailjs.init({
      publicKey: "l6WMltDz_y7fKLYoO", 
    });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate form data
    if (!formData.name || !formData.email || !formData.message) {
      setSubmitStatus('error');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Send email using EmailJS
      await emailjs.send(
        "service_fcwc5zz",     
        "template_6sa36mk",   
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message
        }
      );

      // Clear form and set success status
      setFormData({ name: '', email: '', message: '' });
      setSubmitStatus('success');
    } catch (error) {
      console.error('Submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <section id="contact" className="site-section">
      <div className="section-num">04</div>
      <div className="section-label">04 — Get In Touch</div>
      <h2 className="section-heading">Let's Work Together</h2>
      <div className="contact-grid">
        {/* Left: form */}
        <div className="contact-left">
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name" className="form-label">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                className="form-input"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email" className="form-label">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                className="form-input"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message" className="form-label">Message</label>
              <textarea
                id="message"
                name="message"
                className="form-textarea"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                required
              />
            </div>
            <button type="submit" className="btn-primary" disabled={isSubmitting}>
              {isSubmitting ? 'Sending...' : '→ Send Message'}
            </button>

            {submitStatus === 'success' && (
              <div className="form-status success">
                Message sent successfully!
              </div>
            )}
            {submitStatus === 'error' && (
              <div className="form-status error">
                There was an error sending your message. Please try again.
              </div>
            )}
          </form>

          <div className="avail-banner">
            <div className="status-dot" />
            <div className="avail-banner-text">
              <strong>Available for opportunities</strong> — open to remote or hybrid roles
            </div>
          </div>
        </div>

        {/* Right: links */}
        <div className="contact-right">
          <div className="contact-links">
            <a href="mailto:john@nooney.dev" className="contact-link">
              <div className="contact-link-info">
                <span className="contact-link-label">Email</span>
                <span className="contact-link-value">john@nooney.dev</span>
              </div>
              <span className="contact-link-arrow">→</span>
            </a>
            <a href="https://github.com/JohnNooney" target="_blank" rel="noopener noreferrer" className="contact-link">
              <div className="contact-link-info">
                <span className="contact-link-label">GitHub</span>
                <span className="contact-link-value">github.com/JohnNooney</span>
              </div>
              <span className="contact-link-arrow">→</span>
            </a>
            <a href="https://www.linkedin.com/in/johnnooney/" target="_blank" rel="noopener noreferrer" className="contact-link">
              <div className="contact-link-info">
                <span className="contact-link-label">LinkedIn</span>
                <span className="contact-link-value">linkedin.com/in/johnnooney</span>
              </div>
              <span className="contact-link-arrow">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
