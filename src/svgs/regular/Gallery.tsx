import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgGallery = ({
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
      d="M9.145 6.935a1.625 1.625 0 0 0 0 3.25h.01a1.625 1.625 0 0 0 0-3.25h-.01Z"
    />
    <path
      fill="#323544"
      d="M3.75 5.5A2.25 2.25 0 0 1 6 3.25h13a2.25 2.25 0 0 1 2.25 2.25v13A2.25 2.25 0 0 1 19 20.75H6a2.25 2.25 0 0 1-2.25-2.25v-13ZM6 4.75a.75.75 0 0 0-.75.75v10.08l1.451-1.9a2.25 2.25 0 0 1 3.584.01L11.5 15.3a.75.75 0 0 0 1.293-.168l1.978-4.847c.667-1.635 2.872-1.9 3.906-.468l1.073 1.484V5.5a.75.75 0 0 0-.75-.75H6ZM5.25 18.5c0 .414.336.75.75.75h13a.75.75 0 0 0 .75-.75v-4.64l-2.288-3.164a.75.75 0 0 0-1.302.156l-1.978 4.846c-.66 1.616-2.827 1.899-3.879.506l-1.215-1.61a.75.75 0 0 0-1.195-.003l-2.492 3.264a.75.75 0 0 1-.151.148v.497Z"
    />
  </svg>
);
export default SvgGallery;
