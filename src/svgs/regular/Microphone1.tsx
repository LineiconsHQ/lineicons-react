import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgMicrophone1 = ({
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
      d="M12 2a4.75 4.75 0 0 0-4.75 4.75v4.5a4.75 4.75 0 1 0 9.5 0v-4.5A4.75 4.75 0 0 0 12 2ZM8.75 6.75a3.25 3.25 0 1 1 6.5 0v4.5a3.25 3.25 0 0 1-6.5 0v-4.5Z"
      clipRule="evenodd"
    />
    <path
      fill="#323544"
      d="M5.75 11.25a.75.75 0 0 0-1.5 0 7.75 7.75 0 0 0 7 7.714V20.5H10a.75.75 0 0 0 0 1.5h4a.75.75 0 0 0 0-1.5h-1.25v-1.536a7.75 7.75 0 0 0 7-7.714.75.75 0 0 0-1.5 0 6.25 6.25 0 1 1-12.5 0Z"
    />
  </svg>
);
export default SvgMicrophone1;
