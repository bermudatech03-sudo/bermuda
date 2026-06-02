// src/pages/AdminDashboard.jsx
import { useState, useEffect, useCallback } from "react";
import "../styles/AdminDashboard.css";

const API_BASE = import.meta.env.VITE_API_BASE || "http://localhost:8000";

const PRODUCT_NAMES = {
  "gymdesk-management": "GymDesk",
  "detailing-crm":      "Detailing CRM",
  "nexus-crm":          "NexusCRM",
  "studenttracker-crm": "StudentTracker CRM",
  "machinemart-ecom":   "MachineMart",
  "dbapage-portal":     "DBAPage",
  "dtechland-digital":  "Techland Solutions",
  "edupulse-lms":       "EduPulse LMS",
};

function timeAgo(dateStr) {
  const diff = Math.floor((Date.now() - new Date(dateStr)) / 1000);
  if (diff < 60)    return `${diff}s ago`;
  if (diff < 3600)  return `${Math.floor(diff / 60)}m ago`;
  if (diff < 86400) return `${Math.floor(diff / 3600)}h ago`;
  return `${Math.floor(diff / 86400)}d ago`;
}

function formatDate(dateStr) {
  const d = new Date(dateStr);
  return d.toLocaleDateString("en-IN", {
    day:   "2-digit",
    month: "short",
    year:  "numeric",
  });
}

function formatDateTime(dateStr) {
  const d = new Date(dateStr);
  return d.toLocaleString("en-IN", {
    day:    "2-digit",
    month:  "short",
    year:   "numeric",
    hour:   "2-digit",
    minute: "2-digit",
  });
}

// Returns "YYYY-MM-DD" in local time for date input comparison
function toLocalDateStr(dateStr) {
  const d = new Date(dateStr);
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
}

function Badge({ value, label }) {
  return (
    <div className="ad-badge">
      <span className="ad-badge__val">{value}</span>
      <span className="ad-badge__lbl">{label}</span>
    </div>
  );
}

function LeadRow({ lead, onSelect, selected }) {
  return (
    <tr
      className={`ad-row ${!lead.is_read ? "ad-row--unread" : ""} ${selected ? "ad-row--selected" : ""}`}
      onClick={() => onSelect(lead)}
    >
      <td className="ad-cell ad-cell--name">
        <div className="ad-cell__name">
          {!lead.is_read && <span className="ad-dot" />}
          {lead.name}
        </div>
        <div className="ad-cell__email">{lead.email}</div>
      </td>
      <td className="ad-cell ad-cell--phone">{lead.phone}</td>
      <td className="ad-cell ad-cell--service">
        <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
          {lead.service
            ? <span className="ad-pill">{lead.service}</span>
            : <span className="ad-muted">—</span>
          }
          {lead.service === "Ready Product" && lead.selected_product && (
            <span className="ad-pill ad-pill--product">
              {PRODUCT_NAMES[lead.selected_product] || lead.selected_product}
            </span>
          )}
        </div>
      </td>
      <td className="ad-cell ad-cell--budget">
        {lead.budget || <span className="ad-muted">—</span>}
      </td>
      <td className="ad-cell ad-cell--date">
        <div className="ad-cell__date">{formatDate(lead.created_at)}</div>
        <div className="ad-cell__timeago">{timeAgo(lead.created_at)}</div>
      </td>
    </tr>
  );
}

function LeadDetail({ lead, onClose }) {
  const isReadyProduct = lead.service === "Ready Product";
  const productName = lead.selected_product
    ? (PRODUCT_NAMES[lead.selected_product] || lead.selected_product)
    : null;

  const fields = [
    { l: "Email",    v: lead.email,   href: `mailto:${lead.email}` },
    { l: "Phone",    v: lead.phone,   href: `tel:${lead.phone}` },
    { l: "Company",  v: lead.company  || "—" },
    { l: "Service",  v: lead.service  || "—" },
    ...(isReadyProduct
      ? [{ l: "Requested Product", v: productName || "—", highlight: true }]
      : []
    ),
    { l: "Budget",   v: lead.budget   || "—" },
    { l: "Timeline", v: lead.timeline || "—" },
    { l: "Received", v: formatDateTime(lead.created_at) },
  ];

  return (
    <div className="ad-detail">
      <div className="ad-detail__header">
        <div>
          <h3 className="ad-detail__name">{lead.name}</h3>
          <p className="ad-detail__time">{formatDateTime(lead.created_at)}</p>
        </div>
        <button className="ad-detail__close" onClick={onClose}>✕</button>
      </div>

      <div className="ad-detail__grid">
        {fields.map(({ l, v, href, highlight }) => (
          <div key={l} className="ad-detail__field">
            <span className="ad-detail__label">{l}</span>
            {href && v !== "—"
              ? <a href={href} className="ad-detail__val ad-detail__val--link">{v}</a>
              : <span className={`ad-detail__val ${highlight ? "ad-detail__val--highlight" : ""}`}>{v}</span>
            }
          </div>
        ))}
      </div>

      <div className="ad-detail__message">
        <span className="ad-detail__label">Message</span>
        <p className="ad-detail__body">{lead.message}</p>
      </div>

      <div className="ad-detail__actions">
        <a href={`mailto:${lead.email}`} className="btn-primary ad-detail__reply">
          Reply via Email →
        </a>
        {lead.is_read && <span className="ad-detail__read-badge">✓ Read</span>}
      </div>
    </div>
  );
}

export default function AdminDashboard({ onLogout }) {
  const [leads, setLeads]       = useState([]);
  const [loading, setLoading]   = useState(true);
  const [error, setError]       = useState("");
  const [selected, setSelected] = useState(null);
  const [filter, setFilter]     = useState("all");
  const [search, setSearch]     = useState("");
  const [dateFrom, setDateFrom] = useState("");
  const [dateTo, setDateTo]     = useState("");

  const token = localStorage.getItem("bt_access");

  const fetchLeads = useCallback(async () => {
    setLoading(true);
    setError("");
    try {
      const res = await fetch(`${API_BASE}/api/admin-portal/leads/`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (res.status === 401) { onLogout(); return; }
      if (!res.ok) throw new Error("Failed to fetch leads.");
      const data = await res.json();
      setLeads(data);
    } catch (e) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  }, [token, onLogout]);

  useEffect(() => { fetchLeads(); }, [fetchLeads]);

  const markReadInDB = useCallback(async (id) => {
    setLeads(prev => prev.map(l => l.id === id ? { ...l, is_read: true } : l));
    setSelected(prev => prev?.id === id ? { ...prev, is_read: true } : prev);
    try {
      const res = await fetch(`${API_BASE}/api/admin-portal/leads/${id}/`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ is_read: true }),
      });
      if (!res.ok) {
        setLeads(prev => prev.map(l => l.id === id ? { ...l, is_read: false } : l));
        setSelected(prev => prev?.id === id ? { ...prev, is_read: false } : prev);
      }
    } catch {
      setLeads(prev => prev.map(l => l.id === id ? { ...l, is_read: false } : l));
      setSelected(prev => prev?.id === id ? { ...prev, is_read: false } : prev);
    }
  }, [token]);

  const handleSelectLead = useCallback((lead) => {
    setSelected(lead);
    if (!lead.is_read) markReadInDB(lead.id);
  }, [markReadInDB]);

  const handleLogout = () => {
    localStorage.removeItem("bt_access");
    localStorage.removeItem("bt_refresh");
    onLogout();
  };

  const clearDateFilter = () => {
    setDateFrom("");
    setDateTo("");
  };

  // Quick date presets
  const applyPreset = (preset) => {
    const today = new Date();
    const pad = (n) => String(n).padStart(2, "0");
    const fmt = (d) => `${d.getFullYear()}-${pad(d.getMonth()+1)}-${pad(d.getDate())}`;

    if (preset === "today") {
      setDateFrom(fmt(today));
      setDateTo(fmt(today));
    } else if (preset === "yesterday") {
      const y = new Date(today);
      y.setDate(y.getDate() - 1);
      setDateFrom(fmt(y));
      setDateTo(fmt(y));
    } else if (preset === "week") {
      const w = new Date(today);
      w.setDate(w.getDate() - 6);
      setDateFrom(fmt(w));
      setDateTo(fmt(today));
    } else if (preset === "month") {
      const m = new Date(today);
      m.setDate(1);
      setDateFrom(fmt(m));
      setDateTo(fmt(today));
    }
  };

  // Stats
  const total  = leads.length;
  const unread = leads.filter(l => !l.is_read).length;
  const today  = leads.filter(l => toLocalDateStr(l.created_at) === toLocalDateStr(new Date().toISOString())).length;

  // Filter + search + date
  const visible = leads
    .filter(l => filter === "all" ? true : !l.is_read)
    .filter(l => {
      if (!search) return true;
      const q = search.toLowerCase();
      return (
        l.name.toLowerCase().includes(q) ||
        l.email.toLowerCase().includes(q) ||
        l.phone.includes(q) ||
        (l.company || "").toLowerCase().includes(q) ||
        (l.service || "").toLowerCase().includes(q) ||
        (PRODUCT_NAMES[l.selected_product] || "").toLowerCase().includes(q)
      );
    })
    .filter(l => {
      const d = toLocalDateStr(l.created_at);
      if (dateFrom && d < dateFrom) return false;
      if (dateTo   && d > dateTo)   return false;
      return true;
    });

  const dateFilterActive = dateFrom || dateTo;

  return (
    <div className="ad-page">
      <header className="ad-topbar">
        <div className="ad-topbar__left">
          <span className="ad-topbar__logo">B</span>
          <span className="ad-topbar__title">Bermuda Tech — Admin</span>
        </div>
        <div className="ad-topbar__right">
          <button className="ad-refresh" onClick={fetchLeads}>↺ Refresh</button>
          <button className="ad-logout" onClick={handleLogout}>Sign Out</button>
        </div>
      </header>

      <div className="ad-body">

        {/* Stats */}
        <div className="ad-stats">
          <Badge value={total}  label="Total Leads" />
          <Badge value={unread} label="Unread" />
          <Badge value={today}  label="Today" />
          {dateFilterActive && (
            <Badge value={visible.length} label="Filtered" />
          )}
        </div>

        {/* Toolbar row 1 — read filter + search */}
        <div className="ad-toolbar">
          <div className="ad-filters">
            {[["all", "All"], ["unread", "Unread"]].map(([v, l]) => (
              <button
                key={v}
                className={`ad-filter ${filter === v ? "ad-filter--active" : ""}`}
                onClick={() => setFilter(v)}
              >
                {l}{v === "unread" && unread > 0 && (
                  <span className="ad-filter__count">{unread}</span>
                )}
              </button>
            ))}
          </div>
          <input
            type="text"
            className="ad-search"
            placeholder="Search by name, email, product…"
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
        </div>

        {/* Toolbar row 2 — date filter */}
        <div className="ad-date-bar">
          <span className="ad-date-bar__label">Date Range</span>

          {/* Quick presets */}
          <div className="ad-date-presets">
            {[
              ["today",     "Today"],
              ["yesterday", "Yesterday"],
              ["week",      "Last 7 days"],
              ["month",     "This month"],
            ].map(([key, label]) => (
              <button
                key={key}
                className="ad-date-preset"
                onClick={() => applyPreset(key)}
              >
                {label}
              </button>
            ))}
          </div>

          {/* Manual from/to */}
          <div className="ad-date-inputs">
            <div className="ad-date-field">
              <label className="ad-date-label">From</label>
              <input
                type="date"
                className="ad-date-input"
                value={dateFrom}
                onChange={e => setDateFrom(e.target.value)}
              />
            </div>
            <span className="ad-date-sep">→</span>
            <div className="ad-date-field">
              <label className="ad-date-label">To</label>
              <input
                type="date"
                className="ad-date-input"
                value={dateTo}
                onChange={e => setDateTo(e.target.value)}
              />
            </div>
          </div>

          {dateFilterActive && (
            <button className="ad-date-clear" onClick={clearDateFilter}>
              ✕ Clear
            </button>
          )}
        </div>

        {/* Main area */}
        <div className={`ad-main ${selected ? "ad-main--split" : ""}`}>
          <div className="ad-table-wrap">
            {loading && <div className="ad-state">Loading leads…</div>}
            {error && (
              <div className="ad-state ad-state--error">
                {error} <button onClick={fetchLeads}>Retry</button>
              </div>
            )}
            {!loading && !error && visible.length === 0 && (
              <div className="ad-state">
                {search || dateFilterActive ? "No leads match your filters." : "No leads yet."}
              </div>
            )}
            {!loading && !error && visible.length > 0 && (
              <table className="ad-table">
                <thead>
                  <tr className="ad-thead-row">
                    <th className="ad-th">Name / Email</th>
                    <th className="ad-th">Phone</th>
                    <th className="ad-th">Service / Product</th>
                    <th className="ad-th">Budget</th>
                    <th className="ad-th">Date Received</th>
                  </tr>
                </thead>
                <tbody>
                  {visible.map(l => (
                    <LeadRow
                      key={l.id}
                      lead={l}
                      selected={selected?.id === l.id}
                      onSelect={handleSelectLead}
                    />
                  ))}
                </tbody>
              </table>
            )}
          </div>

          {selected && (
            <LeadDetail
              lead={selected}
              onClose={() => setSelected(null)}
            />
          )}
        </div>

      </div>
    </div>
  );
}