import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgFunnel1 = ({
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
      fillRule="evenodd"
      d="M4.063 4.479a2.25 2.25 0 0 1 2.25-2.25h11.25a2.25 2.25 0 0 1 2.25 2.25v1.36a3.75 3.75 0 0 1-.77 2.276l-4.327 5.666a.75.75 0 0 0-.153.455v6.238c0 1.36-1.484 2.2-2.65 1.5l-1.508-.904a2.25 2.25 0 0 1-1.092-1.93v-4.904a.75.75 0 0 0-.154-.455L4.832 8.115a3.75 3.75 0 0 1-.77-2.276v-1.36Zm2.25-.75a.75.75 0 0 0-.75.75v1.36c0 .494.162.973.461 1.366l4.327 5.665c.3.392.461.872.461 1.366v4.905a.75.75 0 0 0 .365.643l1.507.904a.25.25 0 0 0 .379-.214v-6.238c0-.494.162-.974.461-1.366l4.327-5.665c.3-.393.462-.872.462-1.366v-1.36a.75.75 0 0 0-.75-.75H6.313Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgFunnel1;
