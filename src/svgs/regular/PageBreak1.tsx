import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgPageBreak1 = ({
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
      d="M8.781 9.749a2.25 2.25 0 0 1-2.25-2.25v-3.28a2.25 2.25 0 0 1 2.25-2.25h7.5a2.25 2.25 0 0 1 2.25 2.25v3.28a2.25 2.25 0 0 1-2.25 2.25h-7.5Zm-.75-2.25c0 .414.336.75.75.75h7.5a.75.75 0 0 0 .75-.75v-3.28a.75.75 0 0 0-.75-.75h-7.5a.75.75 0 0 0-.75.75v3.28ZM8.781 22.03a2.25 2.25 0 0 1-2.25-2.25V16.5a2.25 2.25 0 0 1 2.25-2.25h7.5a2.25 2.25 0 0 1 2.25 2.25v3.28a2.25 2.25 0 0 1-2.25 2.25h-7.5Zm-.75-2.25c0 .415.336.75.75.75h7.5a.75.75 0 0 0 .75-.75V16.5a.75.75 0 0 0-.75-.75h-7.5a.75.75 0 0 0-.75.75v3.28Z"
      clipRule="evenodd"
    />
    <path
      fill="#323544"
      d="M5.781 11.28a.75.75 0 0 0 0 1.5H7.47a.75.75 0 0 0 0-1.5H5.78ZM10.844 11.28a.75.75 0 1 0 0 1.5h3.375a.75.75 0 0 0 0-1.5h-3.375ZM17.594 11.28a.75.75 0 1 0 0 1.5h1.687a.75.75 0 1 0 0-1.5h-1.687Z"
    />
  </svg>
);
export default SvgPageBreak1;
