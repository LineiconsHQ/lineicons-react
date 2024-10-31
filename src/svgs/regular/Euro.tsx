import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgEuro = ({
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
      d="M16.043 5a7.252 7.252 0 0 0-6.71 4.5h4.702a.75.75 0 0 1 0 1.5H8.901a7.295 7.295 0 0 0 0 2.5h5.134a.75.75 0 0 1 0 1.5H9.333a7.252 7.252 0 0 0 9.321 4.016.75.75 0 1 1 .54 1.4A8.754 8.754 0 0 1 7.734 15H5.578a.75.75 0 0 1 0-1.501h1.804a8.824 8.824 0 0 1 0-2.5H5.579a.75.75 0 0 1 0-1.5h2.155a8.754 8.754 0 0 1 11.46-5.415.75.75 0 0 1-.54 1.4A7.23 7.23 0 0 0 16.044 5Z"
    />
  </svg>
);
export default SvgEuro;
