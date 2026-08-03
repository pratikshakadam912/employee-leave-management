import { motion } from "framer-motion";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

import { Building2 } from "lucide-react";

const data = [
  { dept: "HR", leaves: 12 },
  { dept: "IT", leaves: 34 },
  { dept: "Sales", leaves: 22 },
  { dept: "Finance", leaves: 17 },
  { dept: "Marketing", leaves: 20 },
];

export default function DepartmentChart() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      className="rounded-[30px] bg-white p-8 shadow-lg"
    >
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold">Department Leaves</h2>

          <p className="text-slate-500">Leave requests by department</p>
        </div>

        <div className="rounded-2xl bg-blue-100 p-4">
          <Building2 className="text-blue-600" />
        </div>
      </div>

      <div className="h-[330px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="4 4" />

            <XAxis dataKey="dept" />

            <YAxis />

            <Tooltip />

            <Bar dataKey="leaves" radius={[12, 12, 0, 0]} fill="#10B981" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
}
