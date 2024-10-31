import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgMercedes = ({
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
      fillRule="evenodd"
      d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2ZM3.816 7.3a9.453 9.453 0 0 1 8.074-4.732l-1.293 8.57-6.836 5.523A9.43 9.43 0 0 1 3.816 7.3Zm8.223 14.18a9.423 9.423 0 0 1-8.155-4.609l8.12-3.361 8.15 3.31a9.435 9.435 0 0 1-8.115 4.66Zm1.325-10.228-1.232-8.684a9.45 9.45 0 0 1 4.642 1.3 9.457 9.457 0 0 1 3.4 3.416 9.434 9.434 0 0 1 .103 9.316l-6.913-5.348Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgMercedes;
