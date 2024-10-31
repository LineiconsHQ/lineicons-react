import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgSchoolBench1 = ({
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
      d="M22 5.25a.75.75 0 0 0-1.5 0v6h-4a2.25 2.25 0 0 0-2.25 2.25v5.25a.75.75 0 0 0 1.5 0V13.5a.75.75 0 0 1 .75-.75h4v6a.75.75 0 0 0 1.5 0V5.25Z"
    />
    <path
      fill="#323544"
      fillRule="evenodd"
      d="M2.75 6a.75.75 0 0 0-.75.75v12a.75.75 0 0 0 1.5 0v-7.5h7.75v7.5a.75.75 0 0 0 1.5 0v-12A.75.75 0 0 0 12 6H2.75Zm8.5 3.75H3.5V7.5h7.75v2.25Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgSchoolBench1;
