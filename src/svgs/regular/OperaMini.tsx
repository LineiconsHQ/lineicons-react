import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgOperaMini = ({
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
      d="M14.645 3.323c-6.87 0-10.193 9.032-5.968 14.322 1.452 1.871 3.549 3.032 5.968 3.032 1.452 0 2.871-.451 4-1.225C16.903 21 14.548 22 12 22h-.452C6.226 21.774 2 17.355 2 12 2 6.452 6.452 2 12 2h.032c2.549 0 4.871.968 6.645 2.548a7.25 7.25 0 0 0-4.032-1.225Zm4.097 16.032c-1.645 1-3.645.968-5.323-.226 2.258-.87 3.968-3.677 3.968-7.129 0-3.42-1.645-6.258-3.968-7.129 1.678-1.194 3.678-1.226 5.355-.194 4.323 3.968 4.29 10.742-.032 14.678Z"
    />
  </svg>
);
export default SvgOperaMini;
