import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgArrowAngularTopLeft = ({
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
      d="M5.782 5.992a.748.748 0 0 1 .549-.239l8.995-.003a.75.75 0 1 1 0 1.5l-7.19.002 10.72 10.72a.75.75 0 0 1-1.062 1.06L7.081 8.318l-.003 7.177a.75.75 0 0 1-1.5-.001l.003-8.93a.748.748 0 0 1 .2-.572Z"
    />
  </svg>
);
export default SvgArrowAngularTopLeft;
