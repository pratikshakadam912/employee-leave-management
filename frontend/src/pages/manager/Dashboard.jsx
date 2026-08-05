import { useEffect, useState } from "react";

import ManagerLayout from "../../layouts/ManagerLayout";

import HeroBanner from "../../components/manager/HeroBanner";
import StatsGrid from "../../components/manager/StatsGrid";
import AnalyticsCard from "../../components/manager/AnalyticsCard";
import RecentRequests from "../../components/manager/RecentRequests";
import QuickActions from "../../components/manager/QuickActions";

import { getManagerDashboard } from "../../services/manager.service";

export default function ManagerDashboard() {
  const [dashboard, setDashboard] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchDashboard();
  }, []);

  const fetchDashboard = async () => {
    try {
      const res = await getManagerDashboard();

      setDashboard(res.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <ManagerLayout>
        <div className="flex h-[70vh] items-center justify-center">
          <h2 className="text-xl font-semibold">Loading Dashboard...</h2>
        </div>
      </ManagerLayout>
    );
  }

  return (
    <ManagerLayout>
      <div className="space-y-8">
        <HeroBanner />

        <StatsGrid dashboard={dashboard} />

        <div className="grid gap-8 xl:grid-cols-3">
          <div className="xl:col-span-2">
            <AnalyticsCard dashboard={dashboard} />
          </div>

          <QuickActions />
        </div>

        <RecentRequests
          requests={dashboard?.recentLeaves || []}
          onRefresh={fetchDashboard}
        />
      </div>
    </ManagerLayout>
  );
}
