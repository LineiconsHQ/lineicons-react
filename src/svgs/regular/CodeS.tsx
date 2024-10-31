import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgCodeS = ({
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
      d="M12.276 7.249a2.25 2.25 0 0 0-2.25 2.25v1a2.25 2.25 0 0 0 2.25 2.25h.545a.75.75 0 0 1 .75.75v1a.75.75 0 0 1-.75.75h-2.045a.75.75 0 0 0 0 1.5h2.045a2.25 2.25 0 0 0 2.25-2.25v-1a2.25 2.25 0 0 0-2.25-2.25h-.545a.75.75 0 0 1-.75-.75v-1a.75.75 0 0 1 .75-.75h2.045a.75.75 0 1 0 0-1.5h-2.045ZM7.83 7.469a.75.75 0 0 1 0 1.06l-2.763 2.763a1 1 0 0 0 0 1.414l2.762 2.763a.75.75 0 1 1-1.06 1.06l-4-4a.75.75 0 0 1 0-1.06l4-4a.75.75 0 0 1 1.06 0ZM17.268 7.469a.75.75 0 0 0 0 1.06l2.763 2.763a1 1 0 0 1 0 1.414L17.27 15.47a.75.75 0 1 0 1.06 1.06l4-4a.75.75 0 0 0 0-1.06l-4-4a.75.75 0 0 0-1.06 0Z"
    />
  </svg>
);
export default SvgCodeS;
