import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgTesla = ({
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
      d="M21.334 5.119c-3.298-1.46-6.52-1.924-9.334-1.902-2.815-.022-6.038.442-9.335 1.902-.393-.724-.554-1.162-.554-1.162C5.716 2.508 9.092 2.012 12 2c2.908.012 6.284.508 9.889 1.957 0 0-.113.356-.554 1.162Zm-6.566 1.078L12 22 9.21 6.194c-2.619.002-3.45.296-3.57 1.495 0 0-1.77-.67-2.662-2.03 3.482-1.64 6.98-1.713 6.98-1.713L12 6.468l2.039-2.522s3.498.074 6.98 1.713c-.892 1.36-2.661 2.03-2.661 2.03-.12-1.199-.952-1.492-3.59-1.492Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgTesla;
