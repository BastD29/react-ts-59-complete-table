import Svg, { SvgProps } from "../../Svg/Svg";

const ColumnsIcon: React.FC<SvgProps> = ({ ...props }) => {
  return (
    <Svg
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="lucide lucide-sliders inline w-5 h-5"
      aria-hidden="true"
      {...props}
    >
      <line x1="4" x2="4" y1="21" y2="14"></line>
      <line x1="4" x2="4" y1="10" y2="3"></line>
      <line x1="12" x2="12" y1="21" y2="12"></line>
      <line x1="12" x2="12" y1="8" y2="3"></line>
      <line x1="20" x2="20" y1="21" y2="16"></line>
      <line x1="20" x2="20" y1="12" y2="3"></line>
      <line x1="2" x2="6" y1="14" y2="14"></line>
      <line x1="10" x2="14" y1="8" y2="8"></line>
      <line x1="18" x2="22" y1="16" y2="16"></line>
    </Svg>
  );
};

export default ColumnsIcon;
