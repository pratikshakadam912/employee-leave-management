import DashboardLayout from "../../layouts/DashboardLayout";

import HeroBanner from "../../components/dashboard/HeroBanner";
import StatsGrid from "../../components/dashboard/StatsGrid";
import QuickActions from "../../components/dashboard/QuickActions";

export default function Dashboard() {
  return (
    <DashboardLayout>
      <HeroBanner />

      <StatsGrid />

      <QuickActions />
    </DashboardLayout>
  );
}
