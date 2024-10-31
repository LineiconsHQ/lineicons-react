import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgQuestionMarkCircle = ({
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
      d="M10.92 10.438a1.08 1.08 0 1 1 1.698.886c-.27.19-.598.442-.86.76-.267.322-.508.759-.508 1.3a.75.75 0 0 0 1.5 0c0-.075.03-.184.162-.343.135-.163.332-.325.566-.489a2.58 2.58 0 1 0-4.058-2.114.75.75 0 0 0 1.5 0ZM12 14.642a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Z"
    />
    <path
      fill="#323544"
      fillRule="evenodd"
      d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2ZM3.5 12a8.5 8.5 0 1 1 17 0 8.5 8.5 0 0 1-17 0Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgQuestionMarkCircle;
