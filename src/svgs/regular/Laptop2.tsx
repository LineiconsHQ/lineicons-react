import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgLaptop2 = ({
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
      d="M6 4.5a2.25 2.25 0 0 0-2.25 2.25V15h-1a.75.75 0 0 0-.67 1.085l1.085 2.171A2.25 2.25 0 0 0 5.177 19.5h13.646a2.25 2.25 0 0 0 2.012-1.244l1.086-2.17A.75.75 0 0 0 21.25 15h-1V6.75A2.25 2.25 0 0 0 18 4.5H6Zm14.037 12-.543 1.085a.75.75 0 0 1-.671.415H5.177a.75.75 0 0 1-.67-.415L3.963 16.5h16.073ZM18.75 15H5.25V6.75A.75.75 0 0 1 6 6h12a.75.75 0 0 1 .75.75V15Z"
    />
  </svg>
);
export default SvgLaptop2;
