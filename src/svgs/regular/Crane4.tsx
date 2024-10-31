import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgCrane4 = ({
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
      d="M19 5.5h-8.25A2.25 2.25 0 0 0 8.5 3.25h-1A2.25 2.25 0 0 0 5.25 5.5h-.5a2.25 2.25 0 0 0 0 4.5h.5v8.75c0 .414.336.75.75.75h4a.75.75 0 0 0 .75-.75V10h7v2.874c0 .509.226.918.473 1.215.245.294.548.524.8.694a.938.938 0 1 1-1.461.779.75.75 0 0 0-1.5 0 2.438 2.438 0 1 0 3.8-2.022 2.348 2.348 0 0 1-.486-.41c-.11-.132-.126-.212-.126-.256V9.986A2.25 2.25 0 0 0 19 5.5Zm-12.25 0a.75.75 0 0 1 .75-.75h1a.75.75 0 0 1 .75.75h-2.5Zm11.784 3a.765.765 0 0 0-.069 0H4.75a.75.75 0 1 1 0-1.5H19a.75.75 0 0 1 0 1.5h-.466ZM6.75 18v-8h2.5v8h-2.5Z"
    />
  </svg>
);
export default SvgCrane4;
