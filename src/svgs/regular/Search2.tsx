import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgSearch2 = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fill="#323544"
      d="M11.25 5.75a.75.75 0 0 0 0 1.5A4.75 4.75 0 0 1 16 12a.75.75 0 0 0 1.5 0 6.25 6.25 0 0 0-6.251-6.25Z"
    />
    <path
      fill="#323544"
      fillRule="evenodd"
      d="M2 11.999C2 6.89 6.142 2.75 11.25 2.75s9.25 4.14 9.25 9.248a9.21 9.21 0 0 1-2.202 5.99l3.481 3.48a.75.75 0 1 1-1.06 1.061l-3.482-3.481a9.215 9.215 0 0 1-5.987 2.198c-5.108 0-9.25-4.14-9.25-9.248Zm9.25-7.748a7.749 7.749 0 1 0 0 15.496 7.749 7.749 0 1 0 0-15.496Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgSearch2;