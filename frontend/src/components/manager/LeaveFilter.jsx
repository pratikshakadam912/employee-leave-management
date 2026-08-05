import { useState } from "react";
import { motion } from "framer-motion";
import { Search, Filter, CalendarDays, RotateCcw } from "lucide-react";

export default function LeaveFilter({ onFilter }) {
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("");
  const [type, setType] = useState("");
  const [date, setDate] = useState("");

  const applyFilters = () => {
    onFilter({
      search,
      status,
      type,
      date,
    });
  };

  const resetFilters = () => {
    setSearch("");
    setStatus("");
    setType("");
    setDate("");

    onFilter({
      search: "",
      status: "",
      type: "",
      date: "",
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.25 }}
      className="
      rounded-[30px]
      bg-white
      p-6
      shadow-lg
      "
    >
      <div className="flex flex-col gap-5 xl:flex-row xl:items-center">
        {/* Search */}

        <div className="relative flex-1">
          <Search
            size={20}
            className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400"
          />

          <input
            type="text"
            placeholder="Search employee, ID or department..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="
            w-full
            rounded-2xl
            border
            border-slate-200
            bg-slate-50
            py-4
            pl-14
            pr-5
            text-sm
            outline-none
            transition
            focus:border-emerald-500
            focus:bg-white
            "
          />
        </div>

        {/* Status */}

        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="
          rounded-2xl
          border
          border-slate-200
          bg-slate-50
          px-5
          py-4
          text-sm
          outline-none
          transition
          focus:border-emerald-500
          "
        >
          <option value="">All Status</option>
          <option value="PENDING">Pending</option>
          <option value="APPROVED">Approved</option>
          <option value="REJECTED">Rejected</option>
        </select>

        {/* Leave Type */}

        <select
          value={type}
          onChange={(e) => setType(e.target.value)}
          className="
          rounded-2xl
          border
          border-slate-200
          bg-slate-50
          px-5
          py-4
          text-sm
          outline-none
          transition
          focus:border-emerald-500
          "
        >
          <option value="">All Types</option>
          <option value="Casual Leave">Casual Leave</option>
          <option value="Sick Leave">Sick Leave</option>
          <option value="Annual Leave">Annual Leave</option>
          <option value="Unpaid Leave">Unpaid Leave</option>
        </select>

        {/* Date */}

        <div
          className="
          flex
          items-center
          gap-3
          rounded-2xl
          border
          border-slate-200
          bg-slate-50
          px-5
          py-4
          "
        >
          <CalendarDays size={18} className="text-emerald-600" />

          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="bg-transparent text-sm outline-none"
          />
        </div>

        {/* Reset */}

        <button
          onClick={resetFilters}
          className="
          flex
          items-center
          justify-center
          gap-2
          rounded-2xl
          border
          border-slate-200
          bg-white
          px-6
          py-4
          font-semibold
          transition
          hover:border-emerald-500
          hover:bg-emerald-50
          "
        >
          <RotateCcw size={18} />
          Reset
        </button>

        {/* Apply */}

        <button
          onClick={applyFilters}
          className="
          flex
          items-center
          justify-center
          gap-2
          rounded-2xl
          bg-gradient-to-r
          from-emerald-500
          via-teal-500
          to-cyan-500
          px-7
          py-4
          font-semibold
          text-white
          shadow-lg
          transition
          hover:scale-[1.02]
          "
        >
          <Filter size={18} />
          Apply Filters
        </button>
      </div>
    </motion.div>
  );
}
