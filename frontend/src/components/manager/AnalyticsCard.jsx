import { motion } from "framer-motion";
import { TrendingUp, CalendarDays, Users, CheckCircle2 } from "lucide-react";

export default function AnalyticsCard({ dashboard }) {
  // Dummy chart for now (we'll replace it with real monthly analytics later)
  const monthlyData = [
    { month: "Jan", value: 35 },
    { month: "Feb", value: 60 },
    { month: "Mar", value: 45 },
    { month: "Apr", value: 82 },
    { month: "May", value: 58 },
    { month: "Jun", value: 95 },
    { month: "Jul", value: 72 },
  ];

  const max = Math.max(...monthlyData.map((d) => d.value));

  const approvalRate =
    dashboard?.totalLeaves > 0
      ? Math.round((dashboard.approvedLeaves / dashboard.totalLeaves) * 100)
      : 0;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.25 }}
      className="rounded-[34px] bg-white p-8 shadow-xl"
    >
      {/* Header */}

      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-emerald-600">
            Analytics
          </p>

          <h2 className="mt-2 text-3xl font-black text-slate-900">
            Leave Trends
          </h2>

          <p className="mt-2 text-slate-500">Monthly leave requests overview</p>
        </div>

        <div className="rounded-2xl bg-emerald-100 p-4">
          <TrendingUp className="text-emerald-600" size={30} />
        </div>
      </div>

      {/* Chart (keep UI same for now) */}

      <div className="mt-10">
        <div className="flex h-64 items-end justify-between gap-3">
          {monthlyData.map((item) => (
            <div key={item.month} className="flex flex-1 flex-col items-center">
              <motion.div
                initial={{ height: 0 }}
                animate={{
                  height: `${(item.value / max) * 180}px`,
                }}
                transition={{
                  delay: 0.2,
                  duration: 0.6,
                }}
                className="w-full rounded-t-2xl bg-gradient-to-t from-emerald-600 via-teal-500 to-cyan-400 shadow-lg hover:brightness-110"
              />

              <span className="mt-3 text-sm font-semibold text-slate-500">
                {item.month}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Cards */}

      <div className="mt-10 grid gap-5 md:grid-cols-3">
        <MiniCard
          icon={<CalendarDays size={20} />}
          title="Total Requests"
          value={dashboard?.totalLeaves || 0}
          color="emerald"
        />

        <MiniCard
          icon={<Users size={20} />}
          title="Employees"
          value={dashboard?.totalEmployees || 0}
          color="cyan"
        />

        <MiniCard
          icon={<CheckCircle2 size={20} />}
          title="Approval Rate"
          value={`${approvalRate}%`}
          color="violet"
        />
      </div>
    </motion.div>
  );
}

function MiniCard({ icon, title, value, color }) {
  const colors = {
    emerald: "bg-emerald-100 text-emerald-600",
    cyan: "bg-cyan-100 text-cyan-600",
    violet: "bg-violet-100 text-violet-600",
  };

  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="rounded-2xl border border-slate-100 p-5 transition hover:shadow-lg"
    >
      <div
        className={`flex h-12 w-12 items-center justify-center rounded-xl ${colors[color]}`}
      >
        {icon}
      </div>

      <h3 className="mt-5 text-3xl font-black text-slate-900">{value}</h3>

      <p className="mt-1 text-sm text-slate-500">{title}</p>
    </motion.div>
  );
}
