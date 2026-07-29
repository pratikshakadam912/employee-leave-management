import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";

export default function Input({
  label,
  type = "text",
  placeholder,
  error,
  ...props
}) {
  const [showPassword, setShowPassword] = useState(false);

  const isPassword = type === "password";

  return (
    <div className="space-y-2">
      {label && (
        <label className="block text-sm font-medium text-slate-700">
          {label}
        </label>
      )}

      <div className="relative">
        <input
          type={isPassword ? (showPassword ? "text" : "password") : type}
          placeholder={placeholder}
          className={`
            w-full rounded-xl border border-slate-300
            bg-white px-4 py-3
            outline-none
            transition-all duration-300
            focus:border-indigo-500
            focus:ring-2
            focus:ring-indigo-200
            ${isPassword ? "pr-12" : ""}
          `}
          {...props}
        />

        {isPassword && (
          <button
            type="button"
            onClick={() => setShowPassword((prev) => !prev)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500"
          >
            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
        )}
      </div>

      {error && <p className="text-sm text-red-600">{error}</p>}
    </div>
  );
}
