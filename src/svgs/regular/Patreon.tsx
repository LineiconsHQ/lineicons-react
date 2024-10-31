import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgPatreon = ({
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
      d="M22 9.645a7.2 7.2 0 0 1-7.194 7.193 7.2 7.2 0 0 1-7.193-7.193 7.2 7.2 0 0 1 7.193-7.194C18.774 2.42 22 5.645 22 9.645ZM2 21.58h3.548V2.42H2V21.58Z"
    />
  </svg>
);
export default SvgPatreon;
