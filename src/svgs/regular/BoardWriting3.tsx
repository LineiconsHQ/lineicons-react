import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgBoardWriting3 = ({
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
      d="M12.75 3.25a.75.75 0 0 0-1.5 0V4.5h-6.5A2.25 2.25 0 0 0 2.5 6.75V15a2.25 2.25 0 0 0 2.25 2.25h3.157l-1.116 3.257a.75.75 0 1 0 1.419.486l1.283-3.743h1.757v4a.75.75 0 0 0 1.5 0v-4h1.757l1.284 3.743a.75.75 0 0 0 1.419-.486l-1.117-3.257h3.157A2.25 2.25 0 0 0 21.5 15V6.75a2.25 2.25 0 0 0-2.25-2.25h-6.5V3.25Zm6.5 12.5H4.75A.75.75 0 0 1 4 15V6.75A.75.75 0 0 1 4.75 6h14.5a.75.75 0 0 1 .75.75V15a.75.75 0 0 1-.75.75Z"
    />
  </svg>
);
export default SvgBoardWriting3;
