import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgRulerPen = ({
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
      d="M3.75 5.5A2.25 2.25 0 0 1 6 3.25h4.585a2.25 2.25 0 0 1 2.25 2.25v12.998a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V5.5ZM6 4.75a.75.75 0 0 0-.75.75v.95h2.989a.75.75 0 0 1 0 1.5H5.25v1.698h2.989a.75.75 0 1 1 0 1.5H5.25v1.7h2.989a.75.75 0 1 1 0 1.5H5.25v1.699h2.989a.75.75 0 0 1 0 1.5H5.25v.95c0 .415.336.75.75.75h4.585a.75.75 0 0 0 .75-.75V5.5a.75.75 0 0 0-.75-.75H6ZM14.335 16.581c0 .41.111.81.322 1.16l1.207 2.007c.874 1.453 2.982 1.453 3.856 0l1.207-2.007c.21-.35.322-.75.322-1.16V5.5A2.25 2.25 0 0 0 19 3.25h-2.414a2.25 2.25 0 0 0-2.25 2.25v11.081ZM18.999 4.75a.75.75 0 0 1 .75.75v1.7h-3.914V5.5a.75.75 0 0 1 .75-.75h2.414Zm.75 3.95v7.881a.75.75 0 0 1-.107.387l-1.207 2.007a.75.75 0 0 1-1.286 0l-1.207-2.007a.75.75 0 0 1-.107-.387V8.7h3.914Z"
    />
  </svg>
);
export default SvgRulerPen;
