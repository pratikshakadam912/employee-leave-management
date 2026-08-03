import { Navigate, Route, Routes } from "react-router-dom";

import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import NotFound from "../pages/NotFound";

// Employee
import Dashboard from "../pages/employee/Dashboard";
import ApplyLeave from "../pages/employee/ApplyLeave";
import LeaveHistory from "../pages/employee/LeaveHistory";
import Notifications from "../pages/employee/Notifications";
import Profile from "../pages/employee/Profile";
import Settings from "../pages/employee/Settings";

// Manager
import ManagerDashboard from "../pages/manager/Dashboard";
import LeaveRequests from "../pages/manager/LeaveRequests";
export default function AppRoutes() {
  return (
    <Routes>
      {/* Redirect */}
      <Route path="/" element={<Navigate to="/login" replace />} />

      {/* Authentication */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      {/* ================= EMPLOYEE ================= */}

      <Route path="/employee/dashboard" element={<Dashboard />} />

      <Route path="/employee/apply" element={<ApplyLeave />} />

      <Route path="/employee/history" element={<LeaveHistory />} />

      <Route path="/employee/notifications" element={<Notifications />} />

      <Route path="/employee/profile" element={<Profile />} />

      <Route path="/employee/settings" element={<Settings />} />

      {/* ================= MANAGER ================= */}

      <Route path="/manager/dashboard" element={<ManagerDashboard />} />
      <Route path="/manager/leave-requests" element={<LeaveRequests />} />

      {/*
      
      <Route path="/manager/employees" element={<Employees />} />
      <Route path="/manager/notifications" element={<ManagerNotifications />} />
      <Route path="/manager/profile" element={<ManagerProfile />} />
      <Route path="/manager/settings" element={<ManagerSettings />} />
      */}

      {/* 404 */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
