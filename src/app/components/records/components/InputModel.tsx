import { InputHTMLAttributes } from "react";

import styles from "./InputModel.module.css";

interface IInputModelProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export const InputModel: React.FC<IInputModelProps> = ({ label, ...props }) => {
  return (
    <div className={styles.boxInput}>
      <label>{label}</label>
      <input
        {...props}
      />
    </div>
  );
};