function InputField({ label, type, name, placeholder }) {
  return (
    <div className="form-field">
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        id={name}
        name={name}
        placeholder={placeholder}
      />
    </div>
  );
}

export default InputField;
