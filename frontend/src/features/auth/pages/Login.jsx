import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { loginSchema } from "../validation/authSchema";
import { loginUser } from "../services/authService";
import AuthLayout from "../components/auth/authLayout";
import InputField from "../components/auth/InputField";
import PrimaryButton from "../components/ui/PrimaryButton";

const Login = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data) => {
    try {
      const result = await loginUser(data);

      console.log("Login Successful:", result);
      navigate("/Dashboard", {
        state: { message: "Login successful" },
      });
    } catch (error) {
      if (error.status === 401) {
        setError("root.serverError", {
          type: "server",
          message: "Invalid email or password",
        });
      } else {
        setError("root.serverError", {
          type: "server",
          message: "Something went wrong. Please try again.",
        });
      }
    }
  };

  return (
    <AuthLayout>
      <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
        Login
      </h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <InputField
          type="email"
          placeholder="Enter Email"
          name="email"
          register={register}
          error={errors.email}
        />
        <InputField
          type="password"
          placeholder="Enter Password"
          name="password"
          register={register}
          error={errors.password}
        />
        <PrimaryButton type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Logging..." : "Login"}
        </PrimaryButton>
      </form>
      <p className="text-center text-sm text-gray-500 mt-6">
        Don't have an account?{" "}
        <Link
          to="/register"
          className="text-indigo-600 font-medium hover:underline"
        >
          Register
        </Link>
      </p>
    </AuthLayout>
  );
};

export default Login;
