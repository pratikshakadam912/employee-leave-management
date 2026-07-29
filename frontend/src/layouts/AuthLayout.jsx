import { Building2, CalendarCheck2, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

export default function AuthLayout({ title, subtitle, children }) {
  return (
    <div className="min-h-screen bg-slate-50">
      <div className="grid min-h-screen lg:grid-cols-2">
        {/* LEFT PANEL */}
        <div className="relative hidden overflow-hidden bg-indigo-700 lg:flex">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-700 via-indigo-800 to-slate-900" />

          <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-indigo-400/20 blur-3xl" />

          <div className="relative z-10 flex flex-col justify-center px-16 text-white">
            <div className="flex items-center gap-3">
              <div className="rounded-2xl bg-white p-3 text-indigo-700">
                <Building2 size={30} />
              </div>

              <div>
                <h1 className="text-4xl font-bold">PulseHR</h1>
                <p className="text-indigo-100">Smart Leave Management</p>
              </div>
            </div>

            <h2 className="mt-12 text-5xl font-bold leading-tight">
              Manage Leave
              <br />
              Effortlessly.
            </h2>

            <p className="mt-6 max-w-md text-lg text-indigo-100">
              Secure employee leave management with approvals, notifications and
              real-time tracking.
            </p>

            <div className="mt-12 space-y-5">
              <Feature
                icon={<CalendarCheck2 size={22} />}
                title="Easy Leave Requests"
              />

              <Feature
                icon={<ShieldCheck size={22} />}
                title="Secure Role-Based Access"
              />

              <Feature
                icon={<Building2 size={22} />}
                title="Built for Modern Companies"
              />
            </div>
          </div>
        </div>

        {/* RIGHT PANEL */}

        <div className="flex items-center justify-center px-6 py-12 sm:px-10">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="w-full max-w-md"
          >
            <div className="mb-8 lg:hidden text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-indigo-600 text-white shadow-lg">
                <Building2 size={28} />
              </div>

              <h1 className="mt-5 text-3xl font-bold text-slate-900">
                PulseHR
              </h1>

              <p className="mt-2 text-slate-500">Smart Leave Management</p>
            </div>

            <div className="mb-8">
              <h2 className="text-3xl font-bold text-slate-900">{title}</h2>

              <p className="mt-2 text-slate-500">{subtitle}</p>
            </div>

            {children}
          </motion.div>
        </div>
      </div>
    </div>
  );
}

function Feature({ icon, title }) {
  return (
    <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur">
      <div className="rounded-xl bg-white/20 p-3">{icon}</div>

      <span className="text-lg font-medium">{title}</span>
    </div>
  );
}
