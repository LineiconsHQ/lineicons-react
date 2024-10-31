import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgBoxGift1 = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 25 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fill="#323544"
      fillRule="evenodd"
      d="M8.406 5.787a2.625 2.625 0 0 1 4.23-3 2.625 2.625 0 0 1 4.23 3h2.277a2.25 2.25 0 0 1 2.25 2.25V8.5c0 .815-.433 1.529-1.082 1.924V19a2.25 2.25 0 0 1-2.25 2.25H7.21A2.25 2.25 0 0 1 4.96 19v-8.576A2.249 2.249 0 0 1 3.877 8.5v-.463a2.25 2.25 0 0 1 2.25-2.25h2.279ZM14.51 3.5c-.621 0-1.125.504-1.125 1.125V5.75h1.125a1.125 1.125 0 0 0 0-2.25Zm-2.625 2.25V4.625A1.125 1.125 0 1 0 10.76 5.75h1.125Zm6.926 5H6.46V19c0 .414.335.75.75.75H18.06a.75.75 0 0 0 .75-.75v-8.25Zm.332-1.5a.75.75 0 0 0 .75-.75v-.463a.75.75 0 0 0-.75-.75H6.127a.75.75 0 0 0-.75.75V8.5c0 .414.336.75.75.75h13.016Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgBoxGift1;
