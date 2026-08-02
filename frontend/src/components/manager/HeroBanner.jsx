import { motion } from "framer-motion";
import { ShieldCheck, Users, Sparkles } from "lucide-react";

export default function HeroBanner() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="
      relative
      overflow-hidden
      rounded-[36px]
      bg-gradient-to-r
      from-slate-950
      via-emerald-900
      to-teal-700
      p-8
      shadow-2xl"
    >
      {/* Background Glow */}

      <div className="absolute -top-20 -right-20 h-72 w-72 rounded-full bg-emerald-400/20 blur-[120px]" />

      <div className="absolute -bottom-16 left-20 h-60 w-60 rounded-full bg-cyan-400/10 blur-[120px]" />

      <div className="relative z-10 flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
        {/* Left */}

        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-emerald-100 backdrop-blur-xl">
            <Sparkles size={16} />
            Management Portal
          </span>

          <h1 className="mt-6 text-4xl font-black text-white md:text-5xl">
            Welcome Back, Manager 👋
          </h1>

          <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-200">
            Monitor leave requests, manage employees, approve applications, and
            keep your workforce organized from one premium dashboard.
          </p>
        </div>

        {/* Right */}

        <div className="flex gap-5">
          <div className="rounded-3xl bg-white/10 p-6 backdrop-blur-xl border border-white/10">
            <ShieldCheck size={42} className="text-emerald-300" />
          </div>

          <div className="rounded-3xl bg-white/10 p-6 backdrop-blur-xl border border-white/10">
            <Users size={42} className="text-cyan-300" />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
