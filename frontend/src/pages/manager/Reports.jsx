import { useEffect, useState } from "react";
import ManagerLayout from "../../layouts/ManagerLayout";

import ReportsHeader from "../../components/manager/ReportsHeader";
import ReportStats from "../../components/manager/ReportStats";
import LeaveTrendChart from "../../components/manager/LeaveTrendChart";
import DepartmentChart from "../../components/manager/DepartmentChart";
import LeaveTypeChart from "../../components/manager/LeaveTypeChart";
import TopEmployees from "../../components/manager/TopEmployees";

import { getReports } from "../../services/manager.service";

export default function Reports() {
  const [reports, setReports] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadReports();
  }, []);

  const loadReports = async () => {
    try {
      const res = await getReports();
      setReports(res.data);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <ManagerLayout>
        <div className="flex h-[70vh] items-center justify-center">
          Loading Reports...
        </div>
      </ManagerLayout>
    );
  }

  return (
    <ManagerLayout>
      <div className="space-y-8">
        <ReportsHeader />

        <ReportStats data={reports} />

        <div className="grid gap-8 xl:grid-cols-3">
          <div className="xl:col-span-2">
            <LeaveTrendChart data={reports} />
          </div>

          <LeaveTypeChart data={reports} />
        </div>

        <DepartmentChart data={reports} />

        <TopEmployees data={reports} />
      </div>
    </ManagerLayout>
  );
}
