// src/components/Navbar.jsx
import { useState, useEffect } from "react";
import "../styles/Navbar.css";

export default function Navbar({ page, setPage }) {
  const [scrolled, setScrolled]   = useState(false);
  const [menuOpen, setMenuOpen]   = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  useEffect(() => setMenuOpen(false), [page]);

  const links = [
    { label: "Home",      key: "home" },
    { label: "Services",  key: "home" },
    { label: "Portfolio", key: "portfolio" },
    { label: "Contact",   key: "contact" },
  ];

  return (
    <header
      className={`navbar ${scrolled ? "navbar--scrolled" : ""} ${menuOpen ? "navbar--open" : ""}`}
      role="banner"
    >
      <div className="navbar__inner section-inner-header">
        <button
          className="navbar__logo"
          onClick={() => setPage("home")}
          aria-label="Bermuda Tech — go to homepage"
        >
          <span className="navbar__logo-mark" aria-hidden="true">B</span>
          <span className="navbar__logo-text">
            <span className="navbar__logo-name">BERMUDA</span>
            <span className="navbar__logo-sub">TECH</span>
          </span>
        </button>

        <nav className="navbar__links" aria-label="Main navigation">
          {links.map(l => (
            <button
              key={l.label}
              className={`navbar__link ${page === l.key ? "navbar__link--active" : ""}`}
              onClick={() => setPage(l.key)}
              aria-current={page === l.key ? "page" : undefined}
            >{l.label}</button>
          ))}
        </nav>

        <button
          className="btn-primary navbar__cta"
          onClick={() => setPage("contact")}
          aria-label="Start a project with Bermuda Tech"
        >
          Start a Project <span aria-hidden="true">→</span>
        </button>

        <button
          className={`navbar__hamburger ${menuOpen ? "navbar__hamburger--open" : ""}`}
          onClick={() => setMenuOpen(p => !p)}
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-nav-drawer"
        >
          <span aria-hidden="true" />
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </button>
      </div>

      <div
        id="mobile-nav-drawer"
        className={`navbar__drawer ${menuOpen ? "navbar__drawer--open" : ""}`}
        aria-hidden={!menuOpen}
      >
        <nav className="navbar__drawer-links" aria-label="Mobile navigation">
          {links.map(l => (
            <button
              key={l.label}
              className={`navbar__drawer-link ${page === l.key ? "navbar__drawer-link--active" : ""}`}
              onClick={() => setPage(l.key)}
              aria-current={page === l.key ? "page" : undefined}
            >{l.label}</button>
          ))}
          <button
            className="btn-primary navbar__drawer-cta"
            onClick={() => setPage("contact")}
            aria-label="Start a project with Bermuda Tech"
          >
            Start a Project →
          </button>
        </nav>
      </div>
    </header>
  );
}
