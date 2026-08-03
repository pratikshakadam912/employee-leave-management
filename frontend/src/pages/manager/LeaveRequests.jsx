import DashboardLayout from "../../layouts/DashboardLayout";

import RequestHeader from "../../components/manager/leave/RequestHeader";
import LeaveStats from "../../components/manager/leave/LeaveStats";
import LeaveFilter from "../../components/manager/leave/LeaveFilter";
import LeaveTable from "../../components/manager/leave/LeaveTable";

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
