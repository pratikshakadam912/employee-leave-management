import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

import { motion } from "framer-motion";
import { TrendingUp } from "lucide-react";

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
          <h2 className="text-2xl font-bold text-slate-900">
            Monthly Leave Trend
          </h2>

          <p className="mt-2 text-slate-500">
            Leave requests submitted throughout the year.
          </p>
        </div>

        <div className="rounded-2xl bg-emerald-100 p-4">
          <TrendingUp className="text-emerald-600" size={26} />
        </div>
      </div>

      {/* Chart */}

      <div className="h-[360px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={chartData}>
            <CartesianGrid strokeDasharray="4 4" stroke="#e2e8f0" />

            <XAxis
              dataKey="month"
              tick={{
                fill: "#64748b",
                fontSize: 13,
              }}
            />

            <YAxis
              tick={{
                fill: "#64748b",
                fontSize: 13,
              }}
            />

            <Tooltip
              contentStyle={{
                borderRadius: 18,
                border: "none",
                boxShadow: "0 12px 30px rgba(0,0,0,.12)",
              }}
            />

            <Line
              type="monotone"
              dataKey="leaves"
              stroke="#10b981"
              strokeWidth={4}
              dot={{
                r: 5,
                fill: "#10b981",
              }}
              activeDot={{
                r: 8,
              }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
}
