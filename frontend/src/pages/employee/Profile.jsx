import { useEffect, useState } from "react";
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
  Activity,
  Bell,
  FileText,
  ArrowRight,
  Award,
  TrendingUp,
} from "lucide-react";

import { Link } from "react-router-dom";

import DashboardLayout from "../../layouts/DashboardLayout";
import { getProfile } from "../../services/employee.service";

export default function Profile() {
  const [loading, setLoading] = useState(true);
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    loadProfile();
  }, []);

  const loadProfile = async () => {
    try {
      const res = await getProfile();

      setProfile(res.data || res);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <DashboardLayout>
        <div className="flex h-[75vh] items-center justify-center">
          <div className="text-center">
            <div className="mx-auto h-16 w-16 animate-spin rounded-full border-4 border-emerald-500 border-t-transparent"></div>

            <h2 className="mt-5 text-2xl font-bold">Loading Profile...</h2>
          </div>
        </div>
      </DashboardLayout>
    );
  }

  if (!profile) {
    return (
      <DashboardLayout>
        <div className="flex h-[75vh] items-center justify-center">
          Failed to load profile.
        </div>
      </DashboardLayout>
    );
  }

  const user = profile.profile || profile;

  const stats = profile.stats || {
    total: 0,
    approved: 0,
    pending: 0,
    rejected: 0,
  };

  const approvalRate =
    stats.total === 0 ? 0 : Math.round((stats.approved / stats.total) * 100);

  return (
    <DashboardLayout>
      <div className="space-y-8">
        {/* ================= HERO ================= */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          className="
          relative
          overflow-hidden
          rounded-[36px]
          bg-gradient-to-br
          from-slate-900
          via-slate-800
          to-emerald-900
          p-8
          shadow-2xl
          "
        >
          <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-emerald-400/20 blur-[120px]" />

          <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-cyan-400/10 blur-[120px]" />

          <div className="relative z-10 flex flex-col gap-10 xl:flex-row xl:items-center xl:justify-between">
            <div className="flex flex-col gap-6 md:flex-row md:items-center">
              <motion.div
                whileHover={{
                  rotate: 5,
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
                  border
                  border-white/20
                  bg-white/10
                  text-6xl
                  font-black
                  text-white
                  backdrop-blur-xl
                  "
                >
                  {user.username.slice(0, 2).toUpperCase()}
                </div>

                <div className="absolute bottom-3 right-2 h-6 w-6 rounded-full border-4 border-slate-900 bg-emerald-400"></div>
              </motion.div>

              <div>
                <span className="rounded-full bg-emerald-500/20 px-4 py-2 text-sm font-semibold text-emerald-300">
                  Active Employee
                </span>

                <h1 className="mt-5 text-5xl font-black text-white">
                  {user.username}
                </h1>

                <p className="mt-3 text-lg text-slate-300">
                  Software Development Department
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                  <div className="flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-white backdrop-blur-xl">
                    <BadgeCheck size={18} />
                    EMP-{user.id.slice(0, 6).toUpperCase()}
                  </div>

                  <div className="flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-white backdrop-blur-xl">
                    <ShieldCheck size={18} />
                    {user.role}
                  </div>

                  <div className="flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-white backdrop-blur-xl">
                    <CalendarDays size={18} />
                    Joined {new Date(user.createdAt).toLocaleDateString()}
                  </div>
                </div>
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className="
              flex
              items-center
              gap-3
              rounded-2xl
              bg-white
              px-8
              py-4
              font-bold
              text-slate-800
              shadow-xl
              "
            >
              <Edit3 size={18} />
              Edit Profile
            </motion.button>
          </div>
        </motion.div>

        {/* ================= STATS ================= */}

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-5">
          <StatCard
            title="Total Leaves"
            value={stats.total}
            subtitle="Applications"
            icon={<Briefcase className="text-indigo-600" />}
            color="bg-indigo-100"
          />

          <StatCard
            title="Approved"
            value={stats.approved}
            subtitle="Accepted"
            icon={<CheckCircle2 className="text-emerald-600" />}
            color="bg-emerald-100"
          />

          <StatCard
            title="Pending"
            value={stats.pending}
            subtitle="Waiting"
            icon={<Clock3 className="text-amber-500" />}
            color="bg-amber-100"
          />

          <StatCard
            title="Rejected"
            value={stats.rejected}
            subtitle="Declined"
            icon={<XCircle className="text-red-500" />}
            color="bg-red-100"
          />

          <StatCard
            title="Approval %"
            value={`${approvalRate}%`}
            subtitle="Success"
            icon={<TrendingUp className="text-cyan-600" />}
            color="bg-cyan-100"
          />
        </div>
        {/* ================= PROFILE DETAILS ================= */}

        <div className="grid gap-8 xl:grid-cols-3">
          {/* LEFT */}

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="xl:col-span-2 rounded-[30px] bg-white p-8 shadow-lg"
          >
            <div className="mb-8 flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-black text-slate-900">
                  Personal Information
                </h2>

                <p className="mt-2 text-slate-500">
                  Employee account information
                </p>
              </div>

              <div className="rounded-2xl bg-emerald-100 p-4">
                <User className="text-emerald-600" />
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <InfoCard title="Username" value={user.username} />

              <InfoCard
                title="Employee ID"
                value={`EMP-${user.id.slice(0, 6).toUpperCase()}`}
              />

              <InfoCard title="Department" value="Software Development" />

              <InfoCard title="Role" value={user.role} />

              <InfoCard
                title="Joined On"
                value={new Date(user.createdAt).toLocaleDateString()}
              />

              <InfoCard title="Account Status" value="Active" />
            </div>
          </motion.div>

          {/* RIGHT */}

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.25 }}
            className="rounded-[30px] bg-white p-8 shadow-lg"
          >
            <h2 className="text-2xl font-black text-slate-900">
              Account Summary
            </h2>

            <p className="mt-2 text-slate-500">
              Current employee account overview.
            </p>

            <div className="mt-8 space-y-5">
              <StatusRow label="Status" value="Active" />

              <StatusRow label="Role" value={user.role} />

              <StatusRow label="Approval Rate" value={`${approvalRate}%`} />

              <StatusRow label="Total Leaves" value={stats.total} />

              <StatusRow label="Last Login" value="Today" />
            </div>
          </motion.div>
        </div>

        {/* ================= LEAVE SUMMARY ================= */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 }}
          className="rounded-[30px] bg-white p-8 shadow-lg"
        >
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="text-2xl font-black text-slate-900">
                Leave Performance
              </h2>

              <p className="mt-2 text-slate-500">
                Overall leave approval statistics.
              </p>
            </div>

            <div className="rounded-2xl bg-cyan-100 p-4">
              <Award className="text-cyan-600" />
            </div>
          </div>

          <div className="mt-10">
            <div className="mb-3 flex justify-between">
              <span className="font-semibold text-slate-700">
                Approval Progress
              </span>

              <span className="font-black text-emerald-600">
                {approvalRate}%
              </span>
            </div>

            <div className="h-4 overflow-hidden rounded-full bg-slate-200">
              <motion.div
                initial={{ width: 0 }}
                animate={{
                  width: `${approvalRate}%`,
                }}
                transition={{
                  duration: 1,
                }}
                className="h-full rounded-full bg-gradient-to-r from-emerald-500 to-cyan-500"
              />
            </div>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-4">
            <SummaryCard
              title="Approved"
              value={stats.approved}
              color="emerald"
            />

            <SummaryCard title="Pending" value={stats.pending} color="amber" />

            <SummaryCard title="Rejected" value={stats.rejected} color="red" />

            <SummaryCard title="Total" value={stats.total} color="blue" />
          </div>
        </motion.div>
        {/* ================= RECENT ACTIVITY ================= */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45 }}
          className="rounded-[30px] bg-white p-8 shadow-lg"
        >
          <div className="mb-8 flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-black text-slate-900">
                Recent Activity
              </h2>

              <p className="mt-2 text-slate-500">
                Your latest account activities.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-100 p-4">
              <Activity className="text-slate-700" />
            </div>
          </div>

          <div className="space-y-5">
            {[
              {
                icon: <CheckCircle2 className="text-emerald-600" size={22} />,
                title: "Annual Leave Approved",
                desc: "Manager approved your request.",
                time: "2 hours ago",
              },
              {
                icon: <Clock3 className="text-amber-500" size={22} />,
                title: "Casual Leave Submitted",
                desc: "Waiting for manager approval.",
                time: "Yesterday",
              },
              {
                icon: <User className="text-cyan-600" size={22} />,
                title: "Profile Updated",
                desc: "Personal information updated.",
                time: "Last Week",
              },
              {
                icon: <ShieldCheck className="text-indigo-600" size={22} />,
                title: "Password Changed",
                desc: "Your account is secure.",
                time: "Last Month",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{
                  x: 5,
                }}
                className="flex items-center gap-5 rounded-2xl border border-slate-200 p-5 transition hover:border-emerald-300 hover:shadow-md"
              >
                <div className="rounded-2xl bg-slate-100 p-4">{item.icon}</div>

                <div className="flex-1">
                  <h3 className="font-bold text-slate-800">{item.title}</h3>

                  <p className="mt-1 text-sm text-slate-500">{item.desc}</p>
                </div>

                <span className="text-sm text-slate-400">{item.time}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ================= QUICK ACTIONS ================= */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55 }}
          className="rounded-[30px] bg-white p-8 shadow-lg"
        >
          <div className="mb-8">
            <h2 className="text-2xl font-black text-slate-900">
              Quick Actions
            </h2>

            <p className="mt-2 text-slate-500">Frequently used shortcuts.</p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            <Link
              to="/employee/apply"
              className="group rounded-3xl border border-slate-200 p-6 transition hover:border-emerald-500 hover:shadow-xl"
            >
              <CalendarDays className="mb-5 text-emerald-600" size={34} />

              <h3 className="text-xl font-bold">Apply Leave</h3>

              <p className="mt-2 text-sm text-slate-500">
                Submit a leave request.
              </p>

              <ArrowRight className="mt-6 transition group-hover:translate-x-2" />
            </Link>

            <Link
              to="/employee/history"
              className="group rounded-3xl border border-slate-200 p-6 transition hover:border-cyan-500 hover:shadow-xl"
            >
              <FileText className="mb-5 text-cyan-600" size={34} />

              <h3 className="text-xl font-bold">Leave History</h3>

              <p className="mt-2 text-sm text-slate-500">
                View all leave requests.
              </p>

              <ArrowRight className="mt-6 transition group-hover:translate-x-2" />
            </Link>

            <Link
              to="/employee/notifications"
              className="group rounded-3xl border border-slate-200 p-6 transition hover:border-indigo-500 hover:shadow-xl"
            >
              <Bell className="mb-5 text-indigo-600" size={34} />

              <h3 className="text-xl font-bold">Notifications</h3>

              <p className="mt-2 text-sm text-slate-500">
                Check latest updates.
              </p>

              <ArrowRight className="mt-6 transition group-hover:translate-x-2" />
            </Link>

            <Link
              to="/employee/settings"
              className="group rounded-3xl border border-slate-200 p-6 transition hover:border-amber-500 hover:shadow-xl"
            >
              <ShieldCheck className="mb-5 text-amber-500" size={34} />

              <h3 className="text-xl font-bold">Settings</h3>

              <p className="mt-2 text-sm text-slate-500">
                Manage your account.
              </p>

              <ArrowRight className="mt-6 transition group-hover:translate-x-2" />
            </Link>
          </div>
        </motion.div>
      </div>
    </DashboardLayout>
  );
}
function StatCard({ title, value, subtitle, icon, color }) {
  return (
    <motion.div
      whileHover={{
        y: -8,
        scale: 1.02,
      }}
      transition={{
        duration: 0.25,
      }}
      className="rounded-[30px] bg-white p-7 shadow-lg transition hover:shadow-2xl"
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
    <motion.div
      whileHover={{
        y: -3,
      }}
      transition={{
        duration: 0.2,
      }}
      className="rounded-2xl border border-slate-200 bg-slate-50 p-5 transition hover:border-emerald-400 hover:bg-white hover:shadow-md"
    >
      <p className="text-sm text-slate-500">{title}</p>

      <h3 className="mt-2 text-lg font-bold text-slate-800">{value}</h3>
    </motion.div>
  );
}

function StatusRow({ label, value }) {
  return (
    <div className="flex items-center justify-between border-b border-slate-200 py-4 last:border-none">
      <span className="text-slate-500">{label}</span>

      <span className="font-semibold text-slate-800">{value}</span>
    </div>
  );
}

function SummaryCard({ title, value, color }) {
  const colors = {
    emerald: "bg-emerald-100 text-emerald-700",
    amber: "bg-amber-100 text-amber-700",
    red: "bg-red-100 text-red-700",
    blue: "bg-sky-100 text-sky-700",
  };

  return (
    <motion.div
      whileHover={{
        y: -5,
        scale: 1.02,
      }}
      transition={{
        duration: 0.25,
      }}
      className="rounded-2xl border border-slate-200 p-6 transition hover:shadow-lg"
    >
      <div
        className={`inline-flex rounded-xl px-4 py-2 text-sm font-semibold ${colors[color]}`}
      >
        {title}
      </div>

      <h2 className="mt-6 text-4xl font-black text-slate-900">{value}</h2>
    </motion.div>
  );
}
