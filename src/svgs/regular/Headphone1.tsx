import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgHeadphone1 = ({
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
      d="M12 3.25A8.75 8.75 0 0 0 3.25 12V17.25A2.25 2.25 0 0 0 5.5 19.5h1a2.25 2.25 0 0 0 2.25-2.25v-3.5A2.25 2.25 0 0 0 6.5 11.5h-1c-.26 0-.509.044-.74.125a7.25 7.25 0 0 1 14.48 0 2.247 2.247 0 0 0-.74-.125h-1a2.25 2.25 0 0 0-2.25 2.25v3.5a2.25 2.25 0 0 0 2.25 2.25h1a2.25 2.25 0 0 0 2.25-2.25V12A8.75 8.75 0 0 0 12 3.25Zm7.25 10.486v3.514a.75.75 0 0 1-.75.75h-1a.75.75 0 0 1-.75-.75v-3.5a.75.75 0 0 1 .75-.75h1a.75.75 0 0 1 .75.736ZM6.5 13a.75.75 0 0 1 .75.75v3.5a.75.75 0 0 1-.75.75h-1a.75.75 0 0 1-.75-.75v-3.5A.75.75 0 0 1 5.5 13h1Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgHeadphone1;
