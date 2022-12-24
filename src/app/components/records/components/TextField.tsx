import { InputHTMLAttributes } from "react";

import "./InputStyle.css";

interface ITextField extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export const TextField: React.FC<ITextField> = ({ label, ...props }) => {
  return (
    <div className="boxInput">
      <label>{label}</label>
      <input
        {...props}
      />
    </div>
  );
};