import { motion } from "framer-motion";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";
import { PieChart as PieChartIcon } from "lucide-react";

const data = [
  { name: "Casual", value: 40 },
  { name: "Sick", value: 28 },
  { name: "Annual", value: 22 },
  { name: "Unpaid", value: 10 },
];

const COLORS = ["#10B981", "#3B82F6", "#F59E0B", "#EF4444"];

export default function LeaveTypeChart() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      className="rounded-[30px] bg-white p-8 shadow-lg"
    >
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold">Leave Types</h2>
          <p className="text-slate-500">Distribution of leave applications</p>
        </div>

        <div className="rounded-2xl bg-emerald-100 p-4">
          <PieChartIcon className="text-emerald-600" />
        </div>
      </div>

      <div className="h-[320px]">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              innerRadius={70}
              outerRadius={110}
              dataKey="value"
              paddingAngle={4}
            >
              {data.map((entry, index) => (
                <Cell key={index} fill={COLORS[index]} />
              ))}
            </Pie>

            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>

      <div className="mt-6 grid grid-cols-2 gap-4">
        {data.map((item, index) => (
          <div key={item.name} className="flex items-center gap-3">
            <div
              className="h-4 w-4 rounded-full"
              style={{ background: COLORS[index] }}
            />

            <span className="text-sm text-slate-600">{item.name}</span>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
