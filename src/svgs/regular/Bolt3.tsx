import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgBolt3 = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fill="#323544"
      fillRule="evenodd"
      d="M15.244 2.586a.75.75 0 0 1 .393.778l-1.285 8.385h4.452a.75.75 0 0 1 .516 1.294l-9.76 9.251a.75.75 0 0 1-1.257-.658l1.286-8.385H5.137a.75.75 0 0 1-.516-1.294l9.759-9.251a.75.75 0 0 1 .864-.12ZM7.018 11.75h3.444a.75.75 0 0 1 .742.864L10.118 19.7l6.804-6.45h-3.444a.75.75 0 0 1-.741-.864l1.086-7.084-6.805 6.45Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgBolt3;
