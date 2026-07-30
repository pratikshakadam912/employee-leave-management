import { motion } from "framer-motion";
import {
  ShieldCheck,
  BriefcaseBusiness,
  CalendarCheck2,
  Users,
} from "lucide-react";

export default function AuthLayout({ title, subtitle, children }) {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-50 via-white to-slate-100">
      {/* Background Blobs */}
      <div className="absolute -left-24 top-0 h-96 w-96 rounded-full bg-emerald-300/20 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-indigo-300/20 blur-3xl" />
      <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-200/20 blur-3xl" />

      <div className="relative z-10 flex min-h-screen items-center justify-center px-5 py-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid w-full max-w-7xl overflow-hidden rounded-[34px] border border-white/40 bg-white/60 shadow-[0_20px_80px_rgba(15,23,42,0.08)] backdrop-blur-xl lg:grid-cols-2"
        >
          {/* LEFT SIDE */}

          <div className="relative hidden overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-950 p-14 text-white lg:flex lg:flex-col lg:justify-between">
            <div>
              <motion.div
                initial={{ opacity: 0, x: -25 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                <span className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs tracking-[4px] uppercase">
                  Employee Leave Management
                </span>

                <h1 className="mt-10 text-5xl font-black leading-tight">
                  Work Smarter.
                  <br />
                  Leave Easier.
                </h1>

                <p className="mt-6 max-w-lg text-slate-300 leading-8">
                  A secure employee leave management platform designed for
                  organizations to simplify leave requests, approvals and
                  workforce management.
                </p>
              </motion.div>
            </div>

            {/* Stats */}

            <div className="grid gap-5">
              <Feature
                icon={<CalendarCheck2 size={20} />}
                title="Leave Tracking"
                desc="Apply, manage and monitor leave requests effortlessly."
              />

              <Feature
                icon={<ShieldCheck size={20} />}
                title="Secure Authentication"
                desc="Protected employee & manager portals with JWT."
              />

              <Feature
                icon={<Users size={20} />}
                title="Approval Workflow"
                desc="Manager approvals with live status updates."
              />

              <Feature
                icon={<BriefcaseBusiness size={20} />}
                title="Enterprise Ready"
                desc="Responsive UI built with modern technologies."
              />
            </div>

            {/* Decorative Cards */}

            <motion.div
              animate={{
                y: [0, -12, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 5,
              }}
              className="absolute right-8 top-8 h-28 w-28 rounded-3xl bg-white/10 backdrop-blur-md"
            />

            <motion.div
              animate={{
                y: [0, 15, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 6,
              }}
              className="absolute bottom-16 right-20 h-20 w-20 rounded-2xl bg-emerald-400/20 backdrop-blur-xl"
            />
          </div>

          {/* RIGHT SIDE */}

          <div className="flex items-center justify-center p-6 sm:p-10 lg:p-16">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="w-full max-w-md"
            >
              <div className="mb-10">
                <div className="mb-5 flex items-center gap-3">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-600 text-xl font-bold text-white shadow-xl">
                    EL
                  </div>

                  <div>
                    <h3 className="font-bold text-slate-900">Employee Leave</h3>

                    <p className="text-sm text-slate-500">Management System</p>
                  </div>
                </div>

                <h2 className="text-4xl font-black text-slate-900">{title}</h2>

                <p className="mt-3 leading-7 text-slate-500">{subtitle}</p>
              </div>

              {children}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

function Feature({ icon, title, desc }) {
  return (
    <div className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-md">
      <div className="rounded-xl bg-emerald-500/20 p-3 text-emerald-300">
        {icon}
      </div>

      <div>
        <h4 className="font-semibold">{title}</h4>

        <p className="mt-1 text-sm leading-6 text-slate-300">{desc}</p>
      </div>
    </div>
  );
}
