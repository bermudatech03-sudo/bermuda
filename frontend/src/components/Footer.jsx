// src/components/Footer.jsx
import "../styles/Footer.css";

export default function Footer({ setPage }) {
  const year = new Date().getFullYear();
  return (
    <footer className="footer" aria-label="Site footer">
      <div className="footer__top section-inner-footer">
        <div className="footer__brand">
          <div className="footer__logo">
            <span className="footer__logo-mark" aria-hidden="true">B</span>
            <div>
              <div className="footer__logo-name">BERMUDA TECH</div>
              <div className="footer__logo-tagline">Building Tomorrow's Digital Products</div>
            </div>
          </div>
          <p className="footer__desc">
            We design and engineer web apps, mobile apps, CRMs, and e-commerce platforms
            that drive real business outcomes. Chennai-based. Pan-India reach.
          </p>
          <address className="footer__contact-row">
            <a href="mailto:bermudatech03@gmail.com" className="footer__contact-link">bermudatech03@gmail.com</a>
            <a href="tel:+919790728732" className="footer__contact-link">+91 97907 28732 — Vishva Sen B</a>
          </address>
        </div>

        <nav className="footer__links-grid" aria-label="Footer navigation">
          <div className="footer__col">
            <h4 className="footer__col-title">Services</h4>
            <ul className="footer__col-list">
              <li>Web Applications</li>
              <li>Mobile Apps</li>
              <li>Business Websites</li>
              <li>CRM &amp; ERP Systems</li>
              <li>E-Commerce Platforms</li>
              <li>UI/UX Design</li>
            </ul>
          </div>
          <div className="footer__col">
            <h4 className="footer__col-title">Company</h4>
            <ul className="footer__col-list">
              <li onClick={() => setPage("home")}     style={{ cursor: "pointer" }}>About</li>
              <li onClick={() => setPage("portfolio")} style={{ cursor: "pointer" }}>Portfolio</li>
              <li onClick={() => setPage("contact")}  style={{ cursor: "pointer" }}>Contact</li>
              <li>Careers</li>
            </ul>
          </div>
          <div className="footer__col">
            <h4 className="footer__col-title">Contact</h4>
            <ul className="footer__col-list">
              <li>NO 114/75 KOTHAVAL CHAVADI STREET WEST SAIDAPET ,</li>
              <li>Saidapet Chennai Tamil Nadu 600015</li>
              <li style={{ marginTop: 12 }}>Service 24x7</li>
            </ul>
          </div>
        </nav>
      </div>

      <div className="footer__bottom section-inner">
        <span>© {year} Bermuda Tech. All rights reserved.</span>
        <span>Made with precision in Chennai, India</span>
      </div>
    </footer>
  );
}
