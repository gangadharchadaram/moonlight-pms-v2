import {
    Users,
    Repeat,
    Star,
    Ban,
    LogIn,
} from "lucide-react";

import KpiCard from "@/shared/components/dashboard/KpiCard";

export default function GuestStats() {

    return (

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-5">

            <KpiCard
                title="Total Guests"
                value="120"
                subtitle="+12 this week"
                icon={Users}
            />

            <KpiCard
                title="Repeat Guests"
                value="25"
                icon={Repeat}
                color="bg-green-600"
            />

            <KpiCard
                title="VIP Guests"
                value="8"
                icon={Star}
                color="bg-yellow-500"
            />

            <KpiCard
                title="Checked In"
                value="18"
                icon={LogIn}
                color="bg-purple-600"
            />

            <KpiCard
                title="Banned"
                value="2"
                icon={Ban}
                color="bg-red-600"
            />

        </div>

    );
}