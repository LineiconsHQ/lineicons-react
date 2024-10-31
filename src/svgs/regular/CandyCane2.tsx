import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgCandyCane2 = ({
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
      fillRule="evenodd"
      d="M8.292 5.673a6.375 6.375 0 0 1 11.042 6.375l-1.938 3.356a2.25 2.25 0 0 1-3.897-2.25l1.938-3.356a1.875 1.875 0 0 0-3.248-1.875l-5.687 9.851a2.25 2.25 0 0 1-3.897-2.25l5.687-9.851Zm7.958-1.034a4.875 4.875 0 0 0-6.659 1.784l-5.687 9.851a.75.75 0 1 0 1.299.75l5.687-9.851a3.375 3.375 0 0 1 5.846 3.375l-1.938 3.356a.75.75 0 0 0 1.3.75l1.937-3.356a4.875 4.875 0 0 0-1.785-6.66Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgCandyCane2;
