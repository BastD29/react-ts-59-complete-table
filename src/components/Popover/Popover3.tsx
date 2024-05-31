import React, {
  forwardRef,
  CSSProperties,
  useEffect,
  useRef,
  MutableRefObject,
} from "react";
import ReactDOM from "react-dom";
import { PopoverPosition } from "../../models/popover";
import style from "./Popover.module.scss";

type PopoverProps = {
  children: React.ReactNode;
  targetRef: React.RefObject<HTMLElement>;
  position?: PopoverPosition;
  offset?: number;
};

const Popover = forwardRef<HTMLDivElement, PopoverProps>(
  ({ children, targetRef, position = "bottom", offset = 10 }, ref) => {
    const internalRef = useRef<HTMLDivElement | null>(null);

    const combinedRef = (node: HTMLDivElement | null) => {
      internalRef.current = node;
      if (typeof ref === "function") {
        ref(node);
      } else if (ref) {
        (ref as MutableRefObject<HTMLDivElement | null>).current = node;
      }
    };

    useEffect(() => {
      const popoverNode = internalRef.current;
      if (popoverNode) {
        document.body.appendChild(popoverNode);
      }

      return () => {
        if (popoverNode) {
          document.body.removeChild(popoverNode);
        }
      };
    }, [internalRef.current]);

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

    return internalRef.current
      ? ReactDOM.createPortal(
          <div
            className={style["popover"]}
            style={popoverStyle}
            onMouseDown={handleMouseDown}
            ref={combinedRef}
          >
            {children}
          </div>,
          internalRef.current
        )
      : null;
  }
);

export default Popover;
