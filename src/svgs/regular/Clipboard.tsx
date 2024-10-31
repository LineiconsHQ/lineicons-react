import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgClipboard = ({
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
      d="M16.186 3.75A2.25 2.25 0 0 0 13.992 2h-3.937A2.25 2.25 0 0 0 7.86 3.75H6.773A2.25 2.25 0 0 0 4.523 6v13.75A2.25 2.25 0 0 0 6.773 22h10.5a2.25 2.25 0 0 0 2.25-2.25V6a2.25 2.25 0 0 0-2.25-2.25h-1.087Zm-6.881.5a.75.75 0 0 1 .75-.75h3.937a.75.75 0 0 1 .75.75v.469a.75.75 0 0 1-.75.75h-3.937a.75.75 0 0 1-.75-.75V4.25Zm-1.437 1a2.25 2.25 0 0 0 2.187 1.719h3.937A2.25 2.25 0 0 0 16.18 5.25h1.094a.75.75 0 0 1 .75.75v13.75a.75.75 0 0 1-.75.75h-10.5a.75.75 0 0 1-.75-.75V6a.75.75 0 0 1 .75-.75h1.095Z"
    />
  </svg>
);
export default SvgClipboard;
