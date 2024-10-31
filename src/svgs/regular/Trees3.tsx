import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgTrees3 = ({
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
      d="M12.591 16.438a4.067 4.067 0 0 0 3.016 2.47v1.842a.75.75 0 0 0 1.5 0v-1.842a4.062 4.062 0 0 0 2.463-6.474 4.06 4.06 0 0 0-6.133-5.305 4.75 4.75 0 1 0-8.691 2.769 5.108 5.108 0 0 0 3.194 8.298v2.554a.75.75 0 0 0 1.5 0v-2.554a5.1 5.1 0 0 0 3.152-1.758ZM5.44 7.25a3.25 3.25 0 1 1 5.653 2.188.75.75 0 0 0 .045 1.056 3.608 3.608 0 0 1-1.698 6.178V14.5a.75.75 0 0 0-1.5 0v2.172a3.608 3.608 0 0 1-1.698-6.178.75.75 0 0 0 .045-1.056A3.235 3.235 0 0 1 5.44 7.25Zm11.668 10.116V15.25a.75.75 0 0 0-1.5 0v2.116a2.562 2.562 0 0 1-.943-4.37.75.75 0 0 0 0-1.124 2.56 2.56 0 1 1 3.387 0 .75.75 0 0 0 0 1.124 2.562 2.562 0 0 1-.944 4.37Z"
    />
  </svg>
);
export default SvgTrees3;
