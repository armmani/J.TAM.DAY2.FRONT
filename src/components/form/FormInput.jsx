function FormInput({ name, register, errors, type = "text" }) {
  return (
    <>
      <input className="input" placeholder={name} type={type} {...register(name)} />
      <p>
        {errors[name] && <p className="text-red-300">{errors[name].message}</p>}
      </p>
    </>
  );
}
export default FormInput;
