import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgBookmarkCircle = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 25 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fill="#323544"
      fillRule="evenodd"
      d="M10.72 6.857a2.25 2.25 0 0 0-2.25 2.25v7.75a.75.75 0 0 0 1.174.619l2.431-1.668a.75.75 0 0 1 .849 0l2.431 1.668a.75.75 0 0 0 1.175-.619v-7.75a2.25 2.25 0 0 0-2.25-2.25h-3.56Zm-.75 2.25a.75.75 0 0 1 .75-.75h3.56a.75.75 0 0 1 .75.75v6.326l-1.257-.862a2.25 2.25 0 0 0-2.546 0l-1.257.862V9.107Z"
      clipRule="evenodd"
    />
    <path
      fill="#323544"
      fillRule="evenodd"
      d="M12.5 2.232c-5.523 0-10 4.478-10 10 0 5.523 4.477 10 10 10s10-4.477 10-10c0-5.522-4.477-10-10-10Zm-8.5 10a8.5 8.5 0 1 1 17 0 8.5 8.5 0 0 1-17 0Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgBookmarkCircle;
