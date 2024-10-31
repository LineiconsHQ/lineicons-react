import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgCloudRefreshClockwise = ({
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
      d="M6.387 7.483a5.615 5.615 0 0 1 11.227 0A4.766 4.766 0 0 1 22 12.337a6.908 6.908 0 0 0-1.88-1.634 3.265 3.265 0 0 0-2.885-1.735h-.368a.75.75 0 0 1-.75-.75v-.603a4.115 4.115 0 0 0-8.23 0v.603a.75.75 0 0 1-.75.75h-.37a3.266 3.266 0 0 0 0 6.532h3.076A6.924 6.924 0 0 0 9.76 17H6.766a4.766 4.766 0 0 1-.38-9.517Z"
    />
    <path
      fill="#323544"
      d="M12.022 15.745a.75.75 0 0 1-.447-.962 5.375 5.375 0 0 1 9.877-.525.75.75 0 0 1-.718 1.116h-1.67a.75.75 0 1 1 0-1.5h.29a3.878 3.878 0 0 0-5.402-.056c-.434.414-.765.92-.968 1.48a.75.75 0 0 1-.962.447ZM14.781 20.034a3.88 3.88 0 0 1-.89-.662h.294a.75.75 0 0 0 0-1.5h-1.732a.75.75 0 0 0-.677 1.076 5.376 5.376 0 0 0 9.9-.484.75.75 0 1 0-1.41-.513 3.876 3.876 0 0 1-5.485 2.083Z"
    />
  </svg>
);
export default SvgCloudRefreshClockwise;
