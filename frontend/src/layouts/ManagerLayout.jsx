import { useState } from "react";

import ManagerSidebar from "../components/layout/ManagerSidebar";
import ManagerNavbar from "../components/layout/ManagerNavbar";

export default function ManagerLayout({ children }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-100">
      <ManagerSidebar open={open} setOpen={setOpen} />

      <div className="lg:ml-72">
        <ManagerNavbar open={open} setOpen={setOpen} />

        <main className="p-5 lg:p-8">{children}</main>
      </div>
    </div>
  );
}
