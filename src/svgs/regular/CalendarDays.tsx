import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgCalendarDays = ({
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
      d="M7.185 12.75a.8.8 0 0 1 .8-.8h.01a.8.8 0 0 1 0 1.6h-.01a.8.8 0 0 1-.8-.8ZM7.985 15.95a.8.8 0 0 0 0 1.6h.01a.8.8 0 0 0 0-1.6h-.01ZM11.195 12.75a.8.8 0 0 1 .8-.8h.01a.8.8 0 0 1 0 1.6h-.01a.8.8 0 0 1-.8-.8ZM11.995 15.95a.8.8 0 0 0 0 1.6h.01a.8.8 0 0 0 0-1.6h-.01ZM15.205 12.75a.8.8 0 0 1 .8-.8h.01a.8.8 0 0 1 0 1.6h-.01a.8.8 0 0 1-.8-.8ZM16.005 15.95a.8.8 0 0 0 0 1.6h.01a.8.8 0 0 0 0-1.6h-.01Z"
    />
    <path
      fill="#323544"
      d="M8.75 2.75a.75.75 0 0 0-1.5 0v1H5.5A2.25 2.25 0 0 0 3.25 6v13a2.25 2.25 0 0 0 2.25 2.25h13A2.25 2.25 0 0 0 20.75 19V6a2.25 2.25 0 0 0-2.25-2.25h-1.75v-1a.75.75 0 0 0-1.5 0v1h-6.5v-1Zm10.5 5.5H4.75V6a.75.75 0 0 1 .75-.75h13a.75.75 0 0 1 .75.75v2.25Zm-14.5 1.5h14.5V19a.75.75 0 0 1-.75.75h-13a.75.75 0 0 1-.75-.75V9.75Z"
    />
  </svg>
);
export default SvgCalendarDays;
