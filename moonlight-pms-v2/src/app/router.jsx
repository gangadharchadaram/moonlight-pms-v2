import { Routes, Route, Navigate } from "react-router-dom";

import AuthLayout from "@/modules/auth/components/AuthLayout";
import LoginPage from "@/modules/auth/pages/Login";
import SignupPage from "@/modules/auth/pages/SignupPage";

import DashboardLayout from "@/shared/layouts/DashboardLayout";

import DashboardPage from "@/modules/dashboard/pages/DashboardPage";
import GuestListPage from "@/modules/guests/pages/GuestListPage";
import RoomsPage from "@/modules/rooms/pages/RoomsPage";

export default function AppRouter() {
    return (
        <Routes>

            {/* ========================= */}
            {/* Authentication */}
            {/* ========================= */}

            <Route element={<AuthLayout />}>

                <Route
                    path="/login"
                    element={<LoginPage />}
                />

                <Route
                    path="/signup"
                    element={<SignupPage />}
                />

                <Route
                    path="/auth/login"
                    element={<LoginPage />}
                />

                <Route
                    path="/auth/signup"
                    element={<SignupPage />}
                />

            </Route>

            {/* ========================= */}
            {/* Dashboard Layout */}
            {/* ========================= */}

            <Route element={<DashboardLayout />}>

                <Route
                    path="/dashboard"
                    element={<DashboardPage />}
                />

                <Route
                    path="/guests"
                    element={<GuestListPage />}
                />

                <Route
                    path="/rooms"
                    element={<RoomsPage />}
                />

            </Route>

            {/* ========================= */}
            {/* Redirects */}
            {/* ========================= */}

            <Route
                path="/"
                element={<Navigate to="/dashboard" replace />}
            />

            <Route
                path="*"
                element={<Navigate to="/dashboard" replace />}
            />

        </Routes>
    );
}