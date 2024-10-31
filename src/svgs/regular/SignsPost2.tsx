import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgSignsPost2 = ({
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
      d="M13.152 3.346a.75.75 0 1 0-1.5 0v6h-5.09a1.75 1.75 0 0 0-1.162.442l-1.688 1.5a1.75 1.75 0 0 0 0 2.616l1.688 1.5c.32.284.734.442 1.163.442h5.09v6a.75.75 0 0 0 1.5 0v-11h5.091a1.75 1.75 0 0 0 1.163-.442l1.687-1.5a1.75 1.75 0 0 0 0-2.616l-1.687-1.5a1.75 1.75 0 0 0-1.163-.442h-5.092v-1Zm-1.5 7.5v3.5h-5.09a.25.25 0 0 1-.166-.063l-1.687-1.5a.25.25 0 0 1 0-.374l1.687-1.5a.25.25 0 0 1 .166-.063h5.09Zm1.501-5h5.091a.25.25 0 0 1 .166.063l1.688 1.5a.25.25 0 0 1 0 .374l-1.688 1.5a.25.25 0 0 1-.166.063h-5.09v-3.5Z"
    />
  </svg>
);
export default SvgSignsPost2;
