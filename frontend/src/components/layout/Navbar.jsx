import { Bell, Moon, Menu, Search } from "lucide-react";

export default function Navbar({ setOpen }) {
  return (
    <header className="sticky top-0 z-30 px-5 pt-5 lg:px-10">
      <div
        className="
        flex
        items-center
        justify-between
        rounded-3xl
        border
        border-white/40
        bg-white/70
        px-6
        py-4
        shadow-xl
        backdrop-blur-3xl
      "
      >
        <div className="flex items-center gap-4">
          <button onClick={() => setOpen(true)} className="lg:hidden">
            <Menu />
          </button>

          <div className="relative hidden md:block">
            <Search
              className="absolute left-4 top-3 text-slate-400"
              size={18}
            />

            <input
              placeholder="Search..."
              className="
                w-80
                rounded-2xl
                border
                border-slate-200
                bg-slate-50
                py-3
                pl-11
                pr-4
                outline-none
                focus:border-emerald-400
              "
            />
          </div>
        </div>

        <div className="flex items-center gap-5">
          <button className="rounded-2xl bg-slate-100 p-3 transition hover:scale-105">
            <Bell />
          </button>

          <button className="rounded-2xl bg-slate-100 p-3 transition hover:scale-105">
            <Moon />
          </button>

          <div className="flex items-center gap-3">
            <img
              src="https://ui-avatars.com/api/?name=Employee"
              alt=""
              className="h-11 w-11 rounded-full"
            />

            <div className="hidden md:block">
              <h3 className="font-semibold">Welcome</h3>

              <p className="text-sm text-slate-500">Employee</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
