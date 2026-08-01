import { CalendarPlus, Bell, FileClock, UserRound } from "lucide-react";

const actions = [
  {
    title: "Apply Leave",
    icon: CalendarPlus,
  },
  {
    title: "Leave History",
    icon: FileClock,
  },
  {
    title: "Notifications",
    icon: Bell,
  },
  {
    title: "Profile",
    icon: UserRound,
  },
];

export default function QuickActions() {
  return (
    <section className="mt-10">
      <h2 className="mb-5 text-2xl font-bold">Quick Actions</h2>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {actions.map((action) => (
          <button
            key={action.title}
            className="group rounded-[28px] border border-white/30 bg-white p-7 text-left shadow-lg transition duration-300 hover:-translate-y-2 hover:border-emerald-300 hover:shadow-2xl"
          >
            <div className="mb-6 inline-flex rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-500 p-4 text-white transition duration-300 group-hover:rotate-6">
              <action.icon size={28} />
            </div>

            <h3 className="text-lg font-bold">{action.title}</h3>

            <p className="mt-2 text-sm text-slate-500">
              Open {action.title.toLowerCase()} section.
            </p>
          </button>
        ))}
      </div>
    </section>
  );
}
