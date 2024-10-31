import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgMagnet = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 25 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fill="#323544"
      d="M3.75 5.501A2.25 2.25 0 0 1 6 3.251h2a2.25 2.25 0 0 1 2.25 2.25v6.5a2.25 2.25 0 0 0 4.5 0v-6.5A2.25 2.25 0 0 1 17 3.251h2a2.25 2.25 0 0 1 2.25 2.25v6.5a8.75 8.75 0 1 1-17.5 0v-6.5ZM6 4.751a.75.75 0 0 0-.75.75v2.25h3.5v-2.25a.75.75 0 0 0-.75-.75H6Zm-.75 7.25a7.25 7.25 0 0 0 14.5 0v-2.75h-3.5v2.75a3.75 3.75 0 0 1-7.5 0v-2.75h-3.5v2.75Zm14.5-4.25v-2.25a.75.75 0 0 0-.75-.75h-2a.75.75 0 0 0-.75.75v2.25h3.5Z"
    />
  </svg>
);
export default SvgMagnet;
