import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgPound = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 25 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fill="#323544"
      d="M5.585 20.566a.745.745 0 0 1-.046-.5.752.752 0 0 1 .59-.554l.018-.003.099-.025a5.062 5.062 0 0 0 1.577-.741c.838-.595 1.675-1.609 1.675-3.394v-1.474H6.326a.75.75 0 0 1 0-1.5h3.172v-4.15a4.725 4.725 0 1 1 9.45 0v.153a.75.75 0 1 1-1.5 0v-.153a3.225 3.225 0 1 0-6.45 0v4.15h3.174a.75.75 0 0 1 0 1.5h-3.174v1.474c0 1.965-.798 3.29-1.731 4.151h8.963a.75.75 0 0 1 0 1.5H6.28a.745.745 0 0 1-.695-.434Z"
    />
  </svg>
);
export default SvgPound;
