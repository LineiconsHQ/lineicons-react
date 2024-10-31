import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgScissors1Vertical = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 25 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fill="#323544"
      d="M16.397 15.312a3.162 3.162 0 1 1-1.273.797l-2.163-3.088-2.145 3.064a3.162 3.162 0 1 1-1.283-.783l2.513-3.588L6.792 4.21a.75.75 0 1 1 1.229-.86l8.376 11.961Zm-7.821 1.342a1.662 1.662 0 1 0 0 3.323 1.662 1.662 0 0 0 0-3.323Zm7.15 1.662a1.662 1.662 0 1 0 3.324 0 1.662 1.662 0 0 0-3.323 0Z"
    />
    <path
      fill="#323544"
      d="m19.167 4.159-4.448 6.353-.916-1.308 4.135-5.906a.75.75 0 0 1 1.23.86Z"
    />
  </svg>
);
export default SvgScissors1Vertical;
