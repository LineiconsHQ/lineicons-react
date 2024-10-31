import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgPhotos = ({
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
      d="M8.25 10.5a1.25 1.25 0 1 0 0 2.5h.01a1.25 1.25 0 1 0 0-2.5h-.01Z"
    />
    <path
      fill="#323544"
      d="M7.75 5.5A2.25 2.25 0 0 1 10 3.25h9a2.25 2.25 0 0 1 2.25 2.25v9A2.25 2.25 0 0 1 19 16.75h-1.75v1.75A2.25 2.25 0 0 1 15 20.75H6a2.25 2.25 0 0 1-2.25-2.25v-9A2.25 2.25 0 0 1 6 7.25h1.75V5.5Zm8 4a.75.75 0 0 0-.75-.75H6a.75.75 0 0 0-.75.75v6.942l5.668-2.938a2.25 2.25 0 0 1 2.567.348l2.265 2.104V9.5Zm-10.5 9c0 .414.336.75.75.75h9a.75.75 0 0 0 .75-.75v-.497l-3.286-3.051a.75.75 0 0 0-.855-.117L5.25 18.132v.368Zm4-11.25H15a2.25 2.25 0 0 1 2.25 2.25v5.75H19a.75.75 0 0 0 .75-.75v-9a.75.75 0 0 0-.75-.75h-9a.75.75 0 0 0-.75.75v1.75Z"
    />
  </svg>
);
export default SvgPhotos;
