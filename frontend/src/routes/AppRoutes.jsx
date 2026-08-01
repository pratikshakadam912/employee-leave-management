import { Navigate, Route, Routes } from "react-router-dom";

import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import NotFound from "../pages/NotFound";
import Dashboard from "../pages/employee/Dashboard";
import ApplyLeave from "../pages/employee/ApplyLeave";
import LeaveHistory from "../pages/employee/LeaveHistory";
import Notifications from "../pages/employee/Notifications";
import Profile from "../pages/employee/Profile";
import Settings from "../pages/employee/Settings";

export default function AppRoutes() {
  return (
    <Routes>
      {/* Redirect to Login */}
      <Route path="/" element={<Navigate to="/login" replace />} />

      {/* Authentication */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      <Route path="/employee/dashboard" element={<Dashboard />} />
      <Route path="/employee/dashboard" element={<Dashboard />} />

      <Route path="/employee/apply" element={<ApplyLeave />} />

      <Route path="/employee/history" element={<LeaveHistory />} />

      <Route path="/employee/notifications" element={<Notifications />} />

      <Route path="/employee/profile" element={<Profile />} />

      <Route path="/employee/settings" element={<Settings />} />

      {/* 404 */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
