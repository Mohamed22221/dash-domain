import React from "react";

const InputField = ({ value, setValue,change , title, type, placeholder }) => {

  return (
    <div className="input__box">
      <label className="input__label" htmlFor="email">{title}</label>
      <input
        type={type ? `${type}` : "text"}
        className="input input__field"
        value={value}
        onChange={change}
        placeholder={placeholder ? placeholder : ""}
        required
      />

    </div>
  );
};
export default InputField;
