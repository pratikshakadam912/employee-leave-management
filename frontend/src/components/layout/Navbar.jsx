import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Bell, Moon, Menu, Search, Sun } from "lucide-react";

import { useAuth } from "../../context/AuthContext";

export default function Navbar({ setOpen, onSearch }) {
  const { user } = useAuth();
  const navigate = useNavigate();

  const [searchQuery, setSearchQuery] = useState("");
  const [isDark, setIsDark] = useState(false);

  // Get logged-in user's username
  const username = user?.username || "User";

  // Generate avatar using the logged-in username
  const avatarUrl = `https://ui-avatars.com/api/?name=${encodeURIComponent(
    username,
  )}&background=10b981&color=ffffff&bold=true`;

  // Initialize theme
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark");
      setIsDark(true);
    } else if (savedTheme === "light") {
      document.documentElement.classList.remove("dark");
      setIsDark(false);
    } else {
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)",
      ).matches;

      if (prefersDark) {
        document.documentElement.classList.add("dark");
        setIsDark(true);
      }
    }
  }, []);

  // Toggle theme
  const toggleTheme = () => {
    const nextTheme = isDark ? "light" : "dark";

    if (nextTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    localStorage.setItem("theme", nextTheme);
    setIsDark(nextTheme === "dark");
  };

  // Search handler
  const handleSearch = (event) => {
    const value = event.target.value;

    setSearchQuery(value);

    if (onSearch) {
      onSearch(value);
    }
  };

  return (
    <header
      className="
        sticky top-0 z-40
        border-b border-slate-200/70
        bg-white/80
        px-4 py-4
        backdrop-blur-xl
        transition-colors
        dark:border-slate-800
        dark:bg-slate-950/80
        md:px-6
      "
    >
      <div className="flex items-center justify-between gap-4">
        {/* Mobile Menu */}
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="
            rounded-2xl
            bg-slate-100
            p-3
            text-slate-700
            transition
            hover:scale-105
            hover:bg-slate-200
            dark:bg-slate-800
            dark:text-slate-200
            dark:hover:bg-slate-700
            lg:hidden
          "
          aria-label="Open navigation menu"
        >
          <Menu size={21} />
        </button>

        {/* Search */}
        <div className="relative hidden md:block">
          <Search
            className="
              absolute left-4 top-1/2
              -translate-y-1/2
              text-slate-400
              dark:text-slate-500
            "
            size={18}
          />

          <input
            type="search"
            value={searchQuery}
            onChange={handleSearch}
            placeholder="Search..."
            className="
              w-64
              rounded-2xl
              border
              border-slate-200
              bg-slate-50
              py-3
              pl-11
              pr-4
              text-sm
              text-slate-800
              outline-none
              transition
              placeholder:text-slate-400
              focus:border-emerald-400
              focus:ring-4
              focus:ring-emerald-500/10
              dark:border-slate-700
              dark:bg-slate-900
              dark:text-slate-100
              dark:placeholder:text-slate-500
              dark:focus:border-emerald-500
            "
            aria-label="Search"
          />
        </div>

        {/* Right Actions */}
        <div className="ml-auto flex items-center gap-3 md:gap-5">
          {/* Notifications */}
          <button
            type="button"
            onClick={() => navigate("/employee/notifications")}
            className="
              relative
              rounded-2xl
              bg-slate-100
              p-3
              text-slate-700
              transition
              hover:scale-105
              hover:bg-slate-200
              dark:bg-slate-800
              dark:text-slate-200
              dark:hover:bg-slate-700
            "
            aria-label="Notifications"
          >
            <Bell size={20} />

            {/* Notification indicator */}
            <span
              className="
                absolute right-2 top-2
                h-2 w-2
                rounded-full
                bg-emerald-500
                ring-2
                ring-slate-100
                dark:ring-slate-800
              "
            />
          </button>

          {/* Theme Toggle */}
          <button
            type="button"
            onClick={toggleTheme}
            className="
              rounded-2xl
              bg-slate-100
              p-3
              text-slate-700
              transition
              hover:scale-105
              hover:bg-slate-200
              dark:bg-slate-800
              dark:text-slate-200
              dark:hover:bg-slate-700
            "
            aria-label={
              isDark ? "Switch to light theme" : "Switch to dark theme"
            }
            title={isDark ? "Switch to light theme" : "Switch to dark theme"}
          >
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          {/* User */}
          <div className="flex items-center gap-3">
            <img
              src={avatarUrl}
              alt={`${username} profile`}
              className="
                h-10 w-10
                rounded-full
                border-2
                border-white
                shadow-sm
                dark:border-slate-700
              "
            />

            <div className="hidden md:block">
              <h3 className="font-semibold text-slate-800 dark:text-slate-100">
                {username}
              </h3>

              <p className="text-sm text-slate-500 dark:text-slate-400">
                {user?.role === "MANAGER" ? "Manager" : "Employee"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
