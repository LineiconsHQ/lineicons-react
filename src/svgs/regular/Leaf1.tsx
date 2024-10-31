import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgLeaf1 = ({
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
      fillRule="evenodd"
      d="M6.523 2a6.249 6.249 0 0 1 5.5 3.279A6.249 6.249 0 0 1 17.523 2h2.5a.75.75 0 0 1 .75.75v2.5a6.25 6.25 0 0 1-6.25 6.25h-1.75v9.75a.75.75 0 1 1-1.5 0V11.5h-1.75a6.25 6.25 0 0 1-6.25-6.25v-2.5a.75.75 0 0 1 .75-.75h2.5Zm4.75 8V8.25a4.75 4.75 0 0 0-4.75-4.75h-1.75v1.75A4.75 4.75 0 0 0 9.523 10h1.75Zm1.5 0h1.75a4.75 4.75 0 0 0 4.75-4.75V3.5h-1.75a4.75 4.75 0 0 0-4.75 4.75V10Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgLeaf1;