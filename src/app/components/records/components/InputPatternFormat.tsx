import { PatternFormat, PatternFormatProps } from "react-number-format";

import "./InputStyle.css";

interface IPatternFormatProps extends PatternFormatProps {
  label: string;
}

export const InputPatternFormat: React.FC<IPatternFormatProps> = ({ label, ...props }) => {
  return (
    <div className="boxInput">
      <label>{label}</label>
      <PatternFormat
        {...props}
      />
    </div>
  );
};