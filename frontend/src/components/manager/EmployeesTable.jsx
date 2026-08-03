import { motion } from "framer-motion";
import { Eye, Pencil, Mail, Phone, BadgeCheck } from "lucide-react";

const employees = [
  {
    id: "EMP-1001",
    name: "Rahul Sharma",
    email: "rahul@pulsehr.com",
    phone: "+91 9876543210",
    department: "Development",
    role: "Frontend Developer",
    leaveBalance: 12,
    status: "Active",
  },
  {
    id: "EMP-1002",
    name: "Priya Singh",
    email: "priya@pulsehr.com",
    phone: "+91 9876543211",
    department: "Human Resource",
    role: "HR Executive",
    leaveBalance: 8,
    status: "On Leave",
  },
  {
    id: "EMP-1003",
    name: "Amit Patel",
    email: "amit@pulsehr.com",
    phone: "+91 9876543212",
    department: "Marketing",
    role: "Marketing Manager",
    leaveBalance: 15,
    status: "Active",
  },
  {
    id: "EMP-1004",
    name: "Sneha Joshi",
    email: "sneha@pulsehr.com",
    phone: "+91 9876543213",
    department: "Finance",
    role: "Accountant",
    leaveBalance: 10,
    status: "Inactive",
  },
];

export default function EmployeesTable() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="rounded-[30px] bg-white p-8 shadow-lg"
    >
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-slate-900">
            Employee Directory
          </h2>

          <p className="text-slate-500">Manage all registered employees.</p>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[950px]">
          <thead>
            <tr className="border-b border-slate-200 text-left text-sm uppercase tracking-wide text-slate-500">
              <th className="pb-4">Employee</th>
              <th className="pb-4">Department</th>
              <th className="pb-4">Role</th>
              <th className="pb-4">Leave Balance</th>
              <th className="pb-4">Status</th>
              <th className="pb-4 text-center">Actions</th>
            </tr>
          </thead>

          <tbody>
            {employees.map((employee) => (
              <tr
                key={employee.id}
                className="border-b border-slate-100 transition hover:bg-slate-50"
              >
                <td className="py-6">
                  <div className="flex items-center gap-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-r from-emerald-500 to-cyan-500 text-lg font-bold text-white">
                      {employee.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </div>

                    <div>
                      <h3 className="font-bold text-slate-900">
                        {employee.name}
                      </h3>

                      <p className="text-sm text-slate-500">{employee.id}</p>

                      <div className="mt-2 flex flex-col gap-1 text-xs text-slate-500">
                        <span className="flex items-center gap-1">
                          <Mail size={13} />
                          {employee.email}
                        </span>

                        <span className="flex items-center gap-1">
                          <Phone size={13} />
                          {employee.phone}
                        </span>
                      </div>
                    </div>
                  </div>
                </td>

                <td className="font-medium text-slate-700">
                  {employee.department}
                </td>

                <td>
                  <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
                    {employee.role}
                  </span>
                </td>

                <td>
                  <span className="font-bold text-emerald-600">
                    {employee.leaveBalance} Days
                  </span>
                </td>

                <td>
                  <span
                    className={`rounded-full px-4 py-2 text-sm font-semibold ${
                      employee.status === "Active"
                        ? "bg-emerald-100 text-emerald-700"
                        : employee.status === "On Leave"
                          ? "bg-yellow-100 text-yellow-700"
                          : "bg-red-100 text-red-700"
                    }`}
                  >
                    {employee.status}
                  </span>
                </td>

                <td>
                  <div className="flex items-center justify-center gap-3">
                    <button className="rounded-xl bg-blue-100 p-3 text-blue-600 transition hover:bg-blue-200">
                      <Eye size={18} />
                    </button>

                    <button className="rounded-xl bg-emerald-100 p-3 text-emerald-600 transition hover:bg-emerald-200">
                      <Pencil size={18} />
                    </button>

                    <button className="rounded-xl bg-violet-100 p-3 text-violet-600 transition hover:bg-violet-200">
                      <BadgeCheck size={18} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
}
