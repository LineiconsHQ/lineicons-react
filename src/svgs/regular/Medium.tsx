import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgMedium = ({
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
      d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 5.519 4.48 10 10 10s10-4.481 10-10Zm-8.996 0c0 2.458-1.98 4.45-4.42 4.45-2.442 0-4.421-1.992-4.421-4.45s1.98-4.451 4.42-4.451c2.442 0 4.421 1.993 4.421 4.45Zm4.85 0c0 2.314-.99 4.19-2.21 4.19-1.222 0-2.211-1.876-2.211-4.19 0-2.314.99-4.19 2.21-4.19s2.21 1.875 2.21 4.19Zm1.983 0c0 2.072-.348 3.754-.777 3.754-.43 0-.778-1.681-.778-3.754s.348-3.754.778-3.754c.429 0 .777 1.68.777 3.754Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgMedium;
