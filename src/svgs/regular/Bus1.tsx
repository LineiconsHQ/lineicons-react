import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgBus1 = ({
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
      d="M7 14.438a1.25 1.25 0 1 1 2.5 0 1.25 1.25 0 0 1-2.5 0ZM15.75 13.188a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5Z"
    />
    <path
      fill="#323544"
      d="M7.625 2.625a3.751 3.751 0 0 0-3.662 2.938h-.088a1.5 1.5 0 0 0-1.5 1.5v.75c0 .414.336.75.75.75h.75v8.062c0 .725.343 1.37.875 1.781v1.469a1.5 1.5 0 0 0 3 0v-1h8.5v1a1.5 1.5 0 0 0 3 0v-1.469a2.246 2.246 0 0 0 .875-1.781V8.562h.75a.75.75 0 0 0 .75-.75v-.75a1.5 1.5 0 0 0-1.5-1.5h-.088a3.751 3.751 0 0 0-3.662-2.937h-8.75Zm11 3.75V10H5.375V6.375a2.25 2.25 0 0 1 2.25-2.25h8.75a2.25 2.25 0 0 1 2.25 2.25Zm-.75 11H6.125a.75.75 0 0 1-.75-.75V11.5h13.25v5.125a.75.75 0 0 1-.75.75Z"
    />
  </svg>
);
export default SvgBus1;
