import ReactDOM from "react-dom";
import { CSSProperties, ReactNode, RefObject, useEffect, useRef } from "react";
import { PopoverPosition } from "../../models/popover2";
import style from "./Popover.module.scss";

type PopoverProps = {
  children: ReactNode;
  targetRef: RefObject<HTMLElement>;
  position?: PopoverPosition;
  offset?: number;
};

const Popover: React.FC<PopoverProps> = ({
  children,
  targetRef,
  position = "bottom",
  offset = 2,
}) => {
  const popoverRef = useRef(document.createElement("div"));

  useEffect(() => {
    const popoverNode = popoverRef.current;
    document.body.appendChild(popoverNode);

    return () => {
      document.body.removeChild(popoverNode);
    };
  }, []);

  if (!targetRef.current) {
    return null;
  }

  const handleMouseDown = (event: React.MouseEvent) => {
    event.stopPropagation();
  };

  const { top, left, height, width } =
    targetRef.current.getBoundingClientRect();

  const popoverStyle: CSSProperties = {
    position: "absolute",
    top: `${top + height}px`,
    left: `${left}px`,
  };

  switch (position) {
    case "top":
      popoverStyle.top = `${top - offset}px`;
      popoverStyle.left = `${left}px`;
      break;
    case "bottom":
      popoverStyle.top = `${top + height + offset}px`;
      popoverStyle.left = `${left}px`;
      break;
    case "left":
      popoverStyle.top = `${top}px`;
      popoverStyle.left = `${left - offset}px`;
      break;
    case "right":
      popoverStyle.top = `${top}px`;
      popoverStyle.left = `${left + width + offset}px`;
      break;
    case "top-centered":
      popoverStyle.top = `${top - offset}px`;
      popoverStyle.left = `${left + width / 2}px`;
      popoverStyle.transform = "translate(-50%, -100%)";
      break;
    case "bottom-centered":
      popoverStyle.top = `${top + height + offset}px`;
      popoverStyle.left = `${left + width / 2}px`;
      popoverStyle.transform = "translateX(-50%)";
      break;
    case "right-centered":
      popoverStyle.top = `${top + height / 2}px`;
      popoverStyle.left = `${left + width + offset}px`;
      popoverStyle.transform = "translateY(-50%)";
      break;
    case "left-centered":
      popoverStyle.top = `${top + height / 2}px`;
      popoverStyle.left = `${left - offset}px`;
      popoverStyle.transform = "translate(-100%, -50%)";
      break;
    default:
      popoverStyle.top = `${top + height + offset}px`;
      popoverStyle.left = `${left}px`;
      break;
  }

  return ReactDOM.createPortal(
    <div
      className={style["popover"]}
      style={popoverStyle}
      onMouseDown={handleMouseDown}
    >
      {children}
    </div>,
    popoverRef.current
  );
};

export default Popover;
