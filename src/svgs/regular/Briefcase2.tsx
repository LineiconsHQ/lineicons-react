import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgBriefcase2 = ({
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
      d="M7.773 5.25A2.25 2.25 0 0 1 10.023 3h4a2.25 2.25 0 0 1 2.25 2.25V6h3a2.25 2.25 0 0 1 2.25 2.25v9a2.25 2.25 0 0 1-2.25 2.25h-14.5a2.25 2.25 0 0 1-2.25-2.25v-9A2.25 2.25 0 0 1 4.773 6h3v-.75Zm7 0a.75.75 0 0 0-.75-.75h-4a.75.75 0 0 0-.75.75V6h5.5v-.75Zm-10 2.25a.75.75 0 0 0-.75.75v2.25h5.419c.28-.591.883-1 1.581-1h2c.699 0 1.301.409 1.582 1h5.419V8.25a.75.75 0 0 0-.75-.75h-14.5ZM9.442 12H4.023v5.25c0 .414.336.75.75.75h14.5a.75.75 0 0 0 .75-.75V12h-5.418c-.28.591-.883 1-1.582 1h-2a1.75 1.75 0 0 1-1.581-1Z"
    />
  </svg>
);
export default SvgBriefcase2;
