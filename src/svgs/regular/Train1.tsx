import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgTrain1 = ({
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
      d="M12 13.313a1.75 1.75 0 1 0 0 3.5 1.75 1.75 0 0 0 0-3.5Z"
    />
    <path
      fill="#323544"
      d="M3.875 5.5a2.25 2.25 0 0 1 2.25-2.25h11.75a2.25 2.25 0 0 1 2.25 2.25v11.75a2.25 2.25 0 0 1-2.25 2.25h-.69l1.22 1.22a.75.75 0 1 1-1.06 1.06l-2.28-2.28h-6.13l-2.28 2.28a.75.75 0 0 1-1.06-1.06l1.22-1.22h-.69a2.25 2.25 0 0 1-2.25-2.25V5.5Zm14.75 0a.75.75 0 0 0-.75-.75H12.75v5.875h5.875V5.5Zm-12.5-.75a.75.75 0 0 0-.75.75v5.125h5.875V4.75H6.125Zm-.75 7.375v5.125c0 .414.336.75.75.75h11.75a.75.75 0 0 0 .75-.75v-5.125H5.375Z"
    />
  </svg>
);
export default SvgTrain1;
