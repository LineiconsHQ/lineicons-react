import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgShiftLeft = ({
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
      d="M5.078 4.5a.75.75 0 0 0-1.5 0v16a.75.75 0 0 0 1.5 0v-16ZM7.578 12.502c0-.216.091-.41.238-.548l4.606-4.61a.75.75 0 0 1 1.061 1.061l-3.344 3.347h10.19a.75.75 0 1 1 0 1.5H10.142l3.34 3.343a.75.75 0 1 1-1.06 1.06L7.85 13.08a.748.748 0 0 1-.272-.578Z"
    />
  </svg>
);
export default SvgShiftLeft;
