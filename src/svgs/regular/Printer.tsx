import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgPrinter = ({
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
      d="M18.155 7.791V6.623a2.25 2.25 0 0 0-.684-1.616l-1.157-1.122a2.25 2.25 0 0 0-1.566-.634H8.095a2.25 2.25 0 0 0-2.25 2.25v2.29H5.5a2.25 2.25 0 0 0-2.25 2.25v3.918a2.25 2.25 0 0 0 2.25 2.25h.344V18.5a2.25 2.25 0 0 0 2.25 2.25h7.81a2.25 2.25 0 0 0 2.25-2.25v-2.29h.345a2.25 2.25 0 0 0 2.25-2.25V10.04a2.25 2.25 0 0 0-2.25-2.25h-.344Zm-10.06-3.04h6.653a.75.75 0 0 1 .522.211l1.157 1.122a.75.75 0 0 1 .228.539V7.79h-9.31v-2.29a.75.75 0 0 1 .75-.75Zm-2.251 9.195v.764H5.5a.75.75 0 0 1-.75-.75V10.04a.75.75 0 0 1 .75-.75h13a.75.75 0 0 1 .75.75v3.918a.75.75 0 0 1-.75.75h-.346v-.763a.75.75 0 0 0-.75-.75H6.594a.75.75 0 0 0-.75.75Zm1.5.75h9.31V18.5a.75.75 0 0 1-.75.75h-7.81a.75.75 0 0 1-.75-.75v-3.804Z"
    />
  </svg>
);
export default SvgPrinter;
