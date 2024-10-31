import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgBloggerAlt = ({
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
      d="M15.104 14.274c.434 0 .795.169 1.083.506.29.289.434.65.434 1.083 0 .433-.145.794-.434 1.083-.289.289-.65.433-1.083.433H8.823c-.434 0-.795-.144-1.083-.433a1.469 1.469 0 0 1-.434-1.083c0-.433.145-.794.434-1.083.289-.337.65-.505 1.083-.505h6.281Zm-6.281-4.62c-.434 0-.795-.145-1.083-.434a1.47 1.47 0 0 1-.434-1.083c0-.433.145-.794.434-1.083a1.47 1.47 0 0 1 1.083-.433h4.043c.433 0 .794.144 1.083.433.289.29.433.65.433 1.083 0 .434-.144.795-.433 1.083a1.47 1.47 0 0 1-1.083.434H8.823Zm9.314 0V6.62c0-1.252-.457-2.335-1.372-3.25C15.85 2.458 14.767 2 13.515 2H7.38c-1.252 0-2.335.457-3.25 1.372-.914.914-1.371 1.997-1.371 3.249v10.758c0 1.252.457 2.334 1.372 3.249C5.044 21.543 6.127 22 7.379 22h9.242c1.251 0 2.334-.457 3.249-1.372.914-.915 1.372-1.997 1.372-3.249v-4.62a1.47 1.47 0 0 0-.434-1.084 1.47 1.47 0 0 0-1.083-.433c-.433 0-.818-.145-1.155-.433a1.724 1.724 0 0 1-.433-1.155Z"
    />
  </svg>
);
export default SvgBloggerAlt;