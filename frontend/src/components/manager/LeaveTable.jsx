import { motion } from "framer-motion";
import { Check, X, Eye, Paperclip, Clock3 } from "lucide-react";

const requests = [
  {
    id: "EMP-1025",
    name: "Pratiksha Kadam",
    avatar: "P",
    type: "Casual Leave",
    from: "12 Aug",
    to: "14 Aug",
    days: 3,
    status: "Pending",
    applied: "Today",
    attachment: true,
  },
  {
    id: "EMP-1018",
    name: "Rahul Sharma",
    avatar: "R",
    type: "Sick Leave",
    from: "10 Aug",
    to: "11 Aug",
    days: 2,
    status: "Approved",
    applied: "Yesterday",
    attachment: true,
  },
  {
    id: "EMP-1011",
    name: "Neha Singh",
    avatar: "N",
    type: "Annual Leave",
    from: "18 Aug",
    to: "23 Aug",
    days: 6,
    status: "Pending",
    applied: "2 Days Ago",
    attachment: false,
  },
  {
    id: "EMP-1007",
    name: "Aman Verma",
    avatar: "A",
    type: "Unpaid Leave",
    from: "8 Aug",
    to: "9 Aug",
    days: 2,
    status: "Rejected",
    applied: "Last Week",
    attachment: true,
  },
];

export default function LeaveTable() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="overflow-hidden rounded-[30px] bg-white shadow-xl"
    >
      {/* Header */}

      <div className="flex items-center justify-between border-b border-slate-200 p-7">
        <div>
          <h2 className="text-2xl font-bold text-slate-900">
            Leave Applications
          </h2>

          <p className="mt-1 text-slate-500">
            Review and manage employee leave requests.
          </p>
        </div>

        <div className="rounded-2xl bg-emerald-100 px-5 py-2 font-semibold text-emerald-700">
          {requests.length} Requests
        </div>
      </div>

      {/* Desktop Table */}

      <div className="hidden overflow-x-auto lg:block">
        <table className="w-full">
          <thead className="bg-slate-50">
            <tr className="text-left text-sm text-slate-500">
              <th className="px-6 py-5">Employee</th>
              <th>Leave</th>
              <th>Duration</th>
              <th>Status</th>
              <th>Applied</th>
              <th>Document</th>
              <th className="text-center">Actions</th>
            </tr>
          </thead>

          <tbody>
            {requests.map((item) => (
              <tr
                key={item.id}
                className="border-t border-slate-100 transition hover:bg-slate-50"
              >
                {/* Employee */}

                <td className="px-6 py-5">
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-emerald-500 to-cyan-500 font-bold text-white">
                      {item.avatar}
                    </div>

                    <div>
                      <h3 className="font-semibold text-slate-900">
                        {item.name}
                      </h3>

                      <p className="text-sm text-slate-500">{item.id}</p>
                    </div>
                  </div>
                </td>

                {/* Leave */}

                <td>
                  <div>
                    <p className="font-semibold">{item.type}</p>

                    <span className="text-sm text-slate-500">
                      {item.from} - {item.to}
                    </span>
                  </div>
                </td>

                {/* Duration */}

                <td>
                  <div className="flex items-center gap-2">
                    <Clock3 size={17} className="text-slate-400" />
                    {item.days} Days
                  </div>
                </td>

                {/* Status */}

                <td>
                  <StatusBadge status={item.status} />
                </td>

                {/* Applied */}

                <td>{item.applied}</td>

                {/* Attachment */}

                <td>
                  {item.attachment ? (
                    <button className="rounded-xl bg-slate-100 p-3 hover:bg-slate-200">
                      <Paperclip size={18} />
                    </button>
                  ) : (
                    "-"
                  )}
                </td>

                {/* Actions */}

                <td>
                  <div className="flex justify-center gap-2">
                    <button className="rounded-xl bg-blue-100 p-3 text-blue-600 hover:bg-blue-200">
                      <Eye size={18} />
                    </button>

                    <button className="rounded-xl bg-emerald-100 p-3 text-emerald-600 hover:bg-emerald-200">
                      <Check size={18} />
                    </button>

                    <button className="rounded-xl bg-red-100 p-3 text-red-500 hover:bg-red-200">
                      <X size={18} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Cards */}

      <div className="space-y-5 p-5 lg:hidden">
        {requests.map((item) => (
          <div
            key={item.id}
            className="rounded-3xl border border-slate-200 p-5"
          >
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-r from-emerald-500 to-cyan-500 font-bold text-white">
                {item.avatar}
              </div>

              <div>
                <h3 className="font-bold">{item.name}</h3>

                <p className="text-sm text-slate-500">{item.id}</p>
              </div>
            </div>

            <div className="mt-5 space-y-2 text-sm">
              <p>
                <strong>Leave:</strong> {item.type}
              </p>

              <p>
                <strong>Duration:</strong> {item.days} Days
              </p>

              <p>
                <strong>Dates:</strong> {item.from} - {item.to}
              </p>
            </div>

            <div className="mt-5">
              <StatusBadge status={item.status} />
            </div>

            <div className="mt-5 flex gap-3">
              <button className="flex-1 rounded-2xl bg-blue-500 py-3 font-semibold text-white">
                View
              </button>

              <button className="flex-1 rounded-2xl bg-emerald-500 py-3 font-semibold text-white">
                Approve
              </button>

              <button className="flex-1 rounded-2xl bg-red-500 py-3 font-semibold text-white">
                Reject
              </button>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

function StatusBadge({ status }) {
  const styles = {
    Pending: "bg-yellow-100 text-yellow-700",
    Approved: "bg-emerald-100 text-emerald-700",
    Rejected: "bg-red-100 text-red-600",
  };

  return (
    <span
      className={`rounded-full px-4 py-2 text-sm font-semibold ${styles[status]}`}
    >
      {status}
    </span>
  );
}
