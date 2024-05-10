import React, { useState, useRef } from "react";
import Popover from "../Popover/Popover";
import Button from "../Button/Button";
import useOutsideClick from "../../hooks/useOutsideClick";
import style from "./ButtonWithPopover.module.scss";

type ButtonWithPopover = {
  popover?: string;
  className?: string;
  icon: React.ReactNode;
};

const ButtonWithPopover: React.FC<ButtonWithPopover> = ({
  popover,
  className,
  icon,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useOutsideClick(ref, () => setIsOpen(false));

  const togglePopover = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    // <div ref={ref} className={style["btn-container"]}>
    <div ref={ref} className={`${style["btn-container"]} ${className || ""}`}>
      {/* <button onClick={togglePopover}>Click me</button> */}
      <Button onClick={togglePopover}>{icon}</Button>
      {isOpen && <Popover className={popover} />}
    </div>
  );
};

export default ButtonWithPopover;
