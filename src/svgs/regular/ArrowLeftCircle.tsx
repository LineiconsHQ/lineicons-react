import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgArrowLeftCircle = ({
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
      d="m10.698 11.751 1.372-1.373a.75.75 0 1 0-1.061-1.06l-2.638 2.64a.748.748 0 0 0 .026 1.11l2.612 2.614a.75.75 0 1 0 1.06-1.06l-1.369-1.37h5.068a.75.75 0 0 0 0-1.5h-5.07Z"
    />
    <path
      fill="#323544"
      fillRule="evenodd"
      d="M2.328 12.5c0-5.523 4.477-10 10-10 5.522 0 10 4.477 10 10 0 5.521-4.478 9.998-10 9.998-5.523 0-10-4.477-10-9.999Zm10-8.5a8.5 8.5 0 1 0 0 16.999 8.5 8.5 0 0 0 0-16.999Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgArrowLeftCircle;
