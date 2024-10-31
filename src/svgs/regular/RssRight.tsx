import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgRssRight = ({
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
      d="M18.67 18.46c0-6.81-5.522-12.331-12.332-12.331a.75.75 0 0 1 0-1.5c7.638 0 13.831 6.193 13.831 13.831a.75.75 0 0 1-1.5 0Z"
    />
    <path
      fill="#323544"
      d="M6.174 10.065a8.558 8.558 0 0 1 8.558 8.558.75.75 0 0 0 1.5 0c0-5.555-4.503-10.058-10.058-10.058a.75.75 0 1 0 0 1.5ZM6.224 18.574a1 1 0 1 0 1.414-1.414 1 1 0 0 0-1.414 1.414Z"
    />
    <path
      fill="#323544"
      d="M6.276 14a4.785 4.785 0 0 1 4.52 4.52.75.75 0 0 0 1.498-.08 6.285 6.285 0 0 0-5.938-5.937.75.75 0 1 0-.08 1.498Z"
    />
  </svg>
);
export default SvgRssRight;
