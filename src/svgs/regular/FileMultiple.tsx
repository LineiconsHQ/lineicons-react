import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgFileMultiple = ({
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
      d="M16.892 16.733V4.25A2.25 2.25 0 0 0 14.642 2h-3.95a2.25 2.25 0 0 0-1.59.66L4.751 7.01a2.25 2.25 0 0 0-.658 1.59v8.132a2.25 2.25 0 0 0 2.25 2.25h8.298a2.25 2.25 0 0 0 2.25-2.25Zm-2.25.75H6.344a.75.75 0 0 1-.75-.75V8.731h2.98a2.25 2.25 0 0 0 2.25-2.251l-.001-2.98h3.82a.75.75 0 0 1 .75.75v12.483a.75.75 0 0 1-.75.75ZM6.653 7.231l2.67-2.672.002 1.922a.75.75 0 0 1-.75.75H6.653Z"
    />
    <path
      fill="#323544"
      d="M18.407 5.684a.75.75 0 0 1 1.5 0v11.567a4.75 4.75 0 0 1-4.75 4.75h-7.36a.75.75 0 0 1 0-1.5h7.36a3.25 3.25 0 0 0 3.25-3.25V5.684Z"
    />
  </svg>
);
export default SvgFileMultiple;
