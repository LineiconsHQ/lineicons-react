import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgCloud2 = ({
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
      fillRule="evenodd"
      d="M6.387 9.984a5.615 5.615 0 0 1 10.918-1.715 5.658 5.658 0 0 1-.961 11.231H6.766a4.766 4.766 0 0 1-.38-9.516ZM12 6a4.115 4.115 0 0 0-4.116 4.115v.604a.75.75 0 0 1-.75.75h-.37a3.266 3.266 0 1 0 0 6.531h9.579a4.156 4.156 0 0 0 .324-8.3.75.75 0 0 1-.67-.57A4.117 4.117 0 0 0 12 6Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgCloud2;
