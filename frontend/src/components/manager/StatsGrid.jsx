import { motion } from "framer-motion";
import { Users, Clock3, CheckCircle2, Plane } from "lucide-react";

const stats = [
  {
    title: "Total Employees",
    value: 48,
    subtitle: "Active Workforce",
    icon: Users,
    color: "from-cyan-500 to-blue-600",
    bg: "bg-cyan-50",
    text: "text-cyan-600",
  },
  {
    title: "Pending Requests",
    value: 12,
    subtitle: "Awaiting Approval",
    icon: Clock3,
    color: "from-amber-500 to-orange-500",
    bg: "bg-orange-50",
    text: "text-orange-600",
  },
  {
    title: "Approved Today",
    value: 8,
    subtitle: "Successfully Approved",
    icon: CheckCircle2,
    color: "from-emerald-500 to-green-600",
    bg: "bg-emerald-50",
    text: "text-emerald-600",
  },
  {
    title: "On Leave",
    value: 5,
    subtitle: "Employees Away",
    icon: Plane,
    color: "from-violet-500 to-purple-600",
    bg: "bg-violet-50",
    text: "text-violet-600",
  },
];

export default function StatsGrid() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
      {stats.map((item, index) => {
        const Icon = item.icon;

        return (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: index * 0.08,
            }}
            whileHover={{
              y: -8,
              scale: 1.02,
            }}
            className="
            group
            relative
            overflow-hidden
            rounded-[30px]
            bg-white
            p-7
            shadow-lg
            transition-all
            duration-300
            hover:shadow-2xl
            "
          >
            {/* Gradient Glow */}

            <div
              className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${item.color}`}
            />

            <div
              className={`flex h-16 w-16 items-center justify-center rounded-2xl ${item.bg}`}
            >
              <Icon size={30} className={item.text} />
            </div>

            <h2 className="mt-8 text-5xl font-black text-slate-900">
              {item.value}
            </h2>

            <p className="mt-2 text-lg font-semibold text-slate-700">
              {item.title}
            </p>

            <p className="mt-1 text-sm text-slate-400">{item.subtitle}</p>

            {/* Decorative Circle */}

            <div
              className={`absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-to-br ${item.color} opacity-10 blur-2xl`}
            />

            {/* Hover Line */}

            <motion.div
              className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${item.color}`}
              initial={{ width: 0 }}
              whileHover={{ width: "100%" }}
            />
          </motion.div>
        );
      })}
    </div>
  );
}
