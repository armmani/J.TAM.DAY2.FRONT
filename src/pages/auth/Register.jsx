import React from "react";
import FormInput from "../../components/form/FormInput";
import { createAlert } from "../../utils/createAlert";

function Register() {
  // JS

  const hdlSubmit = (e) => {
    e.preventDefault()
    createAlert("success", "REGISTERED")
  }
  return (
    <div className="flex w-full h-full justify-end">
      {/* Card */}
      <div className="p-4 m-4 ">

        {/* Form */}
        <form onSubmit={hdlSubmit}>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4 flex flex-col gap-4">
            <legend className="fieldset-legend">Register</legend>
            
            <FormInput name="Email" />
            <FormInput name="Name" />
            <FormInput name="Password" />
            <FormInput name="Confirm Password" />
          
            <button className="btn btn-neutral mt-4">REGISTER</button>
          </fieldset>
        </form>
      </div>
    </div>
  );
}

export default Register;
