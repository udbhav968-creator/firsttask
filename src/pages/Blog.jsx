export default function Blog() {
  return (
    <section className="page-pane">
      <div className="info-card">
        <h2>Blog</h2>
        <p className="section-copy">
          Read short guides and stories about launching websites, growing online communities, and
          designing customer-first digital products.
        </p>
      </div>

      <div className="grid-list">
        <article className="blog-card">
          <h3>How to launch your first product page</h3>
          <p>
            Learn the key elements every launch page needs to convert visitors into customers.
          </p>
        </article>
        <article className="blog-card">
          <h3>Designing with clarity in mind</h3>
          <p>
            Simple navigation and strong typography make a site easier to scan and more enjoyable to use.
          </p>
        </article>
        <article className="blog-card">
          <h3>Choosing the right content structure</h3>
          <p>
            Organize your information so visitors can quickly understand your value and take action.
          </p>
        </article>
      </div>
    </section>
  );
}
