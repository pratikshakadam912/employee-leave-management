import { motion } from "framer-motion";
import { TrendingUp } from "lucide-react";

import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

export default function LeaveTrendChart({ data }) {
  const chartData = data?.monthlyTrend || [];

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      className="rounded-[30px] bg-white p-8 shadow-lg"
    >
      {/* Header */}

      <div className="mb-8 flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-black text-slate-900">
            Monthly Leave Trend
          </h2>

          <p className="mt-2 text-slate-500">
            Monthly leave requests submitted by employees.
          </p>
        </div>

        <div className="rounded-2xl bg-emerald-100 p-4">
          <TrendingUp size={26} className="text-emerald-600" />
        </div>
      </div>

      {/* Empty State */}

      {chartData.length === 0 ? (
        <div className="flex h-[360px] items-center justify-center rounded-2xl border border-dashed border-slate-300 bg-slate-50">
          <div className="text-center">
            <TrendingUp size={48} className="mx-auto text-slate-300" />

            <h3 className="mt-4 text-lg font-bold text-slate-700">
              No Leave Data Available
            </h3>

            <p className="mt-2 text-sm text-slate-500">
              Leave requests will appear here once employees submit them.
            </p>
          </div>
        </div>
      ) : (
        <div className="h-[360px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={chartData}
              margin={{
                top: 10,
                right: 20,
                left: 0,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="4 4" stroke="#e2e8f0" />

              <XAxis
                dataKey="month"
                tick={{
                  fill: "#64748b",
                  fontSize: 13,
                }}
                axisLine={false}
                tickLine={false}
              />

              <YAxis
                allowDecimals={false}
                tick={{
                  fill: "#64748b",
                  fontSize: 13,
                }}
                axisLine={false}
                tickLine={false}
              />

              <Tooltip
                contentStyle={{
                  borderRadius: 16,
                  border: "none",
                  boxShadow: "0 10px 30px rgba(0,0,0,.12)",
                }}
              />

              <Line
                type="monotone"
                dataKey="leaves"
                stroke="#10B981"
                strokeWidth={4}
                dot={{
                  r: 5,
                  fill: "#10B981",
                }}
                activeDot={{
                  r: 8,
                }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      )}
    </motion.div>
  );
}
