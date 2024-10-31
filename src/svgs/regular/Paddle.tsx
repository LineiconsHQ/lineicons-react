import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgPaddle = ({
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
      d="M4.026 9.294v-.707a3.269 3.269 0 0 0 3.268-3.268h.654a3.269 3.269 0 0 0 3.268 3.272V9.3a3.269 3.269 0 0 0-3.268 3.268h-.654a3.269 3.269 0 0 0-3.268-3.273Zm3.268-5.202h5.62c2.746 0 4.707 1.96 4.707 4.837 0 2.876-1.96 4.836-4.706 4.836h-5.62V22h2.352v-6.143h3.268c3.948 0 7.059-3.112 7.059-6.928 0-3.817-3.111-6.929-7.06-6.929h-5.62v2.092Z"
    />
  </svg>
);
export default SvgPaddle;
