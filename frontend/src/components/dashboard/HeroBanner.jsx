import { CalendarPlus, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

import { useAuth } from "../../context/AuthContext";

export default function HeroBanner() {
  const navigate = useNavigate();
  const { user } = useAuth();

  const getGreeting = () => {
    const hour = new Date().getHours();

    if (hour < 12) return "Good Morning";
    if (hour < 18) return "Good Afternoon";
    return "Good Evening";
  };

  const username = user?.username || "there";

  return (
    <motion.section
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="relative overflow-hidden rounded-[34px] bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-600 p-8 text-white shadow-[0_25px_80px_rgba(16,185,129,0.35)] md:p-12"
    >
      <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-2xl">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-xl">
            <Sparkles size={18} />

            <span className="text-sm font-medium">Employee Dashboard</span>
          </div>

          <h1 className="text-4xl font-black leading-tight md:text-5xl">
            {getGreeting()} 👋
          </h1>

          <p className="mt-4 text-xl text-emerald-50">
            Welcome back,
            <span className="font-bold"> {username}</span>
          </p>

          <p className="mt-4 max-w-xl text-emerald-100">
            Stay organized, submit leave requests, monitor approvals and keep
            everything in one beautiful workspace.
          </p>
        </div>

        <button
          onClick={() => navigate("/employee/apply")}
          className="inline-flex items-center gap-3 rounded-2xl bg-white px-8 py-4 font-bold text-emerald-700 shadow-xl transition duration-300 hover:-translate-y-1 hover:shadow-2xl"
        >
          <CalendarPlus size={20} />
          Apply Leave
        </button>
      </div>
    </motion.section>
  );
}
