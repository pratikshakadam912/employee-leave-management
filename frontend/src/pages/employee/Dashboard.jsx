import DashboardLayout from "../../layouts/DashboardLayout";

export default function Dashboard() {
  return (
    <DashboardLayout>
      <div className="rounded-[30px] bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 p-10 text-white shadow-2xl">
        <h1 className="text-4xl font-black">Good Morning 👋</h1>

        <p className="mt-3 text-lg text-emerald-50">
          Welcome back to your Employee Leave Management Dashboard.
        </p>
      </div>
    </DashboardLayout>
  );
}
