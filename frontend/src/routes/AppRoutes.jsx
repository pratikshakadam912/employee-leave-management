import { Navigate, Route, Routes } from "react-router-dom";

import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import NotFound from "../pages/NotFound";

export default function AppRoutes() {
  return (
    <Routes>
      {/* Redirect to Login */}
      <Route path="/" element={<Navigate to="/login" replace />} />

      {/* Authentication */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      {/* 404 */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
