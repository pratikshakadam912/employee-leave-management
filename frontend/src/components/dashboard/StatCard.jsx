import { motion } from "framer-motion";

export default function StatCard({ title, value, icon: Icon, color }) {
  return (
    <motion.div
      whileHover={{
        y: -8,
      }}
      className="rounded-[28px] border border-white/40 bg-white/80 p-6 shadow-xl backdrop-blur-xl transition"
    >
      <div className="flex items-center justify-between">
        <div>
          <p className="text-slate-500">{title}</p>

          <h2 className="mt-2 text-4xl font-black">{value}</h2>
        </div>

        <div className={`rounded-2xl p-4 ${color}`}>
          <Icon className="text-white" size={28} />
        </div>
      </div>
    </motion.div>
  );
}
