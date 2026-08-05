import { motion } from "framer-motion";
import { CheckCircle2, XCircle, Search, Filter } from "lucide-react";
import { toast } from "react-hot-toast";
import { approveLeave, rejectLeave } from "../../services/manager.service";

export default function RecentRequests({ requests = [], onRefresh }) {
  const getDuration = (startDate, endDate) => {
    const start = new Date(startDate);
    const end = new Date(endDate);

    const days = Math.floor((end - start) / (1000 * 60 * 60 * 24)) + 1;

    return `${days} Day${days > 1 ? "s" : ""}`;
  };

  const formatDate = (date) =>
    new Date(date).toLocaleDateString("en-IN", {
      day: "2-digit",
      month: "short",
    });

  const handleApprove = async (id) => {
    try {
      await approveLeave(id);

      toast.success("Leave Approved");

      if (onRefresh) {
        onRefresh();
      }
    } catch (error) {
      console.error(error);

      toast.error(error.response?.data?.message || "Failed to approve leave");
    }
  };

  const handleReject = async (id) => {
    try {
      const remarks = prompt("Enter rejection remarks") || "Rejected";

      await rejectLeave(id, remarks);

      toast.success("Leave Rejected");

      if (onRefresh) {
        onRefresh();
      }
    } catch (error) {
      console.error(error);

      toast.error(error.response?.data?.message || "Failed to reject leave");
    }
  };

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
          <button className="flex items-center gap-2 rounded-2xl border border-slate-200 px-5 py-3 hover:bg-slate-50">
            <Search size={18} />
            Search
          </button>

          <button className="flex items-center gap-2 rounded-2xl border border-slate-200 px-5 py-3 hover:bg-slate-50">
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

              <th className="text-left text-slate-500">Reason</th>

              <th className="text-left text-slate-500">Duration</th>

              <th className="text-left text-slate-500">Dates</th>

              <th className="text-left text-slate-500">Status</th>

              <th className="text-right text-slate-500">Action</th>
            </tr>
          </thead>

          <tbody>
            {requests.length === 0 ? (
              <tr>
                <td colSpan={6} className="py-10 text-center text-slate-500">
                  No leave requests found.
                </td>
              </tr>
            ) : (
              requests.map((item) => (
                <motion.tr
                  key={item.id}
                  whileHover={{
                    backgroundColor: "#F8FAFC",
                  }}
                  className="border-b"
                >
                  <td className="py-5">
                    <div className="flex items-center gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-emerald-500 to-cyan-500 text-lg font-bold text-white">
                        {item.employee.username.charAt(0).toUpperCase()}
                      </div>

                      <div>
                        <h4 className="font-semibold">
                          {item.employee.username}
                        </h4>

                        <p className="text-sm text-slate-400">Employee</p>
                      </div>
                    </div>
                  </td>

                  <td>{item.reason}</td>

                  <td>{getDuration(item.startDate, item.endDate)}</td>

                  <td>
                    {formatDate(item.startDate)} - {formatDate(item.endDate)}
                  </td>

                  <td>
                    {item.status === "PENDING" && (
                      <span className="rounded-full bg-yellow-100 px-4 py-2 text-sm font-semibold text-yellow-700">
                        Pending
                      </span>
                    )}

                    {item.status === "APPROVED" && (
                      <span className="rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-700">
                        Approved
                      </span>
                    )}

                    {item.status === "REJECTED" && (
                      <span className="rounded-full bg-red-100 px-4 py-2 text-sm font-semibold text-red-700">
                        Rejected
                      </span>
                    )}
                  </td>

                  <td>
                    <div className="flex justify-end gap-3">
                      <button
                        onClick={() => handleApprove(item.id)}
                        className="rounded-xl bg-emerald-100 p-3 text-emerald-600 transition hover:bg-emerald-200"
                      ></button>

                      <button
                        onClick={() => handleReject(item.id)}
                        className="rounded-xl bg-red-100 p-3 text-red-600 transition hover:bg-red-200"
                      ></button>
                    </div>
                  </td>
                </motion.tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
}
