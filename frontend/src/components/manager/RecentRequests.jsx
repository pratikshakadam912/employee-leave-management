import { motion } from "framer-motion";
import { CheckCircle2, XCircle, Clock3, Search, Filter } from "lucide-react";

const requests = [
  {
    id: 1,
    name: "Priya Sharma",
    leave: "Sick Leave",
    days: "2 Days",
    date: "12 Aug - 13 Aug",
    status: "Pending",
  },
  {
    id: 2,
    name: "Rahul Verma",
    leave: "Casual Leave",
    days: "1 Day",
    date: "15 Aug",
    status: "Approved",
  },
  {
    id: 3,
    name: "Anjali Singh",
    leave: "Annual Leave",
    days: "5 Days",
    date: "18-22 Aug",
    status: "Rejected",
  },
  {
    id: 4,
    name: "Amit Patel",
    leave: "Medical Leave",
    days: "3 Days",
    date: "25-27 Aug",
    status: "Pending",
  },
];

export default function RecentRequests() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="rounded-[34px] bg-white p-8 shadow-xl"
    >
      {/* Header */}

      <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <h2 className="text-3xl font-black text-slate-900">
            Recent Leave Requests
          </h2>

          <p className="mt-2 text-slate-500">
            Review employee leave applications.
          </p>
        </div>

        <div className="flex gap-3">
          <button
            className="
            flex
            items-center
            gap-2
            rounded-2xl
            border
            border-slate-200
            px-5
            py-3
            hover:bg-slate-50"
          >
            <Search size={18} />
            Search
          </button>

          <button
            className="
            flex
            items-center
            gap-2
            rounded-2xl
            border
            border-slate-200
            px-5
            py-3
            hover:bg-slate-50"
          >
            <Filter size={18} />
            Filter
          </button>
        </div>
      </div>

      {/* Table */}

      <div className="mt-8 overflow-x-auto">
        <table className="min-w-full">
          <thead>
            <tr className="border-b">
              <th className="py-4 text-left text-slate-500">Employee</th>

              <th className="text-left text-slate-500">Leave Type</th>

              <th className="text-left text-slate-500">Duration</th>

              <th className="text-left text-slate-500">Dates</th>

              <th className="text-left text-slate-500">Status</th>

              <th className="text-right text-slate-500">Action</th>
            </tr>
          </thead>

          <tbody>
            {requests.map((item) => (
              <motion.tr
                key={item.id}
                whileHover={{
                  backgroundColor: "#F8FAFC",
                }}
                className="border-b"
              >
                <td className="py-5">
                  <div className="flex items-center gap-4">
                    <div
                      className="
                      flex
                      h-12
                      w-12
                      items-center
                      justify-center
                      rounded-full
                      bg-gradient-to-r
                      from-emerald-500
                      to-cyan-500
                      text-lg
                      font-bold
                      text-white"
                    >
                      {item.name.charAt(0)}
                    </div>

                    <div>
                      <h4 className="font-semibold">{item.name}</h4>

                      <p className="text-sm text-slate-400">Employee</p>
                    </div>
                  </div>
                </td>

                <td>{item.leave}</td>

                <td>{item.days}</td>

                <td>{item.date}</td>

                <td>
                  {item.status === "Pending" && (
                    <span className="rounded-full bg-yellow-100 px-4 py-2 text-sm font-semibold text-yellow-700">
                      Pending
                    </span>
                  )}

                  {item.status === "Approved" && (
                    <span className="rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-700">
                      Approved
                    </span>
                  )}

                  {item.status === "Rejected" && (
                    <span className="rounded-full bg-red-100 px-4 py-2 text-sm font-semibold text-red-700">
                      Rejected
                    </span>
                  )}
                </td>

                <td>
                  <div className="flex justify-end gap-3">
                    <button
                      className="
                      rounded-xl
                      bg-emerald-100
                      p-3
                      text-emerald-600
                      transition
                      hover:bg-emerald-200"
                    >
                      <CheckCircle2 size={20} />
                    </button>

                    <button
                      className="
                      rounded-xl
                      bg-red-100
                      p-3
                      text-red-600
                      transition
                      hover:bg-red-200"
                    >
                      <XCircle size={20} />
                    </button>
                  </div>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
}
