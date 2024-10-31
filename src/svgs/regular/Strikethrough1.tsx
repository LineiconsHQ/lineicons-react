import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgStrikethrough1 = ({
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
      d="M5 7.05A5.05 5.05 0 0 1 10.05 2h8.45a.75.75 0 0 1 0 1.5h-8.45a3.55 3.55 0 0 0-2.306 6.25H5.782A5.038 5.038 0 0 1 5 7.05ZM17.256 14.25h1.962A5.05 5.05 0 0 1 14.95 22H6.5a.75.75 0 0 1 0-1.5h8.45a3.55 3.55 0 0 0 2.306-6.25ZM5.75 11.25a.75.75 0 0 0 0 1.5h13.5a.75.75 0 0 0 0-1.5H5.75Z"
    />
  </svg>
);
export default SvgStrikethrough1;
