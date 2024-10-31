import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgBeat = ({
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
      d="M13.407 3.25a.75.75 0 0 1 .719.617l2.438 13.554 1.892-4.377a.75.75 0 0 1 .689-.453h2.878a.75.75 0 1 1 0 1.5h-2.385l-2.683 6.207a.75.75 0 0 1-1.427-.165L13.29 7.693l-2.051 8.73a.75.75 0 0 1-1.393.178l-3.017-5.71-1.408 2.788a.75.75 0 0 1-.67.412H1.874a.75.75 0 0 1 0-1.5H4.29L6.144 8.92a.75.75 0 0 1 1.333-.012l2.76 5.223 2.42-10.302a.75.75 0 0 1 .75-.578Z"
    />
  </svg>
);
export default SvgBeat;
