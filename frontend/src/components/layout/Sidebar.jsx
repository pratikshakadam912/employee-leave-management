import {
  LayoutDashboard,
  CalendarDays,
  FileText,
  Bell,
  User,
  Settings,
  LogOut,
  X,
} from "lucide-react";

import { NavLink, useNavigate } from "react-router-dom";

const menu = [
  {
    name: "Dashboard",
    icon: LayoutDashboard,
    path: "/employee/dashboard",
  },
  {
    name: "Apply Leave",
    icon: CalendarDays,
    path: "/employee/apply",
  },
  {
    name: "Leave History",
    icon: FileText,
    path: "/employee/history",
  },
  {
    name: "Notifications",
    icon: Bell,
    path: "/employee/notifications",
  },
  {
    name: "Profile",
    icon: User,
    path: "/employee/profile",
  },
  {
    name: "Settings",
    icon: Settings,
    path: "/employee/settings",
  },
];

export default function Sidebar({ open, setOpen }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    navigate("/login");
  };

  return (
    <>
      {/* Mobile */}

      <div
        className={`fixed inset-0 z-40 bg-black/50 transition lg:hidden ${
          open ? "block" : "hidden"
        }`}
      />

      <aside
        className={`
        fixed top-0 left-0 z-50
        h-screen w-72
        bg-white/80
        dark:bg-slate-900/90
        backdrop-blur-3xl
        border-r border-white/30
        shadow-2xl
        transition-all duration-300

        ${open ? "translate-x-0" : "-translate-x-full"}

        lg:translate-x-0
      `}
      >
        <div className="flex h-full flex-col">
          {/* Logo */}

          <div className="flex items-center justify-between px-7 py-7">
            <div>
              <h1 className="text-2xl font-black text-emerald-600">LeaveHub</h1>

              <p className="text-xs text-slate-500">Employee Portal</p>
            </div>

            <button onClick={() => setOpen(false)} className="lg:hidden">
              <X />
            </button>
          </div>

          {/* Menu */}

          <div className="space-y-2 px-4">
            {menu.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `
                  flex items-center gap-4
                  rounded-2xl
                  px-5
                  py-4
                  transition
                  duration-300

                  ${
                    isActive
                      ? "bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-lg"
                      : "text-slate-600 hover:bg-slate-100"
                  }
                `
                }
              >
                <item.icon size={22} />

                {item.name}
              </NavLink>
            ))}
          </div>

          <div className="mt-auto p-5">
            <button
              onClick={handleLogout}
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
              <LogOut />
              Logout
            </button>
          </div>
        </div>
      </aside>
    </>
  );
}
