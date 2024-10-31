import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgKeyboard = ({
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
      d="M6.441 8.192a.8.8 0 1 0 0 1.6h.01a.8.8 0 0 0 0-1.6h-.01ZM5.64 12.367a.8.8 0 0 1 .8-.8h.01a.8.8 0 0 1 0 1.6h-.01a.8.8 0 0 1-.8-.8ZM10.145 8.192a.8.8 0 0 0 0 1.6h.01a.8.8 0 1 0 0-1.6h-.01ZM9.358 12.367a.8.8 0 0 1 .8-.8h.01a.8.8 0 0 1 0 1.6h-.01a.8.8 0 0 1-.8-.8ZM8 14.992a.75.75 0 0 0 0 1.5h8a.75.75 0 0 0 0-1.5H8ZM13.046 8.992a.8.8 0 0 1 .8-.8h.01a.8.8 0 0 1 0 1.6h-.01a.8.8 0 0 1-.8-.8ZM17.548 8.192a.8.8 0 1 0 0 1.6h.01a.8.8 0 0 0 0-1.6h-.01ZM13.037 12.367a.8.8 0 0 1 .8-.8h.01a.8.8 0 0 1 0 1.6h-.01a.8.8 0 0 1-.8-.8ZM17.556 11.567a.8.8 0 1 0 0 1.6h.01a.8.8 0 0 0 0-1.6h-.01Z"
    />
    <path
      fill="#323544"
      fillRule="evenodd"
      d="M4.25 4.867A2.25 2.25 0 0 0 2 7.117v10.5a2.25 2.25 0 0 0 2.25 2.25h15.5a2.25 2.25 0 0 0 2.25-2.25v-10.5a2.25 2.25 0 0 0-2.25-2.25H4.25Zm-.75 2.25a.75.75 0 0 1 .75-.75h15.5a.75.75 0 0 1 .75.75v10.5a.75.75 0 0 1-.75.75H4.25a.75.75 0 0 1-.75-.75v-10.5Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgKeyboard;
