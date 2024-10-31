import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgMenuMeatballs2 = ({
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
      d="M6.319 14.248a2.248 2.248 0 1 1 0-4.496 2.248 2.248 0 0 1 0 4.496ZM5.57 12a.748.748 0 1 0 1.497 0 .748.748 0 0 0-1.497 0ZM12.315 14.248a2.248 2.248 0 1 1 0-4.496 2.248 2.248 0 0 1 0 4.496ZM11.567 12a.748.748 0 1 0 1.496 0 .748.748 0 0 0-1.496 0ZM16.064 12a2.248 2.248 0 1 0 4.496 0 2.248 2.248 0 0 0-4.496 0Zm2.248.748a.748.748 0 1 1 0-1.496.748.748 0 0 1 0 1.496Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgMenuMeatballs2;
