import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgShare2 = ({
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
      d="M17.483 10.735a.75.75 0 0 1 0-1.06l1.858-1.858h-7.92c-.626 0-1.133.508-1.133 1.134v3.213a.75.75 0 0 1-1.5 0V8.951a2.634 2.634 0 0 1 2.633-2.634h7.924l-1.861-1.86a.75.75 0 0 1 1.06-1.062l3.14 3.14a.75.75 0 0 1 0 1.06l-3.14 3.14a.75.75 0 0 1-1.06 0ZM5.063 16.23a.75.75 0 1 0-1.5 0v2.5a2.25 2.25 0 0 0 2.25 2.25h13a2.25 2.25 0 0 0 2.25-2.25v-2.5a.75.75 0 1 0-1.5 0v2.5a.75.75 0 0 1-.75.75h-13a.75.75 0 0 1-.75-.75v-2.5Z"
    />
  </svg>
);
export default SvgShare2;
