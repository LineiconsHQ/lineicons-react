import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgMapPin5 = ({
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
      fillRule="evenodd"
      d="M13.254 13.538a5.376 5.376 0 1 0-1.5 0v8.552a.75.75 0 1 0 1.5 0v-8.552ZM8.629 8.215a3.875 3.875 0 1 1 7.75 0 3.875 3.875 0 0 1-7.75 0Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgMapPin5;
