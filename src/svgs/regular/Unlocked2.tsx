import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgUnlocked2 = ({
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
      d="M10.5 16a1.5 1.5 0 0 1 3 0v1.5a1.5 1.5 0 0 1-3 0V16Z"
    />
    <path
      fill="#323544"
      fillRule="evenodd"
      d="M12 2a5.25 5.25 0 0 0-5.25 5.25v1.875H5.5a2.25 2.25 0 0 0-2.25 2.25v5.875A4.75 4.75 0 0 0 8 22h8a4.75 4.75 0 0 0 4.75-4.75v-5.875a2.25 2.25 0 0 0-2.25-2.25H8.25V7.25a3.75 3.75 0 0 1 7.042-1.798.75.75 0 0 0 1.316-.72A5.249 5.249 0 0 0 12 2Zm-4.527 8.625a.826.826 0 0 0 .054 0H18.5a.75.75 0 0 1 .75.75v5.875A3.25 3.25 0 0 1 16 20.5H8a3.25 3.25 0 0 1-3.25-3.25v-5.875a.75.75 0 0 1 .75-.75h1.973Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgUnlocked2;
