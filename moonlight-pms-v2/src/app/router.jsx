import { Routes, Route, Navigate } from "react-router-dom";

import AuthLayout from "@/modules/auth/components/AuthLayout";
import LoginPage from "@/modules/auth/pages/Login";
import SignupPage from "@/modules/auth/pages/SignupPage";

import DashboardLayout from "@/shared/layouts/DashboardLayout";
import DashboardPage from "@/modules/dashboard/pages/DashboardPage";
import GuestListPage from "@/modules/guests/pages/GuestListPage";

export default function AppRouter() {
  return (
    <Routes>

      {/* ===================== */}
      {/* Authentication Routes */}
      {/* ===================== */}
      <Route element={<AuthLayout />}>
        <Route index element={<Navigate to="/login" replace />} />

        <Route
          path="/login"
          element={<LoginPage />}
        />

        <Route
          path="/signup"
          element={<SignupPage />}
        />

        {/* Optional: supports /auth/signup */}
        <Route
          path="/auth/signup"
          element={<SignupPage />}
        />

        {/* Optional: supports /auth/login */}
        <Route
          path="/auth/login"
          element={<LoginPage />}
        />
      </Route>

      {/* ===================== */}
      {/* Dashboard */}
      {/* ===================== */}
      <Route
        path="/dashboard"
        element={
          <DashboardLayout>
            <DashboardPage />
          </DashboardLayout>
        }
      />

      {/* ===================== */}
      {/* Guests */}
      {/* ===================== */}
      <Route
        path="/guests"
        element={
          <DashboardLayout>
            <GuestListPage />
          </DashboardLayout>
        }
      />

      {/* ===================== */}
      {/* 404 */}
      {/* ===================== */}
      <Route
        path="*"
        element={<Navigate to="/login" replace />}
      />

    </Routes>
  );
}