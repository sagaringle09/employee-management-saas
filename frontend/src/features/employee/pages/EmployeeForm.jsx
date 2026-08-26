import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { employeeSchema } from "../validation/employeeSchema";
import InputField from "@/components/common/InputField";
import PrimaryButton from "@/components/common/PrimaryButton";
import SecondaryButton from "@/components/common/SecondaryButton";
import { createEmployee } from "../services/employeeService";
import { useState } from "react";

const EmployeeForm = () => {
  const [successMessage, setSuccessMessage] = useState("");
  const {
    register,
    handleSubmit,
    setError,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(employeeSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      employeeCode: "",
      department: "",
      designation: "",
      salary: "",
      joiningDate: "",
    },
  });
  const onSubmit = async (data) => {
    try {
      const result = await createEmployee(data);
      // Show success message
      setSuccessMessage(result.message);
      // Clear form after successful creation
      reset();
    } catch (error) {
      if (error.status === 409) {
        setError("email", {
          type: "server",
          message: error.message,
        });
      } else {
        // Other server/API errors
        setError("root.serverError", {
          type: "server",
          message: error.message || "Something went wrong. Please try again",
        });
      }
    }
  };
  return (
    <div className="mx-auto max-w-4xl">
      {/* Page Header */}
      <div className="mt-8 mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Add Employee</h1>
        <p className="mt-1 text-sm text-gray-500">
          Add a new employee to your organization.
        </p>
      </div>

      {/* Form Card */}
      <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* General Server Error */}
          {errors.root?.serverError && (
            <div className="rounded-md border border-red-200 bg-red-50 p-3">
              <p className="text-sm text-red-600">
                {errors.root.serverError.message}
              </p>
            </div>
          )}

          {/* Success Message */}
          {successMessage && (
            <div className="rounded-md border border-green-200 bg-green-50 p-3">
              <p className="text-sm text-green-600">{successMessage}</p>
            </div>
          )}
          {/* Personal Information */}
          <div>
            <h2 className="text-lg font-semibold text-gray-900">
              Employee Information
            </h2>

            <p className="mt-1 text-sm text-gray-500">Personal Information.</p>
          </div>
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
            <InputField
              type="email"
              placeholder="Email"
              name="email"
              register={register}
              error={errors.email}
            />
            <InputField
              type="tel"
              placeholder="Phone"
              name="phone"
              register={register}
              error={errors.phone}
            />
          </div>
          <p className="mt-1 text-sm text-gray-500">Employment information.</p>
          <div className="grid grid-cols-2 gap-4">
            <InputField
              type="text"
              placeholder="Employee Code"
              name="employeeCode"
              register={register}
              error={errors.employeeCode}
            />
            <InputField
              type="text"
              placeholder="Department"
              name="department"
              register={register}
              error={errors.department}
            />
            <InputField
              type="text"
              placeholder="Designation"
              name="designation"
              register={register}
              error={errors.designation}
            />
          </div>
          <p className="mt-1 text-sm text-gray-500">Compensation & Joining.</p>
          <div className="grid grid-cols-2 gap-4">
            <InputField
              type="number"
              placeholder="Salary"
              name="salary"
              register={register}
              error={errors.salary}
            />
            <InputField
              type="date"
              placeholder="Joining Date"
              name="joiningDate"
              register={register}
              error={errors.joiningDate}
            />
          </div>
          <div className="flex gap-2 justify-end">
            <div className="w-32">
              <SecondaryButton type="button">Cancel</SecondaryButton>
            </div>
            <div className="w-32">
              <PrimaryButton type="submit" disabled={isSubmitting}>
                {isSubmitting ? "Creating..." : "Create"}
              </PrimaryButton>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
export default EmployeeForm;
