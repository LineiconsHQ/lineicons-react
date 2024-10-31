import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgLocked1 = ({
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
      d="M12.75 15.5a.75.75 0 0 0-1.5 0v2a.75.75 0 0 0 1.5 0v-2Z"
    />
    <path
      fill="#323544"
      d="M12 1.25A4.75 4.75 0 0 0 7.25 6v2.696a7.5 7.5 0 1 0 9.5 0V6A4.75 4.75 0 0 0 12 1.25ZM12 7a7.47 7.47 0 0 0-3.25.739V6a3.25 3.25 0 0 1 6.5 0v1.739A7.47 7.47 0 0 0 12 7Zm0 1.5a6 6 0 1 1 0 12 6 6 0 0 1 0-12Z"
    />
  </svg>
);
export default SvgLocked1;
