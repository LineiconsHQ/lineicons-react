import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgLayout26 = ({
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
      d="M12.773 2.75a.75.75 0 1 0-1.5 0V4.5h-5.25V2.75a.75.75 0 0 0-1.5 0V4.5h-1.75a.75.75 0 1 0 0 1.5h1.75v5.25h-1.75a.75.75 0 0 0 0 1.5h1.75V18h-1.75a.75.75 0 0 0 0 1.5h1.75v1.75a.75.75 0 0 0 1.5 0V19.5h5.25v1.75a.75.75 0 0 0 1.5 0V19.5h5.25v1.75a.75.75 0 0 0 1.5 0V19.5h1.75a.75.75 0 1 0 0-1.5h-1.75v-5.25h1.75a.75.75 0 1 0 0-1.5h-1.75V6h1.75a.75.75 0 1 0 0-1.5h-1.75V2.75a.75.75 0 1 0-1.5 0V4.5h-5.25V2.75ZM18.023 18h-5.25v-5.25h5.25V18Zm-6.75 0h-5.25v-5.25h5.25V18Zm-5.25-6.75V6h5.25v5.25h-5.25Zm12 0h-5.25V6h5.25v5.25Z"
    />
  </svg>
);
export default SvgLayout26;
