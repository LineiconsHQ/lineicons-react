import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgEmojiExpressionlessFlatEyes = ({
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
      d="M8.093 14.238a.75.75 0 0 0 0 1.5h7.814a.75.75 0 0 0 0-1.5H8.093ZM6.692 9.167a.75.75 0 0 1 .75-.75h2.285a.75.75 0 1 1 0 1.5H7.442a.75.75 0 0 1-.75-.75ZM14.286 8.417a.75.75 0 0 0 0 1.5h2.272a.75.75 0 1 0 0-1.5h-2.272Z"
    />
    <path
      fill="#323544"
      fillRule="evenodd"
      d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2ZM3.5 12a8.5 8.5 0 1 1 17 0 8.5 8.5 0 0 1-17 0Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgEmojiExpressionlessFlatEyes;
