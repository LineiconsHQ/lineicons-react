import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgSlice2 = ({
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
      d="M20.802 4.221a2.166 2.166 0 0 0-3.063 0L2.242 19.72l.001.001A.75.75 0 0 0 2.773 21h8.125a2.25 2.25 0 0 0 2.25-2.25v-3.812l7.654-7.654a2.166 2.166 0 0 0 0-3.063Zm-7.654 8.596v-1.883L18.8 5.282a.665.665 0 1 1 .941.941l-6.593 6.593ZM4.584 19.5l7.064-7.064v6.314a.75.75 0 0 1-.75.75H4.584Z"
    />
  </svg>
);
export default SvgSlice2;
