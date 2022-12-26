import { InputHTMLAttributes, useEffect, useRef } from "react";

import { useField } from "@unform/core";

import "./InputStyle.css";

interface ITextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
}

export const TextField: React.FC<ITextFieldProps> = ({ name, label, ...props }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const { fieldName, defaultValue, registerField } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: "value",
    });
  }, [fieldName, registerField]);

  return (
    <div className="boxInput">
      <label>{label}</label>
      <input
        defaultValue={defaultValue}
        ref={inputRef}
        {...props}
      />
    </div>
  );
};