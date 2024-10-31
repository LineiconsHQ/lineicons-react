import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgMonitorCode = ({
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
      d="M15.03 4.343a.75.75 0 0 1 0 1.06l-1.97 1.972 1.97 1.972a.75.75 0 0 1-1.06 1.06l-2.5-2.502a.75.75 0 0 1 0-1.06l2.5-2.502a.75.75 0 0 1 1.06 0ZM18.22 4.343a.75.75 0 0 0 0 1.06l1.97 1.972-1.97 1.972a.75.75 0 0 0 1.06 1.06l2.5-2.502a.75.75 0 0 0 0-1.06l-2.5-2.502a.75.75 0 0 0-1.06 0Z"
    />
    <path
      fill="#323544"
      d="M22 15.344v-3.682a6.914 6.914 0 0 1-1.5 1.393v2.289a.75.75 0 0 1-.75.75H4.25a.75.75 0 0 1-.75-.75V6.75A.75.75 0 0 1 4.25 6h5.638a6.82 6.82 0 0 1 .49-1.5H4.25A2.25 2.25 0 0 0 2 6.75v8.594a2.25 2.25 0 0 0 2.25 2.25h7v1.656H9a.75.75 0 0 0 0 1.5h6a.75.75 0 0 0 0-1.5h-2.25v-1.656h7a2.25 2.25 0 0 0 2.25-2.25Z"
    />
  </svg>
);
export default SvgMonitorCode;
