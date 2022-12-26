import { InputHTMLAttributes } from "react";

import "./CheckboxStyle.css";

interface ITextField extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export const Checkbox: React.FC<ITextField> = ({ label, ...props }) => {
  return (
    <div className="checkboxItem">
      <input
        {...props}
      />
      <label>{label}</label>
    </div>
  );
};