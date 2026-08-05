import { useEffect, useState } from "react";

import ManagerLayout from "../../layouts/ManagerLayout";

import RequestHeader from "../../components/manager/RequestHeader";
import LeaveStats from "../../components/manager/LeaveStats";
import LeaveFilter from "../../components/manager/LeaveFilter";
import LeaveTable from "../../components/manager/LeaveTable";

import { getAllLeaves, getLeaveStats } from "../../services/manager.service";

export default function LeaveRequests() {
  const [requests, setRequests] = useState([]);
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const [leaveRes, statsRes] = await Promise.all([
        getAllLeaves(),
        getLeaveStats(),
      ]);

      setRequests(leaveRes.data);
      setStats(statsRes.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return (
      <ManagerLayout role="manager">
        <div className="flex h-[70vh] items-center justify-center">
          <h2 className="text-xl font-semibold">Loading...</h2>
        </div>
      </ManagerLayout>
    );
  }

  return (
    <ManagerLayout role="manager">
      <div className="space-y-8">
        <RequestHeader />

        <LeaveStats stats={stats} />

        <LeaveFilter />

        <LeaveTable requests={requests} refreshData={fetchData} />
      </div>
    </ManagerLayout>
  );
}
