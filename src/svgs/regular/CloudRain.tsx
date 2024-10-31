import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgCloudRain = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 25 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fill="#323544"
      d="M6.41 9.233a5.615 5.615 0 0 1 11.228 0 4.766 4.766 0 0 1 1.121 9.276 6.901 6.901 0 0 0 .133-1.696 3.266 3.266 0 0 0-1.634-6.094h-.369a.75.75 0 0 1-.75-.75v-.604a4.115 4.115 0 0 0-8.23 0v.603a.75.75 0 0 1-.75.75h-.37a3.266 3.266 0 0 0-1.634 6.095 6.992 6.992 0 0 0 .133 1.696A4.768 4.768 0 0 1 6.41 9.233Z"
    />
    <path
      fill="#323544"
      d="M8.818 14.67a.75.75 0 0 0-1.5 0v6.41a.75.75 0 0 0 1.5 0v-6.41ZM15.979 13.17a.75.75 0 0 1 .75.75v6.41a.75.75 0 0 1-1.5 0v-6.41a.75.75 0 0 1 .75-.75ZM12.774 13.17a.75.75 0 0 0-1.5 0v6.41a.75.75 0 1 0 1.5 0v-6.41Z"
    />
  </svg>
);
export default SvgCloudRain;
