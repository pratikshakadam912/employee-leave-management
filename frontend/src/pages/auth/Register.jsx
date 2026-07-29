import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Loader2 } from "lucide-react";
import { useState } from "react";

import AuthLayout from "../../layouts/AuthLayout";
import Input from "../../components/common/Input";
import Button from "../../components/common/Button";

export default function Register() {
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const password = watch("password");

  const onSubmit = async (data) => {
    setLoading(true);

    console.log(data);

    // TODO
    // axios.post("/auth/register", data)

    setTimeout(() => {
      setLoading(false);
    }, 1500);
  };

  return (
    <AuthLayout
      title="Create Your Account 🚀"
      subtitle="Join PulseHR and manage leave effortlessly."
    >
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        <Input
          label="Full Name"
          placeholder="John Doe"
          error={errors.fullName?.message}
          {...register("fullName", {
            required: "Full name is required",
          })}
        />

        <Input
          label="Email"
          type="email"
          placeholder="john@example.com"
          error={errors.email?.message}
          {...register("email", {
            required: "Email is required",
          })}
        />

        <Input
          label="Username"
          placeholder="Choose a username"
          error={errors.username?.message}
          {...register("username", {
            required: "Username is required",
          })}
        />

        <Input
          label="Password"
          type="password"
          placeholder="Create password"
          error={errors.password?.message}
          {...register("password", {
            required: "Password is required",
            minLength: {
              value: 8,
              message: "Password must be at least 8 characters",
            },
          })}
        />

        <Input
          label="Confirm Password"
          type="password"
          placeholder="Confirm password"
          error={errors.confirmPassword?.message}
          {...register("confirmPassword", {
            required: "Confirm your password",
            validate: (value) => value === password || "Passwords do not match",
          })}
        />

        <Button type="submit" disabled={loading}>
          {loading ? (
            <div className="flex items-center justify-center gap-2">
              <Loader2 className="animate-spin" size={18} />
              Creating Account...
            </div>
          ) : (
            "Create Account"
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
          Already have an account?
          <Link
            to="/login"
            className="ml-1 font-semibold text-indigo-600 hover:text-indigo-700"
          >
            Sign In
          </Link>
        </p>
      </form>
    </AuthLayout>
  );
}
