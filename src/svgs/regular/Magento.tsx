import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgMagento = ({
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
      d="M12 2 3.354 7v10l2.452 1.452v-10L12 4.87l6.193 3.58v10L20.645 17V7L12 2Z"
    />
    <path
      fill="#323544"
      d="M13.258 18.452 12 19.129l-1.226-.677v-10L8.258 9.87v10L12 22l3.741-2.129v-10l-2.483-1.42v10Z"
    />
  </svg>
);
export default SvgMagento;
