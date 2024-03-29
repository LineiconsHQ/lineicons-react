import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgBlogger = ({
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
    <path d="M62.9 27.5c-.3-1.1-1-2.1-1.7-2.5-.3-.1-1.8-.3-3.5-.4-2.8-.1-3.1-.1-3.9-.7-1.5-.9-1.8-1.7-1.8-4.1 0-4.5-2-8.9-5.6-12.7-2.7-2.7-5.6-4.5-9.2-5.6-.8-.3-2.7-.3-8.7-.4-9.6-.1-11.7.1-15.1 1.4C7.4 4.8 3 9.9 1.5 16.2c-.3 1.3-.5 3.3-.5 14.5-.1 14.1 0 16.1 1 18.9.7 2.4 1.4 3.7 3 5.8 3 3.8 7.2 6.6 11.4 7.3 2.1.3 27.3.4 30 .1 4.5-.6 8-2.4 11.4-5.8 2.4-2.4 3.9-5.1 4.8-8.6.4-1.3.4-2 .4-10.6 0-6.4 0-9.5-.1-10.3zm-44.7-8.7c1.1-1.1 1.4-1.1 8.2-1.1 6.1 0 6.3 0 7.2.4 1.3.7 1.8 1.5 1.8 3 0 1.4-.4 2.3-1.7 3-.6.4-1 .4-7 .4-3.7 0-6.6-.1-7-.1-2.3-.7-3.2-3.9-1.5-5.6zm26.6 27.6-2 .3-10.8.2c-9.4.1-12.1-.1-12.7-.3-1-.4-2-1.7-2-2.7-.1-1 .4-2.4 1.1-3.1 1-.8 1.4-.8 13.5-1 12.4 0 12.3 0 13.5 1.1 1.7 1.7 1.4 4.3-.6 5.5z" />
  </svg>
);
export default SvgBlogger;
