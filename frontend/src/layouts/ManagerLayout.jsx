import ManagerSidebar from "../components/layout/ManagerSidebar";
import ManagerNavbar from "../components/layout/ManagerNavbar";

export default function ManagerLayout({ children }) {
  return (
    <div className="min-h-screen bg-slate-100">
      <ManagerSidebar />

      <div className="ml-[290px]">
        <ManagerNavbar />

        <main className="p-8">{children}</main>
      </div>
    </div>
  );
}
