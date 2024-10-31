import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgPaintRoller1 = ({
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
      fillRule="evenodd"
      d="M4.86 5.25A2.25 2.25 0 0 0 7.11 7.5h9a2.25 2.25 0 0 0 2.236-2H19a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-.75.75H13.11a2.25 2.25 0 0 0-2.25 2.25v1.378a2.25 2.25 0 0 0-1.5 2.122v5a2.25 2.25 0 0 0 4.5 0v-5a2.25 2.25 0 0 0-1.5-2.122V11.25a.75.75 0 0 1 .75-.75H19a2.25 2.25 0 0 0 2.25-2.25v-2A2.25 2.25 0 0 0 19.001 4h-.655a2.25 2.25 0 0 0-2.237-2h-9a2.25 2.25 0 0 0-2.25 2.25v1ZM7.11 6a.75.75 0 0 1-.75-.75v-1a.75.75 0 0 1 .75-.75h9a.75.75 0 0 1 .75.75v1a.75.75 0 0 1-.75.75h-9Zm3.75 8.75a.75.75 0 0 1 1.5 0v5a.75.75 0 0 1-1.5 0v-5Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgPaintRoller1;
