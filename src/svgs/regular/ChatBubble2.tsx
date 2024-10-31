import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgChatBubble2 = ({
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
      d="M15.511 3.332a4.835 4.835 0 0 0-4.525-1.182 4.837 4.837 0 0 0-3.478 3.42 3.377 3.377 0 0 0 .684 6.316 4.556 4.556 0 0 0 1.842 2.002 4.576 4.576 0 0 0 4.778-.127 3.407 3.407 0 0 0 4.673-1.89 3.378 3.378 0 0 0 .87-6.165 3.573 3.573 0 0 0-2.22-2.435 3.566 3.566 0 0 0-2.624.061Zm-.74 1.403a.75.75 0 0 0 .991.155 2.076 2.076 0 0 1 3.191 1.428.75.75 0 0 0 .436.572 1.877 1.877 0 0 1-.572 3.582.75.75 0 0 0-.66.597 1.907 1.907 0 0 1-2.836 1.266l-.185-.11a.75.75 0 0 0-.86.071 3.074 3.074 0 0 1-3.491.293 3.062 3.062 0 0 1-1.353-1.623.75.75 0 0 0-.632-.494 1.877 1.877 0 0 1-.408-3.647.75.75 0 0 0 .499-.578 3.339 3.339 0 0 1 5.88-1.512ZM4.75 20.75a1.25 1.25 0 1 1 2.5 0 1.25 1.25 0 0 1-2.5 0ZM9.617 15.423a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5Zm-.75 2.25a.75.75 0 1 1 1.5 0 .75.75 0 0 1-1.5 0Z"
    />
  </svg>
);
export default SvgChatBubble2;
