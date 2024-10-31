import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgVuejs = ({
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
      d="M17.4 3.442h-3.262l-2.126 3.543-2.135-3.542-2.369-.001H2l10.026 17.116L22 3.442h-4.6Zm-5.378 13.566L5.125 5.232h2.528l4.375 7.528 4.34-7.528h2.516l-6.862 11.776Z"
    />
  </svg>
);
export default SvgVuejs;
