import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgWise = ({
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
      d="M7.401 8.204 2 14.544h9.667l1.096-2.975H8.614l2.544-2.935v-.078L9.515 5.738h7.397L11.159 21.51h3.913L22 2.489H4.114L7.4 8.204Z"
    />
  </svg>
);
export default SvgWise;
