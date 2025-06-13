import React, { useState } from "react";
import bcrypt from "bcryptjs";
import { HashRouter as Router, Routes, Route, Navigate, useNavigate } from "react-router-dom";
import Login from "./components/Login";
import AdminDashboard from "./components/AdminDashboard";
import StudentDashboard from "./components/StudentDashboard";
import LandingPage from "./components/LandingPage";
import users from "./Data/users.json";


function LoginWrapper({ setLoggedInUser }) {
  const navigate = useNavigate();

  const handleLogin = async (email, password) => {
    const user = users.find((u) => u.email === email);
    if (!user) {
      alert("Invalid credentials");
      return;
    }

    const passwordMatch = await bcrypt.compare(password, user.password);
    if (passwordMatch) {
      setLoggedInUser(user);
      if (user.userType === "admin") {
        navigate("/admin");
      } else {
        navigate("/student");
      }
    } else {
      alert("Invalid credentials");
    }
  };

  return <Login onLogin={handleLogin} />;
}

function App() {
  const [loggedInUser, setLoggedInUser] = useState(null);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />

        <Route path="/login" element={<LoginWrapper setLoggedInUser={setLoggedInUser} />} />

        <Route
          path="/admin"
          element={
            loggedInUser?.userType === "admin" ? (
              <AdminDashboard users={users} onLogout={() => setLoggedInUser(null)} />
            ) : (
              <Navigate to="/" replace />
            )
          }
        />

        <Route
          path="/student"
          element={
            loggedInUser?.userType === "student" ? (
              <StudentDashboard user={loggedInUser} onLogout={() => setLoggedInUser(null)} />
            ) : (
              <Navigate to="/" replace />
            )
          }
        />

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
