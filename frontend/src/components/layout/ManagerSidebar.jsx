import {
  LayoutDashboard,
  ClipboardCheck,
  Users,
  BarChart3,
  Bell,
  User,
  Settings,
  LogOut,
  ShieldCheck,
  X,
} from "lucide-react";

import { NavLink, useNavigate } from "react-router-dom";

const menu = [
  {
    name: "Dashboard",
    icon: LayoutDashboard,
    path: "/manager/dashboard",
  },
  {
    name: "Leave Requests",
    icon: ClipboardCheck,
    path: "/manager/leave-requests",
  },
  {
    name: "Employees",
    icon: Users,
    path: "/manager/employees",
  },
  {
    name: "Reports",
    icon: BarChart3,
    path: "/manager/reports",
  },
  {
    name: "Notifications",
    icon: Bell,
    path: "/manager/notifications",
  },
  {
    name: "Profile",
    icon: User,
    path: "/manager/profile",
  },
  {
    name: "Settings",
    icon: Settings,
    path: "/manager/settings",
  },
];

export default function ManagerSidebar({ open, setOpen }) {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    navigate("/login");
  };

  return (
    <>
      {/* Mobile Overlay */}

      <div
        className={`fixed inset-0 z-40 bg-black/40 backdrop-blur-sm lg:hidden ${
          open ? "block" : "hidden"
        }`}
      />

      <aside
        className={`
        fixed
        top-0
        left-0
        z-50
        h-screen
        w-72
        border-r
        border-slate-200
        bg-white/90
        backdrop-blur-3xl
        shadow-2xl
        transition-all
        duration-300

        ${open ? "translate-x-0" : "-translate-x-full"}

        lg:translate-x-0
      `}
      >
        <div className="flex h-full flex-col">
          {/* Logo */}

          <div className="flex items-center justify-between border-b border-slate-100 px-7 py-7">
            <div className="flex items-center gap-4">
              <div
                className="
      flex
      h-14
      w-14
      items-center
      justify-center
      rounded-2xl
      bg-gradient-to-r
      from-emerald-500
      via-teal-500
      to-cyan-500
      text-white
      shadow-lg
      "
              >
                <ShieldCheck size={28} />
              </div>

              <div>
                <h2 className="text-lg font-bold text-slate-900">
                  Manager Portal
                </h2>

                <p className="text-xs text-slate-500">
                  Employee Leave Management
                </p>
              </div>
            </div>

            <button
              onClick={() => setOpen(false)}
              className="rounded-xl p-2 transition hover:bg-slate-100 lg:hidden"
            >
              <X size={20} />
            </button>
          </div>

          {/* Manager Card */}

          <div className="mx-5 mt-6 rounded-3xl bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 p-5 text-white shadow-xl">
            <div className="flex items-center gap-4">
              <div
                className="
                flex
                h-14
                w-14
                items-center
                justify-center
                rounded-full
                bg-white/20
                text-xl
                font-bold
                "
              >
                M
              </div>

              <div>
                <h3 className="font-bold">Manager</h3>

                <p className="text-sm text-emerald-100">HR Department</p>
              </div>
            </div>

            <div className="mt-4 flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-lime-300" />

              <span className="text-sm">Online</span>
            </div>
          </div>

          {/* Navigation */}

          <div className="mt-7 flex-1 space-y-2 px-4">
            {menu.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  `
                  group
                  flex
                  items-center
                  gap-4
                  rounded-2xl
                  px-5
                  py-4
                  transition-all
                  duration-300

                  ${
                    isActive
                      ? "bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-lg"
                      : "text-slate-600 hover:bg-slate-100 hover:text-emerald-600"
                  }
                `
                }
              >
                <item.icon size={22} />

                <span className="font-medium">{item.name}</span>
              </NavLink>
            ))}
          </div>

          {/* Logout */}

          <div className="border-t border-slate-100 p-5">
            <button
              onClick={logout}
              className="
              flex
              w-full
              items-center
              justify-center
              gap-3
              rounded-2xl
              bg-red-50
              py-4
              font-semibold
              text-red-500
              transition
              hover:bg-red-100
              "
            >
              <LogOut size={20} />
              Logout
            </button>
          </div>
        </div>
      </aside>
    </>
  );
}
