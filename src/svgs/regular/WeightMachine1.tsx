import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgWeightMachine1 = ({
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
      d="M13.554 6.28a.75.75 0 1 0-1.06-1.06l-1 1a.75.75 0 1 0 1.06 1.06l1-1Z"
    />
    <path
      fill="#323544"
      fillRule="evenodd"
      d="M5.523 4.5H7.84A4.75 4.75 0 0 1 12.023 2a4.75 4.75 0 0 1 4.185 2.5h2.315a2.25 2.25 0 0 1 2.25 2.25V18.5a2.25 2.25 0 0 1-2.25 2.25h-13a2.25 2.25 0 0 1-2.25-2.25V6.75a2.25 2.25 0 0 1 2.25-2.25Zm1.75 2.25c0-.255.02-.506.06-.75h-1.81a.75.75 0 0 0-.75.75V18.5c0 .414.336.75.75.75h13a.75.75 0 0 0 .75-.75V6.75a.75.75 0 0 0-.75-.75h-1.808a4.75 4.75 0 1 1-9.441.75Zm4.75-3.25a3.25 3.25 0 1 0 0 6.5 3.25 3.25 0 0 0 0-6.5Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgWeightMachine1;
