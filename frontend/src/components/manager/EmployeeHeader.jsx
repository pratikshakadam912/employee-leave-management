import { motion } from "framer-motion";
import { Users, UserPlus, Search, Filter } from "lucide-react";

export default function EmployeeHeader() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      className="
      rounded-[34px]
      bg-gradient-to-r
      from-slate-900
      via-emerald-900
      to-teal-700
      p-8
      text-white
      shadow-2xl
      overflow-hidden
      relative
      "
    >
      {/* Background Glow */}

      <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-white/10 blur-[120px]" />

      <div className="relative z-10">
        {/* Top */}

        <div className="flex flex-col gap-6 xl:flex-row xl:items-center xl:justify-between">
          <div>
            <span className="rounded-full bg-white/10 px-4 py-2 text-sm backdrop-blur-lg">
              Human Resource
            </span>

            <h1 className="mt-5 text-5xl font-black">Employees</h1>

            <p className="mt-4 max-w-2xl text-emerald-50">
              View all employees, monitor departments, leave balance and
              workforce information.
            </p>
          </div>

          <button
            className="
            flex
            items-center
            gap-3
            rounded-2xl
            bg-white
            px-7
            py-4
            font-semibold
            text-slate-900
            shadow-xl
            transition
            hover:scale-105
            "
          >
            <UserPlus size={20} />
            Add Employee
          </button>
        </div>

        {/* Search */}

        <div className="mt-10 grid gap-4 lg:grid-cols-[1fr_250px_180px]">
          {/* Search */}

          <div className="relative">
            <Search
              size={20}
              className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400"
            />

            <input
              placeholder="Search employee..."
              className="
              w-full
              rounded-2xl
              bg-white
              py-4
              pl-14
              pr-5
              text-slate-900
              outline-none
              "
            />
          </div>

          {/* Department */}

          <select
            className="
            rounded-2xl
            bg-white
            px-5
            text-slate-900
            outline-none
            "
          >
            <option>All Departments</option>
            <option>HR</option>
            <option>Development</option>
            <option>Marketing</option>
            <option>Finance</option>
          </select>

          {/* Filter */}

          <button
            className="
            flex
            items-center
            justify-center
            gap-2
            rounded-2xl
            bg-white/10
            backdrop-blur-lg
            font-semibold
            transition
            hover:bg-white/20
            "
          >
            <Filter size={18} />
            Filter
          </button>
        </div>

        {/* Stats */}

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          <Stat title="Total Employees" value="142" />

          <Stat title="Active Today" value="131" />

          <Stat title="On Leave" value="11" />
        </div>
      </div>
    </motion.div>
  );
}

function Stat({ title, value }) {
  return (
    <div className="rounded-3xl bg-white/10 p-5 backdrop-blur-xl">
      <div className="flex items-center gap-3">
        <Users />

        <div>
          <h2 className="text-3xl font-black">{value}</h2>

          <p className="text-sm text-emerald-100">{title}</p>
        </div>
      </div>
    </div>
  );
}
