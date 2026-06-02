// src/pages/ProjectDetail.jsx
import { useState, useRef, useEffect } from "react";
import { PROJECTS } from "../data/projects";
import Footer from "../components/Footer";
import "../styles/ProjectDetail.css";

export default function ProjectDetail({ projectId, setPage }) {
  const project = PROJECTS.find(p => p.id === projectId);
  const [chapter, setChapter] = useState(0);
  const [dir, setDir] = useState(1);
  const [animating, setAnimating] = useState(false);
  const contentRef = useRef(null);

  useEffect(() => { setChapter(0); }, [projectId]);

  if (!project) return (
    <div className="pd-not-found">
      <p>Project not found.</p>
      <button className="btn-primary" onClick={() => setPage("portfolio")}>Back to Portfolio</button>
    </div>
  );

  const pg = project.pages[chapter];
  const total = project.pages.length;

  const goTo = (idx) => {
    if (animating || idx === chapter || idx < 0 || idx >= total) return;
    setDir(idx > chapter ? 1 : -1);
    setAnimating(true);
    setTimeout(() => {
      setChapter(idx);
      setAnimating(false);
      contentRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 300);
  };

  return (
    <div className="pd-page">
      {/* Project header */}
      <div className="pd-header">
        <div className="section-inner pd-header__inner">
          <button className="pd-back" onClick={() => setPage("portfolio")}>
            ← Back to Portfolio
          </button>
          <div className="pd-header__main">
            <div className="pd-header__icon" style={{ color: project.color, background: project.colorDim, borderColor: project.colorBorder }}>
              {project.icon}
            </div>
            <div className="pd-header__info">
              <span className="pd-header__cat" style={{ color: project.color, background: project.colorDim, borderColor: project.colorBorder }}>
                {project.category}
              </span>
              <h1 className="pd-header__title">{project.title}</h1>
              <p className="pd-header__tagline" style={{ color: project.color }}>{project.tagline}</p>
            </div>
            <div className="pd-header__metrics">
              {project.metrics.map((m, i) => (
                <div key={i} className="pd-header__metric">
                  <span className="pd-header__metric-val" style={{ color: project.color }}>{m.val}</span>
                  <span className="pd-header__metric-lbl">{m.label}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="pd-header__tech">
            {project.tech.map(t => <span key={t} className="pd-tech-pill">{t}</span>)}
            <span className="pd-header__client">Client: {project.client}</span>
            <span className="pd-header__year">{project.year}</span>
          </div>
        </div>
      </div>

      {/* Chapter tab bar */}
      <div className="pd-tabs">
        <div className="pd-tabs__inner">
          {project.pages.map((pg, i) => (
            <button
              key={i}
              className={`pd-tab ${chapter === i ? "pd-tab--active" : ""}`}
              style={{ "--c": project.color }}
              onClick={() => goTo(i)}
            >
              <span className="pd-tab__num">0{i + 1}</span>
              <span className="pd-tab__label">{pg.title}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Chapter content */}
      <div ref={contentRef} className="pd-chapter-wrap">
        <div
          className="pd-chapter section-inner"
          style={{
            opacity: animating ? 0 : 1,
            transform: animating ? `translateX(${dir * 50}px)` : "translateX(0)",
            transition: "opacity 0.3s ease, transform 0.3s ease",
          }}
        >
          {/* Chapter number + title */}
          <div className="pd-chapter__header">
            <span className="pd-chapter__num" style={{ color: project.color + "20" }}>0{chapter + 1}</span>
            <div className="pd-chapter__titles">
              <div className="pd-chapter__progress" style={{ color: project.color }}>
                Chapter {chapter + 1} of {total}
              </div>
              <h2 className="pd-chapter__title">{pg.title}</h2>
              <p className="pd-chapter__subtitle">{pg.subtitle}</p>
            </div>
          </div>

          {/* Two-column: image + text */}
          <div className="pd-chapter__body">
            {/* Screenshot */}
            <div className="pd-chapter__img-col">
              <div className="pd-chapter__img-frame" style={{ borderColor: project.colorBorder }}>
                <img src={pg.img} alt={pg.title} className="pd-chapter__img" />
                <div className="pd-chapter__img-gradient" />
                <p className="pd-chapter__img-caption">{pg.caption}</p>
              </div>
            </div>

            {/* Text */}
            <div className="pd-chapter__text-col">
              <p className="pd-chapter__body-text">{pg.body}</p>

              {/* Insight callout */}
              <div className="pd-insight" style={{ borderColor: project.color, background: project.colorDim }}>
                <div className="pd-insight__label" style={{ color: project.color }}>
                  <span>◆</span> Key Insight
                </div>
                <p className="pd-insight__text">{pg.insight}</p>
              </div>

              {/* Progress bar */}
              <div className="pd-progress">
                <div className="pd-progress__bar">
                  <div
                    className="pd-progress__fill"
                    style={{ width: `${((chapter + 1) / total) * 100}%`, background: project.color }}
                  />
                </div>
                <span className="pd-progress__label" style={{ color: project.color }}>
                  {Math.round(((chapter + 1) / total) * 100)}% complete
                </span>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="pd-nav">
            <button
              className="pd-nav__btn pd-nav__btn--prev"
              onClick={() => goTo(chapter - 1)}
              disabled={chapter === 0}
            >
              ← Previous
            </button>

            {/* Dot navigation */}
            <div className="pd-nav__dots">
              {project.pages.map((_, i) => (
                <button
                  key={i}
                  className={`pd-nav__dot ${i === chapter ? "pd-nav__dot--active" : ""}`}
                  style={i === chapter ? { background: project.color, width: 28 } : {}}
                  onClick={() => goTo(i)}
                />
              ))}
            </div>

            {chapter < total - 1 ? (
              <button
                className="btn-primary pd-nav__btn pd-nav__btn--next"
                onClick={() => goTo(chapter + 1)}
                style={{ boxShadow: `0 0 24px ${project.color}50` }}
              >
                Next Chapter →
              </button>
            ) : (
              <button
                className="btn-primary pd-nav__btn pd-nav__btn--cta"
                onClick={() => setPage("contact")}
                style={{ background: project.color, boxShadow: `0 0 32px ${project.color}60` }}
              >
                Want This For Your Business? →
              </button>
            )}
          </div>
        </div>
      </div>

      <Footer setPage={setPage} />
    </div>
  );
}
