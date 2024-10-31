import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgGoogle = ({
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
      d="M21.594 11.08H12.32v2.746h6.656c-.356 3.812-3.457 5.46-6.462 5.46-3.813 0-7.205-2.973-7.205-7.27 0-4.135 3.23-7.27 7.205-7.27 3.037 0 4.879 1.971 4.879 1.971l1.874-1.97S16.748 2 12.386 2C6.634 1.968 2.24 6.782 2.24 11.984 2.24 17.024 6.376 22 12.482 22c5.396 0 9.273-3.651 9.273-9.111.033-1.131-.161-1.81-.161-1.81Z"
    />
  </svg>
);
export default SvgGoogle;
