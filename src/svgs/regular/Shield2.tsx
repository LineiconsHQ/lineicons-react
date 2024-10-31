import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgShield2 = ({
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
      d="M11.139 2.296a2.25 2.25 0 0 1 1.722 0l6.548 2.713c.776.322 1.338 1.064 1.361 1.947.117 4.545-1.34 10.807-7.703 14.558a2.116 2.116 0 0 1-2.132.01c-6.503-3.753-7.841-10.03-7.707-14.57A2.184 2.184 0 0 1 4.59 5.008l6.549-2.713Zm1.148 1.386a.75.75 0 0 0-.574 0L5.164 6.395a.685.685 0 0 0-.437.602c-.125 4.239 1.115 9.856 6.958 13.227.192.111.43.11.62-.002 5.725-3.375 7.075-8.999 6.966-13.227a.68.68 0 0 0-.436-.6l-6.548-2.713Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgShield2;
