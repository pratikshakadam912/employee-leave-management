import { Clock3, CheckCircle2, XCircle } from "lucide-react";

const filters = [
  {
    id: "ALL",
    label: "All",
  },
  {
    id: "PENDING",
    label: "Pending",
    icon: Clock3,
  },
  {
    id: "APPROVED",
    label: "Approved",
    icon: CheckCircle2,
  },
  {
    id: "REJECTED",
    label: "Rejected",
    icon: XCircle,
  },
];

export default function HistoryFilters({ activeFilter, setActiveFilter }) {
  return (
    <div className="mt-6 flex flex-wrap gap-3">
      {filters.map((filter) => {
        const Icon = filter.icon;

        return (
          <button
            key={filter.id}
            onClick={() => setActiveFilter(filter.id)}
            className={`flex items-center gap-2 rounded-2xl px-5 py-3 font-semibold transition

            ${
              activeFilter === filter.id
                ? "bg-emerald-600 text-white shadow-lg"
                : "bg-slate-100 text-slate-700 hover:bg-slate-200"
            }`}
          >
            {Icon && <Icon size={18} />}
            {filter.label}
          </button>
        );
      })}
    </div>
  );
}
