import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgTrain3 = ({
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
      d="M7.75 15.063a1.25 1.25 0 1 1 2.5 0 1.25 1.25 0 0 1-2.5 0ZM15 13.813a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5Z"
    />
    <path
      fill="#323544"
      d="M6.125 3.25a2.25 2.25 0 0 0-2.25 2.25v11.75a2.25 2.25 0 0 0 2.25 2.25h.69l-1.22 1.22a.75.75 0 1 0 1.06 1.06l2.28-2.28h6.13l2.28 2.28a.75.75 0 1 0 1.06-1.06l-1.22-1.22h.69a2.25 2.25 0 0 0 2.25-2.25V5.5a2.25 2.25 0 0 0-2.25-2.25H6.125Zm12.5 7.375H12.75V4.75h5.125a.75.75 0 0 1 .75.75v5.125ZM11.25 4.75v5.875H5.375V5.5a.75.75 0 0 1 .75-.75h5.125Zm-5.875 7.375h13.25v5.125a.75.75 0 0 1-.75.75H6.125a.75.75 0 0 1-.75-.75v-5.125Z"
    />
  </svg>
);
export default SvgTrain3;
