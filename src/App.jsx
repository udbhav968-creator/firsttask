import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Services from './pages/Services.jsx';
import Portfolio from './pages/Portfolio.jsx';
import Blog from './pages/Blog.jsx';
import Contact from './pages/Contact.jsx';
import './styles.css';

const navItems = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/services', label: 'Services' },
  { path: '/portfolio', label: 'Portfolio' },
  { path: '/blog', label: 'Blog' },
  { path: '/contact', label: 'Contact' },
];

export default function App() {
  return (
    <BrowserRouter>
      <main className="app-shell">
        <div className="site-card">
          <header className="site-header">
            <div>
              <p className="brand">CIPL Studio</p>
              <h1 className="site-title">A modern website built for digital growth.</h1>
              <p className="hero-copy">
                Six pages of responsive design, clear navigation, and client-side routing for a fully
                functioning React website.
              </p>
            </div>
            <nav className="site-nav">
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  end={item.path === '/'}
                  className={({ isActive }) =>
                    isActive ? 'nav-link active-link' : 'nav-link'
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </nav>
          </header>

          <div className="page-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<Home />} />
            </Routes>
          </div>

          <footer className="site-footer">
            <p>© 2026 CIPL Studio. Designed for performance, clarity, and modern web experiences.</p>
          </footer>
        </div>
      </main>
    </BrowserRouter>
  );
}
