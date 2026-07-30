import { forwardRef, useState } from "react";
import { Eye, EyeOff } from "lucide-react";

const Input = forwardRef(
  ({ label, error, type = "text", className = "", ...props }, ref) => {
    const [showPassword, setShowPassword] = useState(false);

    const isPassword = type === "password";

    return (
      <div className="space-y-2">
        {label && (
          <label className="block text-sm font-semibold text-slate-700">
            {label}
          </label>
        )}

        <div className="relative group">
          <input
            ref={ref}
            type={isPassword ? (showPassword ? "text" : "password") : type}
            className={`
              w-full rounded-2xl
              border border-slate-200/80
              bg-white/80
              px-5 py-4
              text-slate-800
              placeholder:text-slate-400
              backdrop-blur-md
              transition-all duration-300
              outline-none
              shadow-sm

              focus:border-emerald-500
              focus:ring-4
              focus:ring-emerald-100
              focus:shadow-xl

              group-hover:border-slate-300

              ${error ? "border-red-400 focus:ring-red-100" : ""}

              ${isPassword ? "pr-14" : ""}

              ${className}
            `}
            {...props}
          />

          {isPassword && (
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 transition hover:text-slate-700"
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          )}
        </div>

        {error && <p className="text-sm font-medium text-red-500">{error}</p>}
      </div>
    );
  },
);

Input.displayName = "Input";

export default Input;
