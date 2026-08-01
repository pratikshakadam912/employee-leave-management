import DashboardLayout from "../../layouts/DashboardLayout";

import HeroBanner from "../../components/dashboard/HeroBanner";
import StatsGrid from "../../components/dashboard/StatsGrid";
import QuickActions from "../../components/dashboard/QuickActions";

import RecentLeaves from "../../components/dashboard/RecentLeaves";
import NotificationPanel from "../../components/dashboard/NotificationPanel";
import ProfileCard from "../../components/dashboard/ProfileCard";

export default function Dashboard() {
  return (
    <DashboardLayout>
      <div className="space-y-8">
        <HeroBanner />

        <StatsGrid />

        <div className="grid gap-8 xl:grid-cols-3">
          <div className="space-y-8 xl:col-span-2">
            <RecentLeaves />
            <QuickActions />
          </div>

          <div className="space-y-8">
            <ProfileCard />
            <NotificationPanel />
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
