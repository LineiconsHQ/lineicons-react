import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgCandyRound1 = ({
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
      d="M12 5.25a6.751 6.751 0 0 1 6.24 4.172l2.583-1.789A.75.75 0 0 1 22 8.25v7.5a.75.75 0 0 1-1.177.617l-2.583-1.789a6.751 6.751 0 0 1-12.479 0l-2.584 1.789A.75.75 0 0 1 2 15.75v-7.5a.75.75 0 0 1 1.177-.617l2.584 1.79a6.752 6.752 0 0 1 6.24-4.173Zm0 1.5a5.25 5.25 0 1 0 .002 10.5 5.25 5.25 0 0 0-.001-10.5Zm6.75 6.357 1.75 1.212V9.68l-1.75 1.212v2.214Zm-13.5 0v-2.214L3.5 9.681v4.638l1.75-1.212Z"
    />
  </svg>
);
export default SvgCandyRound1;
