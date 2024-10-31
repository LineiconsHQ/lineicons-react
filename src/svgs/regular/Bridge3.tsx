import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgBridge3 = ({
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
      fillRule="evenodd"
      d="M4.33 12.871a7.78 7.78 0 0 1 15.34 0H22a.75.75 0 0 1 .25 1.457l-.455.161a3 3 0 0 0-1.893 2.026l-.153.55a.75.75 0 0 1-1.472-.2V14.37H5.723v2.493a.75.75 0 0 1-1.473.2l-.152-.549a3 3 0 0 0-1.892-2.026l-.456-.16A.75.75 0 0 1 2 12.87h2.33Zm1.526 0h2.15V9.32a6.275 6.275 0 0 0-2.15 3.552ZM9.506 8.4v4.471h1.744V7.93a6.235 6.235 0 0 0-1.744.47Zm3.244-.47v4.941h1.744V8.4a6.235 6.235 0 0 0-1.744-.47Zm3.244 1.39v3.551h2.15a6.275 6.275 0 0 0-2.15-3.551Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgBridge3;
