import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <section className="page-pane">
      <div className="hero-grid">
        <div>
          <span className="eyebrow">Welcome to CIPL Studio</span>
          <h2>Designing digital experiences that feel polished, fast, and personal.</h2>
          <p className="hero-copy">
            Explore our six-page website built with React and Vite. Every page is responsive,
            accessible, and ready to present your services, portfolio, blog, and contact details.
          </p>
          <div className="form-actions">
            <Link className="primary-btn" to="/contact">
              Start a project
            </Link>
            <Link className="secondary-link" to="/portfolio">
              View portfolio
            </Link>
          </div>
        </div>

        <div className="hero-panel">
          <div className="feature-card">
            <h3>Responsive design</h3>
            <p>Beautiful layouts that adapt cleanly from desktop down to mobile.</p>
          </div>
          <div className="feature-card">
            <h3>Fast navigation</h3>
            <p>Client-side routing keeps the experience smooth and easy to use.</p>
          </div>
          <div className="feature-card">
            <h3>Fully functional</h3>
            <p>Contact form, route links, and polished page structure for a complete website.</p>
          </div>
        </div>
      </div>

      <div className="section-grid">
        <article className="info-card">
          <h2>What we do</h2>
          <p className="section-copy">
            CIPL Studio creates modern websites for businesses, startups, and creators who want
            a professional online presence without sacrificing clarity or speed.
          </p>
        </article>
        <article className="info-card">
          <h2>Why it works</h2>
          <p className="section-copy">
            We use a simple structure, clean visuals, and reliable React navigation to keep visitors
            engaged and help them quickly find what they need.
          </p>
        </article>
      </div>
    </section>
  );
}
