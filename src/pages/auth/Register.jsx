import React from "react";
import FormInput from "../../components/form/FormInput";
import { createAlert } from "../../utils/createAlert";
import { useForm } from "react-hook-form";
import Buttons from "../../components/form/Buttons";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerSchema } from "../../utils/validator";
import { actionRegister } from "../../api/auth";

function Register() {
  // JS

  const { handleSubmit, register, formState, reset } = useForm({
    resolver: yupResolver(registerSchema),
  });
  const { isSubmitting, errors } = formState;
  // console.log(errors);

  const hdlSubmit = async (value) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));

    try {
      const res = await actionRegister(value);
      console.log(res);
      createAlert("success", res.data.message);
      reset();
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

            <FormInput register={register} name="email" errors={errors} />
            <FormInput register={register} name="name" errors={errors} />
            <FormInput
              register={register}
              name="password"
              errors={errors}
              type="password"
            />
            <FormInput
              register={register}
              name="confirmPassword"
              errors={errors}
              type="password"
            />

            <Buttons label="Register" isSubmitting={isSubmitting} />
          </fieldset>
        </form>
      </div>
    </div>
  );
}

export default Register;
