import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgStethoscope1 = ({
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
      d="M6.773 3.5h.25a.75.75 0 0 0 0-1.5h-.25a2.25 2.25 0 0 0-2.25 2.25v2.5a5.751 5.751 0 0 0 5 5.701V16.5a5 5 0 1 0 10 0v-1.515a2.501 2.501 0 1 0-1.5 0V16.5a3.5 3.5 0 1 1-7 0v-4.049c2.822-.367 5-2.78 5-5.701v-2.5A2.25 2.25 0 0 0 13.773 2h-.25a.75.75 0 0 0 0 1.5h.25a.75.75 0 0 1 .75.75v2.5a4.25 4.25 0 0 1-8.5 0v-2.5a.75.75 0 0 1 .75-.75Zm11 9.1a1 1 0 1 1 2 0 1 1 0 0 1-2 0Z"
    />
  </svg>
);
export default SvgStethoscope1;
