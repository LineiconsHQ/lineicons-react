import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgBricks = ({
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
      d="M8.667 6.75a2.25 2.25 0 0 1 2.25-2.25h3.167a2.25 2.25 0 0 1 2.25 2.25V9h.833a2.25 2.25 0 0 1 2.25 2.25v2.25h.833a2.25 2.25 0 0 1 2.25 2.25v3a.75.75 0 0 1-.75.75H3.25a.75.75 0 0 1-.75-.75v-3a2.25 2.25 0 0 1 2.25-2.25h.834v-2.25A2.25 2.25 0 0 1 7.834 9h.833V6.75Zm1.5 2.25h4.667V6.75a.75.75 0 0 0-.75-.75h-3.167a.75.75 0 0 0-.75.75V9Zm-2.333 1.5a.75.75 0 0 0-.75.75v2.25h4.667v-3H7.834Zm5.417 0v3h4.666v-2.25a.75.75 0 0 0-.75-.75H13.25ZM4.75 15a.75.75 0 0 0-.75.75V18h4.667v-3H4.75Zm5.417 0v3h4.667v-3h-4.667Zm6.167 0v3H21v-2.25a.75.75 0 0 0-.75-.75h-3.916Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgBricks;
