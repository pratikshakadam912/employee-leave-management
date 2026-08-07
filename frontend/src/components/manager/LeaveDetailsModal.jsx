import { motion, AnimatePresence } from "framer-motion";
import { X, CalendarDays, Clock3, User, FileText } from "lucide-react";

export default function LeaveDetailsModal({
  open,
  leave,
  onClose,
  onApprove,
  onReject,
}) {
  if (!open || !leave) return null;

  const days =
    Math.floor(
      (new Date(leave.endDate) - new Date(leave.startDate)) /
        (1000 * 60 * 60 * 24),
    ) + 1;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          initial={{
            scale: 0.9,
            opacity: 0,
          }}
          animate={{
            scale: 1,
            opacity: 1,
          }}
          exit={{
            scale: 0.9,
            opacity: 0,
          }}
          className="w-full max-w-2xl rounded-[30px] bg-white p-8 shadow-2xl"
        >
          {/* Header */}

          <div className="mb-8 flex items-center justify-between">
            <div>
              <h2 className="text-3xl font-black text-slate-900">
                Leave Details
              </h2>

              <p className="text-slate-500">Review employee request</p>
            </div>

            <button onClick={onClose}>
              <X />
            </button>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <Info
              icon={<User />}
              label="Employee"
              value={leave.employee.username}
            />

            <Info icon={<FileText />} label="Reason" value={leave.reason} />

            <Info
              icon={<CalendarDays />}
              label="Start Date"
              value={new Date(leave.startDate).toLocaleDateString()}
            />

            <Info
              icon={<CalendarDays />}
              label="End Date"
              value={new Date(leave.endDate).toLocaleDateString()}
            />

            <Info
              icon={<Clock3 />}
              label="Duration"
              value={`${days} Day${days > 1 ? "s" : ""}`}
            />

            {leave.document && (
              <div className="md:col-span-2">
                <a
                  href={leave.document}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-2xl bg-blue-100 px-5 py-3 font-semibold text-blue-700 transition hover:bg-blue-200"
                >
                  <FileText size={18} />
                  View Supporting Document
                </a>
              </div>
            )}

            <Info icon={<Clock3 />} label="Status" value={leave.status} />
          </div>

          {leave.remarks && (
            <div className="mt-8 rounded-2xl bg-slate-50 p-5">
              <h4 className="font-bold">Remarks</h4>

              <p className="mt-2 text-slate-600">{leave.remarks}</p>
            </div>
          )}

          {leave.status === "PENDING" && (
            <div className="mt-8 flex justify-end gap-4">
              <button
                onClick={() => onReject(leave.id)}
                className="rounded-2xl bg-red-500 px-6 py-3 font-semibold text-white transition hover:bg-red-600"
              >
                Reject
              </button>

              <button
                onClick={() => onApprove(leave.id)}
                className="rounded-2xl bg-emerald-500 px-6 py-3 font-semibold text-white transition hover:bg-emerald-600"
              >
                Approve
              </button>
            </div>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

function Info({ icon, label, value }) {
  return (
    <div className="rounded-2xl border p-5">
      <div className="mb-3 flex items-center gap-3 text-emerald-600">
        {icon}
        <span className="font-semibold">{label}</span>
      </div>

      <p className="text-lg font-bold text-slate-800">{value}</p>
    </div>
  );
}
