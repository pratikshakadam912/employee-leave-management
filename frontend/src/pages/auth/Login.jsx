import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Loader2 } from "lucide-react";
import { useState } from "react";

import AuthLayout from "../../layouts/AuthLayout";
import Input from "../../components/common/Input";
import Button from "../../components/common/Button";

export default function Login() {
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    setLoading(true);

    console.log(data);

    // TODO:
    // axios.post("/auth/login", data)

    setTimeout(() => {
      setLoading(false);
    }, 1500);
  };

  return (
    <AuthLayout
      title="Welcome Back 👋"
      subtitle="Sign in to continue to PulseHR."
    >
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <Input
          label="Username"
          placeholder="Enter username"
          error={errors.username?.message}
          {...register("username", {
            required: "Username is required",
          })}
        />

        <Input
          label="Password"
          type="password"
          placeholder="Enter password"
          error={errors.password?.message}
          {...register("password", {
            required: "Password is required",
          })}
        />

        <div className="flex items-center justify-between">
          <label className="flex cursor-pointer items-center gap-2 text-sm text-slate-600">
            <input
              type="checkbox"
              className="h-4 w-4 rounded border-slate-300 text-indigo-600 focus:ring-indigo-500"
            />
            Remember me
          </label>

          <button
            type="button"
            className="text-sm font-medium text-indigo-600 hover:text-indigo-700"
          >
            Forgot Password?
          </button>
        </div>

        <Button type="submit" disabled={loading}>
          {loading ? (
            <div className="flex items-center justify-center gap-2">
              <Loader2 size={18} className="animate-spin" />
              Signing In...
            </div>
          ) : (
            "Sign In"
          )}
        </Button>

        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-slate-200"></div>
          </div>

          <div className="relative flex justify-center">
            <span className="bg-white px-3 text-sm text-slate-400">OR</span>
          </div>
        </div>

        <p className="text-center text-sm text-slate-600">
          Don't have an account?
          <Link
            to="/register"
            className="ml-1 font-semibold text-indigo-600 hover:text-indigo-700"
          >
            Create Account
          </Link>
        </p>
      </form>
    </AuthLayout>
  );
}
