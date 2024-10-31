import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgEmojiGrin = ({
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
      d="M10 9.233a1.25 1.25 0 1 0-2.5 0 1.25 1.25 0 0 0 2.5 0ZM15.25 7.983a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5Z"
    />
    <path
      fill="#323544"
      fillRule="evenodd"
      d="M6.817 13.061a.75.75 0 0 0-.747.824c.24 2.418 2.46 4.888 5.93 4.888 3.47 0 5.69-2.47 5.93-4.888a.75.75 0 0 0-.747-.824H6.817ZM12 17.273c-2.258 0-3.725-1.318-4.243-2.712h8.486c-.518 1.394-1.985 2.712-4.243 2.712Z"
      clipRule="evenodd"
    />
    <path
      fill="#323544"
      fillRule="evenodd"
      d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2ZM3.5 12a8.5 8.5 0 1 1 17 0 8.5 8.5 0 0 1-17 0Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgEmojiGrin;
