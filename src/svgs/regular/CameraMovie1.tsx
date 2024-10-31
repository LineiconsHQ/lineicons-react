import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgCameraMovie1 = ({
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
      d="M15.24 7a3.25 3.25 0 1 0-5.535-3.408A2.75 2.75 0 0 0 5.55 7h-.801A2.25 2.25 0 0 0 2.5 9.25v8a2.25 2.25 0 0 0 2.25 2.25h11.5a2.25 2.25 0 0 0 2.25-2.25v-.328l2.066 1.35a1.25 1.25 0 0 0 1.934-1.046V9.274a1.25 1.25 0 0 0-1.934-1.046L18.5 9.578V9.25A2.25 2.25 0 0 0 16.25 7h-1.01Zm-4.49-1.75a1.75 1.75 0 1 1 3.5 0 1.75 1.75 0 0 1-3.5 0Zm7.75 6.12L21 9.735v7.028l-2.5-1.633v-3.762ZM9.25 5.75a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0ZM4.75 8.5h11.5a.75.75 0 0 1 .75.75v8a.75.75 0 0 1-.75.75H4.75a.75.75 0 0 1-.75-.75v-8a.75.75 0 0 1 .75-.75Z"
    />
  </svg>
);
export default SvgCameraMovie1;
