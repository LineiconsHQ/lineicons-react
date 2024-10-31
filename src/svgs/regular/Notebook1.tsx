import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgNotebook1 = ({
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
      d="M6.75 2A2.25 2.25 0 0 0 4.5 4.25v2H3.25a.75.75 0 0 0 0 1.5H4.5v3.5H3.25a.75.75 0 0 0 0 1.5H4.5v3.5H3.25a.75.75 0 0 0 0 1.5H4.5v2A2.25 2.25 0 0 0 6.75 22h10.5a2.25 2.25 0 0 0 2.25-2.25V4.25A2.25 2.25 0 0 0 17.25 2H6.75ZM6 17.75h1.25a.75.75 0 0 0 0-1.5H6v-3.5h1.25a.75.75 0 0 0 0-1.5H6v-3.5h1.25a.75.75 0 0 0 0-1.5H6v-2a.75.75 0 0 1 .75-.75h10.5a.75.75 0 0 1 .75.75v15.5a.75.75 0 0 1-.75.75H6.75a.75.75 0 0 1-.75-.75v-2Z"
    />
  </svg>
);
export default SvgNotebook1;
