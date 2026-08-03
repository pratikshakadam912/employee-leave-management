import { motion } from "framer-motion";
import { BarChart3, Download, FileSpreadsheet } from "lucide-react";

export default function ReportsHeader() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
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

      <div className="absolute -top-20 -right-20 h-72 w-72 rounded-full bg-white/10 blur-[120px]" />

      <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-emerald-400/20 blur-[120px]" />

      <div className="relative z-10 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        {/* Left */}

        <div>
          <p className="text-emerald-100">Manager Analytics</p>

          <h1 className="mt-2 text-5xl font-black">Reports & Analytics</h1>

          <p className="mt-4 max-w-2xl text-emerald-50">
            Track employee leave trends, department performance, approval rates
            and workforce insights from one dashboard.
          </p>
        </div>

        {/* Right */}

        <div className="flex flex-wrap gap-4">
          <button
            className="
            flex
            items-center
            gap-2
            rounded-2xl
            bg-white/15
            px-6
            py-4
            font-semibold
            backdrop-blur-xl
            transition
            hover:bg-white/25
            "
          >
            <Download size={18} />
            Export PDF
          </button>

          <button
            className="
            flex
            items-center
            gap-2
            rounded-2xl
            bg-white
            px-6
            py-4
            font-semibold
            text-slate-900
            transition
            hover:scale-[1.02]
            "
          >
            <FileSpreadsheet size={18} />
            Export Excel
          </button>

          <div
            className="
            flex
            h-16
            w-16
            items-center
            justify-center
            rounded-3xl
            bg-white/10
            backdrop-blur-xl
            "
          >
            <BarChart3 size={34} />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
