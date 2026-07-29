import { motion } from "framer-motion";
import {
  Building2,
  CalendarCheck2,
  ShieldCheck,
  BellRing,
  ArrowRight,
} from "lucide-react";

const features = [
  {
    icon: CalendarCheck2,
    title: "Easy Leave Requests",
    description: "Submit leave requests in just a few clicks.",
  },
  {
    icon: ShieldCheck,
    title: "Secure Authentication",
    description: "Role-based access for employees and managers.",
  },
  {
    icon: BellRing,
    title: "Real-Time Updates",
    description: "Stay informed with instant leave status updates.",
  },
];

export default function AuthLayout({ title, subtitle, children }) {
  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-50">
      {/* Background Decoration */}

      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-44 -left-32 h-96 w-96 rounded-full bg-indigo-300/30 blur-3xl" />

        <div className="absolute bottom-0 right-0 h-[32rem] w-[32rem] rounded-full bg-sky-200/30 blur-3xl" />

        <div className="absolute top-1/2 left-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-200/20 blur-3xl" />
      </div>

      <div className="relative z-10 flex min-h-screen">
        {/* LEFT PANEL */}

        <div className="hidden lg:flex lg:w-1/2 items-center justify-center p-14">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-xl"
          >
            {/* Logo */}

            <div className="mb-10 flex items-center gap-4">
              <div className="rounded-3xl bg-indigo-600 p-4 shadow-xl">
                <Building2 size={34} className="text-white" />
              </div>

              <div>
                <h1 className="text-4xl font-bold text-slate-900">PulseHR</h1>

                <p className="text-slate-500">
                  Smart Leave Management Platform
                </p>
              </div>
            </div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-6xl font-extrabold leading-tight text-slate-900"
            >
              Manage Leave.
              <br />
              Empower Teams.
            </motion.h2>

            <p className="mt-8 text-lg leading-8 text-slate-600">
              A modern employee leave management system built for companies that
              value productivity, transparency, and seamless collaboration.
            </p>

            <div className="mt-12 space-y-5">
              {features.map((feature) => {
                const Icon = feature.icon;

                return (
                  <motion.div
                    whileHover={{
                      x: 6,
                    }}
                    key={feature.title}
                    className="flex items-start gap-4 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm transition-all"
                  >
                    <div className="rounded-2xl bg-indigo-100 p-3">
                      <Icon size={24} className="text-indigo-600" />
                    </div>

                    <div>
                      <h3 className="font-semibold text-slate-900">
                        {feature.title}
                      </h3>

                      <p className="mt-1 text-sm leading-6 text-slate-500">
                        {feature.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            <div className="mt-12 flex items-center gap-3 text-indigo-600">
              <ArrowRight size={18} />

              <span className="font-medium">Trusted by modern workplaces.</span>
            </div>
          </motion.div>
        </div>

        {/* RIGHT PANEL */}

        <div className="flex flex-1 items-center justify-center p-6 sm:p-10 lg:p-16">
          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.5,
            }}
            className="w-full max-w-md rounded-[32px] border border-slate-200 bg-white/90 p-8 shadow-[0_20px_70px_rgba(15,23,42,0.08)] backdrop-blur-xl sm:p-10"
          >
            {/* Mobile Branding */}

            <div className="mb-10 text-center lg:hidden">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-3xl bg-indigo-600 shadow-lg">
                <Building2 className="text-white" size={30} />
              </div>

              <h1 className="mt-5 text-3xl font-bold text-slate-900">
                PulseHR
              </h1>

              <p className="mt-2 text-slate-500">Smart Leave Management</p>
            </div>

            <div className="mb-8">
              <h2 className="text-3xl font-bold text-slate-900">{title}</h2>

              <p className="mt-3 leading-7 text-slate-500">{subtitle}</p>
            </div>

            {children}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
