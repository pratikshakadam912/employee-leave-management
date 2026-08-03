import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import {
  Settings2,
  LockKeyhole,
  Palette,
  Save,
  Bell,
  ShieldCheck,
  LogOut,
  Sun,
  Moon,
  Monitor,
} from "lucide-react";

import ManagerLayout from "../../layouts/ManagerLayout";
import Input from "../../components/common/Input";
import Button from "../../components/common/Button";

export default function Settings() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);

    // TODO:
    // axios.put("/manager/change-password", data)
  };

  return (
    <ManagerLayout>
      <div className="space-y-8">
        {/* ================= HERO ================= */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          className="rounded-[34px] bg-gradient-to-r from-slate-900 via-emerald-900 to-teal-700 p-8 text-white shadow-2xl"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-emerald-100">Manager Workspace</p>

              <h1 className="mt-2 text-5xl font-black">Settings</h1>

              <p className="mt-4 max-w-xl text-emerald-50">
                Manage your account security, appearance and notification
                preferences.
              </p>
            </div>

            <div className="rounded-3xl bg-white/10 p-6 backdrop-blur-xl">
              <Settings2 size={46} />
            </div>
          </div>
        </motion.div>

        {/* ================= GRID ================= */}

        <div className="grid gap-8 xl:grid-cols-3">
          {/* Password */}

          <motion.form
            onSubmit={handleSubmit(onSubmit)}
            className="xl:col-span-2 rounded-[30px] bg-white p-8 shadow-lg"
          >
            <div className="flex items-center gap-4">
              <div className="rounded-2xl bg-emerald-100 p-4">
                <LockKeyhole className="text-emerald-600" />
              </div>

              <div>
                <h2 className="text-2xl font-bold">Change Password</h2>

                <p className="text-slate-500">Update your account password.</p>
              </div>
            </div>

            <div className="mt-8 space-y-6">
              <Input
                label="Current Password"
                type="password"
                placeholder="Current password"
                error={errors.currentPassword?.message}
                {...register("currentPassword", {
                  required: "Current password is required",
                })}
              />

              <Input
                label="New Password"
                type="password"
                placeholder="New password"
                error={errors.newPassword?.message}
                {...register("newPassword", {
                  required: "New password is required",
                })}
              />

              <Input
                label="Confirm Password"
                type="password"
                placeholder="Confirm password"
                error={errors.confirmPassword?.message}
                {...register("confirmPassword", {
                  required: "Confirm password is required",
                })}
              />
            </div>

            <div className="mt-8">
              <Button type="submit">
                <div className="flex items-center justify-center gap-2">
                  <Save size={18} />
                  Save Password
                </div>
              </Button>
            </div>
          </motion.form>

          {/* Theme */}

          <motion.div className="rounded-[30px] bg-white p-8 shadow-lg">
            <div className="flex items-center gap-4">
              <div className="rounded-2xl bg-indigo-100 p-4">
                <Palette className="text-indigo-600" />
              </div>

              <div>
                <h2 className="text-2xl font-bold">Appearance</h2>

                <p className="text-slate-500">Choose your preferred theme.</p>
              </div>
            </div>

            <div className="mt-8 space-y-4">
              <ThemeCard
                icon={<Sun className="text-yellow-500" />}
                title="Light Theme"
              />

              <ThemeCard
                active
                icon={<Moon className="text-emerald-600" />}
                title="Dark Theme"
              />

              <ThemeCard icon={<Monitor />} title="System Theme" />
            </div>
          </motion.div>

          {/* Notifications */}

          <motion.div className="rounded-[30px] bg-white p-8 shadow-lg xl:col-span-2">
            <div className="flex items-center gap-4">
              <div className="rounded-2xl bg-blue-100 p-4">
                <Bell className="text-blue-600" />
              </div>

              <div>
                <h2 className="text-2xl font-bold">Notifications</h2>

                <p className="text-slate-500">
                  Manage notification preferences.
                </p>
              </div>
            </div>

            <div className="mt-8 space-y-6">
              <ToggleRow
                title="Leave Requests"
                subtitle="Receive notifications for every new request."
                defaultChecked
              />

              <ToggleRow
                title="Approvals"
                subtitle="Notify after approving/rejecting."
                defaultChecked
              />

              <ToggleRow
                title="Employee Registration"
                subtitle="Receive new employee alerts."
                defaultChecked
              />

              <ToggleRow
                title="Email Notifications"
                subtitle="Receive emails."
              />
            </div>
          </motion.div>

          {/* Security */}

          <motion.div className="rounded-[30px] bg-white p-8 shadow-lg">
            <div className="flex items-center gap-4">
              <div className="rounded-2xl bg-red-100 p-4">
                <ShieldCheck className="text-red-500" />
              </div>

              <div>
                <h2 className="text-2xl font-bold">Security</h2>

                <p className="text-slate-500">Account actions</p>
              </div>
            </div>

            <div className="mt-8 space-y-4">
              <button className="w-full rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-600 px-6 py-4 font-semibold text-white hover:scale-[1.02] transition">
                Logout
              </button>

              <button
                disabled
                className="w-full cursor-not-allowed rounded-2xl border border-red-300 bg-red-50 px-6 py-4 font-semibold text-red-500"
              >
                Delete Account
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </ManagerLayout>
  );
}

function ThemeCard({ icon, title, active }) {
  return (
    <button
      className={`flex w-full items-center justify-between rounded-2xl p-5 transition
      ${
        active
          ? "border-2 border-emerald-500 bg-emerald-50"
          : "border border-slate-200 hover:bg-slate-50"
      }`}
    >
      <div className="flex items-center gap-3">
        {icon}
        <span className="font-medium">{title}</span>
      </div>

      <input type="radio" checked={active} readOnly />
    </button>
  );
}

function ToggleRow({ title, subtitle, defaultChecked = false }) {
  return (
    <div className="flex items-center justify-between rounded-2xl border border-slate-200 p-5">
      <div>
        <h3 className="font-semibold">{title}</h3>
        <p className="mt-1 text-sm text-slate-500">{subtitle}</p>
      </div>

      <input
        type="checkbox"
        defaultChecked={defaultChecked}
        className="h-5 w-5 accent-emerald-600"
      />
    </div>
  );
}
