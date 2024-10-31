import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgPnpm = ({
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
      d="M21 8.626h-5.625V3H21v5.625ZM14.812 8.626H9.187V3h5.625v5.625ZM8.625 8.626H3V3h5.625v5.625ZM21 14.813h-5.625V9.188H21v5.625ZM14.812 14.813H9.187V9.188h5.625v5.625ZM14.812 21H9.187v-5.625h5.625V21ZM21 21h-5.625v-5.625H21V21ZM8.625 21H3v-5.625h5.625V21Z"
    />
  </svg>
);
export default SvgPnpm;
