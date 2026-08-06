import { motion } from "framer-motion";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";
import { PieChart as PieChartIcon } from "lucide-react";

export default function LeaveStatusChart({ data }) {
  const chartData = [
    {
      name: "Approved",
      value: data?.approvedLeaves || 0,
    },
    {
      name: "Pending",
      value: data?.pendingLeaves || 0,
    },
    {
      name: "Rejected",
      value: data?.rejectedLeaves || 0,
    },
  ];

  const COLORS = ["#10B981", "#F59E0B", "#EF4444"];

  const total = chartData.reduce((sum, item) => sum + item.value, 0);

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      className="rounded-[30px] bg-white p-8 shadow-lg"
    >
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-black text-slate-900">Leave Status</h2>

          <p className="mt-2 text-slate-500">Distribution of leave requests.</p>
        </div>

        <div className="rounded-2xl bg-emerald-100 p-4">
          <PieChartIcon className="text-emerald-600" size={24} />
        </div>
      </div>

      {total === 0 ? (
        <div className="flex h-[330px] items-center justify-center rounded-2xl border border-dashed border-slate-300 bg-slate-50">
          <div className="text-center">
            <PieChartIcon size={48} className="mx-auto text-slate-300" />

            <h3 className="mt-4 text-lg font-bold text-slate-700">
              No Leave Requests
            </h3>

            <p className="mt-2 text-sm text-slate-500">
              Chart will appear once leave requests are submitted.
            </p>
          </div>
        </div>
      ) : (
        <>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={chartData}
                  dataKey="value"
                  nameKey="name"
                  innerRadius={70}
                  outerRadius={110}
                  paddingAngle={4}
                >
                  {chartData.map((entry, index) => (
                    <Cell key={index} fill={COLORS[index]} />
                  ))}
                </Pie>

                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>

          <div className="mt-8 space-y-4">
            {chartData.map((item, index) => (
              <div
                key={item.name}
                className="flex items-center justify-between"
              >
                <div className="flex items-center gap-3">
                  <div
                    className="h-4 w-4 rounded-full"
                    style={{
                      background: COLORS[index],
                    }}
                  />

                  <span className="font-medium text-slate-700">
                    {item.name}
                  </span>
                </div>

                <span className="font-bold text-slate-900">{item.value}</span>
              </div>
            ))}
          </div>
        </>
      )}
    </motion.div>
  );
}
