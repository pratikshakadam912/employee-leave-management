import { Clock3, CheckCircle2, XCircle } from "lucide-react";

const leaves = [
  {
    reason: "Medical Leave",
    date: "28 Jul",
    status: "Pending",
  },
  {
    reason: "Family Function",
    date: "16 Jul",
    status: "Approved",
  },
  {
    reason: "Vacation",
    date: "04 Jul",
    status: "Rejected",
  },
];

const statusStyle = {
  Pending: "bg-amber-100 text-amber-700",
  Approved: "bg-emerald-100 text-emerald-700",
  Rejected: "bg-red-100 text-red-700",
};

const statusIcon = {
  Pending: Clock3,
  Approved: CheckCircle2,
  Rejected: XCircle,
};

export default function RecentLeaves() {
  return (
    <div className="rounded-[28px] bg-white p-6 shadow-xl">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-xl font-bold">Recent Leaves</h2>

        <button className="text-sm font-semibold text-emerald-600">
          View All
        </button>
      </div>

      <div className="space-y-4">
        {leaves.map((leave) => {
          const Icon = statusIcon[leave.status];

          return (
            <div
              key={leave.reason}
              className="flex items-center justify-between rounded-2xl border border-slate-100 p-4 transition hover:bg-slate-50"
            >
              <div>
                <h3 className="font-semibold">{leave.reason}</h3>

                <p className="text-sm text-slate-500">{leave.date}</p>
              </div>

              <span
                className={`flex items-center gap-2 rounded-full px-3 py-1 text-sm font-medium ${statusStyle[leave.status]}`}
              >
                <Icon size={16} />
                {leave.status}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
