import { motion } from "framer-motion";
import {
  User,
  Edit3,
  ShieldCheck,
  BadgeCheck,
  CalendarDays,
  CheckCircle2,
  Clock3,
  XCircle,
  Briefcase,
} from "lucide-react";

import DashboardLayout from "../../layouts/DashboardLayout";

export default function Profile() {
  const user = {
    name: "Pratiksha Kadam",
    username: "pratiksha",
    employeeId: "EMP-1025",
    role: "Employee",
    department: "Software Development",
    joined: "29 July 2026",

    totalLeaves: 18,
    approved: 12,
    pending: 4,
    rejected: 2,
  };

  return (
    <DashboardLayout>
      <div className="space-y-8">
        {/* ================= HERO ================= */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative overflow-hidden rounded-[36px]
          bg-gradient-to-br
          from-slate-900
          via-slate-800
          to-emerald-900
          p-8
          shadow-2xl"
        >
          {/* Decorative Blur */}

          <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-emerald-400/20 blur-[120px]" />

          <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-cyan-400/10 blur-[120px]" />

          <div className="relative z-10 flex flex-col gap-10 xl:flex-row xl:items-center xl:justify-between">
            {/* LEFT */}

            <div className="flex flex-col gap-6 md:flex-row md:items-center">
              {/* Avatar */}

              <motion.div
                whileHover={{
                  rotate: 3,
                  scale: 1.05,
                }}
                className="relative"
              >
                <div
                  className="
                  flex
                  h-36
                  w-36
                  items-center
                  justify-center
                  rounded-full
                  bg-white/10
                  text-6xl
                  font-black
                  text-white
                  backdrop-blur-xl
                  border
                  border-white/20
                  "
                >
                  PK
                </div>

                <div className="absolute bottom-3 right-2 h-6 w-6 rounded-full border-4 border-slate-900 bg-emerald-400"></div>
              </motion.div>

              {/* User */}

              <div>
                <span className="rounded-full bg-emerald-500/20 px-4 py-2 text-sm font-semibold text-emerald-300">
                  Active Employee
                </span>

                <h1 className="mt-5 text-5xl font-black text-white">
                  {user.name}
                </h1>

                <p className="mt-3 text-lg text-slate-300">{user.department}</p>

                <div className="mt-6 flex flex-wrap gap-3">
                  <div className="flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-white backdrop-blur-xl">
                    <BadgeCheck size={18} />
                    {user.employeeId}
                  </div>

                  <div className="flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-white backdrop-blur-xl">
                    <ShieldCheck size={18} />
                    {user.role}
                  </div>

                  <div className="flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-white backdrop-blur-xl">
                    <CalendarDays size={18} />
                    Joined {user.joined}
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT */}

            <motion.button
              whileHover={{
                scale: 1.05,
              }}
              whileTap={{
                scale: 0.95,
              }}
              className="
              flex
              items-center
              gap-3
              rounded-2xl
              bg-white
              px-7
              py-4
              font-semibold
              text-slate-800
              shadow-xl
              transition
              hover:bg-slate-100
              "
            >
              <Edit3 size={18} />
              Edit Profile
            </motion.button>
          </div>
        </motion.div>

        {/* ================= STATS ================= */}

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          <StatCard
            title="Total Leaves"
            value={user.totalLeaves}
            subtitle="Applications"
            icon={<Briefcase className="text-indigo-600" />}
            color="bg-indigo-100"
          />

          <StatCard
            title="Approved"
            value={user.approved}
            subtitle="Accepted"
            icon={<CheckCircle2 className="text-emerald-600" />}
            color="bg-emerald-100"
          />

          <StatCard
            title="Pending"
            value={user.pending}
            subtitle="Under Review"
            icon={<Clock3 className="text-yellow-500" />}
            color="bg-yellow-100"
          />

          <StatCard
            title="Rejected"
            value={user.rejected}
            subtitle="Declined"
            icon={<XCircle className="text-red-500" />}
            color="bg-red-100"
          />
        </div>

        {/* ================= PROFILE DETAILS ================= */}

        <div className="grid gap-8 xl:grid-cols-3">
          {/* LEFT */}

          <div className="xl:col-span-2 rounded-[30px] bg-white p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-slate-900">
              Personal Information
            </h2>

            <p className="mb-8 mt-2 text-slate-500">
              Your employee information
            </p>

            <div className="grid gap-6 md:grid-cols-2">
              <InfoCard title="Full Name" value={user.name} />

              <InfoCard title="Username" value={user.username} />

              <InfoCard title="Employee ID" value={user.employeeId} />

              <InfoCard title="Department" value={user.department} />

              <InfoCard title="Role" value={user.role} />

              <InfoCard title="Joining Date" value={user.joined} />
            </div>
          </div>

          {/* RIGHT */}

          <div className="rounded-[30px] bg-white p-8 shadow-lg">
            <h2 className="text-2xl font-bold">Account Status</h2>

            <div className="mt-8 space-y-5">
              <StatusRow label="Status" value="Active" />

              <StatusRow label="Role" value="Employee" />

              <StatusRow label="Attendance" value="96%" />

              <StatusRow label="Leave Approval" value="88%" />

              <StatusRow label="Last Login" value="Today" />
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}

function StatCard({ title, value, subtitle, icon, color }) {
  return (
    <motion.div
      whileHover={{
        y: -8,
      }}
      transition={{
        duration: 0.2,
      }}
      className="
      rounded-[30px]
      bg-white
      p-7
      shadow-lg
      transition
      hover:shadow-2xl
      "
    >
      <div
        className={`flex h-16 w-16 items-center justify-center rounded-2xl ${color}`}
      >
        {icon}
      </div>

      <h2 className="mt-7 text-5xl font-black text-slate-900">{value}</h2>

      <p className="mt-2 font-semibold text-slate-700">{title}</p>

      <p className="text-sm text-slate-400">{subtitle}</p>
    </motion.div>
  );
}

function InfoCard({ title, value }) {
  return (
    <div className="rounded-2xl border border-slate-200 p-5">
      <p className="text-sm text-slate-400">{title}</p>

      <h3 className="mt-2 text-lg font-bold text-slate-800">{value}</h3>
    </div>
  );
}

function StatusRow({ label, value }) {
  return (
    <div className="flex items-center justify-between border-b pb-4">
      <span className="text-slate-500">{label}</span>

      <span className="font-semibold text-slate-800">{value}</span>
    </div>
  );
}
