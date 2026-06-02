// How to wire AdminLogin and AdminDashboard into your existing App.jsx
// Add these to your existing page routing logic:

import AdminLogin     from "./pages/AdminLogin";
import AdminDashboard from "./pages/AdminDashboard";

// Inside your App component, add this state:
const [adminToken, setAdminToken] = useState(
  () => localStorage.getItem("bt_access") || null
);

// Add these two cases to wherever you handle your setPage / page routing.
// Your app already has something like:
//   if (page === "contact") return <Contact ... />
// Add these alongside:

if (page === "admin") {
  if (!adminToken) {
    return <AdminLogin onLogin={(token) => setAdminToken(token)} />;
  }
  return (
    <AdminDashboard
      onLogout={() => {
        setAdminToken(null);
        setPage("home");
      }}
    />
  );
}

// To navigate to the admin panel, call:
//   setPage("admin")
// For example, add a hidden link in your Footer:
//   <span onClick={() => setPage("admin")} style={{ opacity: 0.2, cursor: "pointer", fontSize: 11 }}>
//     Admin
//   </span>