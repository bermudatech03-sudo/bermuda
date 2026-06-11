// src/pages/Contact.jsx
import { useState, useEffect } from "react";
import Footer from "../components/Footer";
import "../styles/Contact.css";

const API_BASE = import.meta.env.VITE_API_BASE || "http://localhost:8000";

const SERVICES = [
  "Web Applications",
  "Mobile Apps",
  "Business Websites",
  "CRM & ERP Systems",
  "E-Commerce Platforms",
  "UI/UX Design",
  "Ready Product",
  "Not Sure Yet",
];

const PRODUCTS = [
  { id: "gymdesk-management",  title: "GymDesk" },
  { id: "detailing-crm",       title: "Detailing CRM" },
  { id: "nexus-crm",           title: "NexusCRM" },
  { id: "studenttracker-crm",  title: "StudentTracker CRM" },
  { id: "machinemart-ecom",    title: "MachineMart" },
  { id: "dbapage-portal",      title: "DBAPage" },
  { id: "dtechland-digital",   title: "Techland Solutions" },
  { id: "edupulse-lms",        title: "EduPulse LMS" },
];

async function submitLead(data) {
  const res = await fetch(`${API_BASE}/api/leads/`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    throw new Error(JSON.stringify(err));
  }
}

export default function Contact({ setPage, addToast, preselectedProduct }) {
  const isReadyProduct = !!preselectedProduct;

  const [form, setForm] = useState({
    name:            "",
    email:           "",
    phone:           "",
    company:         "",
    service:         isReadyProduct ? "Ready Product" : "",
    budget:          isReadyProduct ? "Product Price" : "",
    timeline:        isReadyProduct ? "Less than a week" : "",
    message:         "",
    selected_product: preselectedProduct || "",
  });
  const [loading, setLoading] = useState(false);
  const [sent,    setSent]    = useState(false);

  useEffect(() => {
    if (preselectedProduct) {
      setForm(p => ({
        ...p,
        service:          "Ready Product",
        budget:           "Product Price",
        timeline:         "Less than a week",
        selected_product: preselectedProduct,
      }));
    }
  }, [preselectedProduct]);

  const set = (k, v) => {
    setForm(p => {
      const next = { ...p, [k]: v };
      if (k === "service") {
        if (v === "Ready Product") {
          next.budget   = "Product Price";
          next.timeline = "Less than a week";
        } else {
          if (p.budget   === "Product Price")    next.budget   = "";
          if (p.timeline === "Less than a week") next.timeline = "";
          next.selected_product = "";
        }
      }
      return next;
    });
  };

  const handleSubmit = async () => {
    if (!form.name || !form.email || !form.phone || !form.message) {
      addToast("Please fill all required fields.", "error");
      return;
    }
    if (form.service === "Ready Product" && !form.selected_product) {
      addToast("Please select a product.", "error");
      return;
    }
    setLoading(true);
    try {
      await submitLead(form);
      setSent(true);
    } catch {
      addToast("Submission failed. Email us at bermudatech03@gmail.com", "error");
    } finally {
      setLoading(false);
    }
  };

  const isReady = form.service === "Ready Product";

  if (sent) return (
    <div className="contact-success" role="status" aria-live="polite">
      <div className="contact-success__card">
        <div className="contact-success__icon" aria-hidden="true">✓</div>
        <h2 className="contact-success__title">MESSAGE RECEIVED.</h2>
        <p className="contact-success__desc">
          Your message is with our team. Expect a response within{" "}
          <strong>4 business hours</strong>. We'll send a confirmation to your email shortly.
        </p>
        <button className="btn-outline" onClick={() => setSent(false)}>
          Send Another Message
        </button>
      </div>
    </div>
  );

  return (
    <div className="contact-page">
      <section className="contact-hero" aria-labelledby="contact-heading">
        <div className="contact-hero__glow" aria-hidden="true" />
        <div className="section-inner contact-hero__inner">

          {/* Left info column */}
          <div className="contact-hero__left">
            <div className="label-pill"><span className="dot" aria-hidden="true" />Get in Touch</div>
            <h1 id="contact-heading" className="contact-hero__title">
              LET'S BUILD<br />
              <span className="accent">SOMETHING</span><br />
              GREAT.
            </h1>
            <p className="contact-hero__sub">
              Every great product starts with a conversation. Tell us what you're building
              and we'll show you how we make it exceptional.
            </p>
            <address className="contact-info" aria-label="Contact information">
              {[
                { icon: "📞", l: "Phone",    v: "+91 97907 28732 - Vishva Sen B", href: "tel:+919790728732" },
                { icon: "📧", l: "Email",    v: "bermudatech03@gmail.com",         href: "mailto:bermudatech03@gmail.com" },
                { icon: "📍", l: "Office",   v: "NO 114/75 KOTHAVAL CHAVADI STREET WEST SAIDAPET ,Saidapet Chennai Tamil Nadu 600015" },
                { icon: "⏰", l: "Response", v: "Within 4 business hours" },
              ].map((c, i) => (
                <div key={i} className="contact-info__item">
                  <div className="contact-info__icon" aria-hidden="true">{c.icon}</div>
                  <div>
                    <div className="contact-info__label">{c.l}</div>
                    {c.href
                      ? <a href={c.href} className="contact-info__val">{c.v}</a>
                      : <div className="contact-info__val">{c.v}</div>
                    }
                  </div>
                </div>
              ))}
            </address>
          </div>

          {/* Right form column */}
          <div className="contact-form-wrap">
            <form
              className="contact-form"
              onSubmit={e => { e.preventDefault(); handleSubmit(); }}
              noValidate
              aria-label={isReady ? "Request a ready product" : "Tell us about your project"}
            >
              <h2 className="contact-form__title">
                {isReady ? "Request This Product" : "Tell Us About Your Project"}
              </h2>

              {/* Name / Email / Phone / Company */}
              <div className="contact-form__grid">
                {[
                  { l: "Full Name",     k: "name",    t: "text",  ph: "John Smith",         id: "cf-name",    ac: "name",         req: true  },
                  { l: "Email Address", k: "email",   t: "email", ph: "john@company.com",   id: "cf-email",   ac: "email",        req: true  },
                  { l: "Phone Number",  k: "phone",   t: "tel",   ph: "+91 98765 43210",    id: "cf-phone",   ac: "tel",          req: true  },
                  { l: "Company Name",  k: "company", t: "text",  ph: "Your company",       id: "cf-company", ac: "organization", req: false },
                ].map(f => (
                  <div key={f.k} className="contact-form__field">
                    <label className="contact-form__label" htmlFor={f.id}>
                      {f.l}{f.req && <span aria-hidden="true"> *</span>}
                    </label>
                    <input
                      id={f.id}
                      name={f.k}
                      type={f.t}
                      value={form[f.k]}
                      onChange={e => set(f.k, e.target.value)}
                      placeholder={f.ph}
                      className="contact-form__input"
                      autoComplete={f.ac}
                      aria-required={f.req}
                    />
                  </div>
                ))}
              </div>

              {/* Service / Budget / Timeline */}
              <div className="contact-form__grid contact-form__grid--3">
                <div className="contact-form__field">
                  <label className="contact-form__label" htmlFor="cf-service">Service Needed</label>
                  <select
                    id="cf-service"
                    name="service"
                    value={form.service}
                    onChange={e => set("service", e.target.value)}
                    className="contact-form__input contact-form__select"
                    autoComplete="off"
                  >
                    <option value="">Select…</option>
                    {SERVICES.map(s => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </div>

                <div className="contact-form__field">
                  <label className="contact-form__label" htmlFor="cf-budget">Budget Range</label>
                  {isReady ? (
                    <input
                      id="cf-budget"
                      name="budget"
                      type="text"
                      value="Product Price"
                      readOnly
                      className="contact-form__input contact-form__input--readonly"
                      aria-readonly="true"
                    />
                  ) : (
                    <select
                      id="cf-budget"
                      name="budget"
                      value={form.budget}
                      onChange={e => set("budget", e.target.value)}
                      className="contact-form__input contact-form__select"
                    >
                      <option value="">Select…</option>
                      {["₹50K – ₹2L","₹2L – ₹5L","₹5L – ₹15L","₹15L – ₹50L","₹50L+"].map(b => (
                        <option key={b} value={b}>{b}</option>
                      ))}
                    </select>
                  )}
                </div>

                <div className="contact-form__field">
                  <label className="contact-form__label" htmlFor="cf-timeline">Timeline</label>
                  {isReady ? (
                    <input
                      id="cf-timeline"
                      name="timeline"
                      type="text"
                      value="Less than a week"
                      readOnly
                      className="contact-form__input contact-form__input--readonly"
                      aria-readonly="true"
                    />
                  ) : (
                    <select
                      id="cf-timeline"
                      name="timeline"
                      value={form.timeline}
                      onChange={e => set("timeline", e.target.value)}
                      className="contact-form__input contact-form__select"
                    >
                      <option value="">Select…</option>
                      {["ASAP (< 1 month)","1–3 months","3–6 months","6+ months"].map(t => (
                        <option key={t} value={t}>{t}</option>
                      ))}
                    </select>
                  )}
                </div>
              </div>

              {/* Product selector — only shown when Ready Product */}
              {isReady && (
                <div className="contact-form__field contact-form__field--product">
                  <label className="contact-form__label" htmlFor="cf-product">
                    Select Product<span aria-hidden="true"> *</span>
                  </label>
                  <select
                    id="cf-product"
                    name="selected_product"
                    value={form.selected_product}
                    onChange={e => set("selected_product", e.target.value)}
                    className="contact-form__input contact-form__select contact-form__select--product"
                    aria-required="true"
                  >
                    <option value="">Choose a product…</option>
                    {PRODUCTS.map(p => (
                      <option key={p.id} value={p.id}>{p.title}</option>
                    ))}
                  </select>
                </div>
              )}

              {/* Message */}
              <div className="contact-form__field">
                <label className="contact-form__label" htmlFor="cf-message">
                  Project Description<span aria-hidden="true"> *</span>
                </label>
                <textarea
                  id="cf-message"
                  name="message"
                  value={form.message}
                  onChange={e => set("message", e.target.value)}
                  placeholder={
                    isReady
                      ? "Tell us about your business, any customisations you need, or questions about the product…"
                      : "Describe your project, key features, and any specific challenges you're trying to solve..."
                  }
                  className="contact-form__input contact-form__textarea"
                  rows={5}
                  aria-required="true"
                />
              </div>

              <button
                type="submit"
                className={`btn-primary contact-form__submit ${loading ? "contact-form__submit--loading" : ""}`}
                disabled={loading}
                aria-busy={loading}
              >
                {loading ? "Sending…" : isReady ? "Request Product →" : "Send Message →"}
              </button>
              <p className="contact-form__note">
                Your details are kept confidential. We'll never share your information.
              </p>
            </form>
          </div>

        </div>
      </section>
      <Footer setPage={setPage} />
    </div>
  );
}
