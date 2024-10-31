import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgTowerBroadcast1 = ({
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
      d="M19.557 3.791a.75.75 0 0 1 1.054.117c1.876 2.345 1.876 6.093 0 8.438a.75.75 0 0 1-1.171-.938c1.438-1.797 1.438-4.765 0-6.562a.75.75 0 0 1 .117-1.055ZM4.659 4.846a.75.75 0 0 0-1.172-.938c-1.876 2.345-1.876 6.093 0 8.438a.75.75 0 0 0 1.172-.938c-1.438-1.797-1.438-4.765 0-6.562ZM8.096 6.873a1.773 1.773 0 0 0 0 2.508.75.75 0 0 1-1.061 1.06 3.273 3.273 0 0 1 0-4.629.75.75 0 0 1 1.06 1.061ZM16.002 6.873a1.773 1.773 0 0 1 0 2.508.75.75 0 1 0 1.06 1.06 3.273 3.273 0 0 0 0-4.629.75.75 0 0 0-1.06 1.061ZM10.3 8.127c0-.967.784-1.75 1.75-1.75h.002a1.75 1.75 0 0 1 .747 3.333v10.667a.75.75 0 0 1-1.5 0V9.707a1.75 1.75 0 0 1-.998-1.58Z"
    />
  </svg>
);
export default SvgTowerBroadcast1;
