import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgGoogleDrive = ({
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
      d="M15.258 14.29 8.871 3.258h6.258l6.42 11.032h-6.29Zm-5.387.903-3.13 5.549h12.13L22 15.193H9.871ZM8.032 4.613 2 15.193l3.129 5.549 6.097-10.581-3.194-5.548Z"
    />
  </svg>
);
export default SvgGoogleDrive;
