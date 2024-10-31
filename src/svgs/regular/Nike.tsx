import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgNike = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fill="#323544"
      fillRule="evenodd"
      d="M5.243 8.375c-1.168 1.334-2.785 2.828-3.173 4.692-.612 2.938 2.962 2.858 4.697 2.141 5.105-2.11 10.155-4.353 15.233-6.53-4.937 1.315-9.857 2.699-14.812 3.945-3.545.892-2.855-2.272-1.945-4.248Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgNike;
