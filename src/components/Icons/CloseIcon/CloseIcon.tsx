import Svg, { SvgProps } from "../../Svg/Svg";

const CloseIcon: React.FC<SvgProps> = ({ ...props }) => {
  return (
    <Svg
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="lucide lucide-x w-4 h-4"
      aria-hidden="true"
      {...props}
    >
      <path d="M18 6 6 18"></path>
      <path d="m6 6 12 12"></path>
    </Svg>
  );
};

export default CloseIcon;
