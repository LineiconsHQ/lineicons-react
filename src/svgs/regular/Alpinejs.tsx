import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgAlpinejs = ({
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
      d="M17.555 7.413 22 11.838l-4.445 4.425-4.444-4.425 4.444-4.425ZM6.444 7.413l9.214 9.174H6.77L2 11.838l4.444-4.425Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgAlpinejs;
