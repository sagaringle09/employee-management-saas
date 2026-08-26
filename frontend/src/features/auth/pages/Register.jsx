import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { registerSchema } from "../validation/authSchema";
import { registerUser } from "../services/authService";
import AuthLayout from "../components/auth/authLayout";
import InputField from "../../../components/common/InputField";
import SelectField from "../../../components/common/SelectField";
import PrimaryButton from "../../../components/common/PrimaryButton";

const Register = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
      role: "",
    },
  });

  const onSubmit = async (data) => {
    const userData = { ...data };
    delete userData.confirmPassword;
    try {
      const result = await registerUser(userData);
      console.log("Registration Successful:", result);
      navigate("/login", {
        state: { message: "Registration successful. Please login." },
      });
    } catch (error) {
      // Email already exists
      if (error.status === 409) {
        setError("email", {
          type: "server",
          message: error.message,
        });
      } else {
        // Other server/API errors
        setError("root.serverError", {
          type: "server",
          message: "Something went wrong. Please try again",
        });
      }
    }
  };

  return (
    <div>
      <AuthLayout>
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
          Register
        </h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <InputField
              type="text"
              placeholder="First Name"
              name="firstName"
              register={register}
              error={errors.firstName}
            />
            <InputField
              type="text"
              placeholder="Last Name"
              name="lastName"
              register={register}
              error={errors.lastName}
            />
          </div>
          <InputField
            type="email"
            placeholder="Email"
            name="email"
            register={register}
            error={errors.email}
          />
          <InputField
            type="password"
            placeholder="Password"
            name="password"
            register={register}
            error={errors.password}
          />
          <InputField
            type="password"
            placeholder="Confirm Password"
            name="confirmPassword"
            register={register}
            error={errors.confirmPassword}
          />
          <SelectField name="role" register={register} error={errors.role} />
          <PrimaryButton type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Registering..." : "Register"}
          </PrimaryButton>
        </form>
        <p className="text-center text-sm text-gray-500 mt-6">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-indigo-600 font-medium hover:underline"
          >
            Login
          </Link>
        </p>
      </AuthLayout>
    </div>
  );
};
export default Register;
