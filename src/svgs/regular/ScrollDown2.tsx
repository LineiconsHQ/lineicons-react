import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgScrollDown2 = ({
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
      d="M11.47 16.278a.75.75 0 0 0 1.06 0l2.25-2.249a.75.75 0 0 0-1.06-1.06L12 14.686l-1.72-1.719a.75.75 0 1 0-1.06 1.061l2.25 2.249ZM12 9.055a.8.8 0 1 1 0-1.6.8.8 0 0 1 0 1.6ZM11.2 11.071a.8.8 0 1 0 1.6 0 .8.8 0 0 0-1.6 0Z"
    />
    <path
      fill="#323544"
      fillRule="evenodd"
      d="M12 2.001a7.5 7.5 0 0 0-7.5 7.5v5a7.5 7.5 0 0 0 15 0v-5a7.5 7.5 0 0 0-7.5-7.5Zm-6 7.5a6 6 0 1 1 12 0v5a6 6 0 0 1-12 0v-5Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgScrollDown2;
