import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgPaperclip1 = ({
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
      d="m13.35 14.442.001.03v1.298a1.327 1.327 0 0 1-2.654 0V7.654a.75.75 0 0 0-1.5 0v8.116a2.827 2.827 0 0 0 5.654 0V6.122a4.154 4.154 0 0 0-8.308.032v10.365a5.48 5.48 0 1 0 10.962 0V9.558a.75.75 0 0 0-1.5 0v6.961a3.98 3.98 0 0 1-7.962 0V6.154a2.654 2.654 0 1 1 5.308 0v8.288Z"
    />
  </svg>
);
export default SvgPaperclip1;
