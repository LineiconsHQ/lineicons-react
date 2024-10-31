import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgVolumeOff = ({
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
      fillRule="evenodd"
      d="M10.005 4.659c1.451-1.29 3.745-.26 3.745 1.681v11.32c0 1.941-2.294 2.971-3.745 1.681l-3.196-2.84H4.75a2.25 2.25 0 0 1-2.25-2.25v-4.5A2.25 2.25 0 0 1 4.75 7.5h2.059l3.196-2.842ZM12.25 6.34a.75.75 0 0 0-1.248-.56l-3.41 3.03a.75.75 0 0 1-.498.19H4.75a.75.75 0 0 0-.75.75v4.5c0 .414.336.75.75.75h2.344a.75.75 0 0 1 .498.19l3.41 3.03a.75.75 0 0 0 1.248-.56V6.34Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgVolumeOff;
