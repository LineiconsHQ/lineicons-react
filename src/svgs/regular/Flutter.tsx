import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgFlutter = ({
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
      d="m19.953 11.232-5.301 5.383 5.3 5.385h-6.059l-2.272-2.307-3.03-3.078 5.302-5.383h6.06ZM13.893 2 4.047 12l3.03 3.078L19.953 2h-6.06Z"
    />
  </svg>
);
export default SvgFlutter;
