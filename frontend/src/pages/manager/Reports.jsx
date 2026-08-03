import ManagerLayout from "../../layouts/ManagerLayout";

import ReportsHeader from "../../components/manager/ReportsHeader";
import ReportStats from "../../components/manager/ReportStats";
import LeaveTrendChart from "../../components/manager/LeaveTrendChart";
import DepartmentChart from "../../components/manager/DepartmentChart";
import LeaveTypeChart from "../../components/manager/LeaveTypeChart";
import TopEmployees from "../../components/manager/TopEmployees";

export default function Reports() {
  return (
    <ManagerLayout>
      <div className="space-y-8">
        <ReportsHeader />

        <ReportStats />

        <div className="grid gap-8 xl:grid-cols-3">
          <div className="xl:col-span-2">
            <LeaveTrendChart />
          </div>

          <LeaveTypeChart />
        </div>

        <DepartmentChart />

        <TopEmployees />
      </div>
    </ManagerLayout>
  );
}
