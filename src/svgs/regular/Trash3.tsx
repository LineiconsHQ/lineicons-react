import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgTrash3 = ({
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
      d="M14.722 12.758a.75.75 0 0 0-1.498-.073L13 17.24a.75.75 0 0 0 1.498.074l.224-4.557ZM9.988 11.973a.75.75 0 0 0-.712.785l.224 4.557a.75.75 0 1 0 1.498-.074l-.224-4.556a.75.75 0 0 0-.786-.712Z"
    />
    <path
      fill="#323544"
      d="M10.249 2a2.25 2.25 0 0 0-2.25 2.25V5H5.5a2.25 2.25 0 0 0-.587 4.423l.628 10.462A2.25 2.25 0 0 0 7.787 22h8.424a2.25 2.25 0 0 0 2.246-2.115l.628-10.462A2.25 2.25 0 0 0 18.498 5h-2.499v-.75A2.25 2.25 0 0 0 13.749 2h-3.5Zm4.25 3h-5v-.75a.75.75 0 0 1 .75-.75h3.5a.75.75 0 0 1 .75.75V5ZM5.5 6.5h12.998a.75.75 0 1 1 0 1.5H5.5a.75.75 0 0 1 0-1.5Zm.92 3h11.158l-.618 10.295a.75.75 0 0 1-.749.705H7.787a.75.75 0 0 1-.749-.705L6.42 9.5Z"
    />
  </svg>
);
export default SvgTrash3;
