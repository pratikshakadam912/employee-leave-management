import { NavLink, useNavigate } from "react-router-dom";
import {
  LayoutDashboard,
  ClipboardCheck,
  Users,
  BarChart3,
  Bell,
  UserCircle,
  Settings,
  LogOut,
  ShieldCheck,
} from "lucide-react";

const menuItems = [
  {
    title: "Dashboard",
    icon: LayoutDashboard,
    path: "/manager/dashboard",
  },
  {
    title: "Leave Requests",
    icon: ClipboardCheck,
    path: "/manager/leave-requests",
  },
  {
    title: "Employees",
    icon: Users,
    path: "/manager/employees",
  },
  {
    title: "Reports",
    icon: BarChart3,
    path: "/manager/reports",
  },
  {
    title: "Notifications",
    icon: Bell,
    path: "/manager/notifications",
  },
  {
    title: "Profile",
    icon: UserCircle,
    path: "/manager/profile",
  },
  {
    title: "Settings",
    icon: Settings,
    path: "/manager/settings",
  },
];

export default function ManagerSidebar() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    navigate("/login");
  };

  return (
    <aside
      className="
      fixed
      left-0
      top-0
      z-50
      flex
      h-screen
      w-[290px]
      flex-col
      border-r
      border-white/10
      bg-gradient-to-b
      from-slate-950
      via-slate-900
      to-emerald-950
      text-white
      shadow-2xl
      "
    >
      {/* Logo */}

      <div className="border-b border-white/10 p-8">
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
            to-cyan-500
            "
          >
            <ShieldCheck size={30} />
          </div>

          <div>
            <h2 className="text-2xl font-black">PulseHR</h2>

            <p className="text-sm text-slate-400">Manager Portal</p>
          </div>
        </div>
      </div>

      {/* Navigation */}

      <div className="flex-1 space-y-2 overflow-y-auto px-5 py-6">
        {menuItems.map((item) => {
          const Icon = item.icon;

          return (
            <NavLink
              key={item.title}
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
                    ? "bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-xl"
                    : "text-slate-300 hover:bg-white/10 hover:text-white"
                }
                `
              }
            >
              <Icon size={22} />

              <span className="font-medium">{item.title}</span>
            </NavLink>
          );
        })}
      </div>

      {/* Footer */}

      <div className="border-t border-white/10 p-6">
        <button
          onClick={logout}
          className="
          flex
          w-full
          items-center
          gap-3
          rounded-2xl
          bg-red-500/10
          px-5
          py-4
          text-red-300
          transition
          hover:bg-red-500
          hover:text-white
          "
        >
          <LogOut size={20} />
          Logout
        </button>
      </div>
    </aside>
  );
}
