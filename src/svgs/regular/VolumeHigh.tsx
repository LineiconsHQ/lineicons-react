import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgVolumeHigh = ({
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
      d="M13.75 6.34c0-1.941-2.294-2.971-3.745-1.681L6.81 7.5H4.75A2.25 2.25 0 0 0 2.5 9.75v4.5a2.25 2.25 0 0 0 2.25 2.25h2.059l3.196 2.841c1.451 1.29 3.745.26 3.745-1.681V6.34Zm-2.748-.56a.75.75 0 0 1 1.248.56v11.32a.75.75 0 0 1-1.248.56l-3.41-3.03a.75.75 0 0 0-.498-.19H4.75a.75.75 0 0 1-.75-.75v-4.5A.75.75 0 0 1 4.75 9h2.344a.75.75 0 0 0 .498-.19l3.41-3.03Z"
      clipRule="evenodd"
    />
    <path
      fill="#323544"
      d="M17.077 8.837c1.561 1.739 1.561 4.588 0 6.327a.75.75 0 1 0 1.116 1.002c2.073-2.309 2.073-6.023 0-8.332a.75.75 0 0 0-1.116 1.003Z"
    />
    <path
      fill="#323544"
      d="M19.266 16.886c2.312-2.687 2.312-7.084 0-9.771a.75.75 0 1 1 1.137-.979c2.796 3.25 2.796 8.479 0 11.729a.75.75 0 0 1-1.137-.979ZM14.985 10.653c.688.765.688 1.93 0 2.695a.75.75 0 0 0 1.116 1.003 3.517 3.517 0 0 0 0-4.7.75.75 0 0 0-1.116 1.002Z"
    />
  </svg>
);
export default SvgVolumeHigh;
