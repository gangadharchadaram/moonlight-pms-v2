import {
    LayoutDashboard,
    Users,
    BedDouble,
    CalendarDays,
    ClipboardList,
    Sparkles,
    Receipt,
    BarChart3,
    Settings,
    UserCog
} from "lucide-react";

import DashboardPage from "@/modules/dashboard/pages/DashboardPage";
import GuestListPage from "@/modules/guests/pages/GuestListPage";
import RoomsPage from "@/modules/rooms/pages/RoomsPage";

export const appRoutes = [

    {
        path: "/dashboard",
        title: "Dashboard",
        icon: LayoutDashboard,
        element: <DashboardPage />,
        showInSidebar: true
    },

    {
        path: "/guests",
        title: "Guests",
        icon: Users,
        element: <GuestListPage />,
        showInSidebar: true
    },

    {
        path: "/rooms",
        title: "Rooms",
        icon: BedDouble,
        element: <RoomsPage />,
        showInSidebar: true
    },

    {
        path: "/reservations",
        title: "Reservations",
        icon: CalendarDays,
        element: <div>Reservations</div>,
        showInSidebar: true
    },

    {
        path: "/frontdesk",
        title: "Front Desk",
        icon: ClipboardList,
        element: <div>Front Desk</div>,
        showInSidebar: true
    },

    {
        path: "/housekeeping",
        title: "Housekeeping",
        icon: Sparkles,
        element: <div>Housekeeping</div>,
        showInSidebar: true
    },

    {
        path: "/billing",
        title: "Billing",
        icon: Receipt,
        element: <div>Billing</div>,
        showInSidebar: true
    },

    {
        path: "/reports",
        title: "Reports",
        icon: BarChart3,
        element: <div>Reports</div>,
        showInSidebar: true
    },

    {
        path: "/settings",
        title: "Settings",
        icon: Settings,
        element: <div>Settings</div>,
        showInSidebar: true
    },

    {
        path: "/users",
        title: "Users",
        icon: UserCog,
        element: <div>Users</div>,
        showInSidebar: false
    }

];