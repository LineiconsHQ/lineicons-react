import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgAmbulance1 = ({
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
      d="M8.875 6.17a.75.75 0 0 0-.75.75v1.83h-1.83a.75.75 0 1 0 0 1.5h1.83v1.83a.75.75 0 0 0 1.5 0v-1.83h1.83a.75.75 0 1 0 0-1.5h-1.83V6.92a.75.75 0 0 0-.75-.75Z"
    />
    <path
      fill="#323544"
      fillRule="evenodd"
      d="M2 5.5a2.25 2.25 0 0 1 2.25-2.25h9.25a2.25 2.25 0 0 1 2.25 2.25v.89h1.454c.747 0 1.445.37 1.863.99l2.547 3.764c.252.372.386.811.386 1.26v4.346a.75.75 0 0 1 0 1.5h-1.922a3.066 3.066 0 0 1-6.026 0h-3.724a3.066 3.066 0 0 1-6.026 0H4.25A2.25 2.25 0 0 1 2 16V5.5Zm2.395 11.25a3.066 3.066 0 0 1 5.84 0h3.91c.03-.095.066-.189.105-.28V5.5a.75.75 0 0 0-.75-.75H4.25a.75.75 0 0 0-.75.75V16c0 .414.336.75.75.75h.145Zm11.355-1.834a3.066 3.066 0 0 1 4.235 1.834h.515v-4.055h-4.75v2.22Zm0-3.721h4.087L17.825 8.22a.75.75 0 0 0-.621-.33H15.75v3.305Zm1.315 4.925a1.565 1.565 0 1 0 0 3.13 1.565 1.565 0 0 0 0-3.13Zm-9.75 0a1.565 1.565 0 1 0 0 3.13 1.565 1.565 0 0 0 0-3.13Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgAmbulance1;
