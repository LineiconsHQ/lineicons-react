import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgExpandArrow1 = ({
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
      d="M3.782 3.47a.748.748 0 0 0-.218.584V8a.75.75 0 0 0 1.5 0V5.813L11.253 12l-6.189 6.188V16a.75.75 0 0 0-1.5 0v4c0 .414.336.75.75.75h4a.75.75 0 0 0 0-1.5H6.125l6.188-6.188 6.189 6.188h-2.189a.75.75 0 0 0 0 1.5h4a.75.75 0 0 0 .75-.75v-4a.75.75 0 0 0-1.5 0v2.19L13.374 12l6.189-6.189V8a.75.75 0 0 0 1.5 0V4.047a.748.748 0 0 0-.75-.797s.001 0 0 0h-4a.75.75 0 1 0 0 1.5h2.19l-6.19 6.19-6.19-6.19h2.191a.75.75 0 0 0 0-1.5h-4a.748.748 0 0 0-.532.22Z"
    />
  </svg>
);
export default SvgExpandArrow1;
