import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgHospital2 = ({
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
      d="M10.92 10.419a.75.75 0 0 0-1.5 0v5.163a.75.75 0 0 0 1.5 0V13.75h2.16v1.832a.75.75 0 0 0 1.5 0v-5.163a.75.75 0 0 0-1.5 0v1.831h-2.16V10.42Z"
    />
    <path
      fill="#323544"
      fillRule="evenodd"
      d="M13.35 3.704c-.8-.6-1.9-.6-2.7 0l-6.5 4.875a2.25 2.25 0 0 0-.9 1.8V18.5a2.25 2.25 0 0 0 2.25 2.25h13a2.25 2.25 0 0 0 2.25-2.25V10.38a2.25 2.25 0 0 0-.9-1.8l-6.5-4.875Zm-1.8 1.2a.75.75 0 0 1 .9 0l6.5 4.875a.75.75 0 0 1 .3.6V18.5a.75.75 0 0 1-.75.75h-13a.75.75 0 0 1-.75-.75V10.38a.75.75 0 0 1 .3-.6l6.5-4.875Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgHospital2;
