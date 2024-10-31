import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgCrop2 = ({
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
      d="M6.023 2.75a.75.75 0 0 0-1.5 0V4.5h-1.75a.75.75 0 1 0 0 1.5h1.75v11.25a2.25 2.25 0 0 0 2.25 2.25h11.25v1.75a.75.75 0 0 0 1.5 0V19.5h1.75a.75.75 0 1 0 0-1.5h-1.75V5.56l1.78-1.78a.75.75 0 1 0-1.06-1.06l-1.78 1.78H6.023V2.75ZM16.963 6 6.023 16.94V6h10.94ZM7.084 18l10.94-10.94V18H7.083Z"
    />
  </svg>
);
export default SvgCrop2;
