// src/pages/Portfolio.jsx
import { useState, useRef, useEffect } from "react";
import { PROJECTS } from "../data/projects";
import Footer from "../components/Footer";
import "../styles/Portfolio.css";

function PortfolioCard({ p, setPage, i, vis, onRequestProduct }) {
  const [hov, setHov] = useState(false);
  return (
    <article
      className={`pcard ${vis ? "pcard--in" : ""} ${hov ? "pcard--hov" : ""}`}
      style={{ "--i": i, "--c": p.color, "--cd": p.colorDim, "--cb": p.colorBorder }}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      onClick={() => setPage("project:" + p.id)}
      aria-label={`${p.title} — ${p.tagline}. Click to view full case study.`}
      tabIndex={0}
      onKeyDown={e => e.key === "Enter" && setPage("project:" + p.id)}
    >
      <div className="pcard__img-wrap">
        <img src={p.thumb} alt={`${p.title} project screenshot`} className="pcard__img" loading="lazy" />
        <div className="pcard__overlay" aria-hidden="true" />
        <div className="pcard__meta">
          <span
            className="pcard__cat"
            style={{ color: p.color, background: p.colorDim, borderColor: p.colorBorder }}
          >{p.category}</span>
          <span className="pcard__year">{p.year}</span>
        </div>
        <div className="pcard__hover-reveal" aria-hidden="true">
          <span className="pcard__hover-cta">View Full Case Study →</span>
          <span className="pcard__hover-chapters">{p.pages.length} chapters inside</span>
        </div>
      </div>
      <div className="pcard__body">
        <div className="pcard__header">
          <div className="pcard__icon-wrap" style={{ color: p.color, background: p.colorDim }} aria-hidden="true">
            {p.icon}
          </div>
          <div>
            <h3 className="pcard__title">{p.title}</h3>
            <p className="pcard__tagline" style={{ color: p.color }}>{p.tagline}</p>
          </div>
        </div>
        <p className="pcard__desc">{p.description}</p>
        <dl className="pcard__metrics">
          {p.metrics.map((m, j) => (
            <div key={j} className="pcard__metric">
              <dt className="pcard__metric-lbl">{m.label}</dt>
              <dd className="pcard__metric-val" style={{ color: p.color }}>{m.val}</dd>
            </div>
          ))}
        </dl>
        <div className="pcard__footer">
          <div className="pcard__tech" aria-label="Technologies used">
            {p.tech.map(t => <span key={t} className="pcard__pill">{t}</span>)}
          </div>
          <button
            className="pcard__request-btn"
            style={{ "--c": p.color, "--cd": p.colorDim, "--cb": p.colorBorder }}
            onClick={e => {
              e.stopPropagation();
              onRequestProduct(p.id);
            }}
            aria-label={`Request ${p.title} product`}
          >
            Request This Product →
          </button>
        </div>
      </div>
    </article>
  );
}

export default function Portfolio({ setPage, onRequestProduct }) {
  const [filter, setFilter] = useState("All");
  const ref = useRef(null);
  const [vis, setVis] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVis(true); obs.disconnect(); } },
      { threshold: 0.04 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  const cats = ["All", ...Array.from(new Set(PROJECTS.map(p => p.category)))];
  const filtered = filter === "All" ? PROJECTS : PROJECTS.filter(p => p.category === filter);

  return (
    <div className="portfolio-page">
      {/* Header */}
      <section className="portfolio-hero" aria-labelledby="portfolio-heading">
        <div className="portfolio-hero__line" aria-hidden="true" />
        <div className="section-inner">
          <div className="portfolio-hero__inner">
            <div>
              <div className="label-pill"><span className="dot" aria-hidden="true" />Our Work</div>
              <h1 id="portfolio-heading" className="portfolio-hero__title">
                EVERY PROJECT<br />
                <span className="accent">TELLS A STORY.</span>
              </h1>
            </div>
            <p className="portfolio-hero__desc">
              Click any project to see the full story — problem, approach, execution, results.
              These are the case studies we send to clients <em>before</em> they sign. That's how confident we are.
            </p>
          </div>

          {/* Filter pills */}
          <div
            className="portfolio-filters"
            role="group"
            aria-label="Filter projects by category"
          >
            {cats.map(c => (
              <button
                key={c}
                className={`portfolio-filter ${filter === c ? "portfolio-filter--active" : ""}`}
                onClick={() => setFilter(c)}
                aria-pressed={filter === c}
              >{c}</button>
            ))}
          </div>
        </div>
      </section>

      {/* Grid */}
      <section
        className="portfolio-grid-section"
        ref={ref}
        aria-label={`${filtered.length} project${filtered.length !== 1 ? "s" : ""}${filter !== "All" ? ` in ${filter}` : ""}`}
      >
        <div className="section-inner">
          <div className="portfolio-count" aria-live="polite" aria-atomic="true">
            {filtered.length} projects
          </div>
          <div className="portfolio-grid">
            {filtered.map((p, i) => (
              <PortfolioCard
                key={p.id}
                p={p}
                setPage={setPage}
                i={i}
                vis={vis}
                onRequestProduct={onRequestProduct}
              />
            ))}
          </div>
        </div>
      </section>

      <Footer setPage={setPage} />
    </div>
  );
}
