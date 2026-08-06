import { useState } from "react";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { getLeaveHistory } from "../../services/employee.service";
import { History, Search } from "lucide-react";
import DashboardLayout from "../../layouts/DashboardLayout";
import HistoryFilters from "../../components/history/HistoryFilters";
import LeaveCard from "../../components/history/LeaveCard";
import EmptyState from "../../components/history/EmptyState";

export default function LeaveHistory() {
  const [activeFilter, setActiveFilter] = useState("ALL");
  const [search, setSearch] = useState("");

  const [leaves, setLeaves] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchHistory();
  }, []);

  const fetchHistory = async () => {
    try {
      const res = await getLeaveHistory();
      setLeaves(res.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const filteredLeaves = leaves.filter((leave) => {
    const matchesSearch =
      (leave.leaveType || "").toLowerCase().includes(search.toLowerCase()) ||
      (leave.reason || "").toLowerCase().includes(search.toLowerCase());

    const matchesFilter =
      activeFilter === "ALL" || leave.status === activeFilter;

    return matchesSearch && matchesFilter;
  });

  if (loading) {
    return (
      <DashboardLayout>
        <div className="flex h-[70vh] items-center justify-center">
          <h2 className="text-xl font-semibold">Loading...</h2>
        </div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      <div className="space-y-8">
        {/* Header */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="rounded-[32px] bg-gradient-to-r from-slate-900 via-slate-800 to-slate-700 p-8 text-white shadow-2xl"
        >
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-slate-300">Employee Portal</p>

              <h1 className="mt-2 text-4xl font-black">Leave History</h1>

              <p className="mt-3 max-w-xl text-slate-300">
                Review every leave request you've submitted, track approvals,
                and view manager remarks.
              </p>
            </div>

            <div className="rounded-3xl bg-white/10 p-5 backdrop-blur-xl">
              <History size={42} />
            </div>
          </div>
        </motion.div>

        {/* Search */}

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="rounded-[28px] bg-white p-6 shadow-lg"
        >
          <div className="relative">
            <Search
              size={20}
              className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400"
            />

            <input
              type="text"
              placeholder="Search leave type or reason..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full rounded-2xl border border-slate-200 py-4 pl-14 pr-5 outline-none transition focus:border-emerald-500"
            />
          </div>

          <HistoryFilters
            activeFilter={activeFilter}
            setActiveFilter={setActiveFilter}
          />
        </motion.div>

        {/* Leave Cards */}

        <div className="space-y-5">
          {filteredLeaves.length > 0 ? (
            filteredLeaves.map((leave) => (
              <LeaveCard key={leave.id} leave={leave} />
            ))
          ) : (
            <EmptyState />
          )}
        </div>
      </div>
    </DashboardLayout>
  );
}
