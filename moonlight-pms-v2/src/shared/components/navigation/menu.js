import {
  LayoutDashboard,
  Users,
  CalendarDays,
  BedDouble,
  ClipboardList,
  CreditCard,
  BrushCleaning,
  BarChart3,
  Settings,
  ShieldCheck,
  UserCog,
} from "lucide-react";

const menu = [
  {
    group: "Main Menu",
    items: [
      {
        title: "Dashboard",
        path: "/dashboard",
        icon: LayoutDashboard,
      },
      {
        title: "Guests",
        path: "/guests",
        icon: Users,
      },
      {
        title: "Reservations",
        path: "/reservations",
        icon: CalendarDays,
      },
      {
        title: "Rooms",
        path: "/rooms",
        icon: BedDouble,
      },
      {
        title: "Front Desk",
        path: "/frontdesk",
        icon: ClipboardList,
      },
      {
        title: "Housekeeping",
        path: "/housekeeping",
        icon: BrushCleaning,
      },
      {
        title: "Billing",
        path: "/billing",
        icon: CreditCard,
      },
      {
        title: "Reports",
        path: "/reports",
        icon: BarChart3,
      },
    ],
  },

  {
    group: "Administration",
    items: [
      {
        title: "Settings",
        path: "/settings",
        icon: Settings,
      },
      {
        title: "Users",
        path: "/users",
        icon: UserCog,
      },
      {
        title: "Roles",
        path: "/roles",
        icon: ShieldCheck,
      },
    ],
  },
];

export default menu;