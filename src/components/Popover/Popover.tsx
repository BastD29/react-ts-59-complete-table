import style from "./Popover.module.scss";

type PopoverProps = {
  className?: string;
};

const Popover: React.FC<PopoverProps> = ({ className }) => {
  return (
    // <section className={`${style["popover"]} ${className || ""}`}>
    <section
      className={`${style["popover"]} ${className ? style[className] : ""}`}
    >
      <h2>Popover</h2>
    </section>
  );
};

export default Popover;
