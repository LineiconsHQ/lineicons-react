import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgRefreshCircle1Clockwise = ({
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
      d="M3.136 9.542a.75.75 0 1 0 1.45.388 8 8 0 0 1 15.251-.644l-1.675-.943a.75.75 0 1 0-.736 1.307l3.08 1.735a.75.75 0 0 0 1.022-.286l1.735-3.08a.75.75 0 0 0-1.307-.737l-.761 1.352a9.5 9.5 0 0 0-18.059.908ZM21.49 14.458a.75.75 0 1 0-1.448-.388 8 8 0 0 1-15.25.651l1.663.936a.75.75 0 0 0 .736-1.307l-3.08-1.734a.75.75 0 0 0-1.022.285l-1.735 3.081a.75.75 0 1 0 1.307.736l.767-1.362a9.5 9.5 0 0 0 18.063-.898Z"
    />
  </svg>
);
export default SvgRefreshCircle1Clockwise;
