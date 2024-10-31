import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgLayers1 = ({
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
      fillRule="evenodd"
      d="M12.86 4.969a2.483 2.483 0 0 0-1.675 0L2.911 7.935c-1.173.42-1.173 2.079 0 2.5l8.274 2.966a2.482 2.482 0 0 0 1.676 0l8.274-2.967c1.173-.42 1.173-2.079 0-2.499l-8.274-2.966ZM11.693 6.38a.983.983 0 0 1 .663 0l7.821 2.804-7.821 2.804a.983.983 0 0 1-.664 0L3.87 9.185 11.69 6.38Z"
      clipRule="evenodd"
    />
    <path
      fill="#323544"
      d="m2.91 13.565 2.144-.769 2.223.797-3.407 1.221 7.821 2.804a.982.982 0 0 0 .664 0l7.821-2.804-3.406-1.22 2.222-.798 2.143.769c1.173.42 1.173 2.079 0 2.5l-8.274 2.965a2.482 2.482 0 0 1-1.676 0l-8.274-2.966c-1.173-.42-1.173-2.079 0-2.5Z"
    />
  </svg>
);
export default SvgLayers1;
