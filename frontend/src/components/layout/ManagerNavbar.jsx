import { Bell, Search, CalendarDays, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";

export default function ManagerNavbar() {
  const today = new Date().toLocaleDateString("en-IN", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="
      sticky
      top-0
      z-40
      ml-[290px]
      flex
      h-24
      items-center
      justify-between
      border-b
      border-slate-200
      bg-white/90
      px-8
      backdrop-blur-xl
      "
    >
      {/* Left */}

      <div>
        <p className="text-sm text-slate-500">Welcome back 👋</p>

        <h1 className="mt-1 text-3xl font-black text-slate-900">
          Manager Dashboard
        </h1>
      </div>

      {/* Right */}

      <div className="flex items-center gap-5">
        {/* Search */}

        <div
          className="
          hidden
          lg:flex
          items-center
          gap-3
          rounded-2xl
          border
          border-slate-200
          bg-slate-50
          px-5
          py-3
          "
        >
          <Search size={18} className="text-slate-400" />

          <input
            placeholder="Search employees..."
            className="bg-transparent outline-none"
          />
        </div>

        {/* Date */}

        <div className="hidden xl:flex items-center gap-2 rounded-2xl bg-slate-100 px-5 py-3">
          <CalendarDays size={18} />

          <span className="text-sm font-medium">{today}</span>
        </div>

        {/* Notification */}

        <button className="relative rounded-2xl bg-slate-100 p-3 hover:bg-slate-200">
          <Bell />

          <span
            className="
            absolute
            right-2
            top-2
            h-2.5
            w-2.5
            rounded-full
            bg-red-500
            "
          />
        </button>

        {/* Profile */}

        <button
          className="
          flex
          items-center
          gap-3
          rounded-2xl
          border
          border-slate-200
          bg-white
          px-4
          py-2
          hover:shadow-lg
          "
        >
          <div
            className="
            flex
            h-11
            w-11
            items-center
            justify-center
            rounded-full
            bg-gradient-to-r
            from-emerald-500
            to-cyan-500
            font-bold
            text-white
            "
          >
            M
          </div>

          <div className="hidden text-left lg:block">
            <p className="font-semibold text-slate-900">Manager</p>

            <p className="text-xs text-slate-500">HR Department</p>
          </div>

          <ChevronDown size={18} />
        </button>
      </div>
    </motion.header>
  );
}
