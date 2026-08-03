import { Clock3, CheckCircle2, XCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";

const statusStyle = {
  PENDING: "bg-amber-100 text-amber-700",
  APPROVED: "bg-emerald-100 text-emerald-700",
  REJECTED: "bg-red-100 text-red-700",
};

const statusIcon = {
  PENDING: Clock3,
  APPROVED: CheckCircle2,
  REJECTED: XCircle,
};

export default function RecentLeaves({ data = [] }) {
  const navigate = useNavigate();

  return (
    <div className="rounded-[28px] bg-white p-6 shadow-xl">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-xl font-bold">Recent Leaves</h2>

        <button
          onClick={() => navigate("/employee/history")}
          className="text-sm font-semibold text-emerald-600 hover:text-emerald-700"
        >
          View All
        </button>
      </div>

      <div className="space-y-4">
        {data.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-slate-200 py-12 text-center">
            <h3 className="text-lg font-semibold text-slate-700">
              No Leave Requests
            </h3>

            <p className="mt-2 text-sm text-slate-500">
              Your recent leave applications will appear here.
            </p>
          </div>
        ) : (
          data.map((leave) => {
            const Icon = statusIcon[leave.status];

            return (
              <div
                key={leave.id}
                className="flex items-center justify-between rounded-2xl border border-slate-100 p-4 transition hover:bg-slate-50"
              >
                <div>
                  <h3 className="font-semibold">{leave.reason}</h3>

                  <p className="text-sm text-slate-500">
                    {new Date(leave.startDate).toLocaleDateString("en-IN", {
                      day: "numeric",
                      month: "short",
                      year: "numeric",
                    })}
                    {" • "}
                    {new Date(leave.endDate).toLocaleDateString("en-IN", {
                      day: "numeric",
                      month: "short",
                      year: "numeric",
                    })}
                  </p>
                </div>

                <span
                  className={`flex items-center gap-2 rounded-full px-3 py-1 text-sm font-medium ${
                    statusStyle[leave.status]
                  }`}
                >
                  <Icon size={16} />
                  {leave.status.charAt(0) + leave.status.slice(1).toLowerCase()}
                </span>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}
