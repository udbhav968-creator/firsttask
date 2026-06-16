export default function About() {
  return (
    <section className="page-pane">
      <div className="info-card">
        <h2>About CIPL Studio</h2>
        <p className="section-copy">
          CIPL Studio is a design-driven web studio that builds polished online experiences for
          entrepreneurs, teams, and community builders. We combine modern visuals with approachable
          layouts and meaningful copy.
        </p>
      </div>

      <div className="section-grid">
        <article className="service-card">
          <h3>Our mission</h3>
          <p>
            To help businesses tell their story online with beautiful, easy-to-navigate sites that
            work across every device.
          </p>
        </article>
        <article className="service-card">
          <h3>Our approach</h3>
          <p>
            We prioritize clarity, responsive design, and fast load times so visitors can engage
            quickly and confidently.
          </p>
        </article>
        <article className="service-card">
          <h3>Our promise</h3>
          <p>
            Every site looks professional, feels modern, and keeps the user experience simple and
            satisfying.
          </p>
        </article>
      </div>
    </section>
  );
}
