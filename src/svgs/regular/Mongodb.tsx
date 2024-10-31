import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgMongodb = ({
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
      d="M13.74 4.23a34.743 34.743 0 0 1-1.713-2.216.033.033 0 0 0-.054 0 34.731 34.731 0 0 1-1.713 2.217c-7.212 9.187 1.138 15.385 1.138 15.385l.067.047c.064.959.221 2.337.221 2.337h.628s.157-1.372.22-2.33l.069-.054s8.349-6.198 1.138-15.385ZM12 19.482s-.374-.32-.475-.48l-.001-.016.453-10.002a.024.024 0 0 1 .047 0l.452 10.002v.017c-.101.16-.476.48-.476.48Z"
    />
  </svg>
);
export default SvgMongodb;
