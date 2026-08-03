import ManagerLayout from "../../layouts/ManagerLayout";

import RequestHeader from "../../components/manager/RequestHeader";
import LeaveStats from "../../components/manager/LeaveStats";
import LeaveFilter from "../../components/manager/LeaveFilter";
import LeaveTable from "../../components/manager/LeaveTable";

export default function LeaveRequests() {
  return (
    <ManagerLayout role="manager">
      <div className="space-y-8">
        <RequestHeader />

        <LeaveStats />

        <LeaveFilter />

        <LeaveTable />
      </div>
    </ManagerLayout>
  );
}
