import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgX = ({
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
      d="M17.751 2.96h3.067l-6.7 7.659L22 21.039h-6.172l-4.833-6.32-5.531 6.32h-3.07l7.167-8.19L2 2.96h6.328l4.37 5.777L17.75 2.96Zm-1.076 16.243h1.7L7.404 4.7H5.58l11.094 14.503Z"
    />
  </svg>
);
export default SvgX;
