import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgStarSharpDisabled = ({
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
      d="M7.215 8.276 2.22 3.28A.75.75 0 0 1 3.28 2.22l18.5 18.499a.75.75 0 0 1-1.061 1.06l-2.408-2.407.06.183a.75.75 0 0 1-1.155.839L12 16.604l-5.217 3.79a.75.75 0 0 1-1.154-.839l1.992-6.132-5.216-3.79a.75.75 0 0 1 .44-1.357h4.37Zm8.76 8.76-7.26-7.26H5.154l3.79 2.753a.75.75 0 0 1 .272.839L7.77 17.823l3.79-2.753a.75.75 0 0 1 .881 0l3.79 2.753-.256-.788ZM18.845 9.776l-3.464 2.517 1.074 1.074 5.14-3.735a.75.75 0 0 0-.441-1.356h-6.449l-1.992-6.133a.75.75 0 0 0-1.427 0l-1.485 4.57 1.19 1.19L12 4.804l1.447 4.454a.75.75 0 0 0 .714.519h4.684Z"
    />
  </svg>
);
export default SvgStarSharpDisabled;
