import { motion } from "framer-motion";
import {
  Edit3,
  ShieldCheck,
  BadgeCheck,
  CalendarDays,
  Users,
  ClipboardCheck,
  CheckCircle2,
  Clock3,
  Briefcase,
  TrendingUp,
} from "lucide-react";

import ManagerLayout from "../../layouts/ManagerLayout";

export default function Profile() {
  const manager = {
    name: "John Anderson",
    username: "manager01",
    employeeId: "MGR-1001",
    role: "HR Manager",
    department: "Human Resources",
    joined: "12 March 2022",

    team: 58,
    requests: 842,
    approved: 790,
    pending: 52,
  };

  return (
    <ManagerLayout>
      <div className="space-y-8">
        {/* ================= HERO ================= */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative overflow-hidden rounded-[36px] bg-gradient-to-r from-slate-900 via-emerald-900 to-teal-700 p-8 text-white shadow-2xl"
        >
          <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-white/10 blur-[120px]" />

          <div className="relative z-10 flex flex-col gap-10 xl:flex-row xl:items-center xl:justify-between">
            <div className="flex flex-col gap-6 md:flex-row md:items-center">
              <div className="flex h-36 w-36 items-center justify-center rounded-full bg-white/10 text-6xl font-black backdrop-blur-xl">
                JA
              </div>

              <div>
                <span className="rounded-full bg-emerald-500/20 px-4 py-2 text-sm font-semibold text-emerald-200">
                  HR Manager
                </span>

                <h1 className="mt-5 text-5xl font-black">{manager.name}</h1>

                <p className="mt-3 text-lg text-slate-200">
                  {manager.department}
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                  <div className="flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 backdrop-blur">
                    <BadgeCheck size={18} />
                    {manager.employeeId}
                  </div>

                  <div className="flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 backdrop-blur">
                    <ShieldCheck size={18} />
                    {manager.role}
                  </div>

                  <div className="flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 backdrop-blur">
                    <CalendarDays size={18} />
                    Joined {manager.joined}
                  </div>
                </div>
              </div>
            </div>

            <button className="flex items-center gap-3 rounded-2xl bg-white px-7 py-4 font-semibold text-slate-800 hover:bg-slate-100">
              <Edit3 size={18} />
              Edit Profile
            </button>
          </div>
        </motion.div>

        {/* ================= STATS ================= */}

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          <StatCard
            title="Employees"
            value={manager.team}
            icon={<Users className="text-blue-600" />}
            color="bg-blue-100"
          />

          <StatCard
            title="Requests"
            value={manager.requests}
            icon={<ClipboardCheck className="text-purple-600" />}
            color="bg-purple-100"
          />

          <StatCard
            title="Approved"
            value={manager.approved}
            icon={<CheckCircle2 className="text-emerald-600" />}
            color="bg-emerald-100"
          />

          <StatCard
            title="Pending"
            value={manager.pending}
            icon={<Clock3 className="text-orange-500" />}
            color="bg-orange-100"
          />
        </div>

        {/* ================= DETAILS ================= */}

        <div className="grid gap-8 xl:grid-cols-3">
          <div className="xl:col-span-2 rounded-[30px] bg-white p-8 shadow-lg">
            <h2 className="text-2xl font-bold">Personal Information</h2>

            <div className="mt-8 grid gap-6 md:grid-cols-2">
              <InfoCard title="Full Name" value={manager.name} />
              <InfoCard title="Username" value={manager.username} />
              <InfoCard title="Employee ID" value={manager.employeeId} />
              <InfoCard title="Department" value={manager.department} />
              <InfoCard title="Role" value={manager.role} />
              <InfoCard title="Joining Date" value={manager.joined} />
            </div>
          </div>

          <div className="rounded-[30px] bg-white p-8 shadow-lg">
            <h2 className="text-2xl font-bold">Performance</h2>

            <div className="mt-8 space-y-5">
              <StatusRow
                icon={<TrendingUp size={18} />}
                label="Approval Rate"
                value="94%"
              />

              <StatusRow
                icon={<Users size={18} />}
                label="Employees Managed"
                value="58"
              />

              <StatusRow
                icon={<Briefcase size={18} />}
                label="Department"
                value="Human Resources"
              />

              <StatusRow
                icon={<CheckCircle2 size={18} />}
                label="Completed Requests"
                value="790"
              />
            </div>
          </div>
        </div>

        {/* ================= ACTIVITY ================= */}

        <div className="rounded-[30px] bg-white p-8 shadow-lg">
          <h2 className="text-2xl font-bold">Recent Activity</h2>

          <div className="mt-8 space-y-6">
            <Timeline
              title="Approved Rahul Sharma's Leave"
              time="Today • 10:45 AM"
            />

            <Timeline title="Rejected Annual Leave Request" time="Yesterday" />

            <Timeline
              title="Reviewed 18 Leave Applications"
              time="2 days ago"
            />

            <Timeline title="Added New Employee" time="Last Week" />
          </div>
        </div>
      </div>
    </ManagerLayout>
  );
}

function StatCard({ title, value, icon, color }) {
  return (
    <div className="rounded-[30px] bg-white p-7 shadow-lg">
      <div
        className={`flex h-16 w-16 items-center justify-center rounded-2xl ${color}`}
      >
        {icon}
      </div>

      <h2 className="mt-6 text-5xl font-black">{value}</h2>

      <p className="mt-2 font-semibold">{title}</p>
    </div>
  );
}

function InfoCard({ title, value }) {
  return (
    <div className="rounded-2xl border border-slate-200 p-5">
      <p className="text-sm text-slate-500">{title}</p>
      <h3 className="mt-2 text-lg font-bold">{value}</h3>
    </div>
  );
}

function StatusRow({ icon, label, value }) {
  return (
    <div className="flex items-center justify-between border-b pb-4">
      <div className="flex items-center gap-3 text-slate-600">
        {icon}
        {label}
      </div>

      <span className="font-semibold">{value}</span>
    </div>
  );
}

function Timeline({ title, time }) {
  return (
    <div className="flex gap-4">
      <div className="mt-1 h-4 w-4 rounded-full bg-emerald-500" />

      <div>
        <h3 className="font-semibold text-slate-900">{title}</h3>

        <p className="mt-1 text-sm text-slate-500">{time}</p>
      </div>
    </div>
  );
}
