import { useState, useMemo } from "react";
import { useForm } from "react-hook-form";
import {
  CalendarDays,
  FileUp,
  ClipboardList,
  Send,
  UploadCloud,
  FileText,
  Trash2,
  CalendarClock,
} from "lucide-react";
import { motion } from "framer-motion";

import DashboardLayout from "../../layouts/DashboardLayout";
import Input from "../../components/common/Input";
import Button from "../../components/common/Button";

export default function ApplyLeave() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const [selectedFile, setSelectedFile] = useState(null);
  const startDate = watch("startDate");
  const endDate = watch("endDate");

  const totalDays = useMemo(() => {
    if (!startDate || !endDate) return 0;

    const start = new Date(startDate);
    const end = new Date(endDate);

    if (end < start) return 0;

    const diff = (end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24);

    return diff + 1;
  }, [startDate, endDate]);

  const onSubmit = (data) => {
    const formData = new FormData();

    formData.append("leaveType", data.leaveType);
    formData.append("reason", data.reason);
    formData.append("startDate", data.startDate);
    formData.append("endDate", data.endDate);

    if (selectedFile) {
      formData.append("document", selectedFile);
    }

    console.log(formData);
  };
  return (
    <DashboardLayout>
      <div className="space-y-8">
        {/* Header */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col justify-between gap-4 rounded-[32px] bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 p-8 text-white shadow-2xl lg:flex-row lg:items-center"
        >
          <div>
            <p className="text-emerald-100">Employee Portal</p>

            <h1 className="mt-2 text-4xl font-black">Apply Leave</h1>

            <p className="mt-3 max-w-xl text-emerald-50">
              Fill out the form below to submit your leave request. Your manager
              will review it shortly.
            </p>
          </div>

          <div className="rounded-3xl bg-white/10 p-5 backdrop-blur-xl">
            <CalendarDays size={40} />
          </div>
        </motion.div>

        {/* Form */}

        <motion.form
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          onSubmit={handleSubmit(onSubmit)}
          className="rounded-[32px] border border-white/40 bg-white/80 p-8 shadow-xl backdrop-blur-xl"
        >
          <div className="grid gap-6 md:grid-cols-2">
            {/* Leave Type */}

            <div>
              <label className="mb-2 block font-semibold text-slate-700">
                Leave Type
              </label>

              <select
                {...register("leaveType", {
                  required: "Leave Type is required",
                })}
                className="w-full rounded-2xl border border-slate-200 bg-white px-5 py-4 outline-none transition focus:border-emerald-500"
              >
                <option value="">Select Leave Type</option>
                <option value="CASUAL">Casual Leave</option>
                <option value="SICK">Sick Leave</option>
                <option value="ANNUAL">Annual Leave</option>
                <option value="UNPAID">Unpaid Leave</option>
              </select>

              <p className="mt-1 text-sm text-red-500">
                {errors.leaveType?.message}
              </p>
            </div>

            {/* Start Date */}

            <Input
              label="Start Date"
              type="date"
              error={errors.startDate?.message}
              {...register("startDate", {
                required: "Start Date is required",
              })}
            />

            {/* End Date */}

            <Input
              label="End Date"
              type="date"
              error={errors.endDate?.message}
              {...register("endDate", {
                required: "End Date is required",
              })}
            />

            {/* Days */}

            <div>
              <label className="mb-2 block font-semibold text-slate-700">
                Duration
              </label>

              <div className="flex h-[58px] items-center gap-2 rounded-2xl border border-emerald-200 bg-emerald-50 px-5">
                <CalendarClock size={18} className="text-emerald-600" />

                <span className="font-semibold text-emerald-700">
                  {totalDays
                    ? `${totalDays} Day${totalDays > 1 ? "s" : ""}`
                    : "Select dates"}
                </span>
              </div>
            </div>
          </div>

          {/* Reason */}

          <div className="mt-8">
            <label className="mb-2 flex items-center gap-2 font-semibold text-slate-700">
              <ClipboardList size={18} />
              Leave Reason
            </label>

            <textarea
              rows={6}
              placeholder="Describe the reason for your leave..."
              {...register("reason", {
                required: "Reason is required",
              })}
              className="w-full rounded-3xl border border-slate-200 p-5 outline-none transition focus:border-emerald-500"
            />

            <p className="mt-1 text-sm text-red-500">
              {errors.reason?.message}
            </p>
          </div>

          {/* Upload */}
          <div className="mt-8">
            <label className="mb-3 flex items-center gap-2 font-semibold text-slate-700">
              <UploadCloud size={18} />
              Supporting Document
              <span className="text-sm font-normal text-slate-400">
                (Optional)
              </span>
            </label>

            <label
              className="
      flex
      cursor-pointer
      flex-col
      items-center
      justify-center
      rounded-3xl
      border-2
      border-dashed
      border-emerald-300
      bg-emerald-50
      p-10
      transition
      hover:border-emerald-500
      hover:bg-emerald-100
    "
            >
              <UploadCloud size={48} className="text-emerald-600" />

              <h3 className="mt-4 text-xl font-bold">Drag & Drop File</h3>

              <p className="mt-2 text-slate-500">or click here to browse</p>

              <p className="mt-4 text-sm text-slate-400">PDF • JPG • PNG</p>

              <input
                type="file"
                hidden
                accept=".pdf,.jpg,.jpeg,.png"
                onChange={(e) => {
                  const file = e.target.files[0];

                  if (!file) return;

                  if (file.size > 5 * 1024 * 1024) {
                    alert("Maximum file size is 5MB.");
                    return;
                  }

                  setSelectedFile(file);
                }}
              />
            </label>

            {selectedFile && (
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-5 flex items-center justify-between rounded-2xl border border-emerald-200 bg-white p-5 shadow-lg"
              >
                <div className="flex items-center gap-4">
                  <div className="rounded-xl bg-emerald-100 p-3">
                    <FileText className="text-emerald-600" />
                  </div>

                  <div>
                    <h4 className="font-semibold">{selectedFile.name}</h4>

                    <p className="text-sm text-slate-500">
                      {(selectedFile.size / 1024).toFixed(1)} KB
                    </p>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setSelectedFile(null)}
                  className="rounded-xl bg-red-50 p-3 text-red-500 transition hover:bg-red-100"
                >
                  <Trash2 size={18} />
                </button>
              </motion.div>
            )}
          </div>

          {/* Buttons */}

          <div className="mt-10 flex flex-col-reverse gap-4 md:flex-row md:justify-end">
            <button
              type="button"
              className="rounded-2xl border border-slate-300 px-8 py-4 font-semibold transition hover:bg-slate-100"
            >
              Cancel
            </button>

            <Button type="submit">
              <div className="flex items-center justify-center gap-2">
                <Send size={18} />
                Submit Leave
              </div>
            </Button>
          </div>
        </motion.form>
      </div>
    </DashboardLayout>
  );
}
