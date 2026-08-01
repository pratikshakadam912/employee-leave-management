import { useState } from "react";
import Sidebar from "../components/dashboard/Sidebar";
import Navbar from "../components/dashboard/Navbar";

export default function DashboardLayout({ children }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#F6F8FC] dark:bg-[#0F172A] transition-colors">
      {/* Sidebar */}

      <Sidebar open={open} setOpen={setOpen} />

      {/* Main */}

      <div className="lg:ml-72">
        <Navbar setOpen={setOpen} />

        <main className="px-5 py-6 lg:px-10">{children}</main>
      </div>
    </div>
  );
}
