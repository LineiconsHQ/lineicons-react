import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgPreviousStep2 = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 25 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fill="#323544"
      d="M5.914 4.5a.75.75 0 0 1 1.5 0v5.338l8.153-5.565c1.494-1.019 3.518.05 3.518 1.859v11.736c0 1.808-2.024 2.878-3.518 1.858l-8.153-5.564V19.5a.75.75 0 1 1-1.5 0v-15Zm1.901 8.12 8.598 5.868a.75.75 0 0 0 1.172-.62V6.132a.75.75 0 0 0-1.172-.62l-8.598 5.869a.75.75 0 0 0 0 1.238Z"
    />
  </svg>
);
export default SvgPreviousStep2;
