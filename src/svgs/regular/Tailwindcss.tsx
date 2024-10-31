import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgTailwindcss = ({
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
      fillRule="evenodd"
      d="M7 9.969c.667-2.708 2.333-4.063 5-4.063 4 0 4.5 3.047 6.5 3.555 1.333.339 2.5-.17 3.5-1.524C21.333 10.646 19.666 12 17 12c-4 0-4.5-3.047-6.5-3.555C9.167 8.107 8 8.615 7 9.97Zm-5 6.094C2.667 13.354 4.333 12 7 12c4 0 4.5 3.047 6.5 3.555 1.333.338 2.5-.17 3.5-1.524-.667 2.708-2.333 4.063-5 4.063-4 0-4.5-3.047-6.5-3.555-1.333-.339-2.5.17-3.5 1.524Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgTailwindcss;
