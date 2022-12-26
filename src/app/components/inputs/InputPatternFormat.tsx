import { PatternFormat, PatternFormatProps } from "react-number-format";

import { useField } from "@unform/core";

import "./InputStyle.css";
import { useEffect, useRef } from "react";

interface IPatternFormatProps extends PatternFormatProps {
  name: string;
  label: string;
}

export const InputPatternFormat: React.FC<IPatternFormatProps> = ({ name, label, ...props }) => {
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
      <PatternFormat
        defaultValue={defaultValue}
        getInputRef={inputRef}
        {...props}
      />
    </div>
  );
};