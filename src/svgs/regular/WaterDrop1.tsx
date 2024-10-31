import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgWaterDrop1 = ({
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
      d="m12.435 2.623-.412.627-.412-.627a.75.75 0 0 1 .824 0Z"
    />
    <path
      fill="#323544"
      fillRule="evenodd"
      d="m11.611 2.623.412.627.412-.627.002.001.001.001.006.004.019.013.069.046a23.413 23.413 0 0 1 1.139.844c.729.576 1.703 1.408 2.68 2.435 1.924 2.023 3.99 4.938 3.99 8.215a8.318 8.318 0 1 1-16.636 0c0-3.277 2.067-6.192 3.99-8.215a25.822 25.822 0 0 1 3.567-3.102 15.312 15.312 0 0 1 .322-.223l.019-.013.005-.004.003-.002Zm.412 1.543A24.324 24.324 0 0 0 8.783 7c-1.86 1.955-3.578 4.505-3.578 7.18a6.818 6.818 0 1 0 13.636 0c0-2.675-1.717-5.225-3.577-7.18a24.333 24.333 0 0 0-3.24-2.835Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgWaterDrop1;
