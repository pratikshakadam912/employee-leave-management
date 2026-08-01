import { motion } from "framer-motion";
import {
  CalendarDays,
  Clock3,
  FileText,
  MessageSquare,
  ChevronRight,
  Eye,
} from "lucide-react";

export default function LeaveCard({ leave }) {
  const badge = {
    PENDING: "bg-yellow-100 text-yellow-700 border-yellow-300",

    APPROVED: "bg-emerald-100 text-emerald-700 border-emerald-300",

    REJECTED: "bg-red-100 text-red-700 border-red-300",
  };

  return (
    <motion.div
      whileHover={{
        y: -4,
      }}
      transition={{
        duration: 0.2,
      }}
      className="overflow-hidden rounded-[28px] bg-white shadow-lg transition hover:shadow-2xl"
    >
      {/* Top */}

      <div className="flex flex-col gap-6 border-b border-slate-100 p-6 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <h2 className="text-2xl font-bold text-slate-800">
            {leave.leaveType}
          </h2>

          <p className="mt-2 text-slate-500">{leave.reason}</p>
        </div>

        <div
          className={`rounded-full border px-5 py-2 text-sm font-semibold ${badge[leave.status]}`}
        >
          {leave.status}
        </div>
      </div>

      {/* Middle */}

      <div className="grid gap-5 p-6 md:grid-cols-3">
        <div className="flex items-center gap-3">
          <CalendarDays className="text-emerald-600" size={22} />

          <div>
            <p className="text-xs uppercase tracking-wider text-slate-400">
              Leave Dates
            </p>

            <p className="font-semibold text-slate-700">{leave.startDate}</p>

            <p className="font-semibold text-slate-700">{leave.endDate}</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Clock3 className="text-indigo-600" size={22} />

          <div>
            <p className="text-xs uppercase tracking-wider text-slate-400">
              Duration
            </p>

            <p className="font-semibold text-slate-700">
              {leave.days} Day
              {leave.days > 1 && "s"}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <MessageSquare className="text-orange-500" size={22} />

          <div>
            <p className="text-xs uppercase tracking-wider text-slate-400">
              Manager Remark
            </p>

            <p className="font-semibold text-slate-700">{leave.remarks}</p>
          </div>
        </div>
      </div>

      {/* Footer */}

      <div className="flex flex-col gap-4 border-t border-slate-100 bg-slate-50 px-6 py-5 md:flex-row md:items-center md:justify-between">
        {leave.document ? (
          <button className="flex items-center gap-2 rounded-xl bg-emerald-100 px-5 py-3 font-semibold text-emerald-700 transition hover:bg-emerald-200">
            <Eye size={18} />
            View Document
          </button>
        ) : (
          <div className="flex items-center gap-2 text-slate-400">
            <FileText size={18} />
            No document uploaded
          </div>
        )}

        <button className="flex items-center gap-2 font-semibold text-slate-700 transition hover:text-emerald-600">
          View Details
          <ChevronRight size={18} />
        </button>
      </div>
    </motion.div>
  );
}
