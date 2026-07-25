import { useState } from "react";
import Sidebar from "@/shared/components/layout/Sidebar";
import Header from "@/shared/components/layout/Header";

export default function DashboardLayout({ children }) {

  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="flex h-screen bg-slate-100">

      <Sidebar
        open={sidebarOpen}
      />

      <div className="flex flex-1 flex-col overflow-hidden">

        <Header
          onMenuClick={() => setSidebarOpen(prev => !prev)}
        />

        <main className="flex-1 overflow-y-auto p-6">
          {children}
        </main>

      </div>

    </div>
  );
}