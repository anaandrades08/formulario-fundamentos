import React, { useState, FunctionComponent, InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

const Input: FunctionComponent<InputProps> = ({ label, error, ...rest }) => {
  const [touched, setTouched] = useState(false);

  return (
    <div className="mb-3">
      <label htmlFor={rest.name} className="form-label">
        {label}
      </label>
      <input
        className={`form-control ${touched && error ? "is-invalid" : ""}`}
        {...rest}
        onBlur={() => setTouched(true)}
      />
      {touched && error && <div className="invalid-feedback">{error}</div>}
    </div>
  );
};

export default Input;
