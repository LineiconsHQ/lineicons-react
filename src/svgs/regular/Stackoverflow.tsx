import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgStackoverflow = ({
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
      d="M17.873 20.226H5.393v-5.353H3.555V22h16.06v-7.127h-1.742v5.353ZM15.143 2l-1.425 1.057 5.303 7.148 1.424-1.057L15.143 2ZM11.862 4.869l-1.135 1.363 6.844 5.691 1.134-1.364-6.843-5.69Z"
    />
    <path
      fill="#323544"
      d="M16.067 16.647h-8.9v1.774h8.9v-1.774ZM17.293 12.358l-8.03-3.806-.774 1.645 8.062 3.773.742-1.612ZM16.421 14.454l-8.707-1.87-.419 1.773 8.771 1.838.355-1.741Z"
    />
  </svg>
);
export default SvgStackoverflow;
