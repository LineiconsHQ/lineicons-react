import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgNextStep2 = ({
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
      d="M19.085 4.5a.75.75 0 0 0-1.5 0v5.338L9.432 4.273c-1.493-1.019-3.518.05-3.518 1.859v11.736c0 1.808 2.025 2.878 3.518 1.858l8.153-5.564V19.5a.75.75 0 1 0 1.5 0v-15Zm-1.9 8.12-8.598 5.868a.75.75 0 0 1-1.173-.62V6.132a.75.75 0 0 1 1.173-.62l8.597 5.869a.75.75 0 0 1 0 1.238Z"
    />
  </svg>
);
export default SvgNextStep2;
