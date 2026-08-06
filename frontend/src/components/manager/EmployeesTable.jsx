import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Eye, Pencil, Mail, Phone, BadgeCheck } from "lucide-react";

import { getEmployees } from "../../services/manager.service";

export default function EmployeesTable() {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadEmployees();
  }, []);

  const loadEmployees = async () => {
    try {
      const res = await getEmployees();

      // supports both
      // {success:true,data:[...]}
      // or [...]
      setEmployees(res.data || res);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="rounded-[30px] bg-white p-10 shadow-lg"
      >
        <div className="flex items-center justify-center py-20">
          <div className="h-12 w-12 animate-spin rounded-full border-4 border-emerald-500 border-t-transparent" />
        </div>
      </motion.div>
    );
  }

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
                      {employee.username
                        ?.split(" ")
                        .map((n) => n[0])
                        .join("")
                        .toUpperCase()}
                    </div>

                    <div>
                      <h3 className="font-bold text-slate-900">
                        {employee.username}
                      </h3>

                      <p className="text-sm text-slate-500">
                        EMP-{employee.id.slice(0, 6).toUpperCase()}
                      </p>

                      <div className="mt-2 flex flex-col gap-1 text-xs text-slate-500">
                        <span className="flex items-center gap-1">
                          <Mail size={13} />
                          {employee.email || "Not Available"}
                        </span>

                        <span className="flex items-center gap-1">
                          <Phone size={13} />
                          {employee.phone || "Not Available"}
                        </span>
                      </div>
                    </div>
                  </div>
                </td>

                <td className="font-medium text-slate-700">
                  {employee.department || "General"}
                </td>

                <td>
                  <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
                    {employee.role}
                  </span>
                </td>

                <td>
                  <span className="font-bold text-emerald-600">
                    {employee.leaveBalance ?? 0} Days
                  </span>
                </td>

                <td>
                  <span
                    className={`rounded-full px-4 py-2 text-sm font-semibold ${
                      employee.status === "ACTIVE"
                        ? "bg-emerald-100 text-emerald-700"
                        : employee.status === "ON_LEAVE"
                          ? "bg-yellow-100 text-yellow-700"
                          : "bg-red-100 text-red-700"
                    }`}
                  >
                    {employee.status || "ACTIVE"}
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

            {employees.length === 0 && (
              <tr>
                <td colSpan="6" className="py-16 text-center text-slate-500">
                  No employees found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
}
