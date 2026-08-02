import DashboardLayout from "../../layouts/DashboardLayout";

import HeroBanner from "../../components/manager/HeroBanner";
import StatsGrid from "../../components/manager/StatsGrid";
import AnalyticsCard from "../../components/manager/AnalyticsCard";
import RecentRequests from "../../components/manager/RecentRequests";
import QuickActions from "../../components/manager/QuickActions";
import EmployeeOverview from "../../components/manager/EmployeeOverview";

export default function ManagerDashboard() {
  return (
    <DashboardLayout>
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

        <EmployeeOverview />
      </div>
    </DashboardLayout>
  );
}
