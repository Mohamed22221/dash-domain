import React from "react";

const InputField = ({ value, setValue, title, type, placeholder }) => {
  const handleInput = (e) => {
    setValue(e.target.value);
  };
  return (
    <div className="input__box">
      <label className="input__label" htmlFor="email">{title}</label>
      <input
        type={type ? `${type}` : "text"}
        className="input input__field"
        value={value}
        onChange={handleInput}
        placeholder={placeholder ? placeholder : ""}
        required
      />

    </div>
  );
};
export default InputField;
