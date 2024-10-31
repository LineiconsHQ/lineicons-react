import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgEmojiSmileSunglass = ({
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
      d="M8.176 14.569a.75.75 0 0 1 1.054.12A3.53 3.53 0 0 0 12 16.024a3.53 3.53 0 0 0 2.77-1.337.75.75 0 0 1 1.173.935A5.03 5.03 0 0 1 12 17.525a5.03 5.03 0 0 1-3.943-1.902.75.75 0 0 1 .12-1.054ZM6.953 8.157a.75.75 0 0 0-.75.75v1.954c0 .773.628 1.4 1.402 1.4h1.784c.774 0 1.401-.627 1.401-1.4V9.656h2.42v1.204c0 .773.627 1.4 1.401 1.4h1.784c.774 0 1.402-.627 1.402-1.4V8.906a.75.75 0 0 0-.75-.75H6.953Z"
    />
    <path
      fill="#323544"
      fillRule="evenodd"
      d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm10-8.5a8.5 8.5 0 1 0 0 17 8.5 8.5 0 0 0 0-17Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgEmojiSmileSunglass;
