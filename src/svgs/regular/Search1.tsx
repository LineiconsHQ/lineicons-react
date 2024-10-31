import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgSearch1 = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fill="#323544"
      fillRule="evenodd"
      d="M11.25 2.75C6.142 2.75 2 6.89 2 11.998s4.142 9.248 9.25 9.248a9.214 9.214 0 0 0 5.987-2.198l3.481 3.48a.75.75 0 1 0 1.06-1.06l-3.48-3.48a9.21 9.21 0 0 0 2.202-5.99c0-5.108-4.142-9.248-9.25-9.248ZM3.5 11.998a7.749 7.749 0 0 1 7.75-7.748 7.749 7.749 0 1 1 0 15.496 7.749 7.749 0 0 1-7.75-7.748Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgSearch1;
