import React from "react";

const Input = props => {
  const {
    type = "text",
    id,
    placeholder = "What you want to do?",
    value,
    done,
    readonly = false,
    style
  } = props;

  return (
    <input
      id={id}
      className="input"
      type={type}
      placeholder={placeholder}
      value={value}
      style={{
        textDecoration: done ? "line-through" : "none",
        color: style ? style.color : ""
      }}
      maxLength={80}
      readOnly={readonly}
    />
  );
};

export default Input;
