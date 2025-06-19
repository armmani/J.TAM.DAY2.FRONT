function FormInput({ name, register, errors }) {
  return (
    <>
      <input className="input" placeholder={name} {...register(name)} />
      <p>
        {
          errors[name]
        }
      </p>
    </>
  );
}
export default FormInput;
