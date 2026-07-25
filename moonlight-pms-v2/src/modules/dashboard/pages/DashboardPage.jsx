import {
  Users,
  BedDouble,
  DollarSign,
  Building2,
} from "lucide-react";

import KpiCard from "@/shared/components/dashboard/KpiCard";
import PageHeader from "@/shared/components/common/PageHeader";

export default function DashboardPage() {
  return (
    <>
      <PageHeader
        title="Dashboard"
        subtitle="Welcome back to MoonLight PMS"
      />

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">

        <KpiCard
          title="Guests"
          value="146"
          subtitle="+12 Today"
          icon={Users}
        />

        <KpiCard
          title="Occupied Rooms"
          value="82%"
          subtitle="48 / 58"
          icon={BedDouble}
          color="bg-green-600"
        />

        <KpiCard
          title="Revenue"
          value="$4,280"
          subtitle="+15%"
          icon={DollarSign}
          color="bg-orange-500"
        />

        <KpiCard
          title="Available Rooms"
          value="10"
          subtitle="Ready"
          icon={Building2}
          color="bg-purple-600"
        />

      </div>
    </>
  );
}