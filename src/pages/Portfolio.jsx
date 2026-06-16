export default function Portfolio() {
  return (
    <section className="page-pane">
      <div className="info-card">
        <h2>Portfolio</h2>
        <p className="section-copy">
          Here are sample website concepts that demonstrate polished presentation, clean layout,
          and strong visual structure.
        </p>
      </div>

      <div className="section-grid">
        <article className="portfolio-card">
          <h3>Launch landing page</h3>
          <p>
            A conversion-oriented homepage designed to introduce your product and collect leads.
          </p>
        </article>
        <article className="portfolio-card">
          <h3>Creative portfolio</h3>
          <p>
            A modern showcase for teams, freelance designers, and agencies with visual case studies.
          </p>
        </article>
        <article className="portfolio-card">
          <h3>Service studio site</h3>
          <p>
            A professional website layout focused on services, testimonials, and client results.
          </p>
        </article>
      </div>
    </section>
  );
}
