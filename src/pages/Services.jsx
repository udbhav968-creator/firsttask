export default function Services() {
  return (
    <section className="page-pane">
      <div className="info-card">
        <h2>Services</h2>
        <p className="section-copy">
          Choose from design, development, and launch services that are built to support your brand,
          your product, and your audience.
        </p>
      </div>

      <div className="section-grid">
        <article className="service-card">
          <h3>Brand and identity</h3>
          <p>Create compelling colors, typography, and messaging that reflect your values.</p>
        </article>
        <article className="service-card">
          <h3>Website design</h3>
          <p>Deliver modern page layouts, visual hierarchy, and responsive experiences.</p>
        </article>
        <article className="service-card">
          <h3>Launch strategy</h3>
          <p>Prepare your website for launch with conversion-focused content and action paths.</p>
        </article>
      </div>
    </section>
  );
}
