import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgDiscord = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    viewBox="0 0 64 64"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M26.4 27.1c-1.8 0-3.1 1.6-3.1 3.4s1.4 3.4 3.1 3.4c1.8 0 3.1-1.5 3.1-3.4.1-1.9-1.3-3.4-3.1-3.4z" />
    <ellipse cx={37.6} cy={30.4} rx={3.1} ry={3.4} />
    <path d="M52.7 1H11.3C7.8 1 4.9 3.8 4.9 7.3v41.9c0 3.5 2.8 6.3 6.3 6.3h35.1l-1.7-5.6 3.9 3.7 3.8 3.5 6.6 5.9V7.3c.3-3.5-2.7-6.3-6.2-6.3zm-12 40.4s-1.1-1.3-2.1-2.5c4.1-1.1 5.6-3.7 5.6-3.7-1.3.8-2.5 1.4-3.5 1.8-1.5.7-3.1 1.1-4.5 1.3-3 .6-5.6.4-8 0-1.8-.3-3.2-.8-4.5-1.3-.7-.3-1.6-.6-2.3-1-.1 0-.1-.1-.3-.1 0 0-.1 0-.1-.1-.6-.3-.8-.6-.8-.6s1.6 2.5 5.5 3.7c-1 1.1-2.1 2.5-2.1 2.5-6.9-.3-9.4-4.6-9.4-4.6 0-10 4.5-18 4.5-18 4.5-3.4 8.7-3.2 8.7-3.2l.3.4c-5.7 1.5-8.2 4-8.2 4s.7-.4 1.8-.8c3.4-1.4 5.9-1.8 7-2h.6c1.8-.3 4.1-.3 6.2 0 3 .3 6.1 1.3 9.3 3 0 0-2.4-2.3-7.8-3.9l.4-.6s4.2-.1 8.7 3.2c0 0 4.5 8 4.5 18 .1-.1-2.6 4.4-9.5 4.5z" />
  </svg>
);
export default SvgDiscord;
