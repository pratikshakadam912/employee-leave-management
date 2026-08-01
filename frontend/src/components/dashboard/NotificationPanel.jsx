import { Bell } from "lucide-react";

const notifications = [
  "Your leave request has been approved.",
  "Manager added remarks.",
  "Upcoming leave starts tomorrow.",
];

export default function NotificationPanel() {
  return (
    <div className="rounded-[28px] bg-white p-6 shadow-xl">
      <div className="mb-6 flex items-center gap-3">
        <Bell className="text-emerald-600" />

        <h2 className="text-xl font-bold">Notifications</h2>
      </div>

      <div className="space-y-4">
        {notifications.map((item) => (
          <div key={item} className="rounded-2xl bg-slate-50 p-4">
            <p className="text-slate-600">{item}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
