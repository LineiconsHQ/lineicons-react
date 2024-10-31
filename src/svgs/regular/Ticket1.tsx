import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgTicket1 = ({
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
      fillRule="evenodd"
      d="M4.25 6a.75.75 0 0 0-.75.75v2.278a3.066 3.066 0 0 1 0 5.945v2.277c0 .414.336.75.75.75h15.5a.75.75 0 0 0 .75-.75v-2.277a3.066 3.066 0 0 1 0-5.945V6.75a.75.75 0 0 0-.75-.75H4.25ZM2 6.75A2.25 2.25 0 0 1 4.25 4.5h15.5A2.25 2.25 0 0 1 22 6.75v2.936a.75.75 0 0 1-.75.75 1.565 1.565 0 0 0 0 3.13.75.75 0 0 1 .75.75v2.934a2.25 2.25 0 0 1-2.25 2.25H4.25A2.25 2.25 0 0 1 2 17.25v-2.934a.75.75 0 0 1 .75-.75 1.565 1.565 0 0 0 0-3.13.75.75 0 0 1-.75-.75V6.75Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgTicket1;
