import { useState } from 'react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  function handleChange(event) {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
    setStatus('');
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setStatus('Please fill in all fields before sending.');
      return;
    }

    setStatus('Your message has been prepared for delivery!');
    setForm({ name: '', email: '', message: '' });
  }

  return (
    <section className="page-pane">
      <div className="info-card">
        <h2>Contact</h2>
        <p className="section-copy">
          Send a message to start your website project or ask a question about available services.
        </p>
      </div>

      <div className="contact-card">
        <form className="form-grid" onSubmit={handleSubmit}>
          <label>
            Name
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your name"
            />
          </label>
          <label>
            Email
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="you@example.com"
            />
          </label>
          <label>
            Message
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Tell us about your project"
            />
          </label>

          <div className="form-actions">
            <button className="primary-btn" type="submit">
              Send message
            </button>
            <span className="status-message">{status}</span>
          </div>
        </form>

        <div className="timeline-card">
          <h3>Let's work together</h3>
          <p>
            Message us with your project details and we will help you turn your idea into a
            polished website.
          </p>
          <div className="list-item">
            <strong>Email</strong>
            <span>hello@ciplstudio.com</span>
          </div>
          <div className="list-item">
            <strong>Phone</strong>
            <span>+1 (555) 123-4567</span>
          </div>
        </div>
      </div>
    </section>
  );
}
