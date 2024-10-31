import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgWallet1 = ({
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
      d="M5.75 3.25A2.25 2.25 0 0 0 3.5 5.5v13a2.25 2.25 0 0 0 2.25 2.25h13A2.25 2.25 0 0 0 21 18.5v-9a2.25 2.25 0 0 0-2.25-2.25h-.25V5.5a2.25 2.25 0 0 0-2.25-2.25H5.75Zm11.25 4H5V5.5a.75.75 0 0 1 .75-.75h10.5a.75.75 0 0 1 .75.75v1.75ZM5 8.75h13.75a.75.75 0 0 1 .75.75v9a.75.75 0 0 1-.75.75h-13A.75.75 0 0 1 5 18.5V8.75Z"
    />
  </svg>
);
export default SvgWallet1;
