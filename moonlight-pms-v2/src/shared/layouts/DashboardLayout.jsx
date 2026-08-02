import { useState } from "react";
import { Outlet } from "react-router-dom";

import Sidebar from "@/shared/components/navigation/Sidebar";
import Header from "@/shared/components/layout/Header";

export default function DashboardLayout() {

    const [sidebarOpen, setSidebarOpen] = useState(true);

    return (

        <div className="flex h-screen bg-slate-100">

            <Sidebar open={sidebarOpen} />

            <div className="flex flex-1 flex-col overflow-hidden">

                <Header
                    onMenuClick={() => setSidebarOpen(prev => !prev)}
                />

                <main className="flex-1 overflow-auto p-6">
                    <Outlet />
                </main>

            </div>

        </div>

    );

}