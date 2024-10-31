import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgCar4 = ({
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
      d="M7.7 3.25a2.25 2.25 0 0 0-2.107 1.46L4.64 7.25H2.75a.75.75 0 0 0 0 1.5h1.33l-.044.116A2.251 2.251 0 0 0 2.5 11v7a1.5 1.5 0 0 0 3 0v-1h13v1a1.5 1.5 0 0 0 3 0v-7c0-.993-.643-1.835-1.535-2.134l-.043-.116h1.328a.75.75 0 0 0 0-1.5h-1.89l-.951-2.54a2.25 2.25 0 0 0-2.107-1.46H7.7ZM20 11v4.5h-3.25V14a2.25 2.25 0 0 0-2.25-2.25h-5A2.25 2.25 0 0 0 7.25 14v1.5H4V11a.75.75 0 0 1 .75-.75h14.5A.75.75 0 0 1 20 11Zm-1.68-2.25H5.68l1.316-3.513A.75.75 0 0 1 7.7 4.75h8.602a.75.75 0 0 1 .702.487L18.32 8.75Zm-3.07 6.75h-6.5V14a.75.75 0 0 1 .75-.75h5a.75.75 0 0 1 .75.75v1.5Z"
    />
  </svg>
);
export default SvgCar4;
