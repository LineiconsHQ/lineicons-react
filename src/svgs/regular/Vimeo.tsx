import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgVimeo = ({
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
      d="M21.993 7.374c-.096 1.967-1.45 4.643-4.095 8.03-2.709 3.547-5.03 5.32-6.901 5.32-1.129 0-2.128-1.032-2.967-3.225-.548-1.934-1.032-3.934-1.612-5.933C5.838 9.438 5.192 8.34 4.45 8.34c-.13 0-.677.323-1.58.968L2 8.019c1-.871 1.967-1.742 2.967-2.645 1.322-1.128 2.257-1.741 2.967-1.773 1.547-.13 2.483.967 2.87 3.192.354 2.451.644 3.999.806 4.58.451 2.031.967 3.03 1.45 3.03.42 0 1.033-.644 1.903-1.966.871-1.323 1.258-2.354 1.355-3.032.129-1.128-.355-1.741-1.355-1.741-.451 0-.967.097-1.45.355.967-3.225 2.805-4.805 5.578-4.74 2.032.096 3 1.45 2.902 4.095Z"
    />
  </svg>
);
export default SvgVimeo;
