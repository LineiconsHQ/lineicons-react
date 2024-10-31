import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgComment1Share = ({
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
      d="M13.368 8.124a.75.75 0 0 0-1.28.53v1.008a5.03 5.03 0 0 0-4.167 6.033.75.75 0 0 0 1.466 0 3.534 3.534 0 0 1 2.7-2.703v.872a.75.75 0 0 0 1.281.53l2.605-2.605a.75.75 0 0 0 0-1.06l-2.605-2.605Z"
    />
    <path
      fill="#323544"
      fillRule="evenodd"
      d="M2.5 12.096a9.5 9.5 0 1 1 9.5 9.5H3.25a.75.75 0 0 1-.53-1.28l2.053-2.054A9.465 9.465 0 0 1 2.5 12.096Zm9.5-8a8 8 0 0 0-5.657 13.657.75.75 0 0 1 0 1.06l-1.282 1.283H12a8 8 0 1 0 0-16Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgComment1Share;
