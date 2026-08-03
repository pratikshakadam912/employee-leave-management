import {
  CalendarClock,
  CheckCircle2,
  XCircle,
  FolderKanban,
} from "lucide-react";

import StatCard from "./StatCard";

export default function StatsGrid({ data }) {
  return (
    <section className="mt-8 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
      <StatCard
        title="Pending"
        value={data?.pendingLeaves ?? 0}
        icon={CalendarClock}
        color="bg-amber-500"
      />

      <StatCard
        title="Approved"
        value={data?.approvedLeaves ?? 0}
        icon={CheckCircle2}
        color="bg-emerald-500"
      />

      <StatCard
        title="Rejected"
        value={data?.rejectedLeaves ?? 0}
        icon={XCircle}
        color="bg-red-500"
      />

      <StatCard
        title="Total Leaves"
        value={data?.totalLeaves ?? 0}
        icon={FolderKanban}
        color="bg-cyan-500"
      />
    </section>
  );
}
