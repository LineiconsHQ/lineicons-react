import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgSpinner2Sacle = ({
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
      d="M13.75 3.748a1.75 1.75 0 1 0-3.5 0 1.75 1.75 0 0 0 3.5 0ZM18.366 6.694a.75.75 0 1 0-1.06-1.06.75.75 0 0 0 1.06 1.06ZM21.148 12a.895.895 0 1 1-1.79 0 .895.895 0 0 1 1.79 0ZM17.1 18.571a1.04 1.04 0 1 0 1.471-1.47 1.04 1.04 0 0 0-1.47 1.47ZM12 19.067a1.185 1.185 0 1 1 0 2.37 1.185 1.185 0 0 1 0-2.37ZM7.106 18.776a1.33 1.33 0 1 0-1.88-1.88 1.33 1.33 0 0 0 1.88 1.88ZM5.224 12a1.475 1.475 0 1 1-2.95 0 1.475 1.475 0 0 1 2.95 0ZM5.02 7.31a1.62 1.62 0 1 0 2.291-2.292 1.62 1.62 0 0 0-2.29 2.292Z"
    />
  </svg>
);
export default SvgSpinner2Sacle;
