// src/pages/Home.jsx
import { useState, useEffect, useRef } from "react";
import { SERVICES, PROJECTS } from "../data/projects";
import Footer from "../components/Footer";
import "../styles/Home.css";

function Hero({ setPage }) {
  const [mouse, setMouse] = useState({ x: 50, y: 50 });
  useEffect(() => {
    const fn = e => setMouse({ x: (e.clientX / window.innerWidth) * 100, y: (e.clientY / window.innerHeight) * 100 });
    window.addEventListener("mousemove", fn, { passive: true });
    return () => window.removeEventListener("mousemove", fn);
  }, []);

  return (
    <section className="hero">
      <div className="hero__mesh" style={{ "--mx": `${mouse.x}%`, "--my": `${mouse.y}%` }} />
      <div className="hero__grid" />
      <div className="hero__inner section-inner">
        <div className="hero__content">
          <div className="label-pill hero__badge"><span className="dot" />Chennai's Premier Digital Engineering Studio</div>
          <h1 className="hero__headline">
            <span>WE BUILD</span>
            <span className="hero__headline--accent">DIGITAL</span>
            <span>ENGINES.</span>
          </h1>
          <p className="hero__sub">
            Web apps. Mobile apps. CRM systems. E-commerce platforms.Automation.
            Engineered to convert visitors, built to scale, designed to drive real business growth.
          </p>
          <div className="hero__actions">
            <button className="btn-primary" onClick={() => setPage("portfolio")}>View Our Work <span>→</span></button>
            <button className="btn-outline" onClick={() => setPage("contact")}>Start a Project</button>
          </div>
          <div className="hero__stats">
            {[{ v: "20+", s: "Projects Shipped" }, { v: "₹10L+", s: "Client Revenue Generated" }, { v: "98%", s: "Client Retention" }].map((st, i) => (
              <div key={i} className="hero__stat">
                <span className="hero__stat-val">{st.v}</span>
                <span className="hero__stat-sub">{st.s}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="hero__visual">
          <div className="hero__tags-cloud">
            {["React", "Node.js", "React Native", "PostgreSQL", "AWS", "Next.js", "Firebase", "Three.js", "Python", "MongoDB"].map((t, i) => (
              <span key={t} className="hero__tag" style={{ "--i": i }}>{t}</span>
            ))}
          </div>
          <div className="hero__cards">
            {PROJECTS.slice(0, 3).map((p, i) => (
              <div key={p.id} className="hero__pcard" style={{ "--i": i, "--c": p.color }} onClick={() => setPage("project:" + p.id)}>
                <span className="hero__pcard-icon" style={{ color: p.color }}>{p.icon}</span>
                <div>
                  <div className="hero__pcard-name">{p.title}</div>
                  <div className="hero__pcard-cat">{p.category}</div>
                </div>
                <span className="hero__pcard-dot" style={{ background: p.color }} />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="hero__ticker-wrap">
        <div className="hero__ticker">
          {[...Array(2)].flatMap(() =>
            ["Web Apps", "Mobile Apps", "CRM Systems", "E-Commerce", "UI/UX Design", "ERP Solutions", "Custom Dashboards", "API Integrations"].map((t, i) => (
              <span key={Math.random()} className="hero__ticker-item"><span className="hero__ticker-sep">◆</span>{t}</span>
            ))
          )}
        </div>
      </div>
    </section>
  );
}

function Services({ setPage }) {
  const ref = useRef(null);
  const [vis, setVis] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVis(true); obs.disconnect(); } }, { threshold: 0.08 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return (
    <section className="services" ref={ref}>
      <div className="section-inner">
        <div className="services__header">
          <div className="services__header-left">
            <div className="label-pill"><span className="dot" />What We Build</div>
            <h2 className="section-title">SERVICES THAT <span className="accent">SHIP.</span></h2>
          </div>
          <p className="services__desc">We don't sell technology. We deliver outcomes. Every project starts with your business problem and ends with measurable results.</p>
        </div>
        <div className="services__grid">
          {SERVICES.map((s, i) => (
            <div key={i} className={`scard ${vis ? "scard--in" : ""}`} style={{ "--i": i, "--c": s.color }} onClick={() => setPage("contact")}>
              <div className="scard__icon">{s.icon}</div>
              <h3 className="scard__title">{s.title}</h3>
              <p className="scard__desc">{s.desc}</p>
              <ul className="scard__features">
                {s.features.map(f => <li key={f} className="scard__feature"><span style={{ color: s.color }}>✓</span> {f}</li>)}
              </ul>
              <div className="scard__cta" style={{ color: s.color }}>Learn More →</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Process() {
  const ref = useRef(null);
  const [vis, setVis] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVis(true); obs.disconnect(); } }, { threshold: 0.08 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  const steps = [
    { n: "01", t: "Discovery", d: "Two weeks of radical listening. We map your workflow, your users, and your constraints. No code until we fully understand the problem." },
    { n: "02", t: "Design", d: "Every screen wireframed and user-tested before development. You validate the experience before a single component is built." },
    { n: "03", t: "Build", d: "Agile sprints with working software demos every 7 days. You see real progress in week one — not a black box after 6 months." },
    { n: "04", t: "Launch & Scale", d: "We go live when it's ready. 3 months of free monitoring, bug fixes, and optimisation post-launch." },
  ];
  return (
    <section className="process" ref={ref}>
      <div className="section-inner">
        <div className="process__header">
          <div className="label-pill"><span className="dot" />How We Work</div>
          <h2 className="section-title">THE <span className="accent">PROCESS</span></h2>
        </div>
        <div className="process__grid">
          {steps.map((s, i) => (
            <div key={i} className={`pstep ${vis ? "pstep--in" : ""}`} style={{ "--i": i }}>
              <div className="pstep__num">{s.n}</div>
              <h3 className="pstep__title">{s.t}</h3>
              <p className="pstep__desc">{s.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Featured({ setPage }) {
  const ref = useRef(null);
  const [vis, setVis] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVis(true); obs.disconnect(); } }, { threshold: 0.06 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return (
    <section className="featured" ref={ref}>
      <div className="section-inner">
        <div className="featured__header">
          <div>
            <div className="label-pill"><span className="dot" />Selected Work</div>
            <h2 className="section-title">WHAT WE'VE <span className="accent">SHIPPED.</span></h2>
          </div>
          <button className="btn-outline" onClick={() => setPage("portfolio")}>View All Projects →</button>
        </div>
        <div className="featured__grid">
          {PROJECTS.slice(0, 3).map((p, i) => (
            <article key={p.id} className={`fcard ${vis ? "fcard--in" : ""} ${i === 0 ? "fcard--hero" : ""}`} style={{ "--i": i, "--c": p.color, "--cd": p.colorDim }} onClick={() => setPage("project:" + p.id)}>
              <div className="fcard__img-wrap">
                <img src={p.thumb} alt={p.title} className="fcard__img" loading="lazy" />
                <div className="fcard__overlay" />
                <span className="fcard__cat" style={{ color: p.color, background: p.colorDim, borderColor: p.colorBorder }}>{p.category}</span>
                <div className="fcard__hover-cta">View Case Study →</div>
              </div>
              <div className="fcard__body">
                <div className="fcard__title-row">
                  <span className="fcard__icon" style={{ color: p.color, background: p.colorDim }}>{p.icon}</span>
                  <div>
                    <h3 className="fcard__name">{p.title}</h3>
                    <p className="fcard__tagline" style={{ color: p.color }}>{p.tagline}</p>
                  </div>
                </div>
                <p className="fcard__desc">{p.description}</p>
                <div className="fcard__metrics">
                  {p.metrics.slice(0, i === 0 ? 4 : 2).map((m, j) => (
                    <div key={j} className="fcard__metric">
                      <span style={{ color: p.color }} className="fcard__metric-val">{m.val}</span>
                      <span className="fcard__metric-lbl">{m.label}</span>
                    </div>
                  ))}
                </div>
                <div className="fcard__footer">
                  <div className="fcard__tech">
                    {p.tech.slice(0, 3).map(t => <span key={t} className="fcard__pill">{t}</span>)}
                  </div>
                  <span className="fcard__chapters" style={{ color: p.color }}>{p.pages.length} chapters →</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function CtaBand({ setPage }) {
  return (
    <section className="ctaband">
      <div className="ctaband__glow" />
      <div className="section-inner ctaband__inner">
        <div className="ctaband__left">
          <div className="label-pill"><span className="dot" />Ready to Build?</div>
          <h2 className="ctaband__title">YOUR NEXT BIG THING<br /><span className="accent">STARTS HERE.</span></h2>
          <p className="ctaband__sub">We're selective about the projects we take on — because we're committed to results. Let's talk about what you're building.</p>
          <div className="ctaband__btns">
            <button className="btn-primary" onClick={() => setPage("contact")}>Start a Conversation →</button>
            <button className="btn-outline" onClick={() => setPage("portfolio")}>See Our Work</button>
          </div>
        </div>
        <div className="ctaband__promises">
          {[
            { l: "Response time", v: "< 4 hours" },
            { l: "Discovery call", v: "Free — 45 min" },
            { l: "NDA available", v: "Always on request" },
            { l: "Fixed-price quotes", v: "No billing surprises" },
          ].map((r, i) => (
            <div key={i} className="ctaband__promise">
              <span className="ctaband__check">✓</span>
              <div>
                <div className="ctaband__promise-label">{r.l}</div>
                <div className="ctaband__promise-val">{r.v}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Home({ setPage }) {
  return (
    <div className="home-page">
      <Hero setPage={setPage} />
      <Services setPage={setPage} />
      <Process />
      <Featured setPage={setPage} />
      <CtaBand setPage={setPage} />
      <Footer setPage={setPage} />
    </div>
  );
}
