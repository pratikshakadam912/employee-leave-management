import { useEffect, useState } from "react";

import DashboardLayout from "../../layouts/DashboardLayout";

import HeroBanner from "../../components/dashboard/HeroBanner";
import StatsGrid from "../../components/dashboard/StatsGrid";
import QuickActions from "../../components/dashboard/QuickActions";
import RecentLeaves from "../../components/dashboard/RecentLeaves";
import NotificationPanel from "../../components/dashboard/NotificationPanel";
import ProfileCard from "../../components/dashboard/ProfileCard";

import { getEmployeeDashboard } from "../../services/employee.service";

export default function Dashboard() {
  const [dashboardData, setDashboardData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadDashboard();
  }, []);

  const loadDashboard = async () => {
    try {
      const data = await getEmployeeDashboard();
      setDashboardData(data);
    } catch (error) {
      console.error("Failed to load dashboard", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <DashboardLayout>
        <div className="flex h-[70vh] items-center justify-center">
          Loading...
        </div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      <div className="space-y-8">
        <HeroBanner />

        <StatsGrid data={dashboardData} />

        <div className="grid gap-8 xl:grid-cols-3">
          <div className="space-y-8 xl:col-span-2">
            <RecentLeaves data={dashboardData?.recentLeaves} />
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
