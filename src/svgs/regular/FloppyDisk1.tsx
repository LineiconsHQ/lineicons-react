import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgFloppyDisk1 = ({
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
      d="M5.5 3.25A2.25 2.25 0 0 0 3.25 5.5v13a2.25 2.25 0 0 0 2.25 2.25h13a2.25 2.25 0 0 0 2.25-2.25V8.614a2.25 2.25 0 0 0-.66-1.592l-3.12-3.114a2.25 2.25 0 0 0-1.59-.658H5.5Zm0 1.5h.75v.75A2.25 2.25 0 0 0 8.5 7.75h3a2.25 2.25 0 0 0 2.25-2.25v-.75h1.63a.75.75 0 0 1 .53.22l3.12 3.113c.14.141.22.332.22.531V18.5a.75.75 0 0 1-.75.75h-1.75V15.5a2.25 2.25 0 0 0-2.25-2.25h-5a2.25 2.25 0 0 0-2.25 2.25v3.75H5.5a.75.75 0 0 1-.75-.75v-13a.75.75 0 0 1 .75-.75Zm2.25 0h4.5v.75a.75.75 0 0 1-.75.75h-3a.75.75 0 0 1-.75-.75v-.75Zm7.5 14.5h-6.5V15.5a.75.75 0 0 1 .75-.75h5a.75.75 0 0 1 .75.75v3.75Z"
    />
  </svg>
);
export default SvgFloppyDisk1;
