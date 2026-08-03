import DashboardLayout from "../../layouts/DashboardLayout";

import EmployeeHeader from "../../components/manager/EmployeeHeader";
import EmployeesTable from "../../components/manager/EmployeesTable";

export default function Employees() {
  return (
    <DashboardLayout role="manager">
      <div className="space-y-8">
        <EmployeeHeader />

        <EmployeesTable />
      </div>
    </DashboardLayout>
  );
}
