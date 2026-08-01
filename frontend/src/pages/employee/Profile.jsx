import { motion } from "framer-motion";
import {
  User,
  Mail,
  Shield,
  CalendarDays,
  Edit,
  Award,
  CheckCircle2,
  Clock3,
} from "lucide-react";

import DashboardLayout from "../../layouts/DashboardLayout";

export default function Profile() {
  const user = {
    username: "pratiksha",
    role: "Employee",
    joined: "29 July 2026",
    email: "Not Required",
    totalLeaves: 12,
    approved: 8,
    pending: 3,
    rejected: 1,
  };

  return (
    <DashboardLayout>
      <div className="space-y-8">
        {/* Hero */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="rounded-[32px] bg-gradient-to-r from-emerald-700 via-teal-600 to-cyan-600 p-8 text-white shadow-2xl"
        >
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex items-center gap-6">
              <div className="flex h-28 w-28 items-center justify-center rounded-full bg-white/20 text-5xl font-black backdrop-blur">
                {user.username.charAt(0).toUpperCase()}
              </div>

              <div>
                <h1 className="text-4xl font-black">{user.username}</h1>

                <p className="mt-2 text-emerald-100">{user.role}</p>
              </div>
            </div>

            <button className="flex items-center gap-2 rounded-2xl bg-white px-6 py-3 font-semibold text-emerald-700 transition hover:scale-105">
              <Edit size={18} />
              Edit Profile
            </button>
          </div>
        </motion.div>

        {/* Stats */}

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          <StatCard
            icon={<Award className="text-indigo-600" />}
            title="Total Leaves"
            value={user.totalLeaves}
          />

          <StatCard
            icon={<CheckCircle2 className="text-emerald-600" />}
            title="Approved"
            value={user.approved}
          />

          <StatCard
            icon={<Clock3 className="text-yellow-500" />}
            title="Pending"
            value={user.pending}
          />

          <StatCard
            icon={<Shield className="text-red-500" />}
            title="Rejected"
            value={user.rejected}
          />
        </div>

        {/* Information */}

        <div className="grid gap-6 lg:grid-cols-2">
          <InfoCard icon={<User />} label="Username" value={user.username} />

          <InfoCard icon={<Shield />} label="Role" value={user.role} />

          <InfoCard
            icon={<CalendarDays />}
            label="Joined On"
            value={user.joined}
          />

          <InfoCard icon={<Mail />} label="Email" value={user.email} />
        </div>
      </div>
    </DashboardLayout>
  );
}

function StatCard({ icon, title, value }) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="rounded-[28px] bg-white p-6 shadow-lg"
    >
      <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-100">
        {icon}
      </div>

      <p className="text-slate-500">{title}</p>

      <h2 className="mt-2 text-4xl font-black text-slate-800">{value}</h2>
    </motion.div>
  );
}

function InfoCard({ icon, label, value }) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      className="rounded-[28px] bg-white p-6 shadow-lg"
    >
      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700">
        {icon}
      </div>

      <p className="text-sm uppercase tracking-wider text-slate-400">{label}</p>

      <h3 className="mt-2 text-xl font-bold text-slate-800">{value}</h3>
    </motion.div>
  );
}
