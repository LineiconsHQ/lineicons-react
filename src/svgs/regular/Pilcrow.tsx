import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgPilcrow = ({
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
      d="M10.583 4.75V20a.75.75 0 0 1-1.5 0v-9.028H7.611a3.861 3.861 0 1 1 0-7.722h12.89a.75.75 0 0 1 0 1.5h-4.585V20a.75.75 0 0 1-1.5 0V4.75h-3.833Zm-1.5 4.722V4.75H7.611a2.361 2.361 0 0 0 0 4.722h1.472Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgPilcrow;
