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
  const [filteredRequests, setFilteredRequests] = useState([]);

  const fetchData = async () => {
    try {
      const [leaveRes, statsRes] = await Promise.all([
        getAllLeaves(),
        getLeaveStats(),
      ]);

      setRequests(leaveRes.data);
      setFilteredRequests(leaveRes.data);
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

  const handleFilter = ({ search, status, type, date }) => {
    let data = [...requests];

    // Search by employee name or ID
    if (search) {
      const value = search.toLowerCase();

      data = data.filter(
        (item) =>
          item.employee.username.toLowerCase().includes(value) ||
          item.id.toLowerCase().includes(value),
      );
    }

    // Status
    if (status) {
      data = data.filter((item) => item.status === status);
    }

    // Leave Type
    if (type) {
      data = data.filter((item) => item.reason === type);
    }

    // Start Date
    if (date) {
      const selected = new Date(date).toDateString();

      data = data.filter(
        (item) => new Date(item.startDate).toDateString() === selected,
      );
    }

    setFilteredRequests(data);
  };

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
        <RequestHeader stats={stats} />

        <LeaveStats stats={stats} />

        <LeaveFilter onFilter={handleFilter} />

        <LeaveTable requests={filteredRequests} refreshData={fetchData} />
      </div>
    </ManagerLayout>
  );
}
