// src/pages/AdminLogin.jsx
import { useState } from "react";
import "../styles/Adminlogin.css";

const API_BASE = import.meta.env.VITE_API_BASE || "http://localhost:8000";

export default function AdminLogin({ onLogin }) {
  const [form, setForm] = useState({ username: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [showPass, setShowPass] = useState(false);

  const set = (k, v) => setForm(p => ({ ...p, [k]: v }));

  const handleSubmit = async () => {
    if (!form.username || !form.password) {
      setError("Both fields are required.");
      return;
    }
    setLoading(true);
    setError("");
    try {
      const res = await fetch(`${API_BASE}/api/admin-portal/login/`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.detail || "Invalid credentials.");
      }
      const { access, refresh } = await res.json();
      localStorage.setItem("bt_access", access);
      localStorage.setItem("bt_refresh", refresh);
      onLogin();
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleKey = (e) => {
    if (e.key === "Enter") handleSubmit();
  };

  return (
    <div className="al-page">
      <div className="al-card">
        <div className="al-logo">
          <span className="al-logo__mark">B</span>
        </div>
        <p className="al-brand">Bermuda Tech</p>
        <h1 className="al-title">Admin Portal</h1>
        <p className="al-sub">Sign in to view client leads and inquiries.</p>

        {error && (
          <div className="al-error">
            <span className="al-error__icon">⚠</span>
            {error}
          </div>
        )}

        <div className="al-fields">
          <div className="al-field">
            <label className="al-label">Username</label>
            <input
              type="text"
              value={form.username}
              onChange={e => set("username", e.target.value)}
              onKeyDown={handleKey}
              placeholder="admin"
              className="al-input"
              autoComplete="username"
              autoFocus
            />
          </div>
          <div className="al-field">
            <label className="al-label">Password</label>
            <div className="al-pass-wrap">
              <input
                type={showPass ? "text" : "password"}
                value={form.password}
                onChange={e => set("password", e.target.value)}
                onKeyDown={handleKey}
                placeholder="••••••••"
                className="al-input al-input--pass"
                autoComplete="current-password"
              />
              <button
                className="al-pass-toggle"
                onClick={() => setShowPass(p => !p)}
                tabIndex={-1}
                type="button"
              >
                {showPass ? "Hide" : "Show"}
              </button>
            </div>
          </div>
        </div>

        <button
          className={`al-btn ${loading ? "al-btn--loading" : ""}`}
          onClick={handleSubmit}
          disabled={loading}
        >
          {loading ? "Signing in…" : "Sign In →"}
        </button>

        <p className="al-note">
          Restricted access. Bermuda Tech team only.
        </p>
      </div>
    </div>
  );
}