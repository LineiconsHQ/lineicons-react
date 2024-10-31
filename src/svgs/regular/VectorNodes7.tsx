import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgVectorNodes7 = ({
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
      d="M4.523 2.75a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-.75.75h-.789v3.25h.79a.75.75 0 0 1 .75.75v.75h6v-.75a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-.75.75h-.75v3.25h.75a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-.75.75h-3a.75.75 0 0 1-.75-.75v-3a.75.75 0 0 1 .75-.75h.75v-3.25h-.75a.75.75 0 0 1-.75-.75v-.75h-6v.75a.75.75 0 0 1-.75.75h-3a.75.75 0 0 1-.75-.75v-3a.75.75 0 0 1 .75-.75h.71V6.5h-.71a.75.75 0 0 1-.75-.75v-3Zm12 10h1.5v-1.5h-1.5v1.5Zm-9-1.5h-1.5v1.5h1.5v-1.5Zm0-6.25V3.5h-1.5V5h1.5Zm9 14v1.5h1.5V19h-1.5Z"
    />
  </svg>
);
export default SvgVectorNodes7;
