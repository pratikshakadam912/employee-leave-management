import { Loader2 } from "lucide-react";

export default function Button({
  children,
  type = "button",
  loading = false,
  disabled = false,
  variant = "primary",
  className = "",
  ...props
}) {
  const variants = {
    primary:
      "bg-gradient-to-r from-emerald-600 via-emerald-500 to-teal-500 text-white shadow-lg shadow-emerald-500/25 hover:-translate-y-1 hover:shadow-2xl hover:shadow-emerald-500/30",

    secondary:
      "bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 hover:-translate-y-1",

    danger:
      "bg-gradient-to-r from-red-500 to-rose-500 text-white hover:-translate-y-1",
  };

  return (
    <button
      type={type}
      disabled={disabled || loading}
      className={`
        relative
        flex
        h-14
        w-full
        items-center
        justify-center
        overflow-hidden
        rounded-2xl
        px-6
        text-sm
        font-semibold
        tracking-wide
        transition-all
        duration-300
        disabled:cursor-not-allowed
        disabled:opacity-60

        ${variants[variant]}

        ${className}
      `}
      {...props}
    >
      {/* Shine Effect */}

      <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 hover:translate-x-full"></span>

      {loading ? (
        <div className="flex items-center gap-2">
          <Loader2 size={18} className="animate-spin" />
          Please wait...
        </div>
      ) : (
        children
      )}
    </button>
  );
}
