import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgRefreshUser1 = ({
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
      d="M3.378 10.46a.75.75 0 0 1-.53-.918 9.5 9.5 0 0 1 18.058-.908l.76-1.352a.75.75 0 0 1 1.308.736L21.239 11.1a.75.75 0 0 1-1.021.286L17.137 9.65a.75.75 0 0 1 .736-1.307l1.675.943a7.999 7.999 0 0 0-15.252.644.75.75 0 0 1-.918.53ZM20.671 13.54a.75.75 0 0 1 .53.918 9.5 9.5 0 0 1-18.062.898l-.767 1.362a.75.75 0 1 1-1.307-.736l1.735-3.08a.75.75 0 0 1 1.022-.286l3.08 1.734a.75.75 0 0 1-.736 1.307l-1.662-.936a8 8 0 0 0 15.249-.651.75.75 0 0 1 .918-.53Z"
    />
    <path
      fill="#323544"
      d="M10.408 9.86a1.616 1.616 0 1 1 3.233 0 1.616 1.616 0 0 1-3.233 0Z"
    />
    <path
      fill="#323544"
      fillRule="evenodd"
      d="M10.81 12.087a2.238 2.238 0 0 0-2.238 2.238v.93c0 .415.336.75.75.75h5.405a.75.75 0 0 0 .75-.75v-.93a2.238 2.238 0 0 0-2.238-2.238H10.81Zm-.738 2.238c0-.407.33-.738.739-.738h2.428c.408 0 .738.33.738.738v.18h-3.905v-.18Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgRefreshUser1;
