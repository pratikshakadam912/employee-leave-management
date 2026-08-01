import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import {
  Settings2,
  LockKeyhole,
  Palette,
  Save,
  Moon,
  Sun,
  Monitor,
} from "lucide-react";

import DashboardLayout from "../../layouts/DashboardLayout";
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

    // TODO
    // axios.put("/user/change-password", data)
  };

  return (
    <DashboardLayout>
      <div className="space-y-8">
        {/* ================= HERO ================= */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative overflow-hidden rounded-[34px]
          bg-gradient-to-r
          from-slate-900
          via-emerald-900
          to-teal-700
          p-8
          text-white
          shadow-2xl"
        >
          <div className="absolute -top-20 -right-20 h-72 w-72 rounded-full bg-white/10 blur-[110px]" />

          <div className="relative z-10 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-emerald-100">Employee Portal</p>

              <h1 className="mt-2 text-5xl font-black">Settings</h1>

              <p className="mt-4 max-w-xl text-emerald-50">
                Manage your account preferences, security and appearance from
                one place.
              </p>
            </div>

            <div className="rounded-3xl bg-white/10 p-6 backdrop-blur-xl">
              <Settings2 size={44} />
            </div>
          </div>
        </motion.div>

        {/* ================= GRID ================= */}

        <div className="grid gap-8 xl:grid-cols-3">
          {/* LEFT */}

          <motion.form
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            onSubmit={handleSubmit(onSubmit)}
            className="xl:col-span-2 rounded-[30px] bg-white p-8 shadow-lg"
          >
            <div className="flex items-center gap-3">
              <div className="rounded-2xl bg-emerald-100 p-4">
                <LockKeyhole className="text-emerald-600" />
              </div>

              <div>
                <h2 className="text-2xl font-bold">Change Password</h2>

                <p className="text-slate-500">Keep your account secure.</p>
              </div>
            </div>

            <div className="mt-8 space-y-6">
              <Input
                label="Current Password"
                type="password"
                placeholder="Enter current password"
                error={errors.currentPassword?.message}
                {...register("currentPassword", {
                  required: "Current password is required",
                })}
              />

              <Input
                label="New Password"
                type="password"
                placeholder="Enter new password"
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

          {/* RIGHT */}

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="rounded-[30px] bg-white p-8 shadow-lg"
          >
            <div className="flex items-center gap-3">
              <div className="rounded-2xl bg-indigo-100 p-4">
                <Palette className="text-indigo-600" />
              </div>

              <div>
                <h2 className="text-2xl font-bold">Appearance</h2>

                <p className="text-slate-500">Customize your workspace.</p>
              </div>
            </div>

            <div className="mt-8 space-y-4">
              <button className="flex w-full items-center justify-between rounded-2xl border border-slate-200 p-5 transition hover:border-emerald-400 hover:bg-emerald-50">
                <div className="flex items-center gap-3">
                  <Sun className="text-yellow-500" />

                  <span className="font-medium">Light Theme</span>
                </div>

                <input type="radio" checked={false} readOnly />
              </button>

              <button className="flex w-full items-center justify-between rounded-2xl border-2 border-emerald-500 bg-emerald-50 p-5">
                <div className="flex items-center gap-3">
                  <Moon className="text-emerald-600" />

                  <span className="font-semibold">Dark Theme</span>
                </div>

                <input type="radio" checked readOnly />
              </button>

              <button className="flex w-full items-center justify-between rounded-2xl border border-slate-200 p-5 transition hover:border-emerald-400 hover:bg-emerald-50">
                <div className="flex items-center gap-3">
                  <Monitor className="text-slate-600" />

                  <span className="font-medium">System Default</span>
                </div>

                <input type="radio" checked={false} readOnly />
              </button>
            </div>
          </motion.div>

          {/* ================= NOTIFICATIONS ================= */}

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="rounded-[30px] bg-white p-8 shadow-lg xl:col-span-2"
          >
            <h2 className="text-2xl font-bold text-slate-900">
              Notification Preferences
            </h2>

            <p className="mt-2 text-slate-500">
              Choose which notifications you'd like to receive.
            </p>

            <div className="mt-8 space-y-5">
              <ToggleRow
                title="Leave Application Updates"
                subtitle="Receive updates whenever your leave request changes."
                defaultChecked
              />

              <ToggleRow
                title="Manager Approval"
                subtitle="Notify me when my manager approves or rejects leave."
                defaultChecked
              />

              <ToggleRow
                title="System Announcements"
                subtitle="Receive important company announcements."
              />

              <ToggleRow
                title="Email Notifications"
                subtitle="Receive all notifications via email."
                defaultChecked
              />
            </div>
          </motion.div>

          {/* ================= ACCOUNT ================= */}

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="rounded-[30px] bg-white p-8 shadow-lg"
          >
            <h2 className="text-2xl font-bold text-slate-900">Account</h2>

            <p className="mt-2 text-slate-500">Manage your account actions.</p>

            <div className="mt-8 space-y-4">
              <button
                className="w-full rounded-2xl bg-gradient-to-r
      from-emerald-600
      to-teal-600
      px-6
      py-4
      font-semibold
      text-white
      transition
      hover:scale-[1.02]"
              >
                Logout
              </button>

              <button
                disabled
                className="w-full cursor-not-allowed rounded-2xl border border-red-300 bg-red-50 px-6 py-4 font-semibold text-red-500"
              >
                Delete Account
                <span className="ml-2 text-xs">(Disabled)</span>
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </DashboardLayout>
  );
}

function ToggleRow({ title, subtitle, defaultChecked = false }) {
  return (
    <div className="flex items-center justify-between rounded-2xl border border-slate-200 p-5">
      <div>
        <h3 className="font-semibold text-slate-800">{title}</h3>

        <p className="mt-1 text-sm text-slate-500">{subtitle}</p>
      </div>

      <label className="relative inline-flex cursor-pointer items-center">
        <input
          type="checkbox"
          defaultChecked={defaultChecked}
          className="peer sr-only"
        />

        <div
          className="
          h-7
          w-12
          rounded-full
          bg-slate-300
          transition-all
          peer-checked:bg-emerald-600
          after:absolute
          after:left-1
          after:top-1
          after:h-5
          after:w-5
          after:rounded-full
          after:bg-white
          after:transition-all
          peer-checked:after:translate-x-5
          "
        />
      </label>
    </div>
  );
}
