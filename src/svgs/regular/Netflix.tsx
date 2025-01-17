import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgNetflix = ({
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
      d="M4.75 14.39c-.3.054-.607.07-.924.113L2.86 11.63v2.996c-.3.033-.575.076-.86.119v-5.49h.802L3.9 12.37V9.255h.85v5.136Zm1.663-3.125c.327 0 .829-.016 1.13-.016v.858c-.375 0-.814 0-1.13.016v1.276c.496-.032.992-.075 1.494-.091v.825l-2.339.188V9.255h2.339v.858H6.413v1.152Zm4.634-1.152h-.876v3.945c-.285 0-.57 0-.844.011v-3.956H8.45v-.858h2.597v.858Zm1.373 1.093h1.156v.858H12.42v1.946h-.83V9.255h2.36v.858h-1.53v1.093Zm2.903 2.053c.48.011.966.049 1.436.075v.848a52.744 52.744 0 0 0-2.28-.113V9.255h.844v4.004Zm2.148.982c.27.016.554.032.829.064v-5.05h-.829v4.986ZM22 9.255l-1.072 2.61L22 14.746c-.317-.043-.633-.102-.95-.156l-.607-1.587-.618 1.458c-.306-.053-.601-.07-.907-.112l1.087-2.514-.982-2.58h.908l.554 1.443.591-1.442H22Z"
    />
  </svg>
);
export default SvgNetflix;
