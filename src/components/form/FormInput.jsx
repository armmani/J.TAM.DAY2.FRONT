function FormInput({ name, register }) {
  return (
    <input
      className="input"
      placeholder={name}
      {...register(name)}
    />
  );
}
export default FormInput;
