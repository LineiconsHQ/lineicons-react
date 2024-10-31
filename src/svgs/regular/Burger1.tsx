import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgBurger1 = ({
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
      d="M8.5 3.75A5.25 5.25 0 0 0 3.25 9v1.484a2.25 2.25 0 0 0 0 4.032V18a2.25 2.25 0 0 0 2.25 2.25h13A2.25 2.25 0 0 0 20.75 18v-3.484a2.25 2.25 0 0 0 0-4.032V9c0-2.9-2.35-5.25-5.25-5.25h-7Zm11.25 8a.75.75 0 0 1 0 1.5H4.25a.75.75 0 0 1 0-1.5h15.5Zm-.5-1.5H4.75V9A3.75 3.75 0 0 1 8.5 5.25h7A3.75 3.75 0 0 1 19.25 9v1.25Zm-14.5 4.5h14.5V18a.75.75 0 0 1-.75.75h-13a.75.75 0 0 1-.75-.75v-3.25Z"
    />
  </svg>
);
export default SvgBurger1;
