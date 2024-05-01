import { ButtonHTMLAttributes } from "react";
import style from "./Button.module.scss";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {};

const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
  return (
    <button className={style["button"]} {...props}>
      {children}
    </button>
  );
};

export default Button;
