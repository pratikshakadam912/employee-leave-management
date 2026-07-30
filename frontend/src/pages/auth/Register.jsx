import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { UserPlus, ArrowRight } from "lucide-react";
import { toast } from "react-toastify";
import { useState } from "react";

import AuthLayout from "../../layouts/AuthLayout";
import Input from "../../components/common/Input";
import Button from "../../components/common/Button";

import { registerUser } from "../../services/auth.service";

export default function Register() {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const password = watch("password");

  const onSubmit = async (data) => {
    try {
      setLoading(true);

      await registerUser({
        username: data.username,
        password: data.password,
      });

      toast.success("Account created successfully!");

      navigate("/login");
    } catch (error) {
      toast.error(error.response?.data?.message || "Registration failed.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthLayout
      title="Create Account"
      subtitle="Create your employee account to access the leave management portal."
    >
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <Input
          label="Username"
          placeholder="Choose a username"
          error={errors.username?.message}
          {...register("username", {
            required: "Username is required",
            minLength: {
              value: 3,
              message: "Minimum 3 characters",
            },
          })}
        />

        <Input
          label="Password"
          type="password"
          placeholder="Create a password"
          error={errors.password?.message}
          {...register("password", {
            required: "Password is required",
            minLength: {
              value: 6,
              message: "Minimum 6 characters",
            },
          })}
        />

        <Input
          label="Confirm Password"
          type="password"
          placeholder="Confirm your password"
          error={errors.confirmPassword?.message}
          {...register("confirmPassword", {
            required: "Please confirm your password",
            validate: (value) => value === password || "Passwords do not match",
          })}
        />

        <Button type="submit" loading={loading}>
          {!loading && (
            <>
              <UserPlus size={18} />
              <span>Create Account</span>
            </>
          )}
        </Button>

        <div className="rounded-2xl border border-emerald-100 bg-emerald-50 p-4">
          <p className="text-sm text-emerald-700">
            🔐 Your password is securely encrypted before being stored.
          </p>
        </div>

        <div className="text-center text-sm text-slate-600">
          Already have an account?{" "}
          <Link
            to="/login"
            className="inline-flex items-center gap-1 font-semibold text-emerald-600 hover:text-emerald-700 transition"
          >
            Sign In
            <ArrowRight size={16} />
          </Link>
        </div>
      </form>
    </AuthLayout>
  );
}
