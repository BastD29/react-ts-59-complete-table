import Svg, { SvgProps } from "../../Svg/Svg";

const FilterIcon: React.FC<SvgProps> = ({ ...props }) => {
  return (
    <Svg
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="lucide lucide-filter inline w-5 h-5"
      aria-hidden="true"
      {...props}
    >
      <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon>
    </Svg>
  );
};

export default FilterIcon;
