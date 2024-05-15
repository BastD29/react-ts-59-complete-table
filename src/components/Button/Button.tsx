import { ButtonHTMLAttributes, forwardRef } from "react";
import style from "./Button.module.scss";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  className?: string;
};

const Button /* : React.FC<ButtonProps> */ = forwardRef<
  HTMLButtonElement,
  ButtonProps
>(({ children, className, ...props }, ref) => {
  return (
    <button
      ref={ref}
      className={`${style["button"]} ${className || ""}`}
      {...props}
    >
      {children}
    </button>
  );
});

export default Button;
