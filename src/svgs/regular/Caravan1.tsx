import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgCaravan1 = ({
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
      d="M4.25 4.5A2.25 2.25 0 0 0 2 6.75v9.75a2.25 2.25 0 0 0 2.25 2.25h.92a3.001 3.001 0 0 0 5.66 0h10.42a.75.75 0 0 0 0-1.5h-1v-7.5c0-2.9-2.35-5.25-5.25-5.25H4.25Zm6.709 12.75a3 3 0 0 0-5.918 0H4.25a.75.75 0 0 1-.75-.75V6.75A.75.75 0 0 1 4.25 6H15a3.75 3.75 0 0 1 3.75 3.75v7.5h-7.791Zm-4.459.5a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z"
    />
  </svg>
);
export default SvgCaravan1;
