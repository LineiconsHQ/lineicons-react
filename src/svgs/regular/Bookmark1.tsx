import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgBookmark1 = ({
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
      fillRule="evenodd"
      d="M5 4.482a2.25 2.25 0 0 1 2.25-2.25h10.5A2.25 2.25 0 0 1 20 4.482v17a.75.75 0 0 1-1.166.625l-5.918-3.946a.75.75 0 0 0-.832 0l-5.918 3.945A.75.75 0 0 1 5 21.483v-17Zm2.25-.75a.75.75 0 0 0-.75.75v15.599l4.752-3.168a2.25 2.25 0 0 1 2.496 0l4.752 3.168V4.482a.75.75 0 0 0-.75-.75H7.25Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgBookmark1;
