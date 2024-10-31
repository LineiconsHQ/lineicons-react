import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgDownload1 = ({
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
      d="M12.424 16.75a.748.748 0 0 1-.548-.237l-4.61-4.607a.75.75 0 0 1 1.061-1.061l3.347 3.345V4a.75.75 0 1 1 1.5 0v10.185l3.343-3.34a.75.75 0 1 1 1.06 1.06l-4.575 4.573a.748.748 0 0 1-.578.272Z"
    />
    <path
      fill="#323544"
      d="M5.172 16a.75.75 0 0 0-1.5 0v2.5a2.25 2.25 0 0 0 2.25 2.25h13a2.25 2.25 0 0 0 2.25-2.25V16a.75.75 0 1 0-1.5 0v2.5a.75.75 0 0 1-.75.75h-13a.75.75 0 0 1-.75-.75V16Z"
    />
  </svg>
);
export default SvgDownload1;
