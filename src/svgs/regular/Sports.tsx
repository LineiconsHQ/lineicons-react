import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgSports = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fill="#323544"
      fillRule="evenodd"
      d="M4.672 11.077a7.327 7.327 0 0 1 14.654 0v2.33A2.25 2.25 0 0 1 20.75 15.5V19a2.25 2.25 0 0 1-4.5 0v-3.5c0-1.008.663-1.861 1.576-2.147v-2.276c0-1.85-.863-3.5-2.208-4.567a3.75 3.75 0 1 1-7.235-.002 5.817 5.817 0 0 0-2.211 4.57v2.274A2.251 2.251 0 0 1 7.75 15.5V19a2.25 2.25 0 0 1-4.5 0v-3.5c0-.95.589-1.763 1.422-2.093v-2.33Zm7.327-5.827A2.25 2.25 0 1 0 12 9.75a2.25 2.25 0 1 0-.001-4.5ZM5.5 14.75a.75.75 0 0 0-.75.75V19a.75.75 0 0 0 1.5 0v-3.5a.75.75 0 0 0-.75-.75Zm13 0a.75.75 0 0 0-.75.75V19a.75.75 0 0 0 1.5 0v-3.5a.75.75 0 0 0-.75-.75Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgSports;
