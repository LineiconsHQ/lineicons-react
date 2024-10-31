import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgShare1 = ({
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
      d="M14.275 2.286a.75.75 0 0 1 .818.162l7 7a.75.75 0 0 1 0 1.06l-7 7a.75.75 0 0 1-1.28-.53V13.18c-4.822.333-8.77 3.845-9.76 8.456a.75.75 0 0 1-1.467 0 12.295 12.295 0 0 1-.273-2.584c0-6.513 5.083-11.84 11.5-12.227V2.979a.75.75 0 0 1 .462-.693Zm1.037 2.503v2.763a.75.75 0 0 1-.75.75c-5.554 0-10.125 4.213-10.69 9.619a12.245 12.245 0 0 1 10.69-6.266.75.75 0 0 1 .75.75v2.763l5.19-5.19-5.19-5.189Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgShare1;
