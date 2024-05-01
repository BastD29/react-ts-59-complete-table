import Svg, { SvgProps } from "../../Svg/Svg";

const PlusIcon: React.FC<SvgProps> = ({ ...props }) => {
  return (
    <Svg
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="lucide lucide-plus inline w-5 h-5"
      aria-hidden="true"
      {...props}
    >
      <path d="M5 12h14"></path>
      <path d="M12 5v14"></path>
    </Svg>
  );
};

export default PlusIcon;
