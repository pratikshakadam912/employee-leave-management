import { CalendarDays } from "lucide-react";

export default function ProfileCard() {
  return (
    <div className="rounded-[28px] bg-gradient-to-br from-emerald-500 to-teal-500 p-8 text-white shadow-2xl">
      <img
        src="https://ui-avatars.com/api/?name=Employee"
        alt=""
        className="mb-5 h-24 w-24 rounded-full border-4 border-white"
      />

      <h2 className="text-2xl font-bold">Welcome 👋</h2>

      <p className="mt-1 opacity-90">Employee</p>

      <div className="mt-6 flex items-center gap-3 rounded-2xl bg-white/10 p-4 backdrop-blur">
        <CalendarDays />

        <div>
          <p className="text-sm opacity-80">Today's Date</p>

          <p className="font-semibold">{new Date().toLocaleDateString()}</p>
        </div>
      </div>
    </div>
  );
}
