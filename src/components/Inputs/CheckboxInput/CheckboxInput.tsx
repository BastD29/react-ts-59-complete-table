import { InputHTMLAttributes } from "react";
import style from "./CheckboxInput.module.scss";

type CheckboxInputProps = InputHTMLAttributes<HTMLInputElement> & {};

const CheckboxInput: React.FC<CheckboxInputProps> = ({ ...props }) => {
  return (
    <input type="checkbox" className={style["checkbox-input"]} {...props} />
  );
};

export default CheckboxInput;
