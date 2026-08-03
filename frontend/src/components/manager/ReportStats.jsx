import { motion } from "framer-motion";
import { FileText, CheckCircle2, Clock3, XCircle } from "lucide-react";

const stats = [
  {
    title: "Total Requests",
    value: 248,
    icon: FileText,
    bg: "bg-blue-100",
    text: "text-blue-600",
    change: "+12%",
  },
  {
    title: "Approved",
    value: 198,
    icon: CheckCircle2,
    bg: "bg-emerald-100",
    text: "text-emerald-600",
    change: "+8%",
  },
  {
    title: "Pending",
    value: 31,
    icon: Clock3,
    bg: "bg-yellow-100",
    text: "text-yellow-600",
    change: "-2%",
  },
  {
    title: "Rejected",
    value: 19,
    icon: XCircle,
    bg: "bg-red-100",
    text: "text-red-500",
    change: "+1%",
  },
];

export default function ReportStats() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
      {stats.map((item, index) => {
        const Icon = item.icon;

        return (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: index * 0.1,
            }}
            whileHover={{
              y: -8,
            }}
            className="
              rounded-[30px]
              border
              border-slate-100
              bg-white
              p-7
              shadow-lg
              transition
              hover:shadow-2xl
            "
          >
            <div className="flex items-center justify-between">
              <div
                className={`flex h-16 w-16 items-center justify-center rounded-2xl ${item.bg}`}
              >
                <Icon className={item.text} size={30} />
              </div>

              <span className="rounded-full bg-slate-100 px-3 py-1 text-sm font-semibold text-slate-600">
                {item.change}
              </span>
            </div>

            <h2 className="mt-7 text-5xl font-black text-slate-900">
              {item.value}
            </h2>

            <p className="mt-2 text-lg font-semibold text-slate-700">
              {item.title}
            </p>

            <p className="mt-1 text-sm text-slate-400">Current month</p>
          </motion.div>
        );
      })}
    </div>
  );
}
