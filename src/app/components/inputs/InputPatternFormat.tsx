import { PatternFormat, PatternFormatProps } from "react-number-format";

import { useField } from "@unform/core";

import "./InputStyle.css";
import { useEffect, useRef, useState } from "react";

interface IPatternFormatProps extends PatternFormatProps {
  name: string;
  label: string;
}

export const InputPatternFormat: React.FC<IPatternFormatProps> = ({ name, label, ...props }) => {
  // const inputRef = useRef<HTMLInputElement>(null);

  const { fieldName, defaultValue, registerField } = useField(name);
  const [value, setValue] = useState<string>(defaultValue);

  useEffect(() => {
    registerField({
      name: fieldName,
      getValue: () => value,
      setValue: (_, newValue) => setValue(newValue)
    });
  }, [fieldName, registerField, value]);

  return (
    <div className="boxInput">
      <label>{label}</label>
      <PatternFormat
        {...props}
        defaultValue={defaultValue}
        value={value}
        onChange={e => { setValue(e.target.value); props.onChange?.(e); }}
      />
    </div>
  );
};