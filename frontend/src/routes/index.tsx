import { Routes, Route, Navigate } from "react-router-dom";
import DashboardPage from "../pages/Dhasboard/views/DashboardPage";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/dashboard" />} />
      <Route path="/dashboard" element={<DashboardPage />} />
      {/* Rute lainnya bisa ditambah di sini */}
    </Routes>
  );
}
