import ManagerLayout from "../../layouts/ManagerLayout";
import EmployeeHeader from "../../components/manager/EmployeeHeader";
import EmployeesTable from "../../components/manager/EmployeesTable";

export default function Employees() {
  return (
    <ManagerLayout role="manager">
      <div className="space-y-8">
        <EmployeeHeader />

        <EmployeesTable />
      </div>
    </ManagerLayout>
  );
}
