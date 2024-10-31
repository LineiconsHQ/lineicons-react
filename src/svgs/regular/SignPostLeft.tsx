import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgSignPostLeft = ({
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
      d="M13.152 2.596a.75.75 0 0 0-.75.75v1H7.469a2.25 2.25 0 0 0-1.495.568l-2.813 2.5a2.25 2.25 0 0 0 0 3.363l2.813 2.5a2.25 2.25 0 0 0 1.495.569h4.933v8a.75.75 0 0 0 1.5 0v-8h6.25a2.25 2.25 0 0 0 2.25-2.25v-5a2.25 2.25 0 0 0-2.25-2.25h-6.25v-1a.75.75 0 0 0-.75-.75Zm7 9.75H7.469a.75.75 0 0 1-.499-.19l-2.812-2.5a.75.75 0 0 1 0-1.12l2.812-2.5a.75.75 0 0 1 .499-.19h12.683a.75.75 0 0 1 .75.75v5a.75.75 0 0 1-.75.75Z"
    />
  </svg>
);
export default SvgSignPostLeft;
