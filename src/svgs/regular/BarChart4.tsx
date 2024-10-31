import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgBarChart4 = ({
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
      d="M3.5 5.25a.75.75 0 0 0-1.5 0v12a2.25 2.25 0 0 0 2.25 2.25h17a.75.75 0 0 0 0-1.5h-17a.75.75 0 0 1-.75-.75v-12Z"
    />
    <path
      fill="#323544"
      fillRule="evenodd"
      d="M7 10.277a2 2 0 0 0-2 2v3.473c0 .414.336.75.75.75h2.5a.75.75 0 0 0 .75-.75v-3.473a2 2 0 0 0-2-2Zm-.5 2a.5.5 0 0 1 1 0V15h-1v-2.723ZM10.5 6.5a2 2 0 1 1 4 0v9.25a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1-.75-.75V6.5Zm2-.5a.5.5 0 0 0-.5.5V15h1V6.5a.5.5 0 0 0-.5-.5ZM18 8.059a2 2 0 0 0-2 2v5.691c0 .414.336.75.75.75h2.5a.75.75 0 0 0 .75-.75V10.06a2 2 0 0 0-2-2Zm-.5 2a.5.5 0 0 1 1 0V15h-1V10.06Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgBarChart4;
