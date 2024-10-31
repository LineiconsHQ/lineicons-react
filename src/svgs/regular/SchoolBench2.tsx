import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgSchoolBench2 = ({
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
      d="M2.87 6.01a.75.75 0 0 0-.87.74v12a.75.75 0 0 0 1.5 0v-7.369l7.75 1.257v6.112a.75.75 0 0 0 1.5 0V8.25a.75.75 0 0 0-.63-.74l-9.25-1.5Zm8.38 5.109L3.5 9.862v-2.23l7.75 1.256v2.23Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgSchoolBench2;
