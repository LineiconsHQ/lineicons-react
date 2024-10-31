import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgPlug1 = ({
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
      d="M14.5 2.75a.75.75 0 0 1 1.5 0v2.983h3.5a.75.75 0 0 1 0 1.5H19v5a6.501 6.501 0 0 1-5.75 6.457v2.56a.75.75 0 0 1-1.5 0v-2.56A6.501 6.501 0 0 1 6 12.233v-5h-.5a.75.75 0 0 1 0-1.5H9V2.75a.75.75 0 0 1 1.5 0v2.983h4V2.75Zm-7 4.483v5a5 5 0 0 0 10 0v-5h-10Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgPlug1;
