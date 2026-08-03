import DashboardLayout from "../../layouts/DashboardLayout";

import RequestHeader from "../../components/manager/RequestHeader";
import LeaveStats from "../../components/manager/LeaveStats";
import LeaveFilter from "../../components/manager/LeaveFilter";
import LeaveTable from "../../components/manager/LeaveTable";

export default function LeaveRequests() {
  return (
    <DashboardLayout role="manager">
      <div className="space-y-8">
        <RequestHeader />

        <LeaveStats />

        <LeaveFilter />

        <LeaveTable />
      </div>
    </DashboardLayout>
  );
}
