import React from "react";
import './style.scss';

const Input = ({ value, onChange, type, variant, ...rest }) => {
  const className = variant !== undefined ? `input i--${variant}` : 'i--primary';

  return (
    <input
      value={value}
      onChange={onChange}
      type={type}
      {...rest}
      className={className}
    />
  );
};

export default Input;
