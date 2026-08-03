import {
    BedDouble,
    Building2,
    Landmark,
    Layers3,
    Sofa,
    Bed,
    Receipt,
    CalendarRange,
} from "lucide-react";

export const masterModules = [

    {
        title: "Room Types",
        description: "Manage hotel room categories",
        icon: BedDouble,
        path: "/room-types",
        color: "bg-blue-500",
    },

    {
        title: "Buildings",
        description: "Manage hotel buildings",
        icon: Building2,
        path: "/buildings",
        color: "bg-emerald-500",
    },

    {
        title: "Wings",
        description: "Manage building wings",
        icon: Landmark,
        path: "/wings",
        color: "bg-orange-500",
    },

    {
        title: "Floors",
        description: "Manage hotel floors",
        icon: Layers3,
        path: "/floors",
        color: "bg-purple-500",
    },

    {
        title: "Amenities",
        description: "Room amenities",
        icon: Sofa,
        path: "/amenities",
        color: "bg-pink-500",
    },

    {
        title: "Bed Types",
        description: "Configure bed types",
        icon: Bed,
        path: "/bed-types",
        color: "bg-cyan-500",
    },

    {
        title: "Taxes",
        description: "Tax configuration",
        icon: Receipt,
        path: "/taxes",
        color: "bg-red-500",
    },

    {
        title: "Seasons",
        description: "Seasonal pricing",
        icon: CalendarRange,
        path: "/seasons",
        color: "bg-yellow-500",
    },

];