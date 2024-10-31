import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgTextFormat = ({
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
      d="M11 3.25a.75.75 0 0 1 .685.445l5.778 13a.75.75 0 0 1-1.37.61l-1.657-3.727H7.564l-1.656 3.726a.75.75 0 1 1-1.371-.609l5.778-13A.75.75 0 0 1 11 3.25Zm-2.77 8.828h5.54L11 5.847l-2.77 6.23Z"
      clipRule="evenodd"
    />
    <path
      fill="#323544"
      d="M19.75 4v13a.75.75 0 0 0 1.5 0V4a.75.75 0 1 0-1.5 0ZM17.5 20.75h-13a.75.75 0 0 1 0-1.5h13a.75.75 0 1 1 0 1.5Z"
    />
  </svg>
);
export default SvgTextFormat;
