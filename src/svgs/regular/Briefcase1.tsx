import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgBriefcase1 = ({
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
      d="M10.023 3a2.25 2.25 0 0 0-2.25 2.25V6h-3a2.25 2.25 0 0 0-2.25 2.25v9a2.25 2.25 0 0 0 2.25 2.25h14.5a2.25 2.25 0 0 0 2.25-2.25v-9A2.25 2.25 0 0 0 19.274 6h-3v-.75A2.25 2.25 0 0 0 14.023 3h-4Zm4.75 3h-5.5v-.75a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 .75.75V6Zm-10 1.5h14.5a.75.75 0 0 1 .75.75v9a.75.75 0 0 1-.75.75h-14.5a.75.75 0 0 1-.75-.75v-9a.75.75 0 0 1 .75-.75Z"
    />
  </svg>
);
export default SvgBriefcase1;
