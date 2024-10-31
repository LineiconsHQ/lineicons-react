import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgCode1 = ({
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
      d="M15.058 4.163a.75.75 0 1 0-1.464-.326l-3.556 16a.75.75 0 1 0 1.465.326l3.555-16ZM7.83 7.47a.75.75 0 0 1 0 1.06L4.36 12l3.47 3.47a.75.75 0 1 1-1.061 1.06l-4-4a.75.75 0 0 1 0-1.06l4-4a.75.75 0 0 1 1.06 0ZM17.268 7.47a.75.75 0 0 0 0 1.06l3.47 3.47-3.47 3.47a.75.75 0 1 0 1.061 1.06l4-4a.75.75 0 0 0 0-1.06l-4-4a.75.75 0 0 0-1.06 0Z"
    />
  </svg>
);
export default SvgCode1;
