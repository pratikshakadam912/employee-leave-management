import ManagerLayout from "../../layouts/ManagerLayout";

import HeroBanner from "../../components/manager/HeroBanner";
import StatsGrid from "../../components/manager/StatsGrid";
import AnalyticsCard from "../../components/manager/AnalyticsCard";
import RecentRequests from "../../components/manager/RecentRequests";
import QuickActions from "../../components/manager/QuickActions";

export default function ManagerDashboard() {
  return (
    <ManagerLayout>
      <div className="space-y-8">
        <HeroBanner />

        <StatsGrid />

        <div className="grid gap-8 xl:grid-cols-3">
          <div className="xl:col-span-2">
            <AnalyticsCard />
          </div>

          <QuickActions />
        </div>

        <RecentRequests />
      </div>
    </ManagerLayout>
  );
}
