import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgMicrosoft = ({
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
      d="M3 11.594h8.594V3H3v8.594ZM21 11.594V3h-8.594v8.594H21ZM3 21h8.594v-8.594H3V21ZM12.406 21H21v-8.594h-8.594V21Z"
    />
  </svg>
);
export default SvgMicrosoft;
