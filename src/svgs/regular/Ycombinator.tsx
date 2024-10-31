import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgYcombinator = ({
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
      d="M3 3v18h18V3H3Zm9.61 10.22v3.716h-1.19v-3.717L8.283 7.384h1.422l2.323 4.732c.03-.203 2.38-4.703 2.38-4.703h1.307l-3.106 5.806Z"
    />
  </svg>
);
export default SvgYcombinator;
