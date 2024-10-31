import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgAlarm1 = ({
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
      d="M5.353 2.614a.75.75 0 1 0-.868-1.223 13.07 13.07 0 0 0-3.159 3.186.75.75 0 1 0 1.23.857 11.57 11.57 0 0 1 2.797-2.82ZM19.514 1.39a.75.75 0 0 0-.868 1.224 11.57 11.57 0 0 1 2.796 2.82.75.75 0 1 0 1.231-.857 13.068 13.068 0 0 0-3.159-3.186ZM11.25 12V6.5a.75.75 0 0 1 1.5 0v5.19l2.608 2.608a.75.75 0 0 1-1.06 1.06l-2.829-2.828-.22-.53Z"
    />
    <path fill="#323544" d="m11.468 12.529-.218-.53c0 .207.083.394.218.53Z" />
    <path
      fill="#323544"
      fillRule="evenodd"
      d="M2 12C2 6.477 6.477 2 12 2c5.522 0 10 4.477 10 10s-4.478 10-10 10C6.477 22 2 17.523 2 12Zm10-8.5a8.5 8.5 0 1 0 0 17 8.5 8.5 0 0 0 0-17Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgAlarm1;
