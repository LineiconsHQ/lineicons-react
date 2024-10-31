import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgBell1 = ({
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
      d="M12.002 2.001a.75.75 0 0 1 .75.75v.787a7.5 7.5 0 0 1 6.75 7.463v3.114l.692 1.846A2.25 2.25 0 0 1 18.087 19h-3.024a3.063 3.063 0 0 1-6.126 0h-3.02a2.25 2.25 0 0 1-2.108-3.04l.693-1.846v-3.114a7.5 7.5 0 0 1 6.75-7.463v-.787a.75.75 0 0 1 .75-.75Zm-1.565 17a1.563 1.563 0 0 0 3.125 0h-3.124Zm-4.435-8v3.116c0 .178-.033.356-.095.523l-.693 1.848a.75.75 0 0 0 .702 1.013h12.171a.75.75 0 0 0 .702-1.013l-.693-1.848a1.489 1.489 0 0 1-.094-.523V11a6 6 0 1 0-12 0Z"
    />
  </svg>
);
export default SvgBell1;
