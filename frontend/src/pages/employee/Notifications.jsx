import { useState } from "react";
import { motion } from "framer-motion";
import {
  Bell,
  CheckCircle2,
  Clock3,
  XCircle,
  CheckCheck,
  CalendarDays,
} from "lucide-react";

import DashboardLayout from "../../layouts/DashboardLayout";

export default function Notifications() {
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      type: "APPROVED",
      title: "Leave Approved",
      message: "Your Annual Leave has been approved.",
      time: "2 mins ago",
      read: false,
    },
    {
      id: 2,
      type: "PENDING",
      title: "Leave Submitted",
      message: "Your leave request has been submitted successfully.",
      time: "Yesterday",
      read: false,
    },
    {
      id: 3,
      type: "REJECTED",
      title: "Leave Rejected",
      message: "Reason: Project deadline this week.",
      time: "2 Days Ago",
      read: true,
    },
  ]);

  const markAllRead = () => {
    setNotifications((prev) =>
      prev.map((item) => ({
        ...item,
        read: true,
      })),
    );
  };

  const icon = {
    APPROVED: <CheckCircle2 className="text-emerald-600" size={24} />,
    PENDING: <Clock3 className="text-yellow-500" size={24} />,
    REJECTED: <XCircle className="text-red-500" size={24} />,
  };

  const bg = {
    APPROVED: "bg-emerald-50 border-emerald-200",
    PENDING: "bg-yellow-50 border-yellow-200",
    REJECTED: "bg-red-50 border-red-200",
  };

  return (
    <DashboardLayout>
      <div className="space-y-8">
        {/* Hero */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="rounded-[32px] bg-gradient-to-r from-indigo-900 via-slate-900 to-slate-800 p-8 text-white shadow-2xl"
        >
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-slate-300">Employee Portal</p>

              <h1 className="mt-2 text-4xl font-black">Notifications</h1>

              <p className="mt-3 max-w-xl text-slate-300">
                Stay updated with every leave request, approval and manager
                response.
              </p>
            </div>

            <div className="rounded-3xl bg-white/10 p-5 backdrop-blur-xl">
              <Bell size={42} />
            </div>
          </div>
        </motion.div>

        {/* Button */}

        <div className="flex justify-end">
          <button
            onClick={markAllRead}
            className="flex items-center gap-2 rounded-2xl bg-emerald-600 px-5 py-3 font-semibold text-white transition hover:bg-emerald-700"
          >
            <CheckCheck size={18} />
            Mark All Read
          </button>
        </div>

        {/* Notifications */}

        <div className="space-y-5">
          {notifications.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="rounded-[28px] bg-white p-16 text-center shadow-lg"
            >
              <Bell size={55} className="mx-auto text-slate-300" />

              <h2 className="mt-5 text-2xl font-bold text-slate-700">
                No Notifications
              </h2>

              <p className="mt-2 text-slate-500">You're all caught up.</p>
            </motion.div>
          ) : (
            notifications.map((item) => (
              <motion.div
                key={item.id}
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                whileHover={{
                  y: -4,
                }}
                className={`rounded-[28px] border p-6 shadow-lg transition hover:shadow-2xl ${bg[item.type]}`}
              >
                <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
                  <div className="flex gap-4">
                    <div className="rounded-2xl bg-white p-3 shadow">
                      {icon[item.type]}
                    </div>

                    <div>
                      <div className="flex flex-wrap items-center gap-3">
                        <h2 className="text-xl font-bold text-slate-800">
                          {item.title}
                        </h2>

                        {!item.read && (
                          <span className="rounded-full bg-blue-600 px-3 py-1 text-xs font-bold text-white">
                            NEW
                          </span>
                        )}
                      </div>

                      <p className="mt-2 text-slate-600">{item.message}</p>

                      <div className="mt-4 flex items-center gap-2 text-sm text-slate-500">
                        <CalendarDays size={16} />

                        {item.time}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))
          )}
        </div>
      </div>
    </DashboardLayout>
  );
}
