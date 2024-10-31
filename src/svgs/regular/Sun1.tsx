import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgSun1 = ({
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
      d="M12.023 2.5a.75.75 0 0 1 .75.75v1.5a.75.75 0 1 1-1.5 0v-1.5a.75.75 0 0 1 .75-.75Z"
    />
    <path
      fill="#323544"
      fillRule="evenodd"
      d="M6.523 12.5a5.5 5.5 0 1 1 11 0 5.5 5.5 0 0 1-11 0Zm5.5-4a4 4 0 1 0 0 8 4 4 0 0 0 0-8Z"
      clipRule="evenodd"
    />
    <path
      fill="#323544"
      d="M19.095 6.491a.75.75 0 1 0-1.06-1.06l-1.061 1.06a.75.75 0 0 0 1.06 1.06l1.06-1.06ZM22.023 12.5a.75.75 0 0 1-.75.75h-1.5a.75.75 0 0 1 0-1.5h1.5a.75.75 0 0 1 .75.75ZM18.034 19.57a.75.75 0 0 0 1.06-1.061l-1.06-1.06a.75.75 0 1 0-1.06 1.06l1.06 1.06ZM12.023 19.5a.75.75 0 0 1 .75.75v1.5a.75.75 0 1 1-1.5 0v-1.5a.75.75 0 0 1 .75-.75ZM7.073 18.515a.75.75 0 0 0-1.06-1.061l-1.061 1.06a.75.75 0 0 0 1.06 1.061l1.061-1.06ZM5.023 12.5a.75.75 0 0 1-.75.75h-1.5a.75.75 0 0 1 0-1.5h1.5a.75.75 0 0 1 .75.75ZM6.013 7.546a.75.75 0 0 0 1.06-1.06l-1.06-1.061a.75.75 0 0 0-1.061 1.06l1.06 1.061Z"
    />
  </svg>
);
export default SvgSun1;
