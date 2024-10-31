import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgYen = ({
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
      d="M7.108 3.472a.75.75 0 0 0-1.06 1.06L11.5 9.984v1.498H7.928a.75.75 0 0 0 0 1.5H11.5v1.5H7.928a.75.75 0 0 0 0 1.5H11.5V20a.75.75 0 0 0 1.5 0v-4.018h3.574a.75.75 0 0 0 0-1.5H13v-1.5h3.574a.75.75 0 0 0 0-1.5H13V9.985l5.453-5.453a.75.75 0 0 0-1.061-1.06L12.25 8.613 7.108 3.472Z"
    />
  </svg>
);
export default SvgYen;
