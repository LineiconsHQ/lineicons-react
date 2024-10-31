import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgClickup = ({
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
      d="m3.672 17.38 3.07-2.37c1.641 2.127 3.374 3.13 5.288 3.13 1.915 0 3.618-.973 5.168-3.1l3.13 2.31C18.08 20.39 15.283 22 12.031 22c-3.222 0-6.05-1.61-8.36-4.62ZM11.848 7.137l-5.471 4.711L3.854 8.9 11.848 2l7.964 6.9-2.553 2.918-5.41-4.681Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgClickup;
