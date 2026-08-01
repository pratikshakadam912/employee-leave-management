import { Inbox } from "lucide-react";
import { motion } from "framer-motion";

export default function EmptyState() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 20,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      className="rounded-[30px] bg-white p-14 text-center shadow-lg"
    >
      <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-emerald-100">
        <Inbox size={42} className="text-emerald-600" />
      </div>

      <h2 className="mt-6 text-2xl font-bold text-slate-800">
        No Leave Requests Found
      </h2>

      <p className="mx-auto mt-3 max-w-md text-slate-500">
        Looks like you haven't submitted any leave requests yet, or no requests
        match your search.
      </p>
    </motion.div>
  );
}
