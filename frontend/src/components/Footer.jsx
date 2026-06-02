// src/components/Footer.jsx
import "../styles/Footer.css";

export default function Footer({ setPage }) {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="footer__top section-inner-footer">
        <div className="footer__brand">
          <div className="footer__logo">
            <span className="footer__logo-mark">B</span>
            <div>
              <div className="footer__logo-name">BERMUDA TECH</div>
              <div className="footer__logo-tagline">Building Tomorrow's Digital Products</div>
            </div>
          </div>
          <p className="footer__desc">
            We design and engineer web apps, mobile apps, CRMs, and e-commerce platforms
            that drive real business outcomes. Chennai-based. Pan-India reach.
          </p>
          <div className="footer__contact-row">
            <a href="mailto:hello@bermudatech.in" className="footer__contact-link">bermudatech@gmail.com</a>
            <a href="tel:+919876543210" className="footer__contact-link">+91 97907 28732</a>
          </div>
        </div>
        <div className="footer__links-grid">
          <div className="footer__col">
            <h4 className="footer__col-title">Services</h4>
            <ul className="footer__col-list">
              <li>Web Applications</li><li>Mobile Apps</li><li>Business Websites</li>
              <li>CRM & ERP Systems</li><li>E-Commerce Platforms</li><li>UI/UX Design</li>
            </ul>
          </div>
          <div className="footer__col">
            <h4 className="footer__col-title">Company</h4>
            <ul className="footer__col-list">
              <li onClick={() => setPage("home")} style={{cursor:"pointer"}}>About</li>
              <li onClick={() => setPage("portfolio")} style={{cursor:"pointer"}}>Portfolio</li>
              <li onClick={() => setPage("contact")} style={{cursor:"pointer"}}>Contact</li>
              <li>Careers</li>
            </ul>
          </div>
          <div className="footer__col">
            <h4 className="footer__col-title">Contact</h4>
            <ul className="footer__col-list">
              <li>Chennai, Tamil Nadu</li><li>India — 600058</li>
              <li style={{marginTop:12}}>Service 24x7</li>
            </ul>
          </div>
        </div>
      </div>
      {/* <div className="footer__bottom section-inner">
        <span>© {year} Bermuda Tech. All rights reserved.</span>
        <span>Made with precision in Chennai, India</span>
      </div> */}
    </footer>
  );
}
