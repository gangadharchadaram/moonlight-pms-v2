import { Routes, Route, Navigate } from "react-router-dom";

import AuthLayout from "@/modules/auth/components/AuthLayout";
import LoginPage from "@/modules/auth/pages/Login";
import SignupPage from "@/modules/auth/pages/SignupPage";

import DashboardLayout from "@/shared/layouts/DashboardLayout";

import DashboardPage from "@/modules/dashboard/pages/DashboardPage";
import GuestListPage from "@/modules/guests/pages/GuestListPage";
import RoomsPage from "@/modules/rooms/pages/RoomsPage";

import ProtectedRoute from "@/router/ProtectedRoute";
import PublicRoute from "@/router/PublicRoute";

export default function AppRouter() {
    return (
        <Routes>

            {/* ========================= */}
            {/* Public Routes */}
            {/* ========================= */}

            <Route element={<PublicRoute />}>
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
            </Route>

            {/* ========================= */}
            {/* Protected Routes */}
            {/* ========================= */}

            <Route element={<ProtectedRoute />}>
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

                    {/* Future Modules */}

                    <Route
                        path="/reservations"
                        element={<div>Reservations</div>}
                    />

                    <Route
                        path="/frontdesk"
                        element={<div>Front Desk</div>}
                    />

                    <Route
                        path="/housekeeping"
                        element={<div>Housekeeping</div>}
                    />

                    <Route
                        path="/billing"
                        element={<div>Billing</div>}
                    />

                    <Route
                        path="/reports"
                        element={<div>Reports</div>}
                    />

                    <Route
                        path="/settings"
                        element={<div>Settings</div>}
                    />

                </Route>
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