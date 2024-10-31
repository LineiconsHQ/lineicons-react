import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgDiamonds1 = ({
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
      d="M5.165 4.46A2.25 2.25 0 0 1 7.16 3.25h9.681a2.25 2.25 0 0 1 1.995 1.21l2.111 4.045a2.25 2.25 0 0 1-.283 2.502l-8.093 9.48a.75.75 0 0 1-1.14 0l-8.093-9.48a2.25 2.25 0 0 1-.284-2.502L5.165 4.46Zm1.78.321 2.088 3.477L11.14 4.75H7.16a.75.75 0 0 0-.215.031Zm3.414 4.182h3.283L12 6.23l-1.642 2.733Zm5.17 1.5-1.937 6.518 5.564-6.518h-3.627Zm-5.12 6.518-1.936-6.518H4.845l5.564 6.518Zm-.372-6.518 1.964 6.607 1.963-6.607h-3.927Zm7.97-4.35-1.712 2.85h3.199l-1.487-2.85ZM16.84 4.75h-3.98l2.107 3.508 2.088-3.477a.75.75 0 0 0-.215-.031ZM7.706 8.963l-1.712-2.85-1.487 2.85h3.2Z"
    />
  </svg>
);
export default SvgDiamonds1;
