import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgEmojiSad = ({
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
      d="M10 9.233a1.25 1.25 0 1 0-2.5 0 1.25 1.25 0 0 0 2.5 0ZM15.25 7.983a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5ZM9.23 16.265a.75.75 0 1 1-1.173-.934A5.03 5.03 0 0 1 12 13.429a5.03 5.03 0 0 1 3.943 1.902.75.75 0 1 1-1.173.934A3.53 3.53 0 0 0 12 14.93a3.53 3.53 0 0 0-2.77 1.336Z"
    />
    <path
      fill="#323544"
      fillRule="evenodd"
      d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2ZM3.5 12a8.5 8.5 0 1 1 17 0 8.5 8.5 0 0 1-17 0Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgEmojiSad;
