// src/App.jsx
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate, useNavigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import ProjectDetail from "./pages/ProjectDetail";
import Contact from "./pages/Contact";
import AdminLogin from "./pages/Adminlogin";
import AdminDashboard from "./pages/Admindashboard";
import "./styles/globals.css";
import "./styles/Toast.css";

/* ── Toast hook ── */
function useToast() {
  const [toasts, setToasts] = useState([]);
  const add = (msg, type = "success") => {
    const id = Date.now();
    setToasts(p => [...p, { id, msg, type }]);
    setTimeout(() => setToasts(p => p.filter(t => t.id !== id)), 4500);
  };
  const remove = id => setToasts(p => p.filter(t => t.id !== id));
  return { toasts, add, remove };
}

/* ── Toast UI ── */
function ToastContainer({ toasts, remove }) {
  return (
    <div className="toast-container">
      {toasts.map(t => (
        <div key={t.id} className={`toast toast--${t.type}`} onClick={() => remove(t.id)}>
          <span className="toast__icon">{t.type === "success" ? "✓" : "✕"}</span>
          {t.msg}
        </div>
      ))}
    </div>
  );
}

/* ── Protected route ── */
function ProtectedRoute({ children }) {
  const token = localStorage.getItem("bt_access");
  if (!token) return <Navigate to="/admin" replace />;
  return children;
}

/* ── Main site ── */
function MainSite() {
  const [page, setPage] = useState("home");
  // Stores the product id passed from Portfolio → Contact
  const [preselectedProduct, setPreselectedProduct] = useState(null);
  const { toasts, add: addToast, remove } = useToast();

  const isProject = page.startsWith("project:");
  const projectId = isProject ? page.replace("project:", "") : null;

  useEffect(() => { window.scrollTo({ top: 0, behavior: "instant" }); }, [page]);

  // Called from Portfolio's "Request This Product" button
  const handleRequestProduct = (productId) => {
    setPreselectedProduct(productId);
    setPage("contact");
  };

  // Clear preselectedProduct when user manually navigates away from contact
  const handleSetPage = (p) => {
    if (p !== "contact") setPreselectedProduct(null);
    setPage(p);
  };

  return (
    <>
      <Navbar page={isProject ? "portfolio" : page} setPage={handleSetPage} />
      <main>
        {page === "home" && (
          <Home setPage={handleSetPage} />
        )}
        {page === "portfolio" && (
          <Portfolio
            setPage={handleSetPage}
            onRequestProduct={handleRequestProduct}
          />
        )}
        {page === "contact" && (
          <Contact
            setPage={handleSetPage}
            addToast={addToast}
            preselectedProduct={preselectedProduct}
          />
        )}
        {isProject && (
          <ProjectDetail projectId={projectId} setPage={handleSetPage} />
        )}
      </main>
      <ToastContainer toasts={toasts} remove={remove} />
    </>
  );
}

/* ── Admin login page ── */
function AdminLoginPage() {
  const navigate = useNavigate();
  const token = localStorage.getItem("bt_access");
  useEffect(() => {
    if (token) navigate("/admin/dashboard", { replace: true });
  }, [token, navigate]);
  return (
    <AdminLogin onLogin={() => navigate("/admin/dashboard", { replace: true })} />
  );
}

/* ── Admin dashboard page ── */
function AdminDashboardPage() {
  const navigate = useNavigate();
  return (
    <AdminDashboard
      onLogout={() => {
        localStorage.removeItem("bt_access");
        localStorage.removeItem("bt_refresh");
        navigate("/admin", { replace: true });
      }}
    />
  );
}

/* ── Root ── */
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<MainSite />} />
        <Route path="/admin" element={<AdminLoginPage />} />
        <Route
          path="/admin/dashboard"
          element={
            <ProtectedRoute>
              <AdminDashboardPage />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}