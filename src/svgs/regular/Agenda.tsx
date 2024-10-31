import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgAgenda = ({
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
      d="M4.523 4.25A2.25 2.25 0 0 1 6.773 2h10.5a2.25 2.25 0 0 1 2.25 2.25v15.5a2.25 2.25 0 0 1-2.25 2.25h-8.25v.75a.75.75 0 0 1-1.5 0V22h-.75a2.25 2.25 0 0 1-2.25-2.25V4.25Zm1.5 11.583v3.917c0 .414.336.75.75.75h6.75v-4.667h-7.5Zm7.5-1.5V9.667h-7.5v4.666h7.5Zm1.5 1.5V20.5h2.25a.75.75 0 0 0 .75-.75v-3.917h-3Zm3-1.5V9.667h-3v4.666h3Zm0-10.083a.75.75 0 0 0-.75-.75h-2.25v4.667h3V4.25Zm-4.5-.75h-6.75a.75.75 0 0 0-.75.75v3.917h7.5V3.5Z"
    />
  </svg>
);
export default SvgAgenda;
