import { motion } from "framer-motion";
import { Bell, Search, CalendarDays, ChevronDown, Menu } from "lucide-react";

export default function ManagerNavbar({ setOpen }) {
  const today = new Date().toLocaleDateString("en-IN", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <motion.header
      initial={{ y: -25, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="
      sticky
      top-0
      z-40
      flex
      h-24
      items-center
      justify-between
      border-b
      border-slate-200
      bg-white/90
      px-6
      backdrop-blur-3xl
      lg:px-8
      "
    >
      {/* LEFT */}

      <div className="flex items-center gap-5">
        {/* Mobile Menu */}

        <button
          onClick={() => setOpen(true)}
          className="rounded-2xl bg-slate-100 p-3 lg:hidden"
        >
          <Menu size={22} />
        </button>

        <div>
          <p className="text-sm font-medium text-slate-500">Good Morning 👋</p>

          <h1 className="mt-1 text-3xl font-black text-slate-900">
            Manager Dashboard
          </h1>

          <p className="mt-1 hidden text-sm text-slate-500 lg:block">
            Manage leave requests, employees and reports.
          </p>
        </div>
      </div>

      {/* RIGHT */}

      <div className="flex items-center gap-4">
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
            type="text"
            placeholder="Search employees..."
            className="
            w-56
            bg-transparent
            text-sm
            outline-none
            placeholder:text-slate-400
            "
          />
        </div>

        {/* Date */}

        <div
          className="
          hidden
          xl:flex
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
          <CalendarDays size={18} className="text-emerald-600" />

          <span className="text-sm font-medium text-slate-700">{today}</span>
        </div>

        {/* Notification */}

        <button
          className="
          relative
          rounded-2xl
          border
          border-slate-200
          bg-slate-50
          p-3
          transition
          hover:bg-slate-100
          "
        >
          <Bell size={20} className="text-slate-700" />

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
          px-3
          py-2
          shadow-sm
          transition
          hover:shadow-lg
          "
        >
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
            via-teal-500
            to-cyan-500
            text-lg
            font-bold
            text-white
            shadow-lg
            "
          >
            M
          </div>

          <div className="hidden text-left lg:block">
            <h3 className="font-semibold text-slate-900">Manager</h3>

            <p className="text-xs text-slate-500">HR Department</p>
          </div>

          <ChevronDown size={18} className="hidden text-slate-500 lg:block" />
        </button>
      </div>
    </motion.header>
  );
}
