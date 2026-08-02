import {
    LayoutDashboard,
    BriefcaseBusiness,
    Hotel,
    Receipt,
    BarChart3,
    Settings,
    Users,
    CalendarDays,
    ClipboardList,
    BedDouble,
    Database,
    UserCog,
    ShieldCheck
} from "lucide-react";

const menu = [

    {
        title: "Dashboard",
        icon: LayoutDashboard,
        path: "/dashboard"
    },

    {
        title: "Front Office",
        icon: BriefcaseBusiness,
        children: [
            {
                title: "Guests",
                path: "/guests"
            },
            {
                title: "Reservations",
                path: "/reservations"
            },
            {
                title: "Front Desk",
                path: "/frontdesk"
            }
        ]
    },

    {
        title: "Inventory",
        icon: Hotel,
        children: [
            {
                title: "Rooms",
                path: "/rooms"
            },
            {
                title: "Room Types",
                path: "/room-types"
            },
            {
                title: "Housekeeping",
                path: "/housekeeping"
            }
        ]
    },

    {
        title: "Finance",
        icon: Receipt,
        children: [
            {
                title: "Billing",
                path: "/billing"
            }
        ]
    },

    {
        title: "Reports",
        icon: BarChart3,
        children: [
            {
                title: "Reports",
                path: "/reports"
            }
        ]
    },

    {
        title: "Administration",
        icon: Settings,
        children: [
            {
                title: "Masters",
                path: "/masters"
            },
            {
                title: "Users",
                path: "/users"
            },
            {
                title: "Roles",
                path: "/roles"
            },
            {
                title: "Settings",
                path: "/settings"
            }
        ]
    }

];

export default menu;