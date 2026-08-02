import { motion } from "framer-motion";
import {
  UserPlus,
  ClipboardCheck,
  Users,
  BarChart3,
  ArrowRight,
} from "lucide-react";

const actions = [
  {
    title: "Add Employee",
    description: "Register a new employee account",
    icon: UserPlus,
    color: "from-emerald-500 to-teal-600",
    bg: "bg-emerald-50",
    iconColor: "text-emerald-600",
  },
  {
    title: "Review Requests",
    description: "Approve or reject leave requests",
    icon: ClipboardCheck,
    color: "from-orange-500 to-amber-500",
    bg: "bg-orange-50",
    iconColor: "text-orange-600",
  },
  {
    title: "Employees",
    description: "Manage your workforce",
    icon: Users,
    color: "from-cyan-500 to-blue-600",
    bg: "bg-cyan-50",
    iconColor: "text-cyan-600",
  },
  {
    title: "Reports",
    description: "View leave analytics",
    icon: BarChart3,
    color: "from-violet-500 to-purple-600",
    bg: "bg-violet-50",
    iconColor: "text-violet-600",
  },
];

export default function QuickActions() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3 }}
      className="rounded-[34px] bg-white p-7 shadow-xl"
    >
      <h2 className="text-2xl font-black text-slate-900">Quick Actions</h2>

      <p className="mt-2 text-slate-500">Frequently used manager tools.</p>

      <div className="mt-7 space-y-4">
        {actions.map((action, index) => {
          const Icon = action.icon;

          return (
            <motion.button
              key={action.title}
              initial={{ opacity: 0, x: 15 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.08 }}
              whileHover={{
                x: 5,
                scale: 1.02,
              }}
              whileTap={{
                scale: 0.98,
              }}
              className="
              group
              w-full
              rounded-3xl
              border
              border-slate-100
              bg-white
              p-5
              text-left
              transition
              hover:border-transparent
              hover:shadow-xl
              "
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div
                    className={`flex h-14 w-14 items-center justify-center rounded-2xl ${action.bg}`}
                  >
                    <Icon className={action.iconColor} size={26} />
                  </div>

                  <div>
                    <h3 className="font-bold text-slate-900">{action.title}</h3>

                    <p className="mt-1 text-sm text-slate-500">
                      {action.description}
                    </p>
                  </div>
                </div>

                <ArrowRight
                  className="
                  text-slate-400
                  transition
                  group-hover:translate-x-1
                  group-hover:text-emerald-600
                  "
                />
              </div>

              <div
                className={`mt-5 h-1 w-0 rounded-full bg-gradient-to-r ${action.color} transition-all duration-500 group-hover:w-full`}
              />
            </motion.button>
          );
        })}
      </div>
    </motion.div>
  );
}
