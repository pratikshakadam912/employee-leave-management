import { motion } from "framer-motion";
import { Trophy } from "lucide-react";

const employees = [
  {
    name: "Rahul Sharma",
    department: "IT",
    leaves: 12,
  },
  {
    name: "Anjali Verma",
    department: "HR",
    leaves: 10,
  },
  {
    name: "Rohan Singh",
    department: "Sales",
    leaves: 9,
  },
  {
    name: "Priya Patel",
    department: "Finance",
    leaves: 8,
  },
  {
    name: "Arjun Mehta",
    department: "Marketing",
    leaves: 7,
  },
];

export default function TopEmployees() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="rounded-[30px] bg-white p-8 shadow-lg"
    >
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold">Top Leave Applicants</h2>

          <p className="text-slate-500">
            Employees with the highest leave requests
          </p>
        </div>

        <div className="rounded-2xl bg-yellow-100 p-4">
          <Trophy className="text-yellow-600" />
        </div>
      </div>

      <div className="space-y-5">
        {employees.map((employee, index) => (
          <div
            key={employee.name}
            className="flex items-center justify-between rounded-2xl border border-slate-100 p-5 transition hover:bg-slate-50"
          >
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-emerald-500 to-cyan-500 font-bold text-white">
                {employee.name.charAt(0)}
              </div>

              <div>
                <h3 className="font-semibold">{employee.name}</h3>

                <p className="text-sm text-slate-500">{employee.department}</p>
              </div>
            </div>

            <div className="text-right">
              <h4 className="text-xl font-bold text-emerald-600">
                {employee.leaves}
              </h4>

              <p className="text-sm text-slate-400">Leaves</p>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
