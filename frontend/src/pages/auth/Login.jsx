import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { LogIn, ArrowRight } from "lucide-react";
import { toast } from "react-toastify";
import { useState } from "react";

import AuthLayout from "../../layouts/AuthLayout";
import Input from "../../components/common/Input";
import Button from "../../components/common/Button";

import { loginUser } from "../../services/authservice";
import { useAuth } from "../../context/AuthContext";

export default function Login() {
  const navigate = useNavigate();

  const { login } = useAuth();

  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      setLoading(true);

      const response = await loginUser(data);

      login(response.user, response.token);

      toast.success("Welcome back!");

      if (response.user.role === "MANAGER") {
        navigate("/admin/dashboard");
      } else {
        navigate("/employee/dashboard");
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Login failed.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthLayout
      title="Welcome Back"
      subtitle="Sign in to access your employee leave portal."
    >
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <Input
          label="Username"
          placeholder="Enter your username"
          error={errors.username?.message}
          {...register("username", {
            required: "Username is required",
          })}
        />

        <Input
          label="Password"
          type="password"
          placeholder="Enter your password"
          error={errors.password?.message}
          {...register("password", {
            required: "Password is required",
          })}
        />

        <Button type="submit" loading={loading}>
          {!loading && (
            <>
              <LogIn size={18} />
              <span>Sign In</span>
            </>
          )}
        </Button>

        <div className="rounded-2xl border border-emerald-100 bg-emerald-50 p-4">
          <p className="text-sm text-emerald-700">
            🔒 Secure authentication powered by JWT.
          </p>
        </div>

        <div className="text-center text-sm text-slate-600">
          Don't have an account?{" "}
          <Link
            to="/register"
            className="inline-flex items-center gap-1 font-semibold text-emerald-600 transition hover:text-emerald-700"
          >
            Create Account
            <ArrowRight size={16} />
          </Link>
        </div>
      </form>
    </AuthLayout>
  );
}
