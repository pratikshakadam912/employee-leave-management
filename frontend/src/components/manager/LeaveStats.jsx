import { motion } from "framer-motion";
import {
  Clock3,
  CheckCircle2,
  XCircle,
  Users,
  TrendingUp,
  TrendingDown,
} from "lucide-react";

const stats = [
  {
    title: "Pending Requests",
    value: 18,
    icon: Clock3,
    color: "text-amber-600",
    bg: "bg-amber-100",
    trend: "+5 Today",
    trendColor: "text-amber-600",
    trendIcon: TrendingUp,
  },
  {
    title: "Approved Today",
    value: 12,
    icon: CheckCircle2,
    color: "text-emerald-600",
    bg: "bg-emerald-100",
    trend: "+18%",
    trendColor: "text-emerald-600",
    trendIcon: TrendingUp,
  },
  {
    title: "Rejected",
    value: 4,
    icon: XCircle,
    color: "text-red-500",
    bg: "bg-red-100",
    trend: "-2",
    trendColor: "text-red-500",
    trendIcon: TrendingDown,
  },
  {
    title: "Employees On Leave",
    value: 23,
    icon: Users,
    color: "text-indigo-600",
    bg: "bg-indigo-100",
    trend: "+3 Today",
    trendColor: "text-indigo-600",
    trendIcon: TrendingUp,
  },
];

export default function LeaveStats() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
      {stats.map((item, index) => (
        <motion.div
          key={item.title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: index * 0.08,
          }}
          whileHover={{
            y: -8,
          }}
          className="
          rounded-[30px]
          bg-white
          p-7
          shadow-lg
          transition
          hover:shadow-2xl
          "
        >
          <div className="flex items-start justify-between">
            <div
              className={`flex h-16 w-16 items-center justify-center rounded-2xl ${item.bg}`}
            >
              <item.icon size={30} className={item.color} />
            </div>

            <div
              className={`flex items-center gap-1 text-sm font-semibold ${item.trendColor}`}
            >
              <item.trendIcon size={16} />

              {item.trend}
            </div>
          </div>

          <h2 className="mt-8 text-5xl font-black text-slate-900">
            {item.value}
          </h2>

          <p className="mt-2 text-lg font-semibold text-slate-800">
            {item.title}
          </p>

          <p className="mt-1 text-sm text-slate-500">Updated just now</p>
        </motion.div>
      ))}
    </div>
  );
}
