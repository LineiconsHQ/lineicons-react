import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgOutdent = ({
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
      d="M3.75 4a.75.75 0 0 1 .75-.75h16a.75.75 0 0 1 0 1.5h-16A.75.75 0 0 1 3.75 4ZM12.464 9.334a.75.75 0 0 1 .75-.75H20.5a.75.75 0 1 1 0 1.5h-7.286a.75.75 0 0 1-.75-.75ZM13.214 13.916a.75.75 0 1 0 0 1.5H20.5a.75.75 0 1 0 0-1.5h-7.286ZM3.75 20a.75.75 0 0 1 .75-.75h16a.75.75 0 0 1 0 1.5h-16a.75.75 0 0 1-.75-.75ZM9.45 9.308l.014.009-4.213 2.675L9.45 9.308Z"
    />
    <path
      fill="#323544"
      fillRule="evenodd"
      d="M8.636 8.048c1.007-.644 2.328.08 2.328 1.275v5.354c0 1.196-1.321 1.92-2.328 1.275l-4.188-2.677a1.513 1.513 0 0 1 0-2.55l4.188-2.677Zm.828 1.275v-.006c-.001-.001-.003-.004-.007-.006a.024.024 0 0 0-.007-.003l-.006.003-4.188 2.678-.004.002v.001L5.25 12l.001.008h.001l.002.002.002.001 4.188 2.678a.037.037 0 0 0 .005.002c.001 0 .005 0 .008-.002a.021.021 0 0 0 .007-.005.039.039 0 0 0 0-.007V9.323Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgOutdent;
