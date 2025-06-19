import React from "react";
import FormInput from "../../components/form/FormInput";
import { createAlert } from "../../utils/createAlert";
import { useForm } from "react-hook-form";
import axios from "axios";

function Register() {
  // JS

  const { handleSubmit, register, formState } = useForm();
  const { isSubmitting } = formState;

  const hdlSubmit = async (value) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));

    try {
      const res = await axios.post(
        "http://localhost:8000/auth/register",
        value
      );
      console.log(res);
      createAlert("success", res.data.message);
    } catch (error) {
      console.log(error);
      createAlert("error", error.response?.data?.message);
    }
  };
  return (
    <div className="flex w-full h-full justify-end">
      {/* Card */}
      <div className="p-4 m-4 ">
        {/* Form */}
        <form onSubmit={handleSubmit(hdlSubmit)}>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4 flex flex-col gap-4">
            <legend className="fieldset-legend">Register</legend>

            <FormInput register={register} name="email" />
            <FormInput register={register} name="name" />
            <FormInput register={register} name="password" />
            <FormInput register={register} name="confirmPassword" />

            <button className="btn btn-neutral mt-4">
              {isSubmitting ? "T" : "F"}
            </button>
          </fieldset>
        </form>
      </div>
    </div>
  );
}

export default Register;
