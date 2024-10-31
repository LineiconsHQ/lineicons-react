import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgCapsule1 = ({
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
      d="M6.398 7.625a5.625 5.625 0 1 1 11.25 0v8.75a5.625 5.625 0 0 1-11.25 0v-8.75ZM12.023 3.5a4.125 4.125 0 0 0-4.125 4.125v3.625h8.25V7.625A4.125 4.125 0 0 0 12.023 3.5Zm4.125 9.25h-8.25v3.625a4.125 4.125 0 1 0 8.25 0V12.75Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgCapsule1;
