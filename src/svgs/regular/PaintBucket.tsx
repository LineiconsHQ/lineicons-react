import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgPaintBucket = ({
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
      d="M6.107 3.192a.75.75 0 0 1 1.024-.275L9.024 4.01a.755.755 0 0 1 .063.04l9.647 5.57.002-.004.65.375c.644.373 1.619 1.008 2.3 1.833.343.416.644.919.762 1.495.122.596.038 1.223-.315 1.834a2.614 2.614 0 0 1-3.571.957 2.575 2.575 0 0 1-1.122-1.248l-3 5.198a2.25 2.25 0 0 1-3.074.823l-7.74-4.469a2.25 2.25 0 0 1-.824-3.073l4.846-8.394-1.267-.731a.75.75 0 0 1-.274-1.024Zm-1.85 10.627 12.808-3.43L8.945 5.7l-4.688 8.12Zm.385 1.45 7.474 4.315a.75.75 0 0 0 1.024-.274l4.315-7.473-12.813 3.432Zm14.122-2.017c-.065.385-.052.705.031.953.076.229.223.436.517.606a1.114 1.114 0 0 0 1.522-.408c.17-.294.193-.547.145-.783-.053-.256-.201-.54-.45-.841-.334-.404-.789-.772-1.234-1.075-.234.485-.444 1.031-.531 1.548Z"
    />
  </svg>
);
export default SvgPaintBucket;
