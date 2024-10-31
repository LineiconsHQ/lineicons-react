import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgChevronUpCircle = ({
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
      d="M15.048 13.78a.75.75 0 0 0 1.06-1.06l-3.25-3.25a.75.75 0 0 0-1.06 0l-3.25 3.25a.75.75 0 1 0 1.06 1.06l2.72-2.72 2.72 2.72Z"
    />
    <path
      fill="#323544"
      fillRule="evenodd"
      d="M12.328 2c-5.523 0-10 4.477-10 10s4.477 10 10 10 10-4.477 10-10-4.477-10-10-10Zm-8.5 10a8.5 8.5 0 1 1 17 0 8.5 8.5 0 0 1-17 0Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgChevronUpCircle;
