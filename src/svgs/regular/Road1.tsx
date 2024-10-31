import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgRoad1 = ({
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
      d="M12.749 5.75a.75.75 0 0 0-1.5 0v1.563a.75.75 0 0 0 1.5 0V5.75ZM12.749 10.438a.75.75 0 0 0-1.5 0v3.124a.75.75 0 0 0 1.5 0v-3.124ZM12.749 16.688a.75.75 0 0 0-1.5 0v1.562a.75.75 0 0 0 1.5 0v-1.563Z"
    />
    <path
      fill="#323544"
      fillRule="evenodd"
      d="M7.382 2a2.25 2.25 0 0 0-2.243 2.068l-1.256 15.5A2.25 2.25 0 0 0 6.125 22h11.747a2.25 2.25 0 0 0 2.243-2.432l-1.257-15.5A2.25 2.25 0 0 0 16.615 2H7.382Zm-.748 2.19a.75.75 0 0 1 .748-.69h9.233c.391 0 .716.3.748.69l1.257 15.5a.75.75 0 0 1-.748.81H6.125a.75.75 0 0 1-.747-.81l1.256-15.5Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgRoad1;
