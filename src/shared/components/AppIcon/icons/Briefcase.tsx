import type { SVGProps } from "react";
const SvgBriefcase = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="lucide lucide-briefcase-icon lucide-briefcase"
    width="1em"
    height="1em"
    stroke="currentColor"
    fill="none"
    {...props}
  >
    <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
    <rect width={20} height={14} x={2} y={6} rx={2} />
  </svg>
);
export default SvgBriefcase;
