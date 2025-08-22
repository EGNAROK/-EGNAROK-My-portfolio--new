import type { SVGProps } from "react";
const SvgChevron = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    stroke="currentColor"
    fill="none"
    {...props}
  >
    <path
      d="M6 15L12 9L18 15M12 15H12.01"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default SvgChevron;
