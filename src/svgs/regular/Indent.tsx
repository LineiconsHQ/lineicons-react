import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgIndent = ({
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
      d="M3.75 4a.75.75 0 0 1 .75-.75h16a.75.75 0 0 1 0 1.5h-16A.75.75 0 0 1 3.75 4ZM12.464 9.334a.75.75 0 0 1 .75-.75H20.5a.75.75 0 1 1 0 1.5h-7.286a.75.75 0 0 1-.75-.75ZM13.214 13.916a.75.75 0 1 0 0 1.5H20.5a.75.75 0 1 0 0-1.5h-7.286ZM3.75 20a.75.75 0 0 1 .75-.75h16a.75.75 0 0 1 0 1.5h-16a.75.75 0 0 1-.75-.75ZM5.25 9.317l.015-.008 4.198 2.684-4.212-2.676Z"
    />
    <path
      fill="#323544"
      fillRule="evenodd"
      d="M3.75 9.323c0-1.196 1.321-1.92 2.329-1.275l4.187 2.677c.931.595.931 1.955 0 2.55L6.08 15.952c-1.008.644-2.329-.08-2.329-1.275V9.323Zm1.5-.006V14.683c.001.001.003.004.007.006a.025.025 0 0 0 .008.003l.006-.004 4.187-2.677h.002l.002-.002.001-.001.001-.008a.018.018 0 0 0 0-.008h-.002l-.002-.002-.002-.001L5.271 9.31a.044.044 0 0 0-.006-.002l-.008.002c-.004.002-.006.005-.006.006Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgIndent;
