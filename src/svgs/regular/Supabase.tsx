import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgSupabase = ({
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
      d="M13.643 21.668c-.51.643-1.546.29-1.559-.531l-.18-12.016h8.08c1.463 0 2.28 1.69 1.37 2.836l-7.71 9.71Z"
    />
    <path
      fill="#323544"
      d="M13.643 21.668c-.51.643-1.546.29-1.559-.531l-.18-12.016h8.08c1.463 0 2.28 1.69 1.37 2.836l-7.71 9.71Z"
    />
    <path
      fill="#323544"
      d="M10.357 2.332c.511-.643 1.547-.29 1.56.531l.079 12.016h-7.98c-1.463 0-2.279-1.69-1.369-2.836l7.71-9.71Z"
    />
  </svg>
);
export default SvgSupabase;
