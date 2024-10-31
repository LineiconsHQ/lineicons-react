import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgWheelchair1 = ({
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
      d="M2.625 2.75a.75.75 0 0 1 .75-.75h1.5a2.25 2.25 0 0 1 2.25 2.25v2.125h9a2.25 2.25 0 0 1 2.25 2.25v8.753c.508.18.933.537 1.199.997h1.676a.75.75 0 0 1 0 1.5h-1.406a2.25 2.25 0 1 1-2.969-2.497V13.13h-3.12a6.184 6.184 0 1 1-8.13-2.945V4.25a.75.75 0 0 0-.75-.75h-1.5a.75.75 0 0 1-.75-.75Zm4.5 6.973c.344-.06.698-.09 1.059-.09 1.8 0 3.421.77 4.552 1.997h4.139V8.625a.75.75 0 0 0-.75-.75h-9v1.848Zm1.059 1.41a4.684 4.684 0 1 0 0 9.368 4.684 4.684 0 0 0 0-9.368Zm8.691 8.367a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0Z"
    />
  </svg>
);
export default SvgWheelchair1;
