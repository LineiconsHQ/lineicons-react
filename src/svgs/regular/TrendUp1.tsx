import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgTrendUp1 = ({
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
      d="M4.75 4a.75.75 0 0 0-1.5 0v14.5a2.25 2.25 0 0 0 2.25 2.25H20a.75.75 0 0 0 0-1.5H5.5a.75.75 0 0 1-.75-.75v-2.77l4.45-4.45 3.422 3.423a.75.75 0 0 0 1.06 0l4.315-4.315v1.729a.75.75 0 1 0 1.5 0V8.58a.75.75 0 0 0-.75-.75h-3.536a.75.75 0 0 0 0 1.5h1.722l-3.78 3.78L9.73 9.69a.75.75 0 0 0-1.06 0l-3.92 3.92V4Z"
    />
  </svg>
);
export default SvgTrendUp1;
