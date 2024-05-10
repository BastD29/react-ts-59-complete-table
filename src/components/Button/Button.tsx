import { ButtonHTMLAttributes } from "react";
import style from "./Button.module.scss";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  className?: string;
};

const Button: React.FC<ButtonProps> = ({ children, className, ...props }) => {
  return (
    <button className={`${style["button"]} ${className || ""}`} {...props}>
      {children}
    </button>
  );
};

export default Button;
