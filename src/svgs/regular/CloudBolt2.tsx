import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgCloudBolt2 = ({
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
      fillRule="evenodd"
      d="M9.568 11.75a.75.75 0 0 0-.718.533l-1.5 4.972a.75.75 0 0 0 .718.966h1.439v3.529a.75.75 0 0 0 1.28.53l5.722-5.721a.75.75 0 0 0-.53-1.28h-2.19V12.5a.75.75 0 0 0-.75-.75H9.57Zm-.49 4.971 1.048-3.471h2.164v2.779a.75.75 0 0 0 .75.75h1.128l-3.161 3.16v-2.468a.75.75 0 0 0-.75-.75H9.078Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgCloudBolt2;
