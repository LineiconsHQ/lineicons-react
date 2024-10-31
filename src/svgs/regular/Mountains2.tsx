import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgMountains2 = ({
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
      d="M7.91 5.688c.848-1.584 3.12-1.584 3.967 0l3.204 5.986.23-.485c.815-1.71 3.249-1.71 4.063 0l2.427 5.095c.711 1.493-.377 3.217-2.031 3.217H4.273c-1.7 0-2.786-1.813-1.984-3.312l5.62-10.5Zm4.644 12.313h7.216a.75.75 0 0 0 .677-1.072l-2.427-5.095a.75.75 0 0 0-1.354 0l-.87 1.824a.75.75 0 0 1-1.337.032l-3.904-7.294a.75.75 0 0 0-1.323 0l-5.62 10.501a.75.75 0 0 0 .66 1.104h8.282Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgMountains2;
