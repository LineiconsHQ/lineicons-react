import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgXmarkCircle = ({
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
      d="M8.784 8.784a.75.75 0 0 0 0 1.06L10.939 12l-2.155 2.155a.75.75 0 0 0 1.06 1.06L12 13.062l2.156 2.155a.75.75 0 0 0 1.06-1.06L13.06 12l2.155-2.155a.75.75 0 1 0-1.06-1.06L12 10.938 9.843 8.784a.75.75 0 0 0-1.06 0Z"
    />
    <path
      fill="#323544"
      fillRule="evenodd"
      d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2ZM3.5 12a8.5 8.5 0 1 1 17 0 8.5 8.5 0 0 1-17 0Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgXmarkCircle;
