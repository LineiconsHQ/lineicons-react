import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgMouse2 = ({
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
      d="M4.5 9.867a7.5 7.5 0 1 1 15 0v5a7.5 7.5 0 0 1-15 0v-4.24a.796.796 0 0 1 0-.02v-.74Zm1.5 1.5v3.5a6 6 0 0 0 12 0v-3.5H6Zm5.25-1.5V3.914A6.001 6.001 0 0 0 6 9.867h5.25Zm1.5 0H18c0-3.06-2.29-5.584-5.25-5.953v5.953Z"
    />
  </svg>
);
export default SvgMouse2;
