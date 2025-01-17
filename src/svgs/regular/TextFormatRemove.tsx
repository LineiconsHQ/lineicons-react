import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgTextFormatRemove = ({
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
      d="M9.42 4.945a.75.75 0 0 0-1.371 0l-4.89 11a.75.75 0 1 0 1.372.61L5.9 13.47h5.665l1.372 3.085a.75.75 0 0 0 1.37-.61l-4.888-11Zm1.48 7.025H6.568l2.166-4.873L10.9 11.97Z"
      clipRule="evenodd"
    />
    <path
      fill="#323544"
      d="M14.218 19.5H3.25a.75.75 0 1 1 0-1.5h10.969a.75.75 0 1 1 0 1.5ZM17.192 14.192a.75.75 0 0 0 0 1.06l1.483 1.484-1.483 1.484a.75.75 0 1 0 1.06 1.06l1.484-1.483 1.484 1.484a.75.75 0 0 0 1.06-1.06l-1.483-1.485 1.483-1.484a.75.75 0 1 0-1.06-1.06l-1.484 1.484-1.484-1.484a.75.75 0 0 0-1.06 0Z"
    />
  </svg>
);
export default SvgTextFormatRemove;
