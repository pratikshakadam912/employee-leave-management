import { motion } from "framer-motion";
import {
  Bell,
  CheckCircle2,
  XCircle,
  ClipboardCheck,
  UserPlus,
  Server,
  CheckCheck,
  Clock3,
} from "lucide-react";

import ManagerLayout from "../../layouts/ManagerLayout";

const notifications = [
  {
    id: 1,
    title: "New Leave Request",
    message: "Rahul Sharma applied for Sick Leave.",
    time: "5 min ago",
    icon: ClipboardCheck,
    color: "bg-blue-100 text-blue-600",
    unread: true,
  },
  {
    id: 2,
    title: "Leave Approved",
    message: "You approved Priya Patel's leave request.",
    time: "30 min ago",
    icon: CheckCircle2,
    color: "bg-emerald-100 text-emerald-600",
    unread: true,
  },
  {
    id: 3,
    title: "Leave Rejected",
    message: "An Annual Leave request was rejected.",
    time: "2 hrs ago",
    icon: XCircle,
    color: "bg-red-100 text-red-500",
    unread: false,
  },
  {
    id: 4,
    title: "New Employee Joined",
    message: "Akash Kumar has joined the IT Department.",
    time: "Today",
    icon: UserPlus,
    color: "bg-indigo-100 text-indigo-600",
    unread: false,
  },
  {
    id: 5,
    title: "System Maintenance",
    message: "Scheduled maintenance tonight from 11 PM to 1 AM.",
    time: "Yesterday",
    icon: Server,
    color: "bg-yellow-100 text-yellow-600",
    unread: false,
  },
];

export default function Notifications() {
  return (
    <ManagerLayout>
      <div className="space-y-8">
        {/* Hero */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          className="rounded-[34px] bg-gradient-to-r from-slate-900 via-emerald-900 to-teal-700 p-8 text-white shadow-2xl"
        >
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-emerald-100">Manager Workspace</p>

              <h1 className="mt-2 text-5xl font-black">Notifications</h1>

              <p className="mt-4 max-w-2xl text-emerald-50">
                Stay updated with employee leave requests, approvals,
                announcements and system activities.
              </p>
            </div>

            <div className="rounded-3xl bg-white/10 p-6 backdrop-blur-xl">
              <Bell size={44} />
            </div>
          </div>
        </motion.div>

        {/* Top Bar */}

        <div className="flex flex-col gap-5 rounded-[30px] bg-white p-6 shadow-lg md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-2xl font-bold">Recent Notifications</h2>

            <p className="mt-1 text-slate-500">
              You have 2 unread notifications.
            </p>
          </div>

          <button className="flex items-center gap-2 rounded-2xl bg-emerald-600 px-6 py-3 font-semibold text-white transition hover:bg-emerald-700">
            <CheckCheck size={18} />
            Mark All Read
          </button>
        </div>

        {/* Notification List */}

        <div className="space-y-5">
          {notifications.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: index * 0.08,
                }}
                whileHover={{
                  y: -3,
                }}
                className={`rounded-[28px] border p-6 shadow-lg transition ${
                  item.unread
                    ? "border-emerald-300 bg-emerald-50"
                    : "border-slate-100 bg-white"
                }`}
              >
                <div className="flex gap-5">
                  <div
                    className={`flex h-16 w-16 items-center justify-center rounded-2xl ${item.color}`}
                  >
                    <Icon size={28} />
                  </div>

                  <div className="flex-1">
                    <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                      <div>
                        <h3 className="text-xl font-bold text-slate-900">
                          {item.title}
                        </h3>

                        <p className="mt-2 text-slate-600">{item.message}</p>
                      </div>

                      {item.unread && (
                        <span className="rounded-full bg-emerald-600 px-4 py-1 text-sm font-semibold text-white">
                          New
                        </span>
                      )}
                    </div>

                    <div className="mt-5 flex items-center gap-2 text-sm text-slate-500">
                      <Clock3 size={16} />

                      {item.time}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </ManagerLayout>
  );
}
