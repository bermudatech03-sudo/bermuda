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
    <header className={`navbar ${scrolled ? "navbar--scrolled" : ""} ${menuOpen ? "navbar--open" : ""}`}>
      <div className="navbar__inner section-inner-header">
        <button className="navbar__logo" onClick={() => setPage("home")}>
          <span className="navbar__logo-mark">B</span>
          <span className="navbar__logo-text">
            <span className="navbar__logo-name">BERMUDA</span>
            <span className="navbar__logo-sub">TECH</span>
          </span>
        </button>

        <nav className="navbar__links">
          {links.map(l => (
            <button
              key={l.label}
              className={`navbar__link ${page === l.key ? "navbar__link--active" : ""}`}
              onClick={() => setPage(l.key)}
            >{l.label}</button>
          ))}
        </nav>

        <button className="btn-primary navbar__cta" onClick={() => setPage("contact")}>
          Start a Project <span>→</span>
        </button>

        <button
          className={`navbar__hamburger ${menuOpen ? "navbar__hamburger--open" : ""}`}
          onClick={() => setMenuOpen(p => !p)}
          aria-label="Toggle navigation"
        ><span /><span /><span /></button>
      </div>

      <div className={`navbar__drawer ${menuOpen ? "navbar__drawer--open" : ""}`}>
        <nav className="navbar__drawer-links">
          {links.map(l => (
            <button
              key={l.label}
              className={`navbar__drawer-link ${page === l.key ? "navbar__drawer-link--active" : ""}`}
              onClick={() => setPage(l.key)}
            >{l.label}</button>
          ))}
          <button className="btn-primary navbar__drawer-cta" onClick={() => setPage("contact")}>
            Start a Project →
          </button>
        </nav>
      </div>
    </header>
  );
}
