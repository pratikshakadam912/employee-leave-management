import { motion } from "framer-motion";
import { ClipboardCheck, Clock3, CheckCircle2, XCircle } from "lucide-react";

export default function RequestHeader() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="
      relative
      overflow-hidden
      rounded-[34px]
      bg-gradient-to-r
      from-slate-900
      via-emerald-900
      to-teal-700
      p-8
      text-white
      shadow-2xl
      "
    >
      {/* Background Glow */}

      <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-white/10 blur-[120px]" />

      <div className="absolute -bottom-24 -left-20 h-72 w-72 rounded-full bg-emerald-400/10 blur-[120px]" />

      <div className="relative z-10 flex flex-col gap-8 xl:flex-row xl:items-center xl:justify-between">
        {/* Left */}

        <div>
          <span className="rounded-full bg-white/10 px-4 py-2 text-sm font-medium backdrop-blur-xl">
            HR Management
          </span>

          <h1 className="mt-5 text-5xl font-black">Leave Requests</h1>

          <p className="mt-4 max-w-2xl text-emerald-50">
            Review employee leave requests, approve or reject applications,
            monitor pending requests and manage workforce availability from one
            place.
          </p>
        </div>

        {/* Right */}

        <div className="grid grid-cols-2 gap-5">
          <MiniCard icon={<Clock3 size={26} />} value="18" label="Pending" />

          <MiniCard
            icon={<CheckCircle2 size={26} />}
            value="126"
            label="Approved"
          />

          <MiniCard icon={<XCircle size={26} />} value="11" label="Rejected" />

          <MiniCard
            icon={<ClipboardCheck size={26} />}
            value="155"
            label="Total"
          />
        </div>
      </div>
    </motion.div>
  );
}

function MiniCard({ icon, value, label }) {
  return (
    <motion.div
      whileHover={{
        y: -4,
        scale: 1.02,
      }}
      className="
      rounded-3xl
      bg-white/10
      p-5
      text-center
      backdrop-blur-xl
      border
      border-white/10
      min-w-[140px]
      "
    >
      <div className="mb-3 flex justify-center text-white">{icon}</div>

      <h2 className="text-3xl font-black">{value}</h2>

      <p className="mt-1 text-sm text-emerald-100">{label}</p>
    </motion.div>
  );
}
