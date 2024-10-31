import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgCloudCheckCircle = ({
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
      d="M6.387 7.483a5.615 5.615 0 0 1 11.227 0A4.766 4.766 0 0 1 22 12.337a6.908 6.908 0 0 0-1.88-1.634 3.265 3.265 0 0 0-2.885-1.735h-.368a.75.75 0 0 1-.75-.75v-.603a4.115 4.115 0 0 0-8.23 0v.603a.75.75 0 0 1-.75.75h-.37a3.266 3.266 0 0 0 0 6.532h3.076A6.924 6.924 0 0 0 9.76 17H6.766a4.766 4.766 0 0 1-.38-9.517ZM18.655 15.14a.75.75 0 0 1 0 1.061l-1.907 1.908a.75.75 0 0 1-1.061 0l-1.092-1.092a.75.75 0 1 1 1.06-1.06l.562.561 1.378-1.377a.75.75 0 0 1 1.06 0Z"
    />
    <path
      fill="#323544"
      fillRule="evenodd"
      d="M11.25 16.625a5.375 5.375 0 1 1 10.75 0 5.375 5.375 0 0 1-10.75 0Zm5.375-3.875a3.875 3.875 0 1 0 0 7.75 3.875 3.875 0 0 0 0-7.75Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgCloudCheckCircle;
