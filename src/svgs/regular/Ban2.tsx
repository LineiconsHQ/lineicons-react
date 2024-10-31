import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgBan2 = ({
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
      d="M12 2.001c-5.523 0-10 4.477-10 10s4.477 10 10 10 10-4.477 10-10-4.477-10-10-10Zm-8.5 10a8.5 8.5 0 0 1 13.957-6.517L5.483 17.458A8.466 8.466 0 0 1 3.5 12.001Zm3.044 6.518L18.518 6.545A8.5 8.5 0 0 1 6.544 18.519Z"
    />
  </svg>
);
export default SvgBan2;
