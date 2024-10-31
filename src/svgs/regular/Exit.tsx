import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgExit = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 25 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fill="#323544"
      d="M11.578 2.5a2.25 2.25 0 0 0-2.25 2.25v1.878c.12.081.235.175.342.282l1.158 1.159V4.75a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 .75.75v15.5a.75.75 0 0 1-.75.75h-6a.75.75 0 0 1-.75-.75v-3.319l-1.158 1.16c-.107.106-.221.2-.342.28v1.879a2.25 2.25 0 0 0 2.25 2.25h6a2.25 2.25 0 0 0 2.25-2.25V4.75a2.25 2.25 0 0 0-2.25-2.25h-6Z"
    />
    <path
      fill="#323544"
      d="M3.578 12.5c0 .226.1.428.258.566l3.961 3.964a.75.75 0 1 0 1.061-1.06L6.14 13.25h5.938a.75.75 0 0 0 0-1.5H6.14l2.718-2.72a.75.75 0 0 0-1.06-1.06l-3.964 3.966a.748.748 0 0 0-.256.564Z"
    />
  </svg>
);
export default SvgExit;
