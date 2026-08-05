import { useState } from "react";
import { motion } from "framer-motion";
import { Check, X, Eye, Paperclip, Clock3 } from "lucide-react";
import { toast } from "react-hot-toast";

import { approveLeave, rejectLeave } from "../../services/manager.service";

export default function LeaveTable({ requests = [], refreshData }) {
  const [loadingId, setLoadingId] = useState(null);

  const formatDate = (date) =>
    new Date(date).toLocaleDateString("en-IN", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });

  const getDays = (start, end) =>
    Math.floor((new Date(end) - new Date(start)) / (1000 * 60 * 60 * 24)) + 1;

  const handleApprove = async (id) => {
    try {
      setLoadingId(id);

      await approveLeave(id);

      toast.success("Leave Approved Successfully");

      refreshData();
    } catch (error) {
      console.error(error);

      toast.error("Failed to approve leave");
    } finally {
      setLoadingId(null);
    }
  };

  const handleReject = async (id) => {
    const remarks = prompt("Reason for rejection");

    if (remarks === null) return;

    try {
      setLoadingId(id);

      await rejectLeave(id, remarks || "Rejected");

      toast.success("Leave Rejected Successfully");

      refreshData();
    } catch (error) {
      console.error(error);

      toast.error("Failed to reject leave");
    } finally {
      setLoadingId(null);
    }
  };

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

      {/* Desktop */}

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
            {requests.length === 0 ? (
              <tr>
                <td colSpan={7} className="py-10 text-center text-slate-500">
                  No Leave Requests Found
                </td>
              </tr>
            ) : (
              requests.map((item) => (
                <tr
                  key={item.id}
                  className="border-t border-slate-100 transition hover:bg-slate-50"
                >
                  {/* Employee */}

                  <td className="px-6 py-5">
                    <div className="flex items-center gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-emerald-500 to-cyan-500 font-bold text-white">
                        {item.employee.username.charAt(0).toUpperCase()}
                      </div>

                      <div>
                        <h3 className="font-semibold text-slate-900">
                          {item.employee.username}
                        </h3>

                        <p className="text-sm text-slate-500">
                          {item.employee.id.slice(-6)}
                        </p>
                      </div>
                    </div>
                  </td>

                  {/* Leave */}

                  <td>
                    <div>
                      <p className="font-semibold">{item.leaveType}</p>

                      <span className="text-sm text-slate-500">
                        {formatDate(item.startDate)} -{" "}
                        {formatDate(item.endDate)}
                      </span>
                    </div>
                  </td>

                  {/* Duration */}

                  <td>
                    <div className="flex items-center gap-2">
                      <Clock3 size={17} className="text-slate-400" />
                      {getDays(item.startDate, item.endDate)} Days
                    </div>
                  </td>

                  {/* Status */}

                  <td>
                    <StatusBadge status={item.status} />
                  </td>

                  {/* Applied */}

                  <td>{new Date(item.createdAt).toLocaleDateString()}</td>

                  {/* Attachment */}

                  <td>
                    {item.document ? (
                      <a
                        href={`http://localhost:5000/${item.document}`}
                        target="_blank"
                        rel="noreferrer"
                        className="rounded-xl bg-slate-100 p-3 hover:bg-slate-200 inline-flex"
                      >
                        <Paperclip size={18} />
                      </a>
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

                      {item.status === "PENDING" && (
                        <>
                          <button
                            disabled={loadingId === item.id}
                            onClick={() => handleApprove(item.id)}
                            className="rounded-xl bg-emerald-100 p-3 text-emerald-600 hover:bg-emerald-200 disabled:opacity-50"
                          >
                            <Check size={18} />
                          </button>

                          <button
                            disabled={loadingId === item.id}
                            onClick={() => handleReject(item.id)}
                            className="rounded-xl bg-red-100 p-3 text-red-500 hover:bg-red-200 disabled:opacity-50"
                          >
                            <X size={18} />
                          </button>
                        </>
                      )}
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Mobile */}

      <div className="space-y-5 p-5 lg:hidden">
        {requests.map((item) => (
          <div
            key={item.id}
            className="rounded-3xl border border-slate-200 p-5"
          >
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-r from-emerald-500 to-cyan-500 font-bold text-white">
                {item.employee.username.charAt(0).toUpperCase()}
              </div>

              <div>
                <h3 className="font-bold">{item.employee.username}</h3>

                <p className="text-sm text-slate-500">
                  {item.employee.id.slice(-6)}
                </p>
              </div>
            </div>

            <div className="mt-5 space-y-2 text-sm">
              <p>
                <strong>Leave:</strong> {item.leaveType}
              </p>

              <p>
                <strong>Duration:</strong>{" "}
                {getDays(item.startDate, item.endDate)} Days
              </p>

              <p>
                <strong>Dates:</strong> {formatDate(item.startDate)} -{" "}
                {formatDate(item.endDate)}
              </p>
            </div>

            <div className="mt-5">
              <StatusBadge status={item.status} />
            </div>

            {item.status === "PENDING" && (
              <div className="mt-5 flex gap-3">
                <button className="flex-1 rounded-2xl bg-blue-500 py-3 font-semibold text-white">
                  View
                </button>

                <button
                  onClick={() => handleApprove(item.id)}
                  className="flex-1 rounded-2xl bg-emerald-500 py-3 font-semibold text-white"
                >
                  Approve
                </button>

                <button
                  onClick={() => handleReject(item.id)}
                  className="flex-1 rounded-2xl bg-red-500 py-3 font-semibold text-white"
                >
                  Reject
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </motion.div>
  );
}

function StatusBadge({ status }) {
  const styles = {
    PENDING: "bg-yellow-100 text-yellow-700",
    APPROVED: "bg-emerald-100 text-emerald-700",
    REJECTED: "bg-red-100 text-red-600",
  };

  return (
    <span
      className={`rounded-full px-4 py-2 text-sm font-semibold ${styles[status]}`}
    >
      {status}
    </span>
  );
}
