import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgUbuntu = ({
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
      d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10ZM3.865 12a1.335 1.335 0 1 1 2.67 0 1.335 1.335 0 0 1-2.67 0Zm10.38 6.556a1.334 1.334 0 1 1 2.31-1.335 1.334 1.334 0 0 1-2.31 1.335ZM9.757 8.809A3.895 3.895 0 0 0 8.1 12c0 1.32.656 2.485 1.658 3.19l-.976 1.636a5.809 5.809 0 0 1-2.398-3.372 1.872 1.872 0 0 0 0-2.908 5.813 5.813 0 0 1 2.398-3.372l.976 1.635Zm6.126 2.845a3.9 3.9 0 0 0-5.527-3.191L9.43 6.8a5.779 5.779 0 0 1 4.12-.39 1.872 1.872 0 0 0 2.514 1.453 5.781 5.781 0 0 1 1.723 3.763l-1.903.028Zm-5.527 3.883a3.899 3.899 0 0 0 5.527-3.191l1.903.027a5.782 5.782 0 0 1-1.724 3.762 1.87 1.87 0 0 0-1.6.13 1.87 1.87 0 0 0-.913 1.324 5.8 5.8 0 0 1-4.12-.39l.927-1.662Zm6.199-8.759a1.334 1.334 0 1 1-2.311-1.333 1.334 1.334 0 0 1 2.31 1.333Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgUbuntu;
